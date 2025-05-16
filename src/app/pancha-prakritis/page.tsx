
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Shapes, Layers, Users, Info, CircleDollarSign, BookOpenText, Sun, Star, HeartPulse, Zap } from 'lucide-react';
import { panchaPrakritiData } from '@/data/content';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

const pageTitle = "Pancha Prakritis (Panchadevis) - Five Divine Manifestations";
const pageDescription = "Explore the five distinct manifestations of Mahadevi as per Devi Bhagavata Purana: Ganesh Janani Durga (Parvati), Lakshmi, Saraswati, Savitri (Gayatri), and Radha, representing core feminine divine energies.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Pancha Prakritis", "Panchadevis", "Bhuvaneshwari forms", "Ganesh Janani Durga", "Parvati", 
    "Lakshmi", "Saraswati", "Savitri", "Gayatri", "Radha", "Devi Bhagavata Purana", "Feminine Divinity"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/pancha-prakritis',
    images: [
      {
        url: `https://i.pinimg.com/736x/bf/47/18/bf47184d05590b5d0223d9759e790d8c.jpg`, // Updated Bhuvaneshwari OG image
        width: 1200,
        height: 630,
        alt: 'Pancha Prakritis - Five Divine Feminine Forms',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://i.pinimg.com/736x/bf/47/18/bf47184d05590b5d0223d9759e790d8c.jpg`], // Updated Bhuvaneshwari Twitter image
  },
};

const formImageMap: Record<string, string> = {
  "Ganesh Janani Durga (Parvati)": "https://i.pinimg.com/736x/48/54/61/4854618ac9026399d6dbcfbde52f8ae6.jpg",
  "Lakshmi": "https://i.pinimg.com/736x/34/01/82/34018239410c412c24da5b9966ecd7cb.jpg",
  "Sarasvati": "https://i.pinimg.com/736x/a8/55/5e/a8555e27f76ed7d545688be81b2d0829.jpg",
  "Savitri (Gayatri)": "https://i.pinimg.com/736x/31/93/78/319378b463fa430b6cff4ec807ec8f8b.jpg",
  "Radha": "https://i.pinimg.com/736x/74/55/8b/74558bc5b82e4aa326f2913e04dbcadf.jpg",
};

export default function PanchaPrakritisPage() {
  const data = panchaPrakritiData;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <Shapes className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Explore the five distinct manifestations of Mahadevi, as described in the Devi Bhagavata Purana, representing the core feminine divine energies.
        </p>
      </header>

      <Card className="mb-10 shadow-xl border-2 border-secondary/20 bg-gradient-to-br from-card via-muted/10 to-card">
        <CardHeader className="bg-secondary/5 p-6">
          <CardTitle className="text-2xl md:text-3xl text-secondary flex items-center gap-3">
            <Info className="w-7 h-7" /> Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-lg text-foreground/90 leading-relaxed">{data.overview}</p>
        </CardContent>
      </Card>

      <Card className="mb-10 shadow-xl border-accent/20">
        <CardHeader className="bg-accent/5 p-6">
          <CardTitle className="text-2xl md:text-3xl text-accent flex items-center gap-3">
            <Layers className="w-7 h-7" /> Key Form of Devi
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-xl font-semibold text-foreground">{data.key_form_of_devi}</p>
          <Image 
            src="https://i.pinimg.com/736x/bf/47/18/bf47184d05590b5d0223d9759e790d8c.jpg" 
            alt="Bhuvaneshwari" 
            width={600} 
            height={300} 
            className="rounded-lg mt-4 shadow-md object-cover w-full h-auto max-h-80"
            data-ai-hint="Bhuvaneshwari mother goddess"
          />
        </CardContent>
      </Card>
      
      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary flex items-center justify-center gap-3">
          <Users className="w-10 h-10" /> The Five Divine Forms
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {data.forms.map((form) => (
            <Card key={form.name} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="relative p-0">
                 <Image
                    src={formImageMap[form.name] || `https://placehold.co/400x250.png`}
                    alt={form.name}
                    width={400}
                    height={250}
                    className="rounded-t-lg object-cover w-full h-48"
                    data-ai-hint={form.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <CardTitle className="text-2xl text-white drop-shadow-md">{form.name}</CardTitle>
                     {form.alternate_names && form.alternate_names.length > 0 && (
                      <CardDescription className="text-sm text-gray-200 drop-shadow-sm">{form.alternate_names.join(', ')}</CardDescription>
                    )}
                  </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-md font-semibold text-secondary mb-2">{form.role}</p>
                
                <div className="mb-3">
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Key Attributes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {form.key_attributes.map(attr => <Badge key={attr} variant="outline" className="text-xs">{attr}</Badge>)}
                  </div>
                </div>
                
                <p className="text-sm text-foreground/80 mb-3"><strong className="text-foreground">Significance:</strong> {form.significance}</p>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Special Iconography:</h4>
                  <ul className="list-disc list-inside text-xs text-foreground/70 space-y-0.5">
                    {form.special_iconography.map(icon => <li key={icon}>{icon}</li>)}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      <Card className="mb-10 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary flex items-center gap-2"><Star className="w-6 h-6" /> Unifying Theme</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md text-foreground/90">{data.unifying_theme}</p>
        </CardContent>
      </Card>
      
      <Separator className="my-12" />

      <Card className="mb-10 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center gap-2"><HeartPulse className="w-6 h-6" /> Importance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-1">On Worship:</h3>
            <p className="text-md text-foreground/80">{data.importance.on_worship}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-1">On Spiritual Practice:</h3>
            <p className="text-md text-foreground/80">{data.importance.on_spiritual_practice}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-1">On Theology:</h3>
            <p className="text-md text-foreground/80">{data.importance.on_theology}</p>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-accent flex items-center gap-2"><Zap className="w-6 h-6" /> Rituals and Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(data.rituals_and_practices).map(([goddessName, practices]) => (
              <AccordionItem value={goddessName} key={goddessName}>
                <AccordionTrigger className="text-lg hover:text-accent font-medium">
                    {goddessName === "Ganesh Janani Durga" ? "Ganesh Janani Durga (Parvati)" : goddessName}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1 pl-4 text-md text-foreground/80">
                    {practices.map((practice, index) => <li key={index}>{practice}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

    </div>
  );
}
