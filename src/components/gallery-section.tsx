'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, type DocumentData, limit } from 'firebase/firestore';
import type { GalleryImage } from '@/types/gallery';
import { GalleryGrid } from './gallery-grid';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MAX_IMAGES_HOMEPAGE = 10; // Limit images on homepage

export function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Query limited to MAX_IMAGES_HOMEPAGE, ordered by upload date
    const q = query(
        collection(db, 'galleryImages'),
        orderBy('uploadedAt', 'desc'),
        limit(MAX_IMAGES_HOMEPAGE)
    );

    const unsubscribe = onSnapshot(q,
      (querySnapshot) => {
        const fetchedImages: GalleryImage[] = [];
        querySnapshot.forEach((doc: DocumentData) => {
           const data = doc.data();
            if (data.uploadedAt) { // Check if timestamp exists
                fetchedImages.push({
                    id: doc.id,
                    ...data,
                } as GalleryImage);
            } else {
                 console.warn(`Document ${doc.id} missing uploadedAt timestamp.`);
            }
        });
        setImages(fetchedImages);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching gallery images for homepage:", err);
        setError("Failed to load gallery preview.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <section id="gallery" className="section-padding bg-secondary/10 dark:bg-black/20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl">Gallery</h2>
          <Button asChild variant="outline" className="group">
            <Link href="/gallery">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        {error && <p className="text-center text-destructive mb-4">{error}</p>}
        <GalleryGrid images={images} isLoading={loading} />
        {/* Optionally add a message if no images and not loading */}
        {!loading && images.length === 0 && !error && (
            <p className="text-center text-muted-foreground mt-6">No images in the gallery yet.</p>
        )}
      </div>
    </section>
  );
}
