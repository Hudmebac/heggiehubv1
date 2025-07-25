
import type { Project } from '@/types/project';
import { 
  ChefHat,
  FlaskConical,
  Sparkles,
  PartyPopper,
  HeartPulse,
  ClipboardList,
  Smile,
  Smartphone,
  Code,
  Palette,
  AudioWaveform,
  Wand2,
  GitBranch,
  Eye,
  Shapes,
  BrainCircuit, // Used for Heggles
  Cloud,
  Music,
  Globe,
  Camera,
  Package,
  Sun,
  Database, 
  Bird, 
  SunMoon,
  MapPin,
  Gem,
  Rocket, // Added for Space Game
} from 'lucide-react'

// Define project data based on the blueprint
export const allTheProjects: Project[] = [
  // Features from Blueprint
    {
    title: 'Air Fry Tool',
    description: 'Find cooking times & temps for air fryer foods via photo, voice, or text.',
    moreInfo: 'The Air Fryer App is a simple web application designed to help users find cooking times and temperatures for various food items using an air fryer. It provides a searchable list with temperature (°C/°F toggle), time, and notes. Users can snap a photo, use voice input, upload an image, or type to get info, plus suggested food/drink pairings. Includes a "Suggest a Food" feature.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'air fryer food',
    tags: ['Web App', 'Utility', 'Cooking', 'AI', 'Netlify'],
    liveUrl: 'https://airfry.netlify.app/',
    type: 'feature',
    icon: ChefHat,
  },
  {
    title: 'Airfryer Temp (First Try)',
    description: 'Initial prototype for the Airfryer tool.',
    moreInfo: 'This was my first attempt at the Airfryer tool. I identified a problem and tried to build an app to fix it. Some great ideas identified; this was the prototype. Some fundamentals I didn\'t like and knew I could do better - tada airfry.netlify.app.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'air fryer prototype',
    tags: ['Web App', 'Prototype', 'Cooking', 'Netlify', 'Experiment'],
    liveUrl: 'https://airfryertemp.netlify.app/',
    type: 'feature', // Kept as feature, but will be filtered to play area
    icon: FlaskConical,
  },
  {
    title: 'Daily Stand Up Quote',
    description: 'A web application designed to display random quotes specifically related to Tech, featuring a simple interface and a button to generate new quotes.',
    moreInfo: `Simple little app created experimenting again with new ideas\nCore Function: It's almost certainly a quote generator web application.\nContent Focus: Quote displayer. This isn't a general quote site; it's focused on sayings from this particular genre (Tech).\nUser Interaction: The page displays one quote at a time. Users can interact with it via a button (Next) to load a new, randomly selected quote from its database.\nInterface: Expect a simple, minimalist design. The focus will be on clearly presenting the quote text and affirmation . \nPurpose: It  serves as a personal project, for more learning\nTechnology: Being hosted on netlify.app, it's built using front-end web technologies (HTML, CSS, JavaScript) and deployed via the Netlify platform.`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'quotes tech',
    tags: ['Web Page', 'Quotes', 'Personal', 'Tech', 'Inspiration'],
    liveUrl: 'https://heggquote.netlify.app/',
    type: 'feature',
    icon: ClipboardList, 
  },
  {
    title: 'Emberglow',
    description: 'Ralph the Camel\'s journey transforming into Emberglow.',
    moreInfo: 'Built for my son Zac (8), based on his mythical creature school project. We used Co-Pilot and other AI tools for stories, songs, pictures, and videos. Includes Origins, Story, Photo Gallery, Elements knowledge, and Cool Music. "Hi there! I\'m Zac... It\'s been an amazing journey, and I can\'t wait for you to explore it with us!"',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mythical creature kids',
    tags: ['Web App', 'Storytelling', 'AI', 'Kids', 'Netlify', 'Personal', 'Creative'],
    liveUrl: 'https://emberglow.netlify.app/',
    type: 'feature',
    icon: Sparkles, 
  },
  {
    title: 'Happy Birthday',
    description: 'A quirky birthday greeting page built quickly.',
    moreInfo: 'Happy Birthday April :) An early experiment with No Code and Javascript. Built this before going to the party while my wife showered. Some quirky things in this :)',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'birthday greeting',
    tags: ['Web Page', 'Birthday', 'Experiment', 'Netlify', 'Fun'],
    liveUrl: 'https://emberglow.netlify.app/happybirthday.html',
    type: 'feature', // Kept as feature, but will be filtered to play area
    icon: PartyPopper,
  },
   {
    title: 'HegArt',
    description: 'Unleash your creativity with a symmetric and animated art tool.',
    moreInfo: 'HegArt is an experimental web application designed to explore the creation of symmetric and animated artistic patterns. Users can interact with parameters to generate unique visual outputs. This project focuses on combining mathematical principles with creative expression.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'symmetric animated art',
    tags: ['Web App', 'Art', 'Creative', 'Animation', 'Experiment', 'Netlify', 'Visuals'],
    liveUrl: 'https://hegart.netlify.app/',
    type: 'feature',
    icon: Gem,
  },
  {
    title: 'HEGGIE:Space Game',
    description: 'Browser-based sci-fi game with economy, combat, and financial management.',
    moreInfo: 'HEGGIE:Space Game is a browser-based sci-fi game where you explore the galaxy, face pirate threats, run business, create an economy, gamble, have a career, mini-games, and manage financial tools like banking, Stocks & shares,loans and insurance. Difficulty ranges from beginner-friendly to permadeath Hardcore mode, and players can test luck or strategy in varied gambling options while keeping their assets protected through smart financial planning',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'space game',
    tags: ['Game', 'Sci-Fi', 'Economy', 'Strategy', 'Netlify'],
    liveUrl: 'https://heggiegame.netlify.app/captain',
    type: 'feature',
    icon: Rocket,
  },
  {
    title: 'HegGeo',
    description: 'Geo Location Tool, Drop a Geo and Send, Journey time Tracker and Alarm.',
    moreInfo: 'A tool for managing and sharing geo-locations, tracking journey times, and setting location-based alarms. Users can drop a pin on a map, send their location, track travel progress, and set alarms based on arrival or proximity to a destination.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'geolocation map',
    tags: ['Web App', 'Geolocation', 'Tracking', 'Utility', 'Netlify', 'Mapping', 'Alarm'],
    liveUrl: 'https://heggeo.netlify.app/',
    type: 'feature',
    icon: MapPin,
  },
  {
    title: 'Heggles',
    description: 'Heggles helps you capture, organise, and recall your thoughts with the new improved Heggle brain.',
    moreInfo: 'A personal knowledge management tool designed to capture, organize, and retrieve thoughts and ideas effectively. Leveraging AI to assist with tagging, summarizing, and connecting related notes.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'knowledge organization',
    tags: ['Web App', 'Productivity', 'Notes', 'AI', 'Netlify', 'Organization'],
    liveUrl: 'https://heggles.netlify.app/',
    type: 'feature',
    icon: BrainCircuit,
  },
  {
    title: 'HeggieHubV1',
    description: 'My First Bash at building a portfolio page.',
    moreInfo: 'HeggieHubV1 serves as a central collection point for my diverse projects, creative ideas, and useful tools. It\'s a digital showcase of my work and the tools I use, all in one place.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio showcase',
    tags: ['Web App', 'Portfolio', 'Tools', 'Personal', 'Showcase', 'Next.js', 'React', 'TypeScript'],
    liveUrl: 'https://heggiehub.netlify.app/',
    type: 'feature', // Kept as feature, but will be filtered to play area
    icon: Package,
  },
  {
    title: 'HelioHeggie',
    description: 'Solar and Battery Tool, Auto Weather, Smart Charging and Advisory, Tariff and costs.',
    moreInfo: 'This application leverages AI to optimize solar energy capture and battery usage. It integrates real-time weather forecasts, energy tariffs, and user consumption patterns to provide smart charging schedules and energy-saving recommendations. The goal is to maximize self-consumption of solar power and minimize energy costs.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'solar battery smart',
    tags: ['Web App', 'Energy', 'Solar', 'Battery', 'AI', 'Optimisation', 'Netlify', 'Smart Home'],
    liveUrl: 'https://heliosaj.netlify.app/',
    type: 'feature',
    icon: SunMoon,
  },
  {
    title: 'Helios Control',
    description: 'Primary command centre, offering a real-time, at-a-glance overview of your entire GivEnergy ecosystem.',
    moreInfo: 'Energy Flow Visualisation: This dynamic diagram is the heart of the dashboard. It illustrates the live movement of electricity between the four key points of your system: Solar Panels (Generation), your Home (Consumption), the Grid (Import/Export), and your Battery (Charge/Discharge). Animated, pulsing lines indicate the direction and relative magnitude of the power flow, allowing you to see precisely where your energy is coming from and going to at any moment. Metric Cards: Positioned around the flow diagram, these cards provide precise, real-time numerical data for each key component. This includes your current Solar Generation, Home Consumption, Battery State of Charge (SoC) and power flow, and Grid interaction (import/export). These cards offer a quick way to understand the exact performance figures of your system, supplementing the visual flow diagram.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'solar battery smart',
    tags: ['Web App', 'Energy', 'Solar', 'API', 'Optimisation', 'Control', 'Smart Home', 'Netlify'],
    liveUrl: 'https://helioheggie.netlify.app/',
    type: 'feature',
    icon: Sun
  },
  {
    title: 'HelioHeggie-manual',
    description: 'This was first attempt but only with Manual Settings',
    moreInfo: 'This was the first version of the solar and battery tool, focusing on manual controls and basic data display without the advanced AI and automation features of the current version. It served as a foundational project to understand the core requirements.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'solar battery manual',
    tags: ['Web App', 'Energy', 'Solar', 'Manual', 'Prototype', 'Netlify'],
    liveUrl: 'https://helioheggie.netlify.app/',
    type: 'feature',
    icon: Sun,
  },
  {
    title: 'Spring Health Hub',
    description: 'AI-enhanced transformation of a PowerPoint presentation.',
    moreInfo: 'An attempt to use a work PowerPoint document and enhance it using AI. An early project. The subject was "Spring Health and Energy Resource Hub," a learning experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'health presentation',
    tags: ['Web App', 'AI', 'Health', 'Experiment', 'Netlify', 'Presentation'],
    liveUrl: 'https://debbieheggiespring.netlify.app/',
    type: 'feature', // Kept as feature, but will be filtered to play area
    icon: HeartPulse,
  },
  {
    title: 'Story Skyzer',
    description: 'A simple tool to assist with story pointing and portfolio sizing.',
    moreInfo: 'Story Skyzer (Story Sizer). Further experimentation building something similar to planning poker, introducing Sky branding. Aimed to be useful for myself. Established cool functions but couldn\'t get multi-user sessions working as intended. May revisit later.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'agile planning',
    tags: ['Web App', 'Utility', 'Agile', 'Planning', 'Netlify', 'Collaboration'],
    liveUrl: 'https://skyzer.netlify.app/',
    type: 'feature',
    icon: ClipboardList, 
  },
  {
    title: 'Zenzac',
    description: 'A distraction and relaxation tool for children\'s behavioural patterns.',
    moreInfo: 'For my son, Zac (aka ZenZac), and Mum and Dad :). A tool that grew bigger with features added hourly. Includes Nutrition, Fidget Spinner, Health/Wellness, Fun Activities, Behavioural Tracking, Now and Next, Calming Techniques, Rewards, Jokes, Wac-A-Zac Game, Make Fart sounds, App download spoof. A hit with care workers and parents for calming attention issues.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'kids wellness',
    tags: ['Web App', 'Kids', 'Wellness', 'Tool', 'Netlify', 'Personal', 'Gamification'],
    liveUrl: 'https://zenzac.netlify.app/',
    type: 'feature',
    icon: Smile, 
  },
  
  // Useful Tools
  {
    title: 'AppsGeyser',
    description: 'Platform for creating Android apps without coding.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'app builder android',
    tags: ['App Builder', 'No-Code', 'Android', 'Mobile', 'Platform'],
    liveUrl: 'https://appsgeyser.com',
    type: 'tool',
    icon: Smartphone,
  }, 
  {
    title: 'Copilot',
    description: 'An AI companion for coding and everyday tasks.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai coding',
    tags: ['AI', 'Coding', 'Assistant', 'Productivity', 'Microsoft'],
    liveUrl: 'https://copilot.microsoft.com/',
    type: 'tool',
    icon: Code, 
  },
   {
    title: 'CopyCoder.ai',
    description: 'AI tool for generating code snippets.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai code',
    tags: ['AI', 'Code Generation', 'Developer Tool', 'Programming'],
    liveUrl: 'https://copycoder.ai',
    type: 'tool',
    icon: Code, 
  },
   {
    title: 'Dribbble',
    description: 'Community for designers to showcase work.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'design community',
    tags: ['Design', 'Portfolio', 'Inspiration', 'Community', 'UI/UX'],
    liveUrl: 'https://dribbble.com',
    type: 'tool',
    icon: Palette,
  },
   {
    title: 'ElevenLabs',
    description: 'AI voice synthesis and text-to-speech.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai voice',
    tags: ['AI', 'Voice Synthesis', 'TTS', 'Audio', 'API'],
    liveUrl: 'https://elevenlabs.io',
    type: 'tool',
    icon: AudioWaveform,
  },
  {
    title: 'Firebase',
    description: 'Firebase is a Backend-as-a-Service (BaaS) platform developed by Google, offering a wide range of tools and services for building and managing mobile and web apps.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'backend database',
    tags: ['Backend', 'BaaS', 'Google', 'Database', 'Cloud', 'Hosting', 'Auth'],
    liveUrl: 'https://firebase.google.com/',
    type: 'tool',
    icon: Database,
  },
   {
    title: 'Gencraft',
    description: 'AI tool for generating creative content.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai creative',
    tags: ['AI', 'Creative Tool', 'Content Generation', 'Art', 'Images'],
    liveUrl: 'https://gencraft.com',
    type: 'tool',
    icon: Wand2, 
  },
  {
    title: 'GitHub',
    description: 'Platform for version control and collaboration.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'version control collaboration',
    tags: ['Development', 'Version Control', 'Collaboration', 'Code', 'Open Source'],
    liveUrl: 'https://github.com',
    type: 'tool',
    icon: GitBranch, 
  },
  {
    title: 'Google AI Studio',
    description: 'A tool to help users create generative AI applications.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai generative',
    tags: ['AI', 'Generative AI', 'Development', 'Tool', 'Google', 'Machine Learning'],
    liveUrl: 'https://aistudio.google.com/',
    type: 'tool',
    icon: BrainCircuit, 
  },
   {
    title: 'Hedra',
    description: 'AI tool, likely for visual or creative generation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai visual',
    tags: ['AI', 'Creative Tool', 'Visuals', 'Video', 'Generation'],
    liveUrl: 'https://www.hedra.com',
    type: 'tool',
    icon: Eye, 
  },
   {
    title: 'Lucide Icons',
    description: 'Beautiful & consistent open-source icon toolkit.',
    moreInfo: 'Lucide is an open-source icon library offering over 1000 simply designed, pixel-perfect icons for various projects. Maintained by the community.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'icons toolkit',
    tags: ['Icons', 'UI', 'Development', 'Toolkit', 'Open Source', 'SVG', 'Design'],
    liveUrl: 'https://lucide.dev/icons/',
    type: 'tool',
    icon: Shapes, 
  },
   {
    title: 'Mureka.ai',
    description: 'AI platform for various applications.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai platform',
    tags: ['AI', 'Platform', 'Machine Learning', 'Automation'],
    liveUrl: 'https://www.mureka.ai',
    type: 'tool',
    icon: BrainCircuit, 
  },
   {
    title: 'Netlify',
    description: 'Platform for building and deploying web projects.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'hosting deployment',
    tags: ['Hosting', 'Deployment', 'Web Development', 'Platform', 'CI/CD', 'Serverless'],
    liveUrl: 'https://app.netlify.com',
    type: 'tool',
    icon: Cloud,
  },
   {
    title: 'Suno',
    description: 'AI music generation tool.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai music',
    tags: ['AI', 'Music', 'Audio Generation', 'Creative', 'Sound'],
    liveUrl: 'https://suno.com',
    type: 'tool',
    icon: Music,
  },
   {
    title: 'Unsplash',
    description: 'High-quality, free-to-use photos.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'photos images',
    tags: ['Photography', 'Images', 'Stock Photos', 'Resource', 'Free'],
    liveUrl: 'https://unsplash.com',
    type: 'tool',
    icon: Camera,
  },
];


// Helper function for alphabetical sorting by title
const sortByTitle = (a: Project, b: Project) => a.title.localeCompare(b.title);

// Titles of projects to be moved to the "Play Area"
const playAreaProjectTitles: string[] = [
  "Airfryer Temp (First Try)",
  "Happy Birthday",
  "HeggieHubV1",
  "HelioHeggie-manual",
  "Spring Health Hub"
];

// Filter projects for Play Area
export const playAreaFeatures = allTheProjects
  .filter(project => project.type === 'feature' && playAreaProjectTitles.includes(project.title))
  .sort(sortByTitle);

// Filter main features, excluding those in Play Area
export const features = allTheProjects
  .filter(project => project.type === 'feature' && !playAreaProjectTitles.includes(project.title))
  .sort(sortByTitle);

// Filter useful tools
export const usefulTools = allTheProjects.filter(project => project.type === 'tool').sort(sortByTitle);
