
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Atom, Zap, Layers, BookOpen, Droplets, AlignCenter } from 'lucide-react'; 
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

const pageTitle = "Feminine Divinity in Indian Philosophy";
const pageDescription = "Delve into the profound philosophical concepts of Shakti as the cosmic energy, exploring Shaktism, Tantra, and the dynamic interplay of Prakriti and Purusha within Sanatana Dharma.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Shakti Philosophy", "Shaktism", "Tantra", "Prakriti Purusha", "Divine Feminine philosophy", 
    "Indian philosophy", "Cosmic Energy", "Advaita", "Kundalini", "Sanatana Dharma"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/philosophy',
    images: [
      {
        url: `https://picsum.photos/seed/shakti-philosophy/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'Symbolic representation of Shakti Philosophy',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://picsum.photos/seed/shakti-philosophy/1200/630`],
  },
};

const philosophyContent = {
  pageTitle: "Feminine Divinity in Indian Philosophy",
  pageDescription: "Delve into the profound philosophical concepts of Shakti as the cosmic energy, exploring Shaktism, Tantra, and the dynamic interplay of Prakriti and Purusha within Sanatana Dharma.",
  sections: [
    {
      icon: Atom,
      title: "Shakti as Cosmic Energy (Shaktism)",
      content: [
        {
          type: "paragraph",
          text: "Shakti is the primordial cosmic energy, the source of all creation, existence, and change. It's dynamic, active, and manifests as the divine feminine. In Shakta philosophy, Shakti is the supreme power and the essence of all deities and energies."
        },
        {
          type: "subheading",
          text: "Core Belief:"
        },
        {
          type: "paragraph",
          text: "Without Shakti, Shiva is inert—representing potential without expression. With Shakti, Shiva manifests as the universe."
        },
        {
          type: "quote",
          sanskrit: "शिवः शक्त्यायुक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि॥",
          translation: "Shiva is able to act only when united with Shakti; without her, even he has no power to stir. (Soundarya Lahari, Verse 1)"
        },
        {
          type: "paragraph",
          text: "This idea reflects the Advaita-based non-duality in Shaktism where Shakti and Shiva are inseparable—consciousness and energy coexisting as one."
        }
      ]
    },
    {
      icon: Zap,
      title: "Tantra and Reverence of Feminine Energy",
      content: [
        {
          type: "paragraph",
          text: "Tantra is an esoteric spiritual tradition venerating the feminine as the ultimate source of power and liberation. Shakta Tantras view the Divine Mother as immanent and transcendent, manifest in creation and consciousness."
        },
        {
          type: "subheading",
          text: "Core Belief & Practices:"
        },
        {
          type: "paragraph",
          text: "The human body is a microcosm of the cosmos, with Kundalini (coiled Shakti) at its base, rising through chakras to unite with Shiva in the crown center. Tantra emphasizes balance, inner alchemy, mantra, yantra, and Devi worship to awaken inner Shakti and attain moksha (liberation)."
        },
        {
          type: "symbols",
          items: [
            { name: "Yoni-Linga", meaning: "Union of feminine and masculine principles" },
            { name: "Sri Chakra", meaning: "Cosmic mandala of the goddess (Tripura Sundari) representing creation and dissolution" }
          ]
        }
      ]
    },
    {
      icon: Layers,
      title: "Prakriti & Purusha: The Feminine-Masculine Dynamic",
      content: [
        {
          type: "paragraph",
          text: "In Samkhya and Yogic philosophy, the universe arises from the interaction of Prakriti (Nature, the feminine principle) and Purusha (Pure Consciousness, the masculine principle)."
        },
        {
          type: "subheading",
          text: "Core Belief:"
        },
        {
          type: "paragraph",
          text: "Prakriti is Shakti—the ever-evolving, dynamic, creative force. Purusha is static, the silent witness. Liberation comes from realizing the distinction and union of these forces."
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Prakriti: Manifest universe, mind, senses, emotions, nature.",
            "Purusha: Conscious awareness beyond attributes (nirguna)."
          ]
        },
        {
          type: "subheading",
          text: "Interpretation in Shaktism:"
        },
        {
          type: "paragraph",
          text: "Shaktism elevates Prakriti (Shakti) to the highest status, viewing the Goddess not as subordinate but as the embodiment of Divinity itself—the power behind manifestation and transcendence."
        }
      ]
    }
  ],
  conclusion: {
    title: "The All-Encompassing Divine Feminine",
    text: "The philosophical exploration of Shakti reveals her as the fundamental reality—the immanent power driving the cosmos and the transcendent consciousness that is the ultimate goal. Her understanding offers a path to holistic spiritual realization.",
    icon: Droplets,
  }
};

export default function PhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
          <Brain className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
          {philosophyContent.pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          {philosophyContent.pageDescription}
        </p>
      </header>

      <div className="space-y-12">
        {philosophyContent.sections.map((section, index) => (
          <Card key={index} className="shadow-xl rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-card via-background to-muted/20 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01]">
            <CardHeader className="bg-secondary/5 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full ring-2 ring-secondary/30">
                  <section.icon className="w-8 h-8 sm:w-10 sm:w-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
                  {section.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-5">
                {section.content.map((item, itemIdx) => {
                  if (item.type === "paragraph") {
                    return <p key={itemIdx} className="text-md lg:text-lg text-foreground/90 leading-relaxed">{item.text}</p>;
                  }
                  if (item.type === "subheading") {
                    return <h3 key={itemIdx} className="text-xl font-semibold text-primary mt-3 mb-1">{item.text}</h3>;
                  }
                  if (item.type === "quote") {
                    return (
                      <blockquote key={itemIdx} className="my-4 p-4 border-l-4 border-accent bg-accent/10 rounded-r-lg shadow">
                        <p className="text-md italic text-accent-foreground/90 font-serif whitespace-pre-line">"{item.sanskrit}"</p>
                        <footer className="mt-2 text-sm text-accent-foreground/70">- {item.translation}</footer>
                      </blockquote>
                    );
                  }
                  if (item.type === "symbols") {
                    return (
                      <div key={itemIdx} className="space-y-2 mt-2">
                        {item.items.map(symbol => (
                           <Badge key={symbol.name} variant="outline" className="text-md mr-2 mb-2 p-2 shadow-sm border-primary/50 bg-primary/5 text-primary-foreground">
                             <strong>{symbol.name}:</strong> {symbol.meaning}
                           </Badge>
                        ))}
                      </div>
                    );
                  }
                  if (item.type === "list") {
                     return (
                        <div key={itemIdx} className="mt-2">
                            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                            <ul className="list-disc list-inside space-y-1 text-md text-foreground/80">
                                {item.items.map((listItem, liIdx) => <li key={liIdx}>{listItem}</li>)}
                            </ul>
                        </div>
                     );
                  }
                  return null;
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Separator className="my-16 bg-border/60" />

      <Card className="mt-12 p-8 sm:p-10 bg-gradient-to-r from-primary/5 via-background to-primary/10 rounded-2xl shadow-2xl border-2 border-primary/30 text-center">
        <div className="inline-flex items-center justify-center bg-primary/20 p-3.5 rounded-full mb-6 ring-4 ring-primary/30">
          <philosophyContent.conclusion.icon className="w-12 h-12 text-primary" />
        </div>
        <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-5">{philosophyContent.conclusion.title}</CardTitle>
        <CardDescription className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
          {philosophyContent.conclusion.text}
        </CardDescription>
      </Card>
    </div>
  );
}
