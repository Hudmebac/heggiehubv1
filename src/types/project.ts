export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string; // For AI hint
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  type: 'app' | 'tool'; // Added type field
  moreInfo?: string; // Optional field for more detailed info
}
