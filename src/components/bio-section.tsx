// src/components/bio-section.tsx
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
  "Craig Heggie here. My digital self tried to get clever with this bio, but hit a snag! Let's just say I build things, fueled by coffee and the occasional existential crisis about code. The official story (summary)? I'm an experienced IT Professional with a passion for building innovative solutions. Sometimes they work, sometimes they teach valuable lessons. Stick around, it might get interesting (or at least compile)."
];

export function BioSection() {
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState<number | null>(null);

  useEffect(() => {
    // Set initial random description on client-side mount
    setCurrentDescriptionIndex(Math.floor(Math.random() * descriptions.length));

    // Set up interval to change description every 20 seconds
    const intervalId = setInterval(() => {
      setCurrentDescriptionIndex(prevIndex => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * descriptions.length);
        } while (newIndex === prevIndex); // Ensure the new index is different
        return newIndex;
      });
    }, 20000); // 20 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const currentDescription = currentDescriptionIndex !== null ? descriptions[currentDescriptionIndex] : 'Loading description...';

  return (
    <section id="bio" className="section-padding bg-secondary/10 dark:bg-black/20">
      <div className="container mx-auto">
        <Card className="shadow-lg border border-border transition-shadow duration-300 hover:shadow-xl">
          <CardHeader>
            {/* Updated Header */}
            <CardTitle className="text-3xl mb-2">Welcome to HeggieHub</CardTitle>
             {/* Updated Description */}
            <CardDescription>A little bit about the person behind the hub.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Display rotating description */}
            <p className="text-lg leading-relaxed min-h-[100px] transition-opacity duration-500 ease-in-out"> {/* Added min-height and transition */}
              {currentDescription}
            </p>
          </CardContent>
          {/* Removed CardFooter with the AI Enhance button */}
        </Card>
      </div>
    </section>
  );
}
