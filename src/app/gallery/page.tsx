'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GalleryGrid } from '@/components/gallery-grid';
import { db } from '@/lib/firebase'; // Import Firebase instance
import { collection, query, orderBy, onSnapshot, type DocumentData } from 'firebase/firestore';
import type { GalleryImage } from '@/types/gallery';

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const q = query(collection(db, 'galleryImages'), orderBy('uploadedAt', 'desc'));

    const unsubscribe = onSnapshot(q,
      (querySnapshot) => {
        const fetchedImages: GalleryImage[] = [];
        querySnapshot.forEach((doc: DocumentData) => {
          // Ensure doc.data() includes uploadedAt before pushing
          const data = doc.data();
          if (data.uploadedAt) {
             fetchedImages.push({
                id: doc.id,
                ...data,
             } as GalleryImage); // Type assertion
           } else {
             // Handle cases where uploadedAt might be missing initially
             // Or log a warning if needed
             console.warn(`Document ${doc.id} missing uploadedAt timestamp.`);
           }
        });
        setImages(fetchedImages);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching gallery images:", err);
        setError("Failed to load gallery images. Please try again later.");
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto section-padding">
        <h1 className="text-4xl text-center mb-10">Gallery</h1>
        {error && <p className="text-center text-destructive mb-4">{error}</p>}
        <GalleryGrid images={images} isLoading={loading} />
      </main>
      <Footer />
    </div>
  );
}
