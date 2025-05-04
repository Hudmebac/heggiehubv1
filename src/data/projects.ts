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
    title: 'Data Dashboard',
    description: 'Visualizing complex data sets with interactive charts.',
    imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
    imageHint: 'data visualization chart graph',
    tags: ['React', 'D3.js', 'Data Viz'],
    liveUrl: '#', // Added live link for consistency
    type: 'app',
  },
  {
    title: 'AirFry Recipes',
    description: 'Delicious and easy air fryer recipes.',
    imageUrl: 'https://picsum.photos/seed/airfry/600/400',
    imageHint: 'air fryer food recipe',
    tags: ['Netlify', 'Web App', 'Recipes', 'HTML', 'CSS'],
    liveUrl: 'https://airfry.netlify.app/',
    repoUrl: '#',
    type: 'app',
  },
  {
    title: 'Emberglow',
    description: 'A warm and inviting web experience.',
    imageUrl: 'https://picsum.photos/seed/emberglow/600/400',
    imageHint: 'warm glow fire abstract',
    tags: ['Netlify', 'Web App', 'Frontend', 'HTML', 'CSS'],
    liveUrl: 'https://emberglow.netlify.app/',
    repoUrl: '#',
    type: 'app',
  },
  {
    title: 'Zenzac',
    description: 'Find your calm with this relaxing app.',
    imageUrl: 'https://picsum.photos/seed/zenzac/600/400',
    imageHint: 'zen calm meditation abstract',
    tags: ['Netlify', 'Web App', 'Wellness', 'HTML', 'CSS'],
    liveUrl: 'https://zenzac.netlify.app/',
    repoUrl: '#',
    type: 'app',
  },
  {
    title: 'Skyzer',
    description: 'Reach for the skies with this innovative app.',
    imageUrl: 'https://picsum.photos/seed/skyzer/600/400',
    imageHint: 'sky clouds abstract blue',
    tags: ['Netlify', 'Web App', 'Innovation', 'HTML', 'CSS'],
    liveUrl: 'https://skyzer.netlify.app/',
    repoUrl: '#',
    type: 'app',
  },
  {
    title: 'Debbie Heggie Spring',
    description: 'Celebrating spring with Debbie Heggie.',
    imageUrl: 'https://picsum.photos/seed/debbieheggiespring/600/400',
    imageHint: 'spring flowers nature seasonal',
    tags: ['Netlify', 'Web App', 'Personal', 'Spring', 'HTML', 'CSS'],
    liveUrl: 'https://debbieheggiespring.netlify.app/',
    repoUrl: '#',
    type: 'app',
  },
  {
    title: 'Emberglow Birthday',
    description: 'A special birthday greeting page.',
    imageUrl: 'https://picsum.photos/seed/emberglowbirthday/600/400',
    imageHint: 'birthday celebration greeting card',
    tags: ['Netlify', 'Web Page', 'Birthday', 'HTML'],
    liveUrl: 'https://emberglow.netlify.app/happybirthday.html',
    repoUrl: '#',
    type: 'app', // Categorized as app for simplicity
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
];

export const apps = allProjects.filter(project => project.type === 'app');
export const tools = allProjects.filter(project => project.type === 'tool');

