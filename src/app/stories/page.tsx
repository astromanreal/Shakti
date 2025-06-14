
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { divineStoriesData } from '@/data/divine-stories-data';
import type { DivineStory } from '@/types';
import { BookHeart, ChevronRight, Filter, RotateCcw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Divine Stories of Maa Shakti - Puranic & Epic Tales";
const pageDescription = "Explore captivating tales from Puranas, Itihasas, and folk traditions featuring Maa Adi Shakti and her diverse forms. Discover stories of Durga, Kali, Sati, and more, illuminating the power of the Divine Feminine.";
const ogImageUrl = `${siteUrl}/og-images/divine-stories-shakti-darshan.jpg`;


export default function StoriesPage() {
  const [filteredStories, setFilteredStories] = useState<DivineStory[]>(divineStoriesData);
  const [selectedDeity, setSelectedDeity] = useState<string>("all");
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [selectedTheme, setSelectedTheme] = useState<string>("all");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Client-side document title update
    document.title = pageTitle + " | Shakti Darshan";
  }, []);

  const uniqueDeities = useMemo(() => {
    if (!isMounted) return [];
    const allDeities = divineStoriesData.flatMap(story => {
      if (!story.keyFigures) return [];
      return story.keyFigures.map(figure => typeof figure === 'string' ? figure : figure.name).filter(Boolean);
    });
    const deityCounts: Record<string, number> = {};
    allDeities.forEach(deity => {
      deityCounts[deity] = (deityCounts[deity] || 0) + 1;
    });
    const commonDeities = Object.entries(deityCounts)
      .filter(([deity, count]) => count > 0)
      .map(([deity]) => deity)
      .sort((a,b) => a.localeCompare(b));
    return ["all", ...Array.from(new Set(commonDeities))];
  }, [isMounted]);

  const uniqueSources = useMemo(() => {
    if (!isMounted) return [];
    const allSources = divineStoriesData.map(story => {
      if (typeof story.source === 'object' && story.source?.name) {
        return story.source.name;
      }
      return story.source as string;
    });
    return ["all", ...Array.from(new Set(allSources.filter(Boolean))).sort((a,b) => a.localeCompare(b))];
  }, [isMounted]);

  const uniqueThemes = useMemo(() => {
    if (!isMounted) return [];
    const allThemes = divineStoriesData.flatMap(story => story.themes || []);
    return ["all", ...Array.from(new Set(allThemes)).sort((a,b) => a.localeCompare(b))];
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    let stories = divineStoriesData;

    if (selectedDeity !== "all") {
      stories = stories.filter(story =>
        story.keyFigures?.some(figure => (typeof figure === 'string' ? figure : figure.name) === selectedDeity)
      );
    }
    if (selectedSource !== "all") {
      stories = stories.filter(story => {
        if (typeof story.source === 'object' && story.source?.name) {
          return story.source.name === selectedSource;
        }
        return story.source === selectedSource;
      });
    }
    if (selectedTheme !== "all") {
      stories = stories.filter(story => story.themes?.includes(selectedTheme));
    }
    setFilteredStories(stories);
  }, [selectedDeity, selectedSource, selectedTheme, isMounted]);

  const handleClearFilters = () => {
    setSelectedDeity("all");
    setSelectedSource("all");
    setSelectedTheme("all");
  };
  
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/stories`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": divineStoriesData.map((story, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": story.title,
          "url": `${siteUrl}/stories/${story.slug}`,
          "author": { "@type": "Organization", "name": "Shakti Darshan" },
          "publisher": {
            "@type": "Organization",
            "name": "Shakti Darshan",
            "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png` }
          },
          "keywords": [
            story.title,
            ...(story.keyFigures?.map(kf => typeof kf === 'string' ? kf : kf.name) || []),
            ...(story.deities || []),
            ...(story.themes || []),
            "Hindu Mythology",
            "Divine Feminine"
          ].filter(Boolean).join(", ")
        }
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`
    }
  };

  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-10rem)]">
        <BookHeart className="w-16 h-16 text-primary animate-pulse" />
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16" aria-labelledby="stories-page-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <BookHeart className="w-16 h-16 text-primary" />
          </div>
          <h1 id="stories-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {pageDescription}
          </p>
        </header>

        <Card className="mb-12 p-4 md:p-6 bg-muted/30 border border-border/20 rounded-xl shadow-lg">
          <CardHeader className="p-0 pb-4 md:flex md:flex-row md:items-center md:justify-between">
            <CardTitle className="text-xl md:text-2xl text-secondary flex items-center gap-2 mb-4 md:mb-0">
              <Filter className="w-6 h-6" /> Filter Divine Narratives
            </CardTitle>
             <Button
              variant="outline"
              size="sm"
              onClick={handleClearFilters}
              className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive-foreground"
              aria-label="Clear all filters"
            >
              <RotateCcw className="w-4 h-4 mr-2" /> Clear Filters
            </Button>
          </CardHeader>
          <CardContent className="p-0 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label htmlFor="deity-filter" className="block text-sm font-medium text-foreground mb-1.5">Filter by Deity</label>
              <Select value={selectedDeity} onValueChange={setSelectedDeity}>
                <SelectTrigger id="deity-filter" className="w-full bg-background shadow-sm text-base border-border focus:border-primary h-11">
                  <SelectValue placeholder="All Deities" />
                </SelectTrigger>
                <SelectContent>
                  {uniqueDeities.map(deity => (
                    <SelectItem key={deity} value={deity} className="text-base py-2 capitalize">{deity === 'all' ? 'All Deities' : deity}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="source-filter" className="block text-sm font-medium text-foreground mb-1.5">Filter by Source</label>
              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger id="source-filter" className="w-full bg-background shadow-sm text-base border-border focus:border-primary h-11">
                  <SelectValue placeholder="All Sources" />
                </SelectTrigger>
                <SelectContent>
                  {uniqueSources.map(source => (
                    <SelectItem key={source} value={source} className="text-base py-2 capitalize">{source === 'all' ? 'All Sources' : source}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="theme-filter" className="block text-sm font-medium text-foreground mb-1.5">Filter by Theme</label>
              <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                <SelectTrigger id="theme-filter" className="w-full bg-background shadow-sm text-base border-border focus:border-primary h-11">
                  <SelectValue placeholder="All Themes" />
                </SelectTrigger>
                <SelectContent>
                  {uniqueThemes.map(theme => (
                    <SelectItem key={theme} value={theme} className="text-base py-2 capitalize">{theme === 'all' ? 'All Themes' : theme}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        
        {filteredStories.length > 0 ? (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <Card 
                key={story.slug} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015] bg-card rounded-2xl overflow-hidden flex flex-col group border border-border/30 hover:border-primary/40"
              >
                <CardHeader className="p-6 bg-gradient-to-br from-card via-muted/10 to-card border-b border-border/20">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                      <BookHeart className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl lg:text-2xl text-primary group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">{story.title}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground pt-1">
                        Source: {typeof story.source === 'object' ? story.source.name : story.source}
                        {typeof story.source === 'object' && story.source.text && <span className="block italic">({story.source.text})</span>}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <p className="text-foreground/85 mb-5 line-clamp-4 text-sm leading-relaxed min-h-[5.25rem]"> {/* Adjusted min-h for text-sm */}
                    {story.summary}
                  </p>
                  {story.themes && story.themes.length > 0 && (
                    <div>
                      <strong className="text-xs text-secondary uppercase tracking-wider block mb-1.5">Primary Themes:</strong>
                      <div className="flex flex-wrap gap-1.5">
                        {story.themes.slice(0, 2).map(theme => <Badge key={theme} variant="outline" className="px-2 py-0.5 text-xs shadow-sm border-secondary/50 text-secondary/90 bg-secondary/10">{theme}</Badge>)}
                        {story.themes.length > 2 && <Badge variant="outline" className="text-xs px-2 py-0.5 shadow-sm border-muted-foreground/30">...</Badge>}
                      </div>
                    </div>
                   )}
                </CardContent>
                <CardFooter className="mt-auto border-t border-border/20 pt-4 p-6">
                  <Button asChild variant="link" className="text-accent p-0 text-sm font-semibold group-hover:text-accent-foreground transition-colors">
                    <Link href={`/stories/${story.slug}`}>
                      Explore Story <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
           <Card className="text-center p-8 lg:p-12 bg-muted/50 rounded-2xl shadow-lg border border-border/30 col-span-full mt-4">
              <BookHeart className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <CardTitle className="text-2xl text-primary mb-3 tracking-tight">No Stories Found</CardTitle>
              <p className="text-lg text-muted-foreground">
                No stories match your current filter selection. Please try different filters or reset them.
              </p>
               <Button variant="outline" onClick={handleClearFilters} className="mt-6">
                <RotateCcw className="w-4 h-4 mr-2" /> Reset Filters
              </Button>
          </Card>
        )}
        
        <Separator className="my-16" />

         <Card className="mt-16 bg-primary/10 p-8 lg:p-12 text-center rounded-2xl shadow-lg border border-primary/20" aria-labelledby="stories-conclusion-title">
          <h3 id="stories-conclusion-title" className="text-2xl md:text-3xl font-semibold text-primary mb-4 tracking-tight">Echoes of Divinity</h3>
          <p className="text-foreground/80 text-lg max-w-xl mx-auto">
            These narratives and sacred verses offer profound insights into the nature of the Divine Feminine and her interactions with the cosmos.
          </p>
        </Card>
      </div>
    </>
  );
}
