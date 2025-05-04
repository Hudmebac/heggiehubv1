# HeggieHub

Welcome to HeggieHub, Craig Heggie's personal website and project showcase. This application is built using modern web technologies to provide a dynamic and engaging user experience.

## Overview

HeggieHub serves as a central place to:
- Showcase personal projects ("Features") and useful web tools ("Useful Tools").
- Display a personal photo gallery.
- Feature a dynamic, AI-enhanced biography.
- Provide an administrative interface for content management.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit) (using Google AI)
- **Database & Storage**: [Firebase Firestore](https://firebase.google.com/docs/firestore) & [Firebase Storage](https://firebase.google.com/docs/storage)
- **Deployment**: Likely Netlify (based on project URLs)

## Core Features

- **Theme Toggle**: Switch between light and dark modes. User preference is saved.
- **AI-Enhanced Bio**: The biography section dynamically cycles through various descriptions, some potentially enhanced by AI (though the current implementation uses a static list and cycles client-side). An AI flow (`enhance-bio`) exists to fetch and enhance a LinkedIn bio.
- **Project Showcase**: Separate sections for "Features" (personal apps) and "Useful Tools" (external web tools), displayed in alphabetical order using responsive cards with icons, descriptions, tags, and links.
- **Gallery**: Displays images uploaded via the admin section. Includes a dedicated gallery page and a preview section on the homepage.
- **Jukebox**: Placeholder section for future music integration.
- **Admin Section**: Accessible via `/admin` with a passcode (`100672` by default, configurable via `NEXT_PUBLIC_ADMIN_PASSCODE`). Allows authenticated users to upload images to the gallery.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Firebase Configuration (Get these from your Firebase project settings)
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID

# Google Generative AI API Key (For Genkit)
# Get this from Google AI Studio: https://aistudio.google.com/app/apikey
GOOGLE_GENAI_API_KEY=YOUR_GOOGLE_AI_API_KEY

# Admin Passcode (Optional - defaults to 100672 if not set)
NEXT_PUBLIC_ADMIN_PASSCODE=YOUR_ADMIN_PASSCODE
```

**Important:** Obtain Firebase credentials by setting up a Firebase project. Get the Google GenAI API key from Google AI Studio.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd heggie-app
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

1.  Start the Next.js development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:9002`.

2.  (Optional) Start the Genkit development server for AI flow testing:
    ```bash
    npm run genkit:dev
    ```
    This runs the Genkit development UI, typically accessible at `http://localhost:4000`.

## Admin Access

- Navigate to `/admin`.
- Enter the passcode defined in `NEXT_PUBLIC_ADMIN_PASSCODE` (or the default `100672`).
- Once authenticated, you can manage gallery images.

## Project Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable React components (including ShadCN UI).
- `src/data/`: Static data like project definitions.
- `src/lib/`: Utility functions and Firebase initialization.
- `src/hooks/`: Custom React hooks.
- `src/types/`: TypeScript type definitions.
- `src/ai/`: Genkit configuration and AI flows.
- `src/services/`: External service integrations (e.g., LinkedIn).
- `public/`: Static assets.
