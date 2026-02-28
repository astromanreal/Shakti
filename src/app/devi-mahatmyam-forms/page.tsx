
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ScrollText, ShieldAlert, Zap, Users, ListChecks, Palette, Award, GitMerge, Sparkles, BookOpen, Drama, Shield, Heart, HelpCircle, MessageSquare, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import { deviMahatmyamFormsData } from '@/data/devi-mahatmyam-forms-data';
import type { DeviForm, DeviMahatmyamSection } from '@/types';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';
const pageMetaTitle = `${deviMahatmyamFormsData.pageTitle} | Shakti Darshan`;
const pageMetaDescription = deviMahatmyamFormsData.pageDescription;
const ogImageUrl = `${siteUrl}/og-images/devi-mahatmyam-forms-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageMetaTitle,
  description: pageMetaDescription,
  keywords: [
    "Devi Mahatmyam Forms", "Durga Saptashati Goddesses", "Chandika", "Mahakali", "Mahalakshmi", "Mahasaraswati",
    "Chamunda", "Saptamatrikas", "Kaushiki", "Argala Stotram Forms", "Devi Kavacham Protectors", "Shakta philosophy", 
    "Hindu Goddesses", "Maa Adi Shakti", "Divine Feminine warriors"
  ],
  alternates: {
    canonical: '/devi-mahatmyam-forms',
  },
  openGraph: {
    title: pageMetaTitle,
    description: pageMetaDescription,
    url: `${siteUrl}/devi-mahatmyam-forms`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Forms of Devi in Devi Mahatmyam - Shakti Darshan" }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetaTitle,
    description: pageMetaDescription,
    images: [ogImageUrl],
  },
};

const IconMap: Record<string, React.ElementType> = {
  ShieldAlert, Users, BookOpen, ListChecks, Award, GitMerge, Sparkles, Palette, Zap, Drama, ScrollText, Shield, Heart, HelpCircle, MessageSquare
};

const DeviFormCard: React.FC<{ form: DeviForm }> = ({ form }) => {
  const IconComponent = form.icon || ScrollText;
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card/80 backdrop-blur-sm border border-border/20 rounded-xl group">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-full group-hover:bg-accent/10 transition-colors">
                 <IconComponent className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
            </div>
            <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">{form.name}</CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground italic">{form.role}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm">
        {form.description && <p className="text-foreground/80 leading-relaxed">{form.description}</p>}
        <div>
          <strong className="text-secondary">Context:</strong>
          <p className="text-foreground/70">{form.context}</p>
        </div>
        <div>
          <strong className="text-secondary">Key Attributes/Symbols:</strong>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {form.attributes.map((attr, index) => (
              <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">{attr}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      {form.imageUrl && (
        <CardFooter className="p-0 mt-auto">
            <Image
                src={form.imageUrl}
                alt={`Image of ${form.name} from Devi Mahatmyam`}
                width={400}
                height={200}
                className="rounded-b-xl object-cover w-full h-32 opacity-70 group-hover:opacity-100 transition-opacity"
                data-ai-hint={form.imageHint || "divine form illustration"}
            />
        </CardFooter>
      )}
    </Card>
  );
};

export default function DeviMahatmyamFormsPage() {
  const { pageTitle, pageDescription, introduction, sections, heroImage, heroImageHint, conclusion } = deviMahatmyamFormsData;

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageMetaTitle,
    "description": pageMetaDescription,
    "url": `${siteUrl}/devi-mahatmyam-forms`,
    "image": ogImageUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": sections.flatMap(section => 
        section.forms.map((form, index) => ({
          "@type": "ListItem",
          "position": index + 1, // Position within section, ideally global position
          "item": {
            "@type": "Thing", // More specific type like "Deity" or "SpiritualEntity" could be used
            "name": form.name,
            "description": form.role + (form.description ? `. ${form.description}` : ''),
            "image": form.imageUrl || `${siteUrl}/og-images/devi-mahatmyam-forms/${form.id}.jpg`,
          }
        }))
      )
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
      <div className="container mx-auto px-4 py-10">
        <header className="relative mb-16 md:mb-20 h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl" aria-labelledby="devi-mahatmyam-page-title">
          {heroImage && (
            <Image
              src={heroImage}
              alt={pageTitle}
              fill
              priority
              className="object-cover"
              data-ai-hint={heroImageHint || "divine mother battle epic"}
            />
          )}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
            <div className="inline-flex items-center justify-center bg-primary/20 p-3 rounded-full mb-4 shadow-md ring-2 ring-primary/30">
               <Award className="w-10 h-10 text-primary" />
            </div>
            <h1 id="devi-mahatmyam-page-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
              {pageTitle}
            </h1>
            <p className="text-md md:text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md">
              {pageDescription}
            </p>
          </div>
        </header>

        <section className="mb-12 p-6 bg-muted/30 rounded-xl shadow-lg border border-border/20" aria-labelledby="intro-devi-mahatmyam">
          <h2 id="intro-devi-mahatmyam" className="text-2xl font-semibold text-secondary mb-3">Introduction to Devi Mahatmyam</h2>
          <p className="text-foreground/80 leading-relaxed">{introduction}</p>
        </section>

        <Separator className="my-12" />

        <div className="space-y-16">
          {sections.map((section) => {
            const SectionIcon = section.icon || Sparkles;
            return (
              <section key={section.id} id={section.id} className="scroll-mt-20" aria-labelledby={`section-title-${section.id}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-secondary/10 rounded-full ring-2 ring-secondary/20">
                      <SectionIcon className="w-10 h-10 text-secondary" />
                  </div>
                  <h2 id={`section-title-${section.id}`} className="text-3xl font-semibold text-secondary tracking-tight">{section.title}</h2>
                </div>
                {section.introduction && (
                  <p className="text-lg text-foreground/75 mb-8 leading-relaxed italic max-w-4xl">{section.introduction}</p>
                )}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                  {section.forms.map((form) => (
                    <DeviFormCard key={form.id} form={form} />
                  ))}
                </div>
                 {section.id !== sections[sections.length - 1].id && <Separator className="my-16" />}
              </section>
            );
          })}
        </div>
        
        {conclusion && (
          <section className="mt-20 py-10" aria-labelledby="conclusion-title">
            <Card className="bg-accent/10 p-8 sm:p-10 text-center rounded-xl shadow-2xl border-2 border-accent/30">
              <div className="inline-flex items-center justify-center bg-accent/20 p-3.5 rounded-full mb-6 ring-4 ring-accent/30">
                <Sparkles className="w-12 h-12 text-accent" />
              </div>
              <CardTitle id="conclusion-title" className="text-2xl sm:text-3xl font-bold text-accent mb-5 tracking-tight">Conclusion & Invitation</CardTitle>
              <CardDescription className="text-md md:text-lg text-accent-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                {conclusion}
              </CardDescription>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/sacred-chants">Explore Sacred Chants <ChevronRight className="w-5 h-5 ml-2"/></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="/tantra-sadhana">Discover Tantra Sadhana <ChevronRight className="w-5 h-5 ml-2"/></Link>
                </Button>
              </div>
            </Card>
          </section>
        )}
      </div>
    </>
  );
}
