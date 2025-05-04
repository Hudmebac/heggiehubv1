'use client';

import Image from 'next/image';
import type { GalleryImage } from '@/types/gallery';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface GalleryGridProps {
  images: GalleryImage[];
  isLoading: boolean;
}

export function GalleryGrid({ images, isLoading }: GalleryGridProps) {

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <Skeleton className="aspect-square w-full" />
            </CardContent>
            <CardFooter className="p-2 h-10">
              <Skeleton className="h-4 w-3/4" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (!images || images.length === 0) {
    return <p className="text-center text-muted-foreground">No images found in the gallery yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden group shadow-md border border-border transition-all duration-300 ease-out hover:shadow-xl hover:border-accent hover:-translate-y-1 bg-card">
          <CardContent className="p-0 aspect-square relative">
            <Image
              src={image.imageUrl}
              alt={image.description || 'Gallery image'}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
              priority={images.indexOf(image) < 10} // Prioritize loading first few images
              quality={75} // Adjust quality as needed
            />
             <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CardContent>
          {image.description && (
            <CardFooter className="p-2 bg-card/80 backdrop-blur-sm">
              <p className="text-xs text-muted-foreground truncate" title={image.description}>
                {image.description}
              </p>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
}
