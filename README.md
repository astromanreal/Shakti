
# Shakti Darshan: A Digital Sanctuary of Divine Feminine Wisdom

**Shakti Darshan** is a modern web application built with Next.js, dedicated to exploring the multifaceted and profound nature of the Divine Feminine (Adi Shakti) in Hindu philosophy and spiritual practice. This platform aims to be a comprehensive, authentic, and accessible resource for seekers, devotees, and anyone curious about the Goddess in her myriad forms.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <!-- Placeholder -->

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Key Data Sources](#key-data-sources)
- [AI-Powered Features](#ai-powered-features)
- [Styling and Theming](#styling-and-theming)
- [SEO & Metadata](#seo--metadata)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

Shakti Darshan invites users on a sacred journey to discover the infinite grace, wisdom, and timeless traditions of Maa Adi Shakti. The application provides rich content on various goddesses, philosophical concepts, sacred chants, divine stories, and spiritual practices, all presented in an intuitive and aesthetically pleasing interface.

## Live Demo

**(Placeholder: Add a link to your deployed application here if available)**
`https://www.shaktidarshan.com` (Example)

## Features

Shakti Darshan offers a wide array of features for a comprehensive spiritual exploration:

*   **🕉️ Explore Sections:** A central navigation hub to discover various aspects of the Divine Feminine.
*   **👑 Tridevi & Major Forms:** Detailed information on primary goddesses like Durga, Lakshmi, Saraswati, Parvati, Kali, and other prominent manifestations such as Kamakshi, Meenakshi, Lalita Tripurasundari, Annapurna, Mahagauri, Chandika/Chamunda, and Sati.
*   **✨ Pancha Prakritis:** Exploration of the five core feminine energies of Mahadevi as described in the Devi Bhagavata Purana (Ganesh Janani Durga, Lakshmi, Saraswati, Savitri, Radha).
*   **🔮 Das Mahavidyas:** In-depth profiles of the Ten Great Wisdom Goddesses of Tantra (Kali, Tara, Tripura Sundari, etc.), including their essence, iconography, mantras, and teachings.
*   **⚔️ Devi Mahatmyam Forms:** Discover the majestic manifestations of Maa Durga from the Durga Saptashati, including her central form, Tridevi aspects (Mahakali, Mahalakshmi, Mahasaraswati/Kaushiki), battlefield warrior forms (Chamunda, Saptamatrikas), and forms from key stotras like Argala Stotram and Devi Kavacham.
*   **🌍 Shakti Peethas:** An interactive (placeholder for map integration) and list-based exploration of the sacred pilgrimage sites where parts of Devi Sati's body fell. Includes details on location, presiding deities (Shakti and Bhairava), significance, and more.
*   **🎶 Sacred Chants Library:** A collection of important stotras, mantras, and shlokas (e.g., Mahishasura Mardini Stotram, Argala Stotram, Kali Kavach) with Devanagari text, translations, and explanations.
*   **📖 Divine Stories:** Captivating Puranic and epic tales of Maa Shakti and her forms, illuminating her power, compassion, and divine play. Each story includes summaries, key figures, themes, cultural significance, and scriptural references.
*   **⏳ Spiritual Timeline:** Trace the presence and influence of Adi Shakti through cosmic Yugas (Satya, Treta, Dvapara, Kali) and historical eras.
*   **🧠 Philosophy of Shakti:** Delve into the core tenets of Shaktism, Tantra, the interplay of Prakriti & Purusha, and the concept of Shakti as Cosmic Energy.
*   **🔥 Tantra & Shakti Sadhana:** An introduction to Tantric principles, the path of Shakti Sādhana, Kundalini, and sacred tools like mantra, yantra, and mudra.
*   **🤖 Mantra Personalizer (AI-Powered - *Future Feature*):**
    *   An upcoming feature using Genkit to generate personalized stotras and mantras based on user's chosen deity and intention. (Currently has a placeholder UI).
*   **👤 User Profile & Dashboard (*Future Features*):**
    *   Placeholder for tracking personal sādhanā (mantra japa, meditation).
    *   Placeholder for bookmarking favorite content (stotras, goddesses, teachings).
*   **🎨 Theme Customization:**
    *   Light and Dark mode support.
    *   Multiple color themes (Default Warm, Cool Blues, Earthy Tones, Fiery Accents, Mystic Purples) to personalize the user experience.
*   **📱 Responsive Design:** Optimized for a seamless experience across desktops, tablets, and mobile devices.
*   **⚙️ Application Settings:** Users can manage their theme and mode preferences.
*   **📄 Static Pages:** Informative "About Us" and "Contact" pages.

## Tech Stack

This application is built with a modern, robust, and scalable technology stack:

*   **Framework:** [Next.js](https://nextjs.org/) (v15+) with App Router
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [Shadcn UI](https://ui.shadcn.com/) (built on Radix UI)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **AI Integration:** [Genkit (Firebase Genkit)](https://firebase.google.com/docs/genkit) for AI-powered features.
*   **State Management:** React Context API (for ThemeProvider and SidebarProvider).
*   **Linting/Formatting:** ESLint, Prettier (implied by Next.js setup).
*   **Deployment:** (Likely Vercel or Firebase Hosting given the stack).

## Project Structure

The project follows a standard Next.js App Router structure:

```
shakti-darshan/
├── src/
│   ├── app/                     # Main application routes (App Router)
│   │   ├── (page-group-folders)/ # Route groups
│   │   ├── [dynamic-segment]/   # Dynamic route pages (e.g., goddess details)
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles & Shadcn theme variables
│   │   ├── robots.ts            # robots.txt generator
│   │   ├── sitemap.ts           # sitemap.xml generator
│   │   └── ...                  # Other page routes and components
│   ├── ai/                      # Genkit related code
│   │   ├── genkit.ts            # Genkit AI instance initialization
│   │   └── flows/               # AI flows (e.g., mantra-generator-flow.ts)
│   ├── components/              # Reusable UI components
│   │   ├── layout/              # Layout components (AppHeader, AppSidebar)
│   │   └── ui/                  # Shadcn UI components & custom UI elements
│   ├── contexts/                # React Context providers (e.g., ThemeProvider)
│   ├── data/                    # Static data sources for the application
│   │   ├── tridevi-data.ts
│   │   ├── mahavidya-data.ts
│   │   ├── shakti-peetha-data.ts
│   │   └── ...                  # Other data files
│   ├── hooks/                   # Custom React hooks (e.g., use-mobile, use-toast)
│   ├── lib/                     # Utility functions (e.g., cn for Tailwind)
│   └── types/                   # TypeScript type definitions
├── public/                      # Static assets (images, favicons)
├── .env                         # Environment variables (NEXT_PUBLIC_SITE_URL)
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── components.json              # Shadcn UI configuration
├── package.json
└── README.md                    # This file
```

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18.x or later recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://your-repository-url/shakti-darshan.git
    cd shakti-darshan
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variable:
    ```env
    NEXT_PUBLIC_SITE_URL=http://localhost:9002
    ```
    Replace `http://localhost:9002` with your actual deployment URL for production builds.

### Running the Development Server

1.  **Start the Next.js development server:**
    ```bash
    npm run dev
    ```
    This will typically start the application on `http://localhost:9002` (or the port specified in your `package.json` script).

2.  **(Optional) Run Genkit development server (if working on AI features):**
    Open a new terminal and run:
    ```bash
    npm run genkit:dev
    # or for watching changes
    # npm run genkit:watch
    ```
    This starts the Genkit flow server, usually on `http://localhost:3100`.

## Key Data Sources

The application relies heavily on structured TypeScript data files located in `src/data/` for content related to:
*   Tridevi and Major Goddess Forms (`tridevi-data.ts`, `all-major-forms-detailed-data.ts`)
*   Das Mahavidyas (`mahavidya-data.ts`)
*   Shakti Peethas (`shakti-peetha-data.ts`)
*   Sacred Chants (`sacred-chants-data.ts`)
*   Divine Stories (`divine-stories-data.ts`)
*   Philosophical Concepts (`philosophy-content.ts`)
*   And more.

This approach allows for easy content management and type safety.

## AI-Powered Features

Shakti Darshan aims to integrate AI to enhance the user's spiritual journey.

*   **Mantra Personalizer:** (Currently a UI placeholder)
    *   This feature, powered by **Genkit**, will allow users to generate personalized mantras or stotras based on their chosen deity and spiritual intention.
    *   The Genkit flow for this is located in `src/ai/flows/mantra-generator-flow.ts`.
*   **Genkit Initialization:** The core Genkit AI instance is initialized in `src/ai/genkit.ts`, configured to use Google AI models (e.g., Gemini).

## Styling and Theming

*   **Tailwind CSS:** Used for utility-first styling, enabling rapid development of responsive and modern UIs.
*   **Shadcn UI:** Provides a set of beautifully designed, accessible, and customizable React components built with Radix UI and styled with Tailwind CSS.
*   **Theme Provider:** Located in `src/contexts/theme-provider.tsx`, this allows users to switch between:
    *   Light and Dark modes.
    *   Multiple pre-defined color themes (e.g., Default Warm, Cool Blues, Earthy Tones).
*   **Global Styles:** Theme variables (CSS HSL values) are defined in `src/app/globals.css`, allowing for consistent theming across the application.

## SEO & Metadata

*   **Dynamic Metadata:** Detail pages (e.g., individual goddess pages, chant pages, story pages) dynamically generate metadata (title, description, keywords, Open Graph tags) for improved SEO.
*   **Root Layout Metadata:** `src/app/layout.tsx` provides default site-wide metadata.
*   **Sitemap:** A `sitemap.ts` file (`src/app/sitemap.ts`) dynamically generates `sitemap.xml` including static and dynamic routes.
*   **Robots.txt:** A `robots.ts` file (`src/app/robots.ts`) generates `robots.txt` to guide web crawlers.

## Error Handling

*   **Global Error Page:** `src/app/error.tsx` serves as a global error boundary for unhandled runtime errors.
*   **Specific Error Pages:** Dynamic routes (e.g., `src/app/mahavidyas/[slug]/error.tsx`) have their own specific error boundaries to provide more context-aware error messages.
*   **Not Found Page:** `src/app/not-found.tsx` handles 404 errors gracefully.

## Contributing

**(Placeholder: Add guidelines for contributing to the project if it's open source.)**
We welcome contributions! Please read our `CONTRIBUTING.md` (to be created) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (Placeholder: Create a LICENSE.md file, e.g., with MIT License content).

## Acknowledgements

*   To all the ancient Rishis, Sages, and devotees who preserved and passed down this profound wisdom.
*   To the open-source community for the incredible tools and libraries used in this project.
*   (Add any other specific acknowledgements).

---

*Aum Shakti Aum* – May the Divine Mother bless all.

