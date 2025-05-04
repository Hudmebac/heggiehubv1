import type { Project } from '@/types/project';

// Define project data
export const allProjects: Project[] = [
  {
    title: 'Project Phoenix',
    description: 'A revolutionary web application built with Next.js and Tailwind CSS.',
    imageUrl: 'https://picsum.photos/seed/phoenix/600/400',
    imageHint: 'abstract technology code',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'AI'],
    liveUrl: '#',
    repoUrl: '#',
    type: 'app',
  },
  {
    title: 'Tool Titan',
    description: 'A suite of developer tools designed to boost productivity.',
    imageUrl: 'https://picsum.photos/seed/titan/600/400',
    imageHint: 'tools workshop code',
    tags: ['React', 'Node.js', 'Utility'],
    repoUrl: '#',
    type: 'tool',
  },
  {
    title: 'Component Castle',
    description: 'A reusable component library for modern web interfaces.',
    imageUrl: 'https://picsum.photos/seed/castle/600/400',
    imageHint: 'design system components ui',
    tags: ['React', 'Storybook', 'Design System'],
    liveUrl: '#',
    type: 'tool',
  },
   {
    title: 'Data Dashboard',
    description: 'Visualizing complex data sets with interactive charts.',
    imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
    imageHint: 'data visualization chart graph',
    tags: ['React', 'D3.js', 'Data Viz'],
    liveUrl: '#', // Added live link for consistency
    type: 'app',
  },
];

export const apps = allProjects.filter(project => project.type === 'app');
export const tools = allProjects.filter(project => project.type === 'tool');
