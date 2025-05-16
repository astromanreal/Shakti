
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Flame, 
  BookOpen, 
  Sparkles, 
  Shapes, 
  Users2, 
  Brain, 
  Heart 
} from 'lucide-react';
import type { Metadata } from 'next';

const pageTitle = "Tantra & Shakti Sadhana - The Path of Divine Energy";
const pageDescription = "Delve into Tantric practices, Kundalini, and inner alchemy for spiritual transformation. Explore the essence of Tantra, its link with Devi, and the path of Shakti Sadhana.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Tantra", "Shakti Sadhana", "Kundalini", "Divine Energy", "spiritual practices", 
    "Tantric worship", "Mantra", "Yantra", "Mudra", "Kali", "Tripura Sundari", "Chhinnamasta", "Bhuvaneshwari"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/tantra-sadhana',
    images: [
      {
        url: `https://picsum.photos/seed/tantra-shakti-sadhana/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'Tantra and Shakti Sadhana symbols',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://picsum.photos/seed/tantra-shakti-sadhana/1200/630`],
  },
};


const tantraSadhanaContent = {
  pageTitle: "The Path of Divine Energy",
  introduction: {
    overview: "Tantra is the sacred spiritual science that reveres Shakti—the Divine Feminine—as the source of all power, transformation, and liberation. Shakti Sādhana is the inner discipline that seeks to awaken this cosmic energy within.",
    theme: "This page explores the essence of Tantra, its link with the Goddess (Devi), and the transformational path of spiritual discipline through mantra, yantra, and inner realization."
  },
  sections: [
    {
      id: "what-is-tantra",
      title: "What is Tantra?",
      icon: BookOpen,
      content: [
        "Tantra is a vast and ancient system of spiritual knowledge rooted in the idea that the divine is immanent—present in every aspect of the universe.",
        "Unlike purely renunciatory paths, Tantra embraces the body, senses, and energy as tools for spiritual awakening.",
        "In Shakta Tantra, the Goddess (Devi) is worshipped as the supreme reality—both the manifest and the unmanifest."
      ],
      key_principles: [
        "Divinity resides in everything, including the physical body.",
        "Union of Shiva (consciousness) and Shakti (energy) is the key to liberation.",
        "Mantra, mudra, yantra, and visualization are tools for transformation."
      ]
    },
    {
      id: "shakti-sadhana",
      title: "Spiritual Discipline: The Path of the Divine Mother",
      icon: Sparkles,
      content: [
        "Shakti Sādhana is the spiritual discipline of invoking, awakening, and uniting with the inner Shakti—the latent power within every being.",
        "It includes practices of mantra japa (repetition), dhyana (meditation), rituals, and inner contemplation on the Devi as Kundalini Shakti."
      ],
      steps: [
        {
          step: "1. Mantra Initiation (Dīkṣā)",
          description: "Receiving a sacred mantra of the Goddess from a guru to invoke Her energy with devotion and precision."
        },
        {
          step: "2. Daily Japa and Meditation",
          description: "Chanting the mantra regularly with focus and love to awaken Shakti and purify the mind."
        },
        {
          step: "3. Visualization and Yantra Worship",
          description: "Using sacred diagrams (yantras) like Sri Chakra to meditate on the divine form of Devi."
        },
        {
          step: "4. Inner Realization (Atma-Shakti Bodha)",
          description: "Realizing the identity of one’s Self with the Supreme Shakti through devotion and deep inner silence."
        }
      ]
    },
    {
      id: "sacred-tools",
      title: "Sacred Tools in Tantra",
      icon: Shapes,
      items: [
        {
          name: "Mantra",
          description: "Vibrational formulae that invoke the presence and power of Shakti (e.g., Aim Hreem Kleem, Durga Mantra, Kali Beejas)."
        },
        {
          name: "Yantra",
          description: "Geometric symbols representing divine forms, used as visual focal points in meditation (e.g., Sri Yantra, Kali Yantra)."
        },
        {
          name: "Mudra",
          description: "Sacred hand gestures that channel and balance pranic energy within the body during ritual or meditation."
        },
        {
          name: "Kundalini",
          description: "The dormant cosmic energy at the base of the spine, awakened through sādhana to rise through the chakras and unite with Shiva."
        }
      ]
    },
    {
      id: "goddess-forms",
      title: "Goddess Forms in Tantric Worship",
      icon: Users2,
      devis: [
        {
          name: "Kali",
          aspect: "Fierce time-transformer, destroyer of ego, liberator from bondage"
        },
        {
          name: "Tripura Sundari",
          aspect: "Goddess of beauty, bliss, and transcendental wisdom; center of Sri Vidya"
        },
        {
          name: "Chhinnamasta",
          aspect: "Self-decapitated Devi symbolizing ego-death and self-sacrifice"
        },
        {
          name: "Bhuvaneshwari",
          aspect: "Queen of the Universe, the cosmic expanse"
        }
      ]
    },
    {
      id: "tantric-philosophy",
      title: "Tantric Philosophy: The Divine Union",
      icon: Brain,
      summary: "Tantra teaches that true spiritual realization arises from the inner union of Shiva (consciousness) and Shakti (power). Neither is complete without the other. In human terms, this symbolizes the integration of intellect and emotion, awareness and action, stillness and energy.",
      quote: {
        text: "Without Shakti, Shiva is inert; without Shiva, Shakti is blind. Together they dance the rhythm of the cosmos.",
        source: "Tantric Wisdom"
      }
    }
  ],
  closing: {
    message: "These spiritual paths offer a sacred, direct, and transformative way to connect with the Divine Mother. Through devotion, mantra, inner discipline, and wisdom, the practitioner awakens the dormant energy within and becomes one with the Universal Shakti.",
    invitation: "Begin your journey with love and reverence — the Goddess already resides within you.",
    icon: Heart,
  }
};

export default function TantraSadhanaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
          <Flame className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
          {tantraSadhanaContent.pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-2">
          {tantraSadhanaContent.introduction.overview}
        </p>
        <p className="text-md md:text-lg text-foreground/70 max-w-2xl mx-auto">
          {tantraSadhanaContent.introduction.theme}
        </p>
      </header>

      <div className="space-y-12">
        {tantraSadhanaContent.sections.map((section) => (
          <Card key={section.id} className="shadow-xl rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-card via-background to-muted/20 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01]">
            <CardHeader className="bg-secondary/5 p-6 sm:p-8">
              <div className="flex items-start md:items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full ring-2 ring-secondary/30 flex-shrink-0">
                  <section.icon className="w-8 h-8 sm:w-10 sm:w-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
                  {section.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
                <div className="w-full">
                    {section.content && section.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-md lg:text-lg text-foreground/90 leading-relaxed mb-4">{paragraph}</p>
                    ))}
                    
                    {section.key_principles && (
                        <>
                            <h3 className="text-xl font-semibold text-primary mt-4 mb-2">Key Principles:</h3>
                            <ul className="list-disc list-inside space-y-1 text-md text-foreground/80">
                                {section.key_principles.map((principle, kpIdx) => <li key={kpIdx}>{principle}</li>)}
                            </ul>
                        </>
                    )}

                    {section.steps && (
                        <>
                            <h3 className="text-xl font-semibold text-primary mt-4 mb-3">Path of Sādhana:</h3>
                            <Accordion type="single" collapsible className="w-full">
                                {section.steps.map((step, sIdx) => (
                                <AccordionItem value={`step-${sIdx}`} key={sIdx} className="border-b border-border/30">
                                    <AccordionTrigger className="text-lg hover:text-accent font-medium py-3 text-left">
                                        {step.step}
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-1 pb-3 text-md text-foreground/80">
                                    {step.description}
                                    </AccordionContent>
                                </AccordionItem>
                                ))}
                            </Accordion>
                        </>
                    )}

                    {section.items && (
                        <>
                            <div className="grid sm:grid-cols-2 gap-4 mt-2">
                                {section.items.map((item, iIdx) => (
                                    <div key={iIdx} className="p-4 bg-muted/50 rounded-lg border border-border/30 shadow-sm">
                                        <h4 className="text-lg font-semibold text-accent mb-1">{item.name}</h4>
                                        <p className="text-sm text-foreground/80">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {section.devis && (
                       <>
                         <div className="space-y-3 mt-2">
                            {section.devis.map((devi, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-md border border-transparent hover:border-accent/50 transition-colors">
                                    <Badge variant="secondary" className="text-sm mt-1 whitespace-nowrap">{devi.name}</Badge>
                                    <p className="text-md text-foreground/80">{devi.aspect}</p>
                                </div>
                            ))}
                         </div>
                       </>
                    )}
                    
                    {section.summary && (
                        <p className="text-md lg:text-lg text-foreground/90 leading-relaxed mt-4">{section.summary}</p>
                    )}
                    {section.quote && (
                        <blockquote className="mt-6 p-4 border-l-4 border-accent bg-accent/10 rounded-r-lg shadow">
                            <p className="text-md italic text-accent-foreground/90 font-serif">"{section.quote.text}"</p>
                            <footer className="mt-2 text-sm text-accent-foreground/70">- {section.quote.source}</footer>
                        </blockquote>
                    )}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Separator className="my-16 bg-border/60" />

      <Card className="mt-12 p-8 sm:p-10 bg-gradient-to-r from-primary/5 via-background to-primary/10 rounded-2xl shadow-2xl border-2 border-primary/30 text-center">
        <div className="inline-flex items-center justify-center bg-primary/20 p-3.5 rounded-full mb-6 ring-4 ring-primary/30">
          <tantraSadhanaContent.closing.icon className="w-12 h-12 text-primary" />
        </div>
        <CardDescription className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto mb-4">
          {tantraSadhanaContent.closing.message}
        </CardDescription>
        <p className="text-md font-semibold text-accent">
            {tantraSadhanaContent.closing.invitation}
        </p>
      </Card>
    </div>
  );
}
