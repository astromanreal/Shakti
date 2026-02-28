
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Sparkles,
  BookHeart,
  Star,
  Award,
  NotebookText,
  Palette,
  Settings2,
  BellRing,
  BarChart3,
  HeartHandshake,
  Brain,
  Type,
  ChevronRight,
  Sun,
  Moon,
  Wand2,
  Gem
} from "lucide-react";
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';
const pageTitle = "My Spiritual Dashboard - Shakti Darshan Profile";
const pageDescription = "Track your sādhanā, curate sacred content, and personalize your spiritual journey on Shakti Darshan. Your personal space for devotion and growth with Divine Feminine wisdom.";
const ogImageUrl = `${siteUrl}/og-images/profile-dashboard-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["Spiritual Dashboard", "My Profile", "Sadhana Tracker", "Personalized Spirituality", "Shakti Darshan Account", "Divine Feminine practice", "Maa Adi Shakti sadhana"],
  alternates: {
    canonical: '/profile',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/profile`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Shakti Darshan Spiritual Profile Dashboard',
      },
    ],
    type: 'profile', // Consider 'profile' type for OG
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
  robots: { // User-specific page, might want to control indexing
    index: false, // Typically true if public profiles, false if private
    follow: true,
  }
};

const user = {
  name: "Devi Bhakta",
  spiritualTitle: "Seeker of Eternal Shakti",
  avatarUrl: "https://placehold.co/200x200.png",
  avatarAlt: "Profile avatar of Devi Bhakta",
  sadhana: {
    mantraJapa: { current: 10800, goal: 100000, unit: "recitations" },
    meditation: { current: 75, goal: 300, unit: "hours logged" },
  },
  bookmarks: {
    stotras: [
      { id: "argala-stotram", title: "Argala Stotram", deity: "Durga" },
      { id: "kanakadhara-stotram", title: "Kanakadhara Stotram", deity: "Lakshmi" },
    ],
    goddesses: [
      { slug: "durga", name: "Maa Durga" },
      { slug: "kali", name: "Maa Kali" },
    ],
    teachings: [
      { id: "tantra-philosophy", title: "Union of Shiva & Shakti" },
    ]
  }
};

const DashboardCard: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode, cardClassName?: string, titleIconClassName?: string, cardId?: string }> = ({ title, icon: Icon, children, cardClassName, titleIconClassName, cardId }) => (
  <Card id={cardId} className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm border border-border/20 rounded-xl flex flex-col", cardClassName)}>
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-primary flex items-center gap-3">
        <Icon className={cn("w-7 h-7", titleIconClassName || 'text-primary/80')} />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow space-y-6 p-6">
      {children}
    </CardContent>
  </Card>
);


export default function ProfilePage() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/profile`,
    "mainEntity": {
      "@type": "Person",
      "name": user.name,
      "alternateName": user.spiritualTitle,
      "image": user.avatarUrl,
      "description": "A dedicated seeker on Shakti Darshan, exploring the depths of Divine Feminine wisdom and practices.",
       "potentialAction": {
        "@type": "UpdateAction",
        "target": `${siteUrl}/profile/edit` // Hypothetical edit link
      }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <div className="container mx-auto px-4 py-10">
        <header className="text-center mb-20 py-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl shadow-lg border border-primary/20" aria-labelledby="profile-page-title">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary shadow-xl ring-2 ring-primary/50">
            <AvatarImage src={user.avatarUrl} alt={user.avatarAlt} data-ai-hint="spiritual avatar large" />
            <AvatarFallback><User className="w-16 h-16 text-primary" /></AvatarFallback>
          </Avatar>
          <h1 id="profile-page-title" className="text-4xl md:text-5xl font-bold text-primary mb-3 tracking-tight">
            {user.name}
          </h1>
          <p className="text-xl text-secondary font-medium italic mb-8">
            {user.spiritualTitle}
          </p>
          <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10" disabled>
            <Settings2 className="w-4 h-4 mr-2" /> Edit Profile
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12">
          <DashboardCard title="My Sādhanā Journey" icon={BarChart3} cardClassName="xl:col-span-2" cardId="sadhana-progress">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <h4 className="text-md font-medium text-foreground flex items-center gap-2"><Wand2 className="w-5 h-5 text-secondary"/>Mantra Japa</h4>
                  <span className="text-sm text-muted-foreground">{user.sadhana.mantraJapa.current.toLocaleString()} / {user.sadhana.mantraJapa.goal.toLocaleString()} {user.sadhana.mantraJapa.unit}</span>
                </div>
                <Progress value={(user.sadhana.mantraJapa.current / user.sadhana.mantraJapa.goal) * 100} className="h-3 bg-secondary/30" aria-label={`Mantra Japa progress: ${(user.sadhana.mantraJapa.current / user.sadhana.mantraJapa.goal) * 100}% complete`} />
                <Button variant="link" size="sm" className="text-accent p-0 mt-3 text-xs" disabled>Log Japa <ChevronRight className="w-3 h-3 ml-1"/></Button>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <h4 className="text-md font-medium text-foreground flex items-center gap-2"><Moon className="w-5 h-5 text-secondary"/>Meditation Log</h4>
                   <span className="text-sm text-muted-foreground">{user.sadhana.meditation.current} / {user.sadhana.meditation.goal} {user.sadhana.meditation.unit}</span>
                </div>
                <Progress value={(user.sadhana.meditation.current / user.sadhana.meditation.goal) * 100} className="h-3 bg-secondary/30" aria-label={`Meditation log progress: ${(user.sadhana.meditation.current / user.sadhana.meditation.goal) * 100}% complete`} />
                <Button variant="link" size="sm" className="text-accent p-0 mt-3 text-xs" disabled>Log Session <ChevronRight className="w-3 h-3 ml-1"/></Button>
              </div>
               <p className="text-xs text-muted-foreground text-center pt-4">Track your daily practices and witness your spiritual growth. Logging features are planned for the future.</p>
            </div>
          </DashboardCard>

          <DashboardCard title="Sacred Space" icon={Palette} cardId="sacred-space-customization">
            <div className="text-center space-y-5">
              <Image src="https://placehold.co/300x180.png" alt="Cosmic spiritual background placeholder" width={300} height={180} className="rounded-lg mx-auto shadow-md" data-ai-hint="cosmic spiritual background" />
              <p className="text-sm text-muted-foreground">Personalize your dashboard with a serene background that resonates with your spirit.</p>
              <Button variant="outline" disabled className="text-sm">Choose Background</Button>
            </div>
          </DashboardCard>

          <DashboardCard title="My Sacred Collection" icon={BookHeart} cardClassName="md:col-span-2 xl:col-span-3" cardId="sacred-collection">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div className="space-y-4">
                <h4 className="text-md font-medium text-secondary mb-2.5 flex items-center gap-2"><Type className="w-5 h-5"/>Favorite Stotras</h4>
                <ul className="space-y-2.5 text-sm">
                  {user.bookmarks.stotras.map(stotra => (
                    <li key={stotra.id} className="hover:bg-muted/50 p-2 rounded-md transition-colors">
                      <Link href={`/sacred-chants/${stotra.id}`} className="text-accent hover:underline flex justify-between items-center">
                        {stotra.title}
                        <Badge variant="outline" className="text-xs ml-2">{stotra.deity}</Badge>
                      </Link>
                    </li>
                  ))}
                  {user.bookmarks.stotras.length === 0 && <p className="text-xs text-muted-foreground">No stotras bookmarked yet.</p>}
                </ul>
                 <Button variant="link" size="sm" className="text-accent p-0 mt-3.5 text-xs" disabled>Manage Stotras <ChevronRight className="w-3 h-3 ml-1"/></Button>
              </div>
              <div className="space-y-4">
                <h4 className="text-md font-medium text-secondary mb-2.5 flex items-center gap-2"><Gem className="w-5 h-5"/>Cherished Goddesses</h4>
                <ul className="space-y-2.5 text-sm">
                  {user.bookmarks.goddesses.map(goddess => (
                    <li key={goddess.slug} className="hover:bg-muted/50 p-2 rounded-md transition-colors">
                      <Link href={`/tridevi/${goddess.slug}`} className="text-accent hover:underline">{goddess.name}</Link>
                    </li>
                  ))}
                   {user.bookmarks.goddesses.length === 0 && <p className="text-xs text-muted-foreground">No goddesses bookmarked yet.</p>}
                </ul>
                <Button variant="link" size="sm" className="text-accent p-0 mt-3.5 text-xs" disabled>Manage Goddesses <ChevronRight className="w-3 h-3 ml-1"/></Button>
              </div>
              <div className="space-y-4">
                <h4 className="text-md font-medium text-secondary mb-2.5 flex items-center gap-2"><Brain className="w-5 h-5"/>Saved Teachings</h4>
                <ul className="space-y-2.5 text-sm">
                  {user.bookmarks.teachings.map(teaching => (
                    <li key={teaching.id} className="hover:bg-muted/50 p-2 rounded-md transition-colors">
                      <Link href={`/philosophy#${teaching.id}`} className="text-accent hover:underline">{teaching.title}</Link>
                    </li>
                  ))}
                   {user.bookmarks.teachings.length === 0 && <p className="text-xs text-muted-foreground">No teachings bookmarked yet.</p>}
                </ul>
                <Button variant="link" size="sm" className="text-accent p-0 mt-3.5 text-xs" disabled>Manage Teachings <ChevronRight className="w-3 h-3 ml-1"/></Button>
              </div>
            </div>
             <p className="text-xs text-muted-foreground text-center pt-6">Bookmark management features are planned for future updates.</p>
          </DashboardCard>

          <DashboardCard title="Future Blessings" icon={Sparkles} cardClassName="md:col-span-2 xl:col-span-3" cardId="future-features">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="p-8 bg-muted/30 rounded-lg text-center space-y-4">
                  <Award className="w-12 h-12 text-secondary mx-auto" />
                  <h4 className="font-semibold text-foreground">Achievements & Badges</h4>
                  <p className="text-xs text-muted-foreground">Unlock spiritual milestones and earn badges for your dedication.</p>
                   <Badge variant="outline" className="mt-2.5 text-xs">Future Feature</Badge>
                </div>
                <div className="p-8 bg-muted/30 rounded-lg text-center space-y-4">
                  <NotebookText className="w-12 h-12 text-secondary mx-auto" />
                  <h4 className="font-semibold text-foreground">Personal Notes to the Divine</h4>
                  <p className="text-xs text-muted-foreground">A sacred space for your reflections, prayers, and intimate conversations.</p>
                  <Badge variant="outline" className="mt-2.5 text-xs">Future Feature</Badge>
                </div>
                <div className="p-8 bg-muted/30 rounded-lg text-center space-y-4">
                  <HeartHandshake className="w-12 h-12 text-secondary mx-auto" />
                  <h4 className="font-semibold text-foreground">Community Connections</h4>
                  <p className="text-xs text-muted-foreground">Share insights and connect with fellow seekers on the path.</p>
                  <Badge variant="outline" className="mt-2.5 text-xs">Future Feature</Badge>
                </div>
              </div>
          </DashboardCard>
        </div>

        <Card className="mt-20 bg-accent/10 p-10 text-center rounded-xl shadow-lg border border-accent/20" aria-labelledby="profile-conclusion-title">
          <CardTitle id="profile-conclusion-title" className="text-2xl text-accent mb-3 flex items-center justify-center gap-2"><Sun className="w-7 h-7"/>Aum Shakti Aum</CardTitle>
          <CardDescription className="text-md text-accent-foreground/90 max-w-xl mx-auto">
            May your journey on Shakti Darshan be filled with divine light, wisdom, and profound peace. This space evolves with your devotion.
          </CardDescription>
        </Card>
      </div>
    </>
  );
}
