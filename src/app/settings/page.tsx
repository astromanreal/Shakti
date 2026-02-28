
"use client";

import type { ReactNode } from 'react';
import { useEffect } from 'react'; // Ensure useEffect is imported
import { useTheme, type Theme } from '@/contexts/theme-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Palette, Settings as SettingsIcon } from "lucide-react";
// Metadata import is removed as it's not used for static export
// import type { Metadata } from 'next'; 

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';
const pageTitle = "Application Settings - Customize Your Shakti Darshan Experience";
const pageDescription = "Personalize your Shakti Darshan spiritual journey. Choose your preferred color theme, toggle between dark and light mode, and manage other application preferences for an optimal experience.";
// const ogImageUrl = `${siteUrl}/og-images/settings-shakti-darshan.jpg`; // Not used if metadata is removed

// Removed static metadata export:
// export const metadata: Metadata = { ... };

const themes: { value: Theme; label: string }[] = [
  { value: 'theme-default', label: 'Default (Warm)' },
  { value: 'theme-cool', label: 'Cool Blues' },
  { value: 'theme-earthy', label: 'Earthy Tones' },
  { value: 'theme-fiery', label: 'Fiery Accents' },
  { value: 'theme-mystic', label: 'Mystic Purples' },
];

export default function SettingsPage() {
  const { theme, setTheme, mode, setMode, isMounted } = useTheme();

  useEffect(() => {
    if (isMounted) { 
      document.title = pageTitle;
      
      let descriptionTag = document.querySelector('meta[name="description"]');
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.setAttribute('content', pageDescription);

      // Note: For full SEO, dynamic meta tags for OG, Twitter, keywords, etc., 
      // would need to be added here if not handled by a higher-level layout or page.
      // For simplicity and to fix the immediate error, only title and description are explicitly managed here.
    }
  }, [isMounted]);


  if (!isMounted) {
    return (
        <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-10rem)]">
            <SettingsIcon className="w-12 h-12 text-primary animate-spin" />
        </div>
    );
  }
  
  const settingsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/settings`,
     "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`
    }
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(settingsPageSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12" aria-labelledby="settings-page-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
            <SettingsIcon className="w-12 h-12 text-primary" />
          </div>
          <h1 id="settings-page-title" className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Application Settings
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Customize your viewing experience, choose your preferred color theme, and toggle dark mode.
          </p>
        </header>

        <Card className="max-w-xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-secondary">
              <Palette className="w-6 h-6" /> Theme Customization
            </CardTitle>
            <CardDescription>
              Select your preferred color theme and display mode. Your preferences are saved locally.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="theme-select" className="text-lg font-medium">Color Theme</Label>
              <Select value={theme} onValueChange={(value) => setTheme(value as Theme)}>
                <SelectTrigger id="theme-select" className="w-full py-3 text-base" aria-label="Select color theme">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  {themes.map((t) => (
                    <SelectItem key={t.value} value={t.value} className="text-base py-2">
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Choose a color palette that suits your preference. Current default is 'Default (Warm)'.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <div className="flex items-center justify-between space-y-2">
                <div className="flex flex-col">
                  <Label htmlFor="dark-mode-toggle" className="text-lg font-medium">Display Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Toggle between light and dark themes. Current default is 'Dark Mode'.
                  </p>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-muted rounded-full">
                  <Sun className={`w-6 h-6 transition-colors ${mode === 'light' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`} aria-hidden="true"/>
                  <Switch
                    id="dark-mode-toggle"
                    checked={mode === 'dark'}
                    onCheckedChange={(checked) => setMode(checked ? 'dark' : 'light')}
                    aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
                  />
                  <Moon className={`w-6 h-6 transition-colors ${mode === 'dark' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`} aria-hidden="true"/>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

