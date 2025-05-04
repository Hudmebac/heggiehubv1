import type { Timestamp } from 'firebase/firestore';

export interface GalleryImage {
  id: string;
  imageUrl: string;
  description?: string;
  uploadedAt: Timestamp; // Use Firebase Timestamp for sorting
}
