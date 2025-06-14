
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { timelineData } from '@/data/timeline-data';
import { CalendarClock, Landmark, Sparkles, Users, Info, Tag } from 'lucide-react'; 
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Spiritual Timeline of Shakti - Cosmic Ages & Divine Manifestations";
const pageDescription = "Trace the presence and influence of Maa Adi Shakti through cosmic Yugas and historical eras. Witness her timeless manifestations and pivotal role in shaping dharma, Sanatan Dharma, and spiritual evolution.";
const ogImageUrl = `${siteUrl}/og-images/shakti-timeline-history.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Shakti Timeline", "Spiritual History", "Cosmic Yugas", "Adi Shakti evolution", 
    "Divine Feminine history", "Hindu timeline", "Satya Yuga", "Treta Yuga", "Dvapara Yuga", "Kali Yuga",
    "Maa Adi Shakti", "Sanatan Dharma", "Hindu goddess worship"
  ],
  alternates: {
    canonical: '/timeline',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/timeline`,
    images: [
      {
        url: ogImageUrl, 
        width: 1200,
        height: 630,
        alt: 'Spiritual Timeline of Maa Adi Shakti Through Cosmic Ages',
      },
    ],
    type: 'website', 
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

export default function TimelinePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/timeline`,
    "mainEntity": {
        "@type": "ItemList",
        "name": "Timeline of Shakti's Manifestations",
        "itemListElement": timelineData.map((event, index) => ({
          "@type": "Event", // Each timeline entry can be an Event
          "name": event.title,
          "description": event.description,
          "startDate": event.era, // Schema.org expects specific date formats, 'era' is a broad term.
          "location": "Cosmic / Historical Context",
          "keywords": event.key_elements.join(", "),
          "organizer": {
            "@type": "Organization",
            "name": "Shakti Darshan"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16" aria-labelledby="timeline-page-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <CalendarClock className="w-16 h-16 text-primary" />
          </div>
          <h1 id="timeline-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {pageDescription}
          </p>
        </header>

        {timelineData.length > 0 ? (
          <div className="relative pl-6 before:absolute before:inset-y-0 before:w-1.5 before:bg-border before:left-1.5 before:rounded-full">
            {timelineData.map((event, index) => (
              <div key={index} className="relative mb-12 pl-10" role="article" aria-labelledby={`event-title-${index}`}>
                <div className="absolute -left-[22px] top-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground ring-8 ring-background shadow-lg">
                  <Landmark className="h-6 w-6" />
                </div>
                <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-card/90 backdrop-blur-sm border-2 border-primary/20 transform hover:-translate-y-1 hover:scale-[1.01] rounded-2xl">
                  <CardHeader className="bg-primary/10 p-6 rounded-t-2xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <CardTitle id={`event-title-${index}`} className="text-xl md:text-2xl text-primary flex items-center gap-2.5 tracking-tight">
                         <Sparkles className="w-7 h-7 text-primary/80" /> {event.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs md:text-sm whitespace-nowrap px-3.5 py-1.5 shadow-md self-start sm:self-center">
                        {event.era}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg text-secondary mb-2.5 flex items-center gap-2"><Info className="w-5 h-5"/>Description:</h4>
                      <p className="text-md text-foreground/80 leading-relaxed">{event.description}</p>
                    </div>
                    
                    <Separator className="bg-border/50" />
                    
                    <div>
                      <h4 className="font-semibold text-lg text-secondary mb-2.5 flex items-center gap-2"><Tag className="w-5 h-5"/>Significance:</h4>
                      <p className="text-md text-foreground/80 italic leading-relaxed">{event.significance}</p>
                    </div>
                    
                    <Separator className="bg-border/50" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                      <div>
                        <h4 className="font-semibold text-lg text-secondary mb-3 flex items-center gap-2"><Users className="w-5 h-5"/>Manifestation(s):</h4>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(event.manifestation) ? 
                            event.manifestation.map((m, i) => <Badge key={`${m}-${i}`} variant="outline" className="text-md px-3 py-1.5 shadow-sm border-primary/60 bg-primary/10 text-primary-foreground">{m}</Badge>) :
                            <Badge variant="outline" className="text-md px-3 py-1.5 shadow-sm border-primary/60 bg-primary/10 text-primary-foreground">{event.manifestation}</Badge>
                          }
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg text-secondary mb-3 flex items-center gap-2"><Sparkles className="w-5 h-5"/>Key Elements:</h4>
                        <ul className="list-disc list-inside space-y-1.5 text-md text-foreground/75 pl-1">
                          {event.key_elements.map((el, i) => <li key={`${el}-${i}`}>{el}</li>)}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <Card className="text-center p-10 bg-muted/50 rounded-2xl shadow-lg border border-border/30">
            <CalendarClock className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <CardTitle className="text-2xl text-primary mb-3 tracking-tight">Timeline Under Curation</CardTitle>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The spiritual timeline of Shakti through ages and yugas is currently under research and will be presented here soon.
            </p>
          </Card>
        )}

        <Separator className="my-16 bg-border/60" />
        <Card className="mt-12 p-8 lg:p-12 bg-accent/10 text-center rounded-2xl shadow-lg border border-accent/30" aria-labelledby="timeline-conclusion-title">
          <CardTitle id="timeline-conclusion-title" className="text-2xl md:text-3xl text-accent mb-4 tracking-tight">The Eternal Dance of Shakti</CardTitle>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
            This timeline offers a glimpse into the eternal play of the Divine Mother across cosmic cycles, reminding us of her omnipresence and continuous influence on the spiritual destiny of the universe.
          </p>
        </Card>
      </div>
    </>
  );
}
