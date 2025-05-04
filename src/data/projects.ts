import type { Project } from '@/types/project';

// Define project data based on the blueprint
export const allProjects: Project[] = [
  // Apps (now Features) from Blueprint
  {
    title: 'Air Fry Tool',
    description: 'Find cooking times & temps for air fryer foods via photo, voice, or text.',
    moreInfo: 'The Air Fryer App is a simple web application designed to help users find cooking times and temperatures for various food items using an air fryer. It provides a searchable list with temperature (°C/°F toggle), time, and notes. Users can snap a photo, use voice input, upload an image, or type to get info, plus suggested food/drink pairings. Includes a "Suggest a Food" feature.',
    imageUrl: 'https://picsum.photos/seed/airfryv2/600/400', // Not used visually, kept for data structure
    imageHint: 'air fryer food cooking timer temperature',
    tags: ['Web App', 'Utility', 'Cooking', 'AI', 'Netlify'],
    liveUrl: 'https://airfry.netlify.app/',
    type: 'app', // Keep internal type as 'app'
  },
  {
    title: 'Airfryer Temp (First Try)',
    description: 'Initial prototype for the Airfryer tool.',
    moreInfo: 'This was my first attempt at the Airfryer tool. I identified a problem and tried to build an app to fix it. Some great ideas identified; this was the prototype. Some fundamentals I didn\'t like and knew I could do better - tada airfry.netlify.app.',
    imageUrl: 'https://picsum.photos/seed/airfryv1/600/400', // Not used visually
    imageHint: 'air fryer prototype development cooking',
    tags: ['Web App', 'Prototype', 'Cooking', 'Netlify'],
    liveUrl: 'https://airfryertemp.netlify.app/',
    type: 'app',
  },
  {
    title: 'Emberglow',
    description: 'Ralph the Camel\'s journey transforming into Emberglow.',
    moreInfo: 'Built for my son Zac (8), based on his mythical creature school project. We used Co-Pilot and other AI tools for stories, songs, pictures, and videos. Includes Origins, Story, Photo Gallery, Elements knowledge, and Cool Music. "Hi there! I\'m Zac... It\'s been an amazing journey, and I can\'t wait for you to explore it with us!"',
    imageUrl: 'https://picsum.photos/seed/emberglowstory/600/400', // Not used visually
    imageHint: 'story mythical creature camel fantasy kids',
    tags: ['Web App', 'Storytelling', 'AI', 'Kids', 'Netlify', 'Personal'],
    liveUrl: 'https://emberglow.netlify.app/',
    type: 'app',
  },
  {
    title: 'Happy Birthday',
    description: 'A quirky birthday greeting page built quickly.',
    moreInfo: 'Happy Birthday April :) An early experiment with No Code and Javascript. Built this before going to the party while my wife showered. Some quirky things in this :)',
    imageUrl: 'https://picsum.photos/seed/hbdemberglow/600/400', // Not used visually
    imageHint: 'birthday greeting celebration fun experiment',
    tags: ['Web Page', 'Birthday', 'Experiment', 'Netlify'],
    liveUrl: 'https://emberglow.netlify.app/happybirthday.html',
    type: 'app', // Keep type consistency
  },
  {
    title: 'Spring Health Hub',
    description: 'AI-enhanced transformation of a PowerPoint presentation.',
    moreInfo: 'An attempt to use a work PowerPoint document and enhance it using AI. An early project. The subject was "Spring Health and Energy Resource Hub," a learning experience.',
    imageUrl: 'https://picsum.photos/seed/springhealth/600/400', // Not used visually
    imageHint: 'health energy spring presentation ai',
    tags: ['Web App', 'AI', 'Health', 'Experiment', 'Netlify'],
    liveUrl: 'https://debbieheggiespring.netlify.app/',
    type: 'app',
  },
  {
    title: 'Story Skyzer',
    description: 'A simple tool to assist with story pointing and portfolio sizing.',
    moreInfo: 'Story Skyzer (Story Sizer). Further experimentation building something similar to planning poker, introducing Sky branding. Aimed to be useful for myself. Established cool functions but couldn\'t get multi-user sessions working as intended. May revisit later.',
    imageUrl: 'https://picsum.photos/seed/skyserstory/600/400', // Not used visually
    imageHint: 'agile story points planning poker tool',
    tags: ['Web App', 'Utility', 'Agile', 'Planning', 'Netlify'],
    liveUrl: 'https://skyzer.netlify.app/',
    type: 'app',
  },
  {
    title: 'Zenzac',
    description: 'A distraction and relaxation tool for children\'s behavioural patterns.',
    moreInfo: 'For my son, Zac (aka ZenZac), and Mum and Dad :). A tool that grew bigger with features added hourly. Includes Nutrition, Fidget Spinner, Health/Wellness, Fun Activities, Behavioural Tracking, Now and Next, Calming Techniques, Rewards, Jokes, Wac-A-Zac Game, Make Fart sounds, App download spoof. A hit with care workers and parents for calming attention issues.',
    imageUrl: 'https://picsum.photos/seed/zenzacapp/600/400', // Not used visually
    imageHint: 'kids wellness calming tool activities behaviour',
    tags: ['Web App', 'Kids', 'Wellness', 'Tool', 'Netlify', 'Personal'],
    liveUrl: 'https://zenzac.netlify.app/',
    type: 'app',
  },

  // Tools (now Useful Tools) from Blueprint
  {
    title: 'Gencraft',
    description: 'AI tool for generating creative content.',
    imageUrl: 'https://picsum.photos/seed/gencrafttool/600/400', // Not used visually
    imageHint: 'ai generation creative art tool',
    tags: ['AI', 'Creative Tool', 'Content Generation'],
    liveUrl: 'https://gencraft.com',
    type: 'tool',
  },
  {
    title: 'Unsplash',
    description: 'High-quality, free-to-use photos.',
    imageUrl: 'https://picsum.photos/seed/unsplashtool/600/400', // Not used visually
    imageHint: 'photography photos images stock resource',
    tags: ['Photography', 'Images', 'Stock Photos', 'Resource'],
    liveUrl: 'https://unsplash.com',
    type: 'tool',
  },
  // Note: Duplicate Unsplash entry in blueprint omitted.
  {
    title: 'Mureka.ai',
    description: 'AI platform for various applications.',
    imageUrl: 'https://picsum.photos/seed/murekatool/600/400', // Not used visually
    imageHint: 'ai platform technology machine learning tool',
    tags: ['AI', 'Platform', 'Machine Learning'],
    liveUrl: 'https://www.mureka.ai',
    type: 'tool',
  },
  {
    title: 'Suno',
    description: 'AI music generation tool.',
    imageUrl: 'https://picsum.photos/seed/sunotool/600/400', // Not used visually
    imageHint: 'ai music generation audio sound tool',
    tags: ['AI', 'Music', 'Audio Generation'],
    liveUrl: 'https://suno.com',
    type: 'tool',
  },
  {
    title: 'GitHub',
    description: 'Platform for version control and collaboration.',
    imageUrl: 'https://picsum.photos/seed/githubtool/600/400', // Not used visually
    imageHint: 'code version control development collaboration tool',
    tags: ['Development', 'Version Control', 'Collaboration', 'Code'],
    liveUrl: 'https://github.com',
    type: 'tool',
  },
  {
    title: 'Netlify',
    description: 'Platform for building and deploying web projects.',
    imageUrl: 'https://picsum.photos/seed/netlifytool/600/400', // Not used visually
    imageHint: 'hosting deployment web development cloud platform',
    tags: ['Hosting', 'Deployment', 'Web Development', 'Platform'],
    liveUrl: 'https://app.netlify.com',
    type: 'tool',
  },
  {
    title: 'AppsGeyser',
    description: 'Platform for creating Android apps without coding.',
    imageUrl: 'https://picsum.photos/seed/appsgeysertool/600/400', // Not used visually
    imageHint: 'app builder android no-code mobile tool',
    tags: ['App Builder', 'No-Code', 'Android', 'Mobile'],
    liveUrl: 'https://appsgeyser.com',
    type: 'tool',
  },
  {
    title: 'CopyCoder.ai',
    description: 'AI tool for generating code snippets.',
    imageUrl: 'https://picsum.photos/seed/copycodertool/600/400', // Not used visually
    imageHint: 'ai code generation developer tool programming',
    tags: ['AI', 'Code Generation', 'Developer Tool'],
    liveUrl: 'https://copycoder.ai',
    type: 'tool',
  },
  {
    title: 'Dribbble',
    description: 'Community for designers to showcase work.',
    imageUrl: 'https://picsum.photos/seed/dribbbletool/600/400', // Not used visually
    imageHint: 'design inspiration portfolio ui ux community',
    tags: ['Design', 'Portfolio', 'Inspiration', 'Community'],
    liveUrl: 'https://dribbble.com',
    type: 'tool',
  },
  {
    title: 'ElevenLabs',
    description: 'AI voice synthesis and text-to-speech.',
    imageUrl: 'https://picsum.photos/seed/elevenlabstool/600/400', // Not used visually
    imageHint: 'ai voice synthesis text to speech audio tool',
    tags: ['AI', 'Voice Synthesis', 'TTS', 'Audio'],
    liveUrl: 'https://elevenlabs.io',
    type: 'tool',
  },
  {
    title: 'Hedra',
    description: 'AI tool, likely for visual or creative generation.',
    imageUrl: 'https://picsum.photos/seed/hedratool/600/400', // Not used visually
    imageHint: 'ai generation visual creative tool technology',
    tags: ['AI', 'Creative Tool', 'Visuals'],
    liveUrl: 'https://www.hedra.com',
    type: 'tool',
  },
  {
    title: 'Lucide Icons',
    description: 'Beautiful & consistent open-source icon toolkit.',
    moreInfo: 'Lucide is an open-source icon library offering over 1000 simply designed, pixel-perfect icons for various projects. Maintained by the community.',
    imageUrl: 'https://picsum.photos/seed/lucideicons/600/400', // Not used visually
    imageHint: 'icons svg toolkit ui design',
    tags: ['Icons', 'UI', 'Development', 'Toolkit', 'Open Source'],
    liveUrl: 'https://lucide.dev/icons/',
    type: 'tool',
  },
];

// Helper function for alphabetical sorting by title
const sortByTitle = (a: Project, b: Project) => a.title.localeCompare(b.title);

// Filter projects by type, sort alphabetically, and rename exported variables
export const features = allProjects.filter(project => project.type === 'app').sort(sortByTitle);
export const usefulTools = allProjects.filter(project => project.type === 'tool').sort(sortByTitle);
