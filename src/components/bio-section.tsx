// src/components/bio-section.tsx
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle } from 'lucide-react'; // Import a suitable icon

const descriptions = [
  "As a Technical Product Manager, I bridge the gap between complex technical challenges and user-centric product solutions. While I'm passionate about technology and enjoy exploring development with AI tools, my core focus is defining product strategy, prioritizing features, and collaborating with engineering teams to deliver value. This space showcases some of my explorations and experiments in that journey.",
  "I'm a software engineer, which basically means I turn coffee into code. I'm told I have a passion for building web applications, but really, it's just a socially acceptable excuse to avoid daylight. I've been coding long enough to remember when the internet was delivered by carrier pigeon... okay, maybe not, but I *did* see the rise and fall of Geocities. My superpower? Debugging code while simultaneously explaining why cats are superior to dogs (they just *are*). I'm also available for birthday parties and bar mitzvahs, rates negotiable.",
  "A software engineer who doesn't just *build* web applications, but wrestles them into existence. I'm basically a digital architect, except instead of blueprints, I have a caffeine addiction and a rubber duck that offers surprisingly insightful advice (mostly about JavaScript). My passion for coding is rivaled only by my passion for avoiding meetings that could have been emails.",
  "A software engineer who hasn't yet caused the internet to crash (permanently, at least), fueled by caffeine and a stubborn refusal to accept that web applications can't be both functional and mildly amusing. Building web apps, one semicolon at a time, hoping to one day achieve sentience...or at least a decent error message.",
  "A software engineer by day, and a code-wrangling superhero by night (cape not included, unfortunately). Passionate about building web applications, mostly because it's slightly more socially acceptable than building a robot army. So far.",
  "A software engineer, I build web applications, mostly on purpose. I'm experienced enough to know what I'm doing, but still young enough to blame the compiler when things go wrong. My passion for coding is only slightly less intense than my passion for a perfectly brewed cup of coffee, which, coincidentally, fuels most of my projects.",
  "A software engineer who hasn't yet caused a server to spontaneously combust (though there's still time!). I build web applications with the kind of passion usually reserved for rescuing puppies or finding the perfect avocado. My code may not be perfect, but it's perfectly entertaining... at least to me.",
  "A software engineer who, against all odds, still enjoys building web applications. I haven't lost my passion yet, though my sanity is a different story.",
  "I'm a software engineer, which is just a fancy way of saying I spend most of my day talking to a computer that occasionally talks back (usually with error messages). My passion is building web applications, mostly because I enjoy the brief feeling of superiority when something I created actually works. I'm basically a highly caffeinated problem solver with a keyboard, and occasionally, I even solve the right problems.",
  "A software engineer who hasn't (yet) accidentally deleted production. My passion? Building web applications that hopefully don't crash when you look at them funny. I'm basically a digital architect, but instead of bricks, I use code... and occasionally copious amounts of caffeine.",
  "Experienced software engineer. I build web applications, mostly on purpose. Sometimes they even work! My passion for coding is only slightly less intense than my passion for avoiding meetings.",
  "A software engineer who bravely wrestles web applications into existence. Some might call it coding; I call it digital alchemy. I turn caffeine and sheer willpower into functional (and occasionally stylish) websites. Warning: May spontaneously debug in public.",
  "Craig Heggie here. My digital self tried to get clever with this bio, but hit a snag! Let's just say I build things, fueled by coffee and the occasional existential crisis about code. The official story (summary)? I'm an experienced IT Professional with a passion for building innovative solutions. Sometimes they work, sometimes they teach valuable lessons. Stick around, it might get interesting (or at least compile).",
  "Senior Technical Product Manager by Day, Code-Dabbler by Night. By the light of corporate strategy meetings, I navigate product roadmaps with precision. By the glow of my laptop screen at 2 AM, I’m asking AI the real questions: What if I make this button do something entirely unexpected? My portfolio is a collection of experiments—some purposeful, some accidental—all telling the tale of a technical mind that loves to push boundaries.",
  "Professional Button-Pusher—Applications That Work... Mostly. From sleek AI-powered tools to features that were built on enthusiasm rather than logic, my portfolio contains a variety of applications that range from useful to perplexing. The best part? Sometimes the accidental features are more interesting than the intended ones. Innovation is a wild ride, and I’m here for it.",
  "AI Whisperer & Debugging Enthusiast—AKA, Machine Therapist. What does an AI do when faced with a paradox? It asks me for therapy. In my world, debugging is less about fixing errors and more about deep philosophical conversations with code that occasionally rebels. My applications reflect this journey—sometimes logical, sometimes existentially confused, always entertaining.",
  "Coding Like Nobody’s Watching—And For Good Reason. They say great things happen when no one is looking. I say, sometimes things happen, and we just hope they turn out great. My applications live in that space between genius and “please ignore that bug,” celebrating the unpredictable side of AI-powered innovation.",
  "Warning: Experimental Features Ahead—Some Intentional, Some… Not. What is life without a few surprises? Whether it’s a predictive tool that suddenly decides to predict the future (incorrectly) or an AI assistant that somehow developed sarcasm, my creations are built on experimentation. Enter at your own risk—unexpected behavior may be a feature, not a bug.",
  "Technical Product Manager by Title, Rogue AI Explorer by Passion. In corporate meetings, I strategize, optimize, and analyze. In my free time, I push AI beyond the reasonable limits of functionality—sometimes successfully, sometimes hilariously. This portfolio showcases the battle between structured product management and an adventurous spirit that refuses to play it safe.",
  "Hacking My Way Through AI Tools—Not Illegally, I Promise. There’s a fine line between mastery and mischief, and my applications walk it proudly. From custom-built AI features to unintended side effects that somehow became selling points, this portfolio is a showcase of what happens when curiosity meets code.",
  "AI-Powered, Human-Monitored, Chaos-Inducing Portfolio. Some people build applications for stability. I build them for exploration. Every feature tells a story—some are tales of success, others are cautionary lessons. Either way, they exist because I had to know what would happen.",
  "Coding Enthusiast with a Track Record of Accidental Innovations. Half the fun of coding is seeing what unfolds when an idea takes on a life of its own. My portfolio includes everything from perfectly crafted applications to accidental strokes of genius that I still pretend were intentional.",
  "Senior Technical Product Manager & Full-Time Debugger of My Own Creations. They say a good product manager plans for edge cases. I live in edge cases. This collection of applications proves that sometimes, managing features means managing unexpected surprises. The good news? The surprises are part of the fun.",
  "Builder of Applications, Breaker of Expectations. When logic says this should work, and reality says actually, no, I find myself at the intersection of creativity and chaos. My portfolio is a love letter to unexpected outcomes—and occasionally, to error messages that become accidental features.",
  "AI Lover, Application Creator, and Occasional Feature-Risk-Taker. Life’s too short for playing it safe with code. Some of my AI-driven applications are sleek, intelligent, and helpful. Others... well, let’s just say they have personality. All of them exist because I believe exploration is where true innovation begins.",
  "Product Management Meets Programming Experiments—A Reality Show Without Cameras. Ever wondered what happens when structured thinking collides with rogue programming instincts? This portfolio is the answer. It’s equal parts strategy and wait, what just happened?",
  "Making AI Smarter One Questionable Feature at a Time. Smart AI tools? Got them. Features I thought were smart but turned out hilarious? Got those too. My portfolio is a mix of intentional brilliance and accidental comedy—both valuable in their own way.",
  "From ‘It Works!’ to ‘Why Would You Do That?’—A Journey in Code. Every application has a story. Some were meticulously planned, some were the result of sheer curiosity. All exist in this portfolio, ready for you to judge whether they are pure genius or potential cautionary tales.",
  "Technical Product Manager by Title, AI Experimenter by Passion. By day, I optimize product strategies, navigate roadmaps, and ensure technical success. By night (or, let’s be honest, lunch breaks when inspiration strikes), I’m playing with AI tools in ways they weren’t necessarily designed for. My LinkedIn says I’m a seasoned pro—this portfolio reveals the experimental side of that expertise.",
  "Balancing Business Strategy with AI Shenanigans. On LinkedIn, you’ll see a polished version of me—leading technical product strategies, ensuring seamless experiences, and driving efficiency. Here, you’ll see what happens when I take off the corporate hat and throw caution to the wind with AI-powered creations that range from genius to deeply questionable.",
  "Product Manager, AI Explorer & Occasional Risk-Taker. The official narrative: senior product management expertise, technical leadership, and experience in scaling solutions. The unofficial story? I sometimes create applications just to see what happens—and I let the results live here, whether they’re dazzling successes or delightful misfires.",
  "From Structured Roadmaps to Rogue Features. My LinkedIn profile tells the story of a structured approach to technical product management. This portfolio? It tells the story of features that may or may not have made it past the roadmap, but were too fun to abandon.",
  "Senior Technical Product Manager & AI’s Unofficial Test Subject. I’ve worked with AI-powered solutions for years, managing large-scale technical implementations and driving innovation. I’ve also convinced AI to do things that weren’t exactly part of the original plan. This portfolio? A mix of both worlds.",
  "Corporate Tech Leader by Week, AI Experimenter by Weekend. During business hours, I ensure technical strategies align with success. During off-hours, I test theories, break features, and convince AI to cooperate in ways it probably wasn’t programmed to. LinkedIn tells the corporate story—this portfolio tells the rest.",
  "Senior Technical Product Manager & Debugging Enthusiast. I spend my days leading product strategies, analyzing complex systems, and optimizing performance. I spend my nights debugging my own AI experiments, trying to figure out how that “tiny” change turned into a sentient chatbot with an attitude.",
  "AI-Powered Creations With a Sprinkle of Chaos. On LinkedIn, you’ll find structured leadership, product strategy, and technical expertise. Here, you’ll find applications with unexpected personality, features that took on a mind of their own, and AI tools that occasionally ask too many questions.",
  "Where Product Management Meets AI Curiosity. You know those well-planned product roadmaps? Those thoughtful strategies? Those seamless technical implementations? Yeah, those are on LinkedIn. This portfolio is where I ask, “What happens if I do this instead?”",
  "Dabbler in AI, Enthusiast in ‘What If’ Scenarios. My LinkedIn will tell you I lead product teams, manage strategies, and navigate technical landscapes with expertise. This portfolio will tell you I occasionally introduce features based on pure curiosity—and sometimes they even work.",
  "Exploring AI’s Potential One Unpredictable Feature at a Time. I’ve worked across industries, driving efficiency, optimizing workflows, and leading technical innovations. But sometimes, I just want to ask AI absurd questions and see what happens next. This portfolio showcases the results of both paths.",
  "From Building Reliable Tech to ‘What Did I Just Create?’. On LinkedIn, you’ll find experience leading technical product development with precision. In this portfolio, you’ll find applications built on curiosity, fueled by experimentation, and sometimes leading to unexpected brilliance (or harmless chaos).",
  "Officially Strategic, Unofficially Experimenting. My product management expertise includes strategic planning, scalability, and innovation. My AI experiments include wondering what happens when I tweak a function that should not be tweaked. Let’s see where those paths intersect.",
  "The LinkedIn Version vs. The Portfolio Version. LinkedIn Craig: Structured, strategic, and focused on product innovation. Portfolio Craig: Still structured, but with occasional AI-fueled adventures that definitely weren’t in the business plan.",
  "AI Meets Product Management… Meets ‘Why Not Try This?’. In the structured world of product management, I optimize for efficiency. In the slightly more chaotic world of AI, I sometimes build things just to see if they should exist. Welcome to the intersection of both.",
];

const ROTATION_INTERVAL = 60000; // 60 seconds

export function BioSection() {
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const showNextDescription = useCallback((currentIndex: number | null) => {
    let newIndex;
    if (currentIndex === null) {
      newIndex = Math.floor(Math.random() * descriptions.length);
    } else {
      newIndex = (currentIndex + 1) % descriptions.length; // Cycle to next
    }
    setCurrentDescriptionIndex(newIndex);
  }, []);

  // Function to start the interval timer
  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      showNextDescription(currentDescriptionIndex);
    }, ROTATION_INTERVAL);
  }, [currentDescriptionIndex, showNextDescription]);

  // Effect to set initial description and start the timer
  useEffect(() => {
    // Set initial random description only on client-side mount
    if (currentDescriptionIndex === null) {
       setCurrentDescriptionIndex(Math.floor(Math.random() * descriptions.length));
    }
    startTimer();

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTimer]); // Rerun effect when startTimer changes (which depends on currentDescriptionIndex)


  const handleNextClick = () => {
    // Clear the existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Show the next description immediately
    showNextDescription(currentDescriptionIndex);
    // Restart the timer immediately after manual change
    startTimer();
  };

  const currentDescription = currentDescriptionIndex !== null ? descriptions[currentDescriptionIndex] : 'Loading description...';

  return (
    <section id="bio" className="section-padding bg-secondary/10 dark:bg-black/20">
      <div className="container mx-auto">
        <Card className="shadow-lg border border-border transition-shadow duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl mb-2">Welcome to HeggieHub</CardTitle>
            <CardDescription>A little bit about the person behind the hub.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed min-h-[150px] transition-opacity duration-500 ease-in-out"> {/* Increased min-height for potentially longer text */}
              {currentDescription}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
             <Button
                variant="ghost"
                size="icon"
                onClick={handleNextClick}
                title="Next Description"
              >
              <ArrowRightCircle className="h-6 w-6 text-accent" />
              <span className="sr-only">Next Description</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
