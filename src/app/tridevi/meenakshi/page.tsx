import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import type { Metadata } from 'next';

import { allMajorFormsDetailedData } from '@/data/all-major-forms-detailed-data';
import { 
    Heart, Eye, Zap, BookOpen, Users, CalendarDays, Sparkles, Atom, Layers, Landmark, Palette, MessageSquare, ArrowLeftCircle, Shield, Star, Brain, Link as LinkIcon, BookCopy, Award, ExternalLink, Sword, ShieldCheck, Users2, Gem, Gift, Flame
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { OtherMajorFormDetail } from '@/types';


const goddess: OtherMajorFormDetail | undefined = allMajorFormsDetailedData.find((g) => g.id === 'meenakshi');
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';

const pageTitle = goddess ? `${goddess.name} - ${goddess.title} | Shakti Darshan` : "Maa Meenakshi | Shakti Darshan";
const pageDescription = goddess ? `${goddess.description?.substring(0, 155)}... Explore her iconography, warrior spirit, and divine marriage.` : "Explore details about Maa Meenakshi, the warrior queen of Madurai.";
const imageUrl = goddess?.detailImageUrl || goddess?.imageUrl || `${siteUrl}/og-images/tridevi/forms/meenakshi.jpg`;

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    keywords: ["Meenakshi", "Madurai", "Sundareswarar", "Warrior Goddess", "Fish-Eyed Goddess", "Tamil Nadu"],
    alternates: {
        canonical: '/tridevi/forms/meenakshi',
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: `${siteUrl}/tridevi/forms/meenakshi`,
        images: [{ url: imageUrl, width: 1200, height: 630, alt: `Divine image of ${goddess?.name}` }],
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        images: [imageUrl],
    },
};

const DetailSectionCard: React.FC<{ title: string, icon?: React.ElementType, children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
    <Card className="shadow-lg rounded-xl border border-border/40 overflow-hidden bg-card/70 backdrop-blur-sm">
        <CardHeader className="bg-muted/20 border-b border-border/30">
            <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2.5">
                {Icon && <Icon className="w-6 h-6 text-primary/80" />}
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="p-5 md:p-6 space-y-3 text-sm md:text-base text-foreground/90 leading-relaxed">
            {children}
        </CardContent>
    </Card>
);

export default function MeenakshiPage() {
    if (!goddess) {
        return (
            <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
                <Card className="w-full max-w-lg text-center shadow-xl p-8 bg-destructive/5 border-destructive">
                    <CardTitle className="text-3xl font-bold text-destructive mb-4">Form Not Found</CardTitle>
                    <CardDescription className="text-lg text-foreground/80 mb-6">
                        The divine form of Maa Meenakshi is not currently detailed.
                    </CardDescription>
                    <Button asChild variant="outline">
                        <Link href="/tridevi">Back to Major Forms Overview</Link>
                    </Button>
                </Card>
            </div>
        );
    }
    
    const HeroIcon = ShieldCheck;

    return (
        <div className="container mx-auto px-2 sm:px-4 py-8 md:py-10">
             <Button asChild variant="outline" className="mb-6 group text-sm">
                <Link href="/tridevi">
                    <ArrowLeftCircle className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                    Back to Major Forms
                </Link>
            </Button>
            
            <header className="text-center mb-10 md:mb-12 py-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl shadow-lg border border-primary/20">
              <div className={`inline-flex items-center justify-center bg-primary/20 p-3.5 rounded-full mb-5 ring-4 ring-primary/30`}>
                <HeroIcon className="w-14 h-14 text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-md tracking-tight">{goddess.name}</h1>
              <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">{goddess.title}</p>
              {goddess.meaningOfName && <p className="text-sm text-muted-foreground italic mb-2">&ldquo;{goddess.meaningOfName}&rdquo;</p>}
              <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto px-2">
                {goddess.description || goddess.shortDescription}
              </p>
            </header>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-20 space-y-6">
                     <Card className="shadow-xl rounded-xl border-2 border-primary/30 overflow-hidden">
                        <CardHeader className="p-0">
                          <Image
                            src={goddess.detailImageUrl || goddess.imageUrl || "https://placehold.co/600x700.png"}
                            alt={`Sacred image of ${goddess.name}`}
                            width={600}
                            height={700}
                            className="rounded-t-lg object-cover object-top w-full h-auto max-h-[300px] lg:max-h-[400px]"
                            data-ai-hint={goddess.detailImageHint || goddess.imageHint || `${goddess.id} divine form`}
                            priority
                          />
                        </CardHeader>
                        <CardContent className="p-5 bg-primary/5">
                            {goddess.coreAttributes && goddess.coreAttributes.length > 0 && (
                                <>
                                <h3 className="text-lg font-semibold mb-3 text-primary flex items-center"><Star className="w-5 h-5 mr-2"/>Core Attributes</h3>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {goddess.coreAttributes.map(attr => <Badge key={attr} variant="secondary" className="text-xs shadow-sm">{attr}</Badge>)}
                                </div>
                                </>
                            )}
                            {goddess.keyMantras && goddess.keyMantras.length > 0 && (
                                <>
                                <h3 className="text-lg font-semibold mb-2 text-primary">Key Mantras</h3>
                                {goddess.keyMantras.map((mantra, index) => (
                                    <Badge key={index} variant="outline" className="block w-full text-left text-sm p-2.5 my-1.5 font-mono shadow-sm break-words whitespace-normal border-primary/70 bg-primary/10 text-primary-foreground hover:bg-primary/20">
                                    {mantra.sanskrit || mantra.name}
                                    </Badge>
                                ))}
                                </>
                            )}
                        </CardContent>
                    </Card>
                </div>
                
                <div className="lg:col-span-8 xl:col-span-9 space-y-6 md:space-y-8">
                     {goddess.originsAndMythology && (
                        <DetailSectionCard title="Mythology & Origins" icon={BookOpen}>
                            {Object.entries(goddess.originsAndMythology).map(([key, value]) => {
                                if (!value) return null;
                                const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                                return (
                                    <p key={key}>
                                        <strong className="text-secondary">{formattedKey}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                                    </p>
                                );
                            })}
                        </DetailSectionCard>
                    )}
                    {goddess.iconography && (
                        <DetailSectionCard title="Iconography" icon={Palette}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                {Object.entries(goddess.iconography).map(([key, value]) => {
                                    if (!value) return null;
                                    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                                    return (
                                        <div key={key}>
                                            <strong className="text-secondary">{formattedKey}:</strong>
                                            {Array.isArray(value) 
                                                ? <div className="flex flex-wrap gap-1.5 mt-1">{value.map(item => <Badge key={item} variant="outline" className="text-xs">{item}</Badge>)}</div>
                                                : <span className="ml-2">{value}</span>
                                            }
                                        </div>
                                    );
                                })}
                            </div>
                        </DetailSectionCard>
                    )}
                </div>
            </div>
        </div>
    );
}
