'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // Import Textarea
import { db, storage } from '@/lib/firebase'; // Import Firebase instances
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Progress } from '@/components/ui/progress'; // Import Progress

const ADMIN_PASSCODE = process.env.NEXT_PUBLIC_ADMIN_PASSCODE || '100672'; // Use env var

export default function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // Add progress state
  const { toast } = useToast();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      toast({
        title: 'Success',
        description: 'Authentication successful.',
      });
    } else {
      setIsAuthenticated(false);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Incorrect passcode.',
      });
      setPasscode(''); // Clear input on failure
    }
  };

  const handleLogout = () => {
     setIsAuthenticated(false);
     setPasscode('');
     setImageFile(null);
     setDescription('');
     setIsUploading(false);
     setUploadProgress(0);
      toast({
        title: 'Logged Out',
        description: 'You have been logged out.',
      });
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    } else {
      setImageFile(null);
    }
  };

  const handleImageUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!imageFile) {
      toast({ variant: 'destructive', title: 'Error', description: 'Please select an image file.' });
      return;
    }
    if (!isAuthenticated) {
       toast({ variant: 'destructive', title: 'Error', description: 'Authentication required.' });
       return;
    }

    setIsUploading(true);
    setUploadProgress(0); // Reset progress

    try {
      // 1. Upload image to Firebase Storage
      const storageRef = ref(storage, `gallery/${Date.now()}_${imageFile.name}`);
      // Note: For real progress tracking, you'd use uploadBytesResumable, but for simplicity:
      const uploadTask = uploadBytes(storageRef, imageFile);

      // Simulate progress (since uploadBytes doesn't provide it directly)
      // You could implement uploadBytesResumable for real progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress <= 90) { // Don't go beyond 90 until upload is done
             setUploadProgress(progress);
        } else {
             clearInterval(interval);
        }
      }, 200); // Update progress every 200ms


      const snapshot = await uploadTask;
      clearInterval(interval); // Clear interval once upload is complete
      setUploadProgress(100); // Set to 100% on completion
      const downloadURL = await getDownloadURL(snapshot.ref);

      // 2. Add image metadata to Firestore
      await addDoc(collection(db, 'galleryImages'), {
        imageUrl: downloadURL,
        description: description || '', // Use empty string if description is not provided
        uploadedAt: serverTimestamp(),
      });

      toast({
        title: 'Success',
        description: 'Image uploaded successfully!',
      });

      // Reset form
      setImageFile(null);
      setDescription('');
      // Find the file input and reset its value
      const fileInput = document.getElementById('gallery-image-upload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }


    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        variant: 'destructive',
        title: 'Upload Failed',
        description: 'Could not upload image. Please try again.',
      });
    } finally {
      setIsUploading(false);
      // Keep progress at 100 briefly for visual confirmation, then reset
      setTimeout(() => setUploadProgress(0), 1500);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto section-padding">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Admin Login</CardTitle>
                <CardDescription>Enter the passcode to manage content.</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent>
                  <Input
                    type="password"
                    placeholder="Enter Passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    required
                    className="w-full"
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">Login</Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
                 <h2 className="text-3xl">Admin Dashboard</h2>
                 <Button onClick={handleLogout} variant="outline">Logout</Button>
            </div>
            <p className="text-muted-foreground mb-4">Manage website content here.</p>

            {/* Gallery Image Upload Card */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Upload Gallery Image</CardTitle>
                    <CardDescription>Add a new image to the public gallery.</CardDescription>
                </CardHeader>
                 <form onSubmit={handleImageUpload}>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="gallery-image-upload">Image File</Label>
                            <Input
                                id="gallery-image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                                disabled={isUploading}
                                className="mt-1"
                             />
                        </div>
                         <div>
                            <Label htmlFor="gallery-image-description">Description (Optional)</Label>
                            <Textarea
                                id="gallery-image-description"
                                placeholder="Enter a short description for the image"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                disabled={isUploading}
                                className="mt-1"
                             />
                        </div>
                         {isUploading && (
                            <div className="space-y-1">
                                <Label>Upload Progress</Label>
                                <Progress value={uploadProgress} className="w-full" />
                                <p className="text-sm text-muted-foreground text-center">Uploading...</p>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={isUploading || !imageFile} className="w-full">
                         {isUploading ? 'Uploading...' : 'Upload Image'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>


             {/* Placeholder for other content management UI */}
            <Card>
                <CardHeader>
                    <CardTitle>Other Content Management</CardTitle>
                    <CardDescription>Add, edit, or delete features and tools (functionality TBD).</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground">
                        (Feature/Tool management functionality to be implemented here)
                    </p>
                </CardContent>
            </Card>

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
