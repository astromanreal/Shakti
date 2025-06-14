
import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { BookHeart, Sparkles, Users, Target, Globe } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "About Shakti Darshan - Our Mission & Vision";
const pageDescription = "Learn about Shakti Darshan, a sacred digital space dedicated to exploring the profound wisdom, diverse forms, and timeless traditions of Maa Adi Shakti, the Divine Feminine.";
const ogImageUrl = `${siteUrl}/og-images/about-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["About Shakti Darshan", "Divine Feminine project", "Maa Adi Shakti", "Hindu spirituality platform", "Our Mission", "Shakti Darshan Team"],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/about`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'About Shakti Darshan - Exploring Divine Feminine Wisdom' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/about`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/about`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-16" aria-labelledby="about-page-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <BookHeart className="w-16 h-16 text-primary" />
          </div>
          <h1 id="about-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            About Shakti Darshan
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            A sacred digital sanctuary dedicated to exploring the infinite grace, profound wisdom, and timeless traditions of Maa Adi Shakti, the Supreme Divine Feminine.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
          <Card className="shadow-xl rounded-2xl border-2 border-secondary/20 overflow-hidden">
            <CardHeader className="bg-secondary/5 p-6">
              <CardTitle className="text-2xl sm:text-3xl text-secondary flex items-center gap-3 tracking-tight">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-md text-foreground/90 leading-relaxed">
              <p>
                Shakti Darshan aims to be a comprehensive and authentic resource for seekers, devotees, and anyone curious about the multifaceted nature of the Goddess in Hindu philosophy and practice. We envision a space where ancient wisdom meets modern accessibility, fostering understanding, devotion, and personal transformation through the grace of Shakti.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl rounded-2xl border-2 border-accent/20 overflow-hidden">
            <CardHeader className="bg-accent/5 p-6">
              <CardTitle className="text-2xl sm:text-3xl text-accent flex items-center gap-3 tracking-tight">
                <Target className="w-7 h-7 sm:w-8 sm:h-8" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-md text-foreground/90 leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>To provide well-researched and accessible information on the various forms of the Divine Mother, including the Tridevi, Mahavidyas, and Shakti Peethas.</li>
                <li>To offer a library of sacred chants, mantras, and stotras with translations and explanations.</li>
                <li>To explore the philosophical underpinnings of Shaktism and Tantra.</li>
                <li>To create a space that inspires devotion and spiritual inquiry.</li>
                <li>To leverage technology, including AI, to enhance the learning and devotional experience (e.g., the upcoming Mantra Personalizer).</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-12" />

        <section className="mb-16" aria-labelledby="what-we-offer-title">
            <h2 id="what-we-offer-title" className="text-3xl font-semibold text-center mb-10 text-primary flex items-center justify-center gap-3">
                <Globe className="w-10 h-10" /> What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <CardTitle className="text-xl mb-2 text-secondary">In-Depth Knowledge</CardTitle>
                    <CardDescription>Detailed profiles of Goddesses, philosophical concepts, and sacred sites.</CardDescription>
                </Card>
                <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <CardTitle className="text-xl mb-2 text-secondary">Sacred Texts</CardTitle>
                    <CardDescription>A growing library of chants, mantras, and stotras with meanings.</CardDescription>
                </Card>
                <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <CardTitle className="text-xl mb-2 text-secondary">Spiritual Exploration</CardTitle>
                    <CardDescription>Insights into Tantra, Sadhana, and the worship of the Divine Feminine.</CardDescription>
                </Card>
            </div>
        </section>

        <Card className="mt-16 p-8 sm:p-10 bg-gradient-to-r from-primary/5 via-background to-secondary/10 rounded-2xl shadow-2xl border-2 border-primary/30 text-center" aria-labelledby="join-us-title">
          <div className="inline-flex items-center justify-center bg-primary/20 p-3.5 rounded-full mb-6 ring-4 ring-primary/30">
            <Users className="w-12 h-12 text-primary" />
          </div>
          <CardTitle id="join-us-title" className="text-3xl sm:text-4xl font-bold text-primary mb-5 tracking-tight">
            Join Us on This Sacred Journey
          </CardTitle>
          <CardDescription className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Shakti Darshan is an evolving platform. We are committed to continuously expanding and refining our content. We welcome your feedback and insights as we grow together in devotion and understanding of the Divine Mother.
          </CardDescription>
          <p className="font-mono text-xl text-secondary tracking-wider">
            ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ॐ
          </p>
        </Card>
      </div>
    </>
  );
}
