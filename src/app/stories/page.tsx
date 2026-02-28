
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
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Divine Stories of Maa Shakti - Puranic & Epic Tales";
const pageDescription = "Explore captivating tales from Puranas, Itihasas, and folk traditions featuring Maa Adi Shakti and her diverse forms. Discover stories of Durga, Kali, Sati, and more, illuminating the power of the Divine Feminine.";
const ogImageUrl = `${siteUrl}/og-images/divine-stories-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["Divine Stories", "Puranic Tales", "Hindu Mythology", "Shakti Stories", "Goddess Durga", "Maa Kali", "Devi Sati", "Mahishasura Mardini", "Daksha Yagna"],
  alternates: {
    canonical: '/stories',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/stories`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Divine Stories of Maa Shakti' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};


export default function StoriesPage() {
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
        
        {divineStoriesData.length > 0 ? (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {divineStoriesData.map((story) => (
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
