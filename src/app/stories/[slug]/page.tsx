import { divineStoriesData } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookHeart, BookText, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

type StoryPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const story = divineStoriesData.find((s) => s.slug === params.slug);

  if (!story) {
    return {
      title: 'Story Not Found | Shakti Darshan',
      description: 'The requested divine story page could not be found.',
    };
  }

  const siteName = 'Shakti Darshan';
  const pageTitle = `${story.title} - Divine Story | ${siteName}`;
  const pageDescription = story.summary.substring(0, 160) + (story.summary.length > 160 ? '...' : '');
  const pageUrl = `/stories/${params.slug}`;
  // Generic image for stories, can be replaced with story-specific images if available
  const imageUrl = `https://picsum.photos/seed/divine-story-${story.slug}/1200/630`; 

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [story.title, story.source, ...story.keyFigures.slice(0,3), 'Divine Story', 'Hindu Mythology'],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: story.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return divineStoriesData.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = divineStoriesData.find((s) => s.slug === params.slug);

  if (!story) {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <Card className="max-w-md mx-auto p-8 bg-destructive/10">
                <CardTitle className="text-2xl text-destructive mb-4">Story Not Found</CardTitle>
                <CardDescription>
                    The story you are looking for does not exist or may have been moved.
                </CardDescription>
            </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <BookHeart className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{story.title}</h1>
        </div>
        <p className="text-xl text-foreground/80 md:ml-16">
          Source: <span className="font-semibold text-secondary">{story.source}</span>
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Summary of the Divine Tale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/90 whitespace-pre-line leading-relaxed">{story.summary}</p>
            </CardContent>
          </Card>

          {story.stotraVerses && story.stotraVerses.length > 0 && (
            <Card className="shadow-xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <BookText className="w-7 h-7 text-accent" />
                <CardTitle className="text-2xl text-accent">
                  {story.stotraTitle || "Sacred Verses"}
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-muted/50 p-6 rounded-b-lg">
                <div className="space-y-3">
                  {story.stotraVerses.map((verse, index) => (
                    <p key={index} className="text-md font-serif italic text-foreground/80 border-l-4 border-accent pl-4 py-1">
                      {verse}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-8 shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
                <Users className="w-7 h-7 text-secondary" />
              <CardTitle className="text-2xl text-secondary">Key Figures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {story.keyFigures.map((figure) => (
                  <Badge key={figure} variant="secondary" className="text-base px-4 py-2">
                    {figure}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-12" />
      <Card className="mt-12 p-6 bg-primary/5 text-center">
        <p className="text-lg text-primary-foreground/80">
          Reflecting on these divine stories and sacred verses deepens our connection to the eternal truths embodied by Maa Shakti.
        </p>
      </Card>
    </div>
  );
}
