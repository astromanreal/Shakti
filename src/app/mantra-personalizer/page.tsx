
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wand2, Sparkles, Loader2, AlertCircle } from 'lucide-react';
// Placeholder for a form component if we use react-hook-form later
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';
const pageTitle = "Mantra Personalizer - AI-Powered Stotras & Mantras | Shakti Darshan";
const pageDescription = "Generate personalized stotras and mantras with our AI tool. Select a deity, express your intention, and receive a unique chant tailored for your spiritual practice and connection with the Divine Feminine.";
const ogImageUrl = `${siteUrl}/og-images/mantra-personalizer-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Mantra Personalizer", "AI Mantra Generator", "Custom Stotras", "Personalized Chants", 
    "Generative AI Spirituality", "Shakti Mantras AI", "Deity Specific Mantras", "Maa Adi Shakti"
  ],
  alternates: {
    canonical: '/mantra-personalizer',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/mantra-personalizer`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'AI Mantra Personalizer Tool - Shakti Darshan' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

// Placeholder for deities - this would ideally come from a shared data source
const deities = [
  { id: "durga", name: "Maa Durga" },
  { id: "lakshmi", name: "Maa Lakshmi" },
  { id: "saraswati", name: "Maa Saraswati" },
  { id: "kali", name: "Maa Kali" },
  { id: "parvati", name: "Maa Parvati" },
  { id: "lalita", name: "Lalita Tripurasundari" },
  { id: "general_shakti", name: "Adi Shakti (General)" },
];

export default function MantraPersonalizerPage() {
  // Placeholder state and handlers - to be implemented with actual form logic and AI flow call
  // const [selectedDeity, setSelectedDeity] = useState('');
  // const [userIntent, setUserIntent] = useState('');
  // const [generatedMantra, setGeneratedMantra] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setError('');
  //   setGeneratedMantra('');
  //   // Call Genkit flow here
  //   // try {
  //   //   const result = await personalizeMantraFlow({ deity: selectedDeity, intent: userIntent });
  //   //   setGeneratedMantra(result.mantra);
  //   // } catch (e) {
  //   //   setError('Failed to generate mantra. Please try again.');
  //   // }
  //   setIsLoading(false);
  // };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/mantra-personalizer`,
    "potentialAction": {
        "@type": "CreateAction",
        "target": `${siteUrl}/mantra-personalizer#generate` // Points to where action happens
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
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-16" aria-labelledby="mantra-personalizer-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <Wand2 className="w-16 h-16 text-primary" />
          </div>
          <h1 id="mantra-personalizer-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            AI Mantra & Stotra Personalizer
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Craft a unique chant aligned with your spiritual focus. Our AI assistant will help you generate a personalized stotra or mantra based on your chosen deity and intention.
          </p>
        </header>

        <Card className="max-w-2xl mx-auto shadow-2xl border-2 border-accent/30 bg-gradient-to-br from-card via-background to-muted/20">
          <CardHeader className="bg-accent/5 p-6">
            <CardTitle className="text-2xl sm:text-3xl text-accent flex items-center gap-3 tracking-tight">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" /> Create Your Personalized Chant
            </CardTitle>
            <CardDescription className="text-base sm:text-lg text-foreground/70 pt-1">
              Select a deity and describe your intention or prayer focus.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* This is a placeholder form. Actual implementation will use react-hook-form and Server Actions. */}
            <form /* onSubmit={handleSubmit} */ className="space-y-6">
              <div>
                <Label htmlFor="deity-select" className="text-md font-medium text-foreground">Choose Deity</Label>
                <Select /* value={selectedDeity} onValueChange={setSelectedDeity} */ name="deity" disabled>
                  <SelectTrigger id="deity-select" className="w-full mt-1.5 py-3 text-base" aria-label="Select Deity">
                    <SelectValue placeholder="Select a primary deity focus" />
                  </SelectTrigger>
                  <SelectContent>
                    {deities.map((deity) => (
                      <SelectItem key={deity.id} value={deity.id} className="text-base py-2">
                        {deity.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">The AI will consider the chosen deity's attributes.</p>
              </div>

              <div>
                <Label htmlFor="user-intent" className="text-md font-medium text-foreground">Describe Your Intention</Label>
                <Textarea
                  id="user-intent"
                  name="intent"
                  // value={userIntent}
                  // onChange={(e) => setUserIntent(e.target.value)}
                  placeholder="E.g., 'For courage and overcoming obstacles,' 'For peace and wisdom in studies,' 'Gratitude for blessings received and seeking protection for family.'"
                  className="w-full mt-1.5 min-h-[100px] text-base"
                  rows={4}
                  disabled
                />
                <p className="text-xs text-muted-foreground mt-1">Be specific for a more tailored result. (Min. 10 words recommended)</p>
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-7 rounded-xl shadow-md" disabled /* disabled={isLoading || !selectedDeity || userIntent.length < 10} */>
                {/* {isLoading ? (
                  <Loader2 className="w-6 h-6 mr-2.5 animate-spin" />
                ) : (
                  <Sparkles className="w-6 h-6 mr-2.5" />
                )}
                Generate Chant */}
                <Sparkles className="w-6 h-6 mr-2.5" />
                Generate Chant (Feature Coming Soon)
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Placeholder for displaying results, errors, or loading states */}
        {/* {isLoading && (
          <div className="mt-8 text-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
            <p className="text-lg text-foreground/80 mt-3">Generating your sacred chant...</p>
          </div>
        )}

        {error && (
          <Card className="mt-8 bg-destructive/10 border-destructive text-destructive p-4">
            <CardHeader className="p-0">
              <CardTitle className="flex items-center gap-2 text-lg"><AlertCircle className="w-5 h-5"/> Generation Failed</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-2 text-sm">
              {error}
            </CardContent>
          </Card>
        )}

        {generatedMantra && !isLoading && (
          <Card className="mt-10 shadow-xl border-2 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Wand2 className="w-7 h-7"/> Your Personalized Sacred Chant
              </CardTitle>
            </CardHeader>
            <CardContent className="whitespace-pre-line text-lg text-foreground/90 font-serif p-6 bg-background rounded-b-xl">
              {generatedMantra}
            </CardContent>
            <CardFooter className="p-4 border-t border-primary/20">
                <p className="text-xs text-muted-foreground">
                    This chant was generated by AI. Review and use with discernment. You can refine your input and try again.
                </p>
            </CardFooter>
          </Card>
        )} */}
         <Card className="mt-10 shadow-xl border-2 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Wand2 className="w-7 h-7"/> Personalized Sacred Chant
              </CardTitle>
            </CardHeader>
            <CardContent className="whitespace-pre-line text-lg text-foreground/90 font-serif p-6 bg-background rounded-b-xl min-h-[100px] flex items-center justify-center">
              <p className="text-muted-foreground italic">Your AI-generated chant will appear here once the feature is fully implemented.</p>
            </CardContent>
            <CardFooter className="p-4 border-t border-primary/20">
                <p className="text-xs text-muted-foreground">
                    This feature is under development. The AI-generated chant will be reviewed for spiritual appropriateness.
                </p>
            </CardFooter>
          </Card>

        <Card className="mt-16 p-8 bg-muted/30 rounded-xl shadow-lg border border-border/20 text-center" aria-labelledby="guidance-title">
          <CardTitle id="guidance-title" className="text-xl text-secondary mb-3">Important Guidance</CardTitle>
          <CardDescription className="text-sm text-foreground/75 max-w-lg mx-auto">
            While this AI tool can be a source of inspiration, traditional mantras and stotras passed down through lineages hold immense spiritual power. This tool is intended for personal reflection and exploration. Always approach sacred practices with reverence and respect. The generated chants are not substitutes for traditional scriptures or Guru-disciple transmissions.
          </CardDescription>
        </Card>
      </div>
    </>
  );
}
