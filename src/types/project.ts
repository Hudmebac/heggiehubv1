import type React from 'react';

export interface Project {
  title: string;
  description: string;
  imageUrl: string; // Kept for potential future use or data completeness
  imageHint: string; // For AI hint
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  type: 'app' | 'tool';
  moreInfo?: string;
  icon?: React.ComponentType<{ className?: string }>; // Optional icon component
}
