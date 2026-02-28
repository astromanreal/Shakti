
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Twitter, Instagram, Github, Linkedin, MessageSquare, PenSquare, ArrowRight, Users2 as Users } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Contact Shakti Darshan - Connect with Our Team";
const pageDescription = "Get in touch with the Shakti Darshan team. Whether you have questions, feedback, or collaboration ideas about Maa Adi Shakti, the Divine Feminine, or Sanatan Dharma, we'd love to hear from you.";
const ogImageUrl = `${siteUrl}/og-images/contact-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["Contact Shakti Darshan", "get in touch", "support", "feedback", "Shakti Darshan email", "Shakti Darshan social media", "Hindu spiritual contact", "Divine Feminine inquiries"],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/contact`,
    images: [
      {
        url: ogImageUrl, 
        width: 1200,
        height: 630,
        alt: 'Connect with the Shakti Darshan Team',
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

const contactInfo = {
  email: "astroman6569@gmail.com",
  phone: "+91 8102116569",
  socials: [
    { name: "Twitter / X", handle: "@Sathyamsarthak", url: "https://twitter.com/Sathyamsarthak", icon: Twitter },
    { name: "Instagram", handle: "@srishikharji", url: "https://instagram.com/srishikharji", icon: Instagram },
    { name: "GitHub", handle: "astromanreal", url: "https://github.com/astromanreal", icon: Github },
    { name: "LinkedIn", handle: "Sathyam Sarthak", url: "https://www.linkedin.com/in/sathyamsarthak/", icon: Linkedin }, 
  ],
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/contact`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/contact`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-16" aria-labelledby="contact-page-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <MessageSquare className="w-16 h-16 text-primary" />
          </div>
          <h1 id="contact-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            Connect With Us
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            We're thrilled to hear from you! Whether you have questions, feedback, or just want to say hello, here’s how you can reach out.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <Card className="shadow-xl rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card via-background to-muted/30 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.02]">
            <CardHeader className="bg-primary/5 p-6">
              <CardTitle className="text-2xl sm:text-3xl text-primary flex items-center gap-3 tracking-tight">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8" /> Direct Lines
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-foreground/70 pt-1">
                For inquiries, support, or direct communication.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4 group transition-colors p-3 rounded-lg hover:bg-muted/50">
                <Mail className="w-7 h-7 text-secondary flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Email Us</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-accent hover:text-accent-foreground hover:underline text-base sm:text-lg break-all font-medium transition-colors duration-200"
                    aria-label={`Email us at ${contactInfo.email}`}
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Best for detailed inquiries &amp; collaborations.</p>
                </div>
              </div>
              <Separator className="bg-border/50"/>
              <div className="flex items-start gap-4 group transition-colors p-3 rounded-lg hover:bg-muted/50">
                <Phone className="w-7 h-7 text-secondary flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Call Us</h3>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} 
                    className="text-accent hover:text-accent-foreground hover:underline text-base sm:text-lg font-medium transition-colors duration-200"
                    aria-label={`Call us at ${contactInfo.phone}`}
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">For urgent matters during business hours.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl rounded-2xl border-2 border-secondary/20 bg-gradient-to-bl from-card via-background to-muted/30 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.02]">
            <CardHeader className="bg-secondary/5 p-6">
              <CardTitle className="text-2xl sm:text-3xl text-secondary flex items-center gap-3 tracking-tight">
                <Users className="w-7 h-7 sm:w-8 sm:h-8" /> Connect Online
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-foreground/70 pt-1">
                Follow Shakti Darshan and engage with our community.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              {contactInfo.socials.map((social) => (
                <Link 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  aria-label={`Connect with us on ${social.name}`}
                >
                  <social.icon className="w-8 h-8 text-primary flex-shrink-0 group-hover:scale-110 group-hover:text-accent transition-all" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{social.name}</h3>
                    <p className="text-accent group-hover:underline text-sm sm:text-base font-medium">
                      {social.handle}
                    </p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-16 p-8 sm:p-10 bg-gradient-to-r from-accent/5 via-background to-accent/10 rounded-2xl shadow-2xl border-2 border-accent/30 text-center" aria-labelledby="feedback-title">
          <div className="inline-flex items-center justify-center bg-accent/20 p-3.5 rounded-full mb-6 ring-4 ring-accent/30">
            <PenSquare className="w-12 h-12 text-accent" />
          </div>
          <CardTitle id="feedback-title" className="text-3xl sm:text-4xl font-bold text-accent mb-5 tracking-tight">We Value Your Voice</CardTitle>
          <CardDescription className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            Your insights, suggestions, and feedback are invaluable to us. They help us grow and refine the Shakti Darshan experience for everyone.
          </CardDescription>
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-accent"
            aria-label="Share your thoughts via email"
          >
            <Link href={`mailto:${contactInfo.email}?subject=Feedback%20for%20Shakti%20Darshan`}>
              Share Your Thoughts <ArrowRight className="w-6 h-6 ml-2.5" />
            </Link>
          </Button>
        </Card>
      </div>
    </>
  );
}
