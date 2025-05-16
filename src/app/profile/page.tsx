
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import type { Metadata } from 'next';

const pageTitle = "Your Spiritual Profile"; // This will be dynamically set if user is logged in
const pageDescription = "View and manage your Shakti Darshan profile. Track your journey, saved content, and preferences. (Features coming soon)";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["User profile", "spiritual journey", "my account", "Shakti Darshan profile"],
   openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/profile',
    images: [
      {
        url: `https://picsum.photos/seed/user-profile-shakti/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'User Profile on Shakti Darshan',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://picsum.photos/seed/user-profile-shakti/1200/630`],
  },
  // Optional: If this page should not be indexed until features are ready
  // robots: { index: false, follow: false } 
};


export default function ProfilePage() {
  // Placeholder user data
  const user = {
    name: "Devi Bhakta", 
    email: "user@example.com", // Not displayed as per previous request but kept in data structure
    bio: "A devout follower exploring the depths of Shakti Darshan. Seeking wisdom and spiritual growth.",
    avatarUrl: "https://picsum.photos/seed/profileavatar/200/200", 
    joinDate: "January 1, 2024", 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <User className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {user.name}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Embrace your journey, reflect your essence. <br />
          Your profile, a canvas of your spiritual path.
        </p>
      </header>

      <div className="text-center text-muted-foreground mt-16 p-8 bg-card rounded-lg shadow-lg">
        <CardTitle className="text-2xl text-primary mb-4">Profile Under Construction</CardTitle>
        <CardDescription className="text-lg">
          We are enhancing your personal space. <br/> Exciting features to customize and share your spiritual journey are coming soon!
        </CardDescription>
      </div>
    </div>
  );
}
