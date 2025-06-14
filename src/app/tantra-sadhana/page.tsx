
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { 
  Flame, 
  BookOpen, 
  Sparkles, 
  Shapes, 
  Users2, 
  Brain, 
  Heart,
  ChevronRight,
  Zap,
  Aperture,
  Users, 
  CircleDotDashed 
} from 'lucide-react';
import type { Metadata } from 'next';
import { tantraSadhanaContent } from '@/data/tantra-sadhana-content';
import Image from 'next/image';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Tantra & Shakti Sadhana - Path of Divine Energy & Inner Power";
const pageDescription = "Awaken the living power of Shakti within. Explore Tantra, the sacred spiritual science of Divine Energy, and the path of Shakti Sādhana for inner transformation, Kundalini awakening, and liberation.";
const ogImageUrl = `${siteUrl}/og-images/tantra-shakti-sadhana.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Tantra", "Shakti Sadhana", "Kundalini", "Divine Energy", "spiritual practices", 
    "Tantric worship", "Mantra", "Yantra", "Mudra", "Devi Worship", "Inner Transformation",
    "Maa Adi Shakti", "Spiritual feminine power", "Hindu goddess worship"
  ],
  alternates: {
    canonical: '/tantra-sadhana',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/tantra-sadhana`,
    images: [
      {
        url: ogImageUrl, 
        width: 1200,
        height: 630,
        alt: 'The Path of Divine Energy - Tantra and Shakti Sadhana Exploration',
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

const SectionCard: React.FC<{icon: React.ElementType, title: string, children: React.ReactNode, id?: string}> = ({ icon: Icon, title, children, id }) => (
  <Card id={id} className="shadow-xl rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-card via-background to-muted/20 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01]">
    <CardHeader className="bg-secondary/5 p-6 sm:p-8">
      <div className="flex items-start md:items-center gap-4">
        <div className="bg-secondary/20 p-3 rounded-full ring-2 ring-secondary/30 flex-shrink-0">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
          {title}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="p-6 sm:p-8">
      {children}
    </CardContent>
  </Card>
);

export default function TantraSadhanaPage() {
  const introSection = tantraSadhanaContent.sections.find(s => s.id === 'what-is-tantra');
  const sadhanaSection = tantraSadhanaContent.sections.find(s => s.id === 'shakti-sadhana');
  const toolsSection = tantraSadhanaContent.sections.find(s => s.id === 'sacred-tools');
  const goddessesSection = tantraSadhanaContent.sections.find(s => s.id === 'goddess-forms');
  const philosophySection = tantraSadhanaContent.sections.find(s => s.id === 'tantric-philosophy');

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/tantra-sadhana`,
    "keywords": metadata.keywords?.join(", "),
    "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`
    },
    "mainEntity": {
        "@type": "Article", // The page content can be considered an article on Tantra
        "headline": pageTitle,
        "description": pageDescription,
        "image": ogImageUrl,
        "author": {
          "@type": "Organization",
          "name": "Shakti Darshan"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Shakti Darshan",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/logo.png`
          }
        },
        // "datePublished": "YYYY-MM-DD", // Add a publication date if applicable
        // "dateModified": "YYYY-MM-DD"  // Add a modification date if applicable
      }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 py-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl shadow-2xl border border-border/20" aria-labelledby="tantra-page-title">
          <div className="inline-flex items-center justify-center bg-primary/20 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/30">
            <Flame className="w-20 h-20 text-primary" />
          </div>
          <h1 id="tantra-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            🌺 {tantraSadhanaContent.pageTitle}
          </h1>
          <p className="text-xl md:text-2xl text-accent font-semibold max-w-2xl mx-auto mb-6">
            Awaken the living power of Shakti within.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Tantra is not just a spiritual tradition—it is a living science of Divine Energy. Rooted in reverence for the Goddess (Devi) as the Supreme Reality, it provides a profound path for inner transformation, liberation, and union with the cosmos through Shakti Sādhana.
          </p>
        </header>

        <div className="space-y-16">
          {introSection && (
            <SectionCard 
              icon={BookOpen} 
              title="🔱 1. What is Tantra?" 
              id="what-is-tantra"
            >
              <p className="text-lg text-accent font-semibold mb-4">The universe is sacred. The body is divine. Energy is the key.</p>
              <ul className="space-y-3 text-md lg:text-lg text-foreground/90 leading-relaxed">
                <li><strong>Definition:</strong> {introSection.content?.[0] || "Tantra is an ancient spiritual path that recognizes the Divine in all aspects of life—body, senses, nature, and consciousness."}</li>
                <li><strong>Shakta Viewpoint:</strong> {introSection.content?.[1] || "The Goddess is both immanent (within all) and transcendent (beyond all). Tantra celebrates her presence in every vibration, sensation, and form."}</li>
              </ul>
              {introSection.key_principles && (
                <>
                  <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Key Insights:</h3>
                  <ul className="list-none space-y-2 text-md lg:text-lg text-foreground/80 pl-2">
                    {introSection.key_principles.map((principle, idx) => {
                      let icon = "🌌";
                      if (idx === 1) icon = "🕉️";
                      if (idx === 2) icon = "🧿";
                      return <li key={idx} className="flex items-start"><span className="mr-2 text-xl">{icon}</span> {principle}</li>;
                    })}
                  </ul>
                </>
              )}
            </SectionCard>
          )}

          {sadhanaSection && (
            <SectionCard 
              icon={Sparkles} 
              title="💫 2. Shakti Sādhana – A Journey Inward" 
              id="shakti-sadhana"
            >
              <p className="text-lg text-accent font-semibold mb-4">Invoke, awaken, and unite with the inner Goddess.</p>
              <p className="text-md lg:text-lg text-foreground/90 leading-relaxed mb-6">
                This is the core Tantric practice—Shakti Sādhana, or the conscious discipline of engaging with the Divine Feminine within. {sadhanaSection.content?.[0]}
              </p>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-4">✨ Four-Step Path of Sādhana:</h3>
              {sadhanaSection.steps && sadhanaSection.steps.length > 0 ? (
                <div className="space-y-4">
                  {sadhanaSection.steps.map((step, idx) => (
                    <Card key={idx} className="bg-card/50 border-secondary/30 shadow-md">
                      <CardHeader>
                        <CardTitle className="text-lg text-secondary">{step.step.startsWith(String(idx+1)) ? step.step : `${idx + 1}. ${step.step}`}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-md text-foreground/80">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Details on the four-step path are being compiled.</p>
              )}
            </SectionCard>
          )}

          {toolsSection && toolsSection.items && (
            <SectionCard 
              icon={Shapes} 
              title="🕉️ 3. Sacred Tools of Tantra" 
              id="sacred-tools"
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px] text-lg text-secondary">Tool</TableHead>
                    <TableHead className="text-lg text-secondary">Essence</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {toolsSection.items.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-semibold text-md text-primary">{item.name}</TableCell>
                      <TableCell className="text-md text-foreground/90">{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </SectionCard>
          )}
          
          {goddessesSection && goddessesSection.devis && (
             <SectionCard 
              icon={Users2} 
              title="🕯️ 4. Tantric Goddesses – Divine Forms of Energy" 
              id="tantric-goddesses"
             >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {goddessesSection.devis.map((devi, idx) => (
                  <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl text-accent">{devi.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-md text-foreground/80">{devi.aspect}</p>
                      <div className="mt-3 p-3 bg-muted/30 rounded text-center text-sm text-muted-foreground">
                         <Image src="https://placehold.co/300x200.png" alt={`${devi.name} - Tantric Goddess placeholder image`} width={300} height={200} className="mx-auto rounded" data-ai-hint={`${devi.name.toLowerCase()} tantric goddess divine energy`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </SectionCard>
          )}

          {philosophySection && (
            <SectionCard icon={Brain} title="🧘 5. Tantric Philosophy: Union of Shiva & Shakti" id="tantric-philosophy">
              {philosophySection.quote && (
                <blockquote className="my-6 p-5 border-l-4 border-accent bg-accent/10 rounded-r-lg shadow-md">
                  <p className="text-xl lg:text-2xl italic text-accent-foreground/90 font-serif">“{philosophySection.quote.text}”</p>
                </blockquote>
              )}
              <p className="text-md lg:text-lg text-foreground/90 leading-relaxed mb-4">
                Tantra reveals that true spiritual realization emerges from the union of:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-md lg:text-lg text-foreground/80 pl-4 mb-4">
                <li><strong>Shiva</strong> – Stillness, Awareness, Consciousness</li>
                <li><strong>Shakti</strong> – Movement, Power, Creation</li>
              </ul>
              <p className="text-md lg:text-lg text-foreground/90 leading-relaxed">
                Their union is not external—it is within you. Liberation (moksha) lies in realizing and harmonizing both.
              </p>
            </SectionCard>
          )}
          
          <SectionCard icon={Heart} title="🌺 6. Begin Your Journey" id="begin-journey">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              Tantra and Shakti Sādhana invite you to explore the Divine Mother not outside—but within your being.
            </p>
             <blockquote className="my-6 p-5 border-l-4 border-primary bg-primary/10 rounded-r-lg shadow-md">
              <p className="text-xl italic text-primary-foreground/90 font-serif">🪔 "The Goddess is not a concept—She is the power throbbing in your breath."</p>
            </blockquote>
            <p className="text-md lg:text-lg text-foreground/80 leading-relaxed mb-8">
              With devotion, discipline, and wisdom, awaken the inner flame and walk the sacred path where the body becomes a temple, and the soul dances with the cosmos.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg w-full sm:w-auto">
                <Link href="/mahavidyas">
                  <Users className="w-5 h-5 mr-2" /> Explore Das Mahavidyas
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 shadow-md hover:shadow-lg w-full sm:w-auto">
                <Link href="/philosophy#tantra-feminine-energy"> 
                  <Flame className="w-5 h-5 mr-2" /> Learn Kundalini Practices
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-md hover:shadow-lg w-full sm:w-auto">
                <Link href="#sacred-tools">
                  <CircleDotDashed className="w-5 h-5 mr-2" /> View Sacred Yantras
                </Link>
              </Button>
            </div>
          </SectionCard>
        </div>
      </div>
    </>
  );
}
