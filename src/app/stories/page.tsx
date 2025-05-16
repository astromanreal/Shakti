import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { divineStoriesData } from '@/data/content';
import { BookHeart, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

const pageTitle = "Divine Stories of Maa Shakti - Puranic & Epic Tales";
const pageDescription = "Explore captivating tales from Puranas, Itihasas, and folk traditions featuring Maa Adi Shakti and her diverse forms. Discover stories of Durga, Kali, Sati, and more, with relevant stotras.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Divine Stories", "Shakti tales", "Puranic stories", "Hindu mythology", "Durga stories", 
    "Kali stories", "Sati stories", "Mahishasura Mardini", "Devi Mahatmyam tales", "Goddess stories"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/stories',
    images: [
      {
        url: `https://picsum.photos/seed/divine-shakti-stories/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'Collection of Divine Stories of Maa Shakti',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://picsum.photos/seed/divine-shakti-stories/1200/630`],
  },
};


export default function StoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <BookHeart className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
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
              className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] bg-card rounded-xl overflow-hidden flex flex-col group"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{story.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Source: {story.source}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 mb-4 line-clamp-4 text-base">{story.summary}</p>
                <div>
                  <strong className="text-sm text-secondary">Key Figures:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {story.keyFigures.map(fig => <Badge key={fig} variant="secondary" className="px-3 py-1">{fig}</Badge>)}
                  </div>
                </div>
                 {story.stotraTitle && (
                  <div className="mt-4 pt-3 border-t border-border/30">
                    <strong className="text-sm text-secondary">Featured Stotra:</strong>
                    <p className="text-foreground/80 italic text-sm">{story.stotraTitle}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="mt-auto border-t border-border/50 pt-4">
                <Button asChild variant="link" className="text-accent p-0 text-base font-semibold">
                  <Link href={`/stories/${story.slug}`}>
                    Read Story & Stotras <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
         <Card className="text-center p-8 bg-muted rounded-lg shadow-lg">
            <BookHeart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <CardTitle className="text-2xl text-primary mb-2">Stories Coming Soon</CardTitle>
            <p className="text-lg text-muted-foreground">
                A rich collection of stories from Puranas and Itihasas, along with their sacred stotras, is being assembled. Please visit again.
            </p>
        </Card>
      )}
       <Card className="mt-16 bg-secondary/10 p-8 text-center rounded-lg">
        <h3 className="text-2xl font-semibold text-secondary mb-3">Echoes of Divinity</h3>
        <p className="text-foreground/80 max-w-xl mx-auto">
          These narratives and sacred verses offer profound insights into the nature of the Divine Feminine and her interactions with the cosmos.
        </p>
      </Card>
    </div>
  );
}
