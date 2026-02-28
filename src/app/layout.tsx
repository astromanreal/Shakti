
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import AppSidebar from '@/components/layout/app-sidebar';
import AppHeader from '@/components/layout/app-header';
import { ThemeProvider } from '@/contexts/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteName = 'Shakti Darshan';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';
const defaultDescription = 'A divine sanctuary dedicated to Maa Adi Shakti, exploring her infinite forms, timeless wisdom, and sacred traditions. Discover Tridevi, Mahavidyas, Shakti Peethas, mantras, and the philosophy of the Divine Feminine.';
const defaultOgImage = `${siteUrl}/og-images/default-shakti-darshan.jpg`; // Generic default OG image

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} – Divine Feminine Power & Cosmic Wisdom`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'Shakti', 'Adi Shakti', 'Divine Feminine', 'Hinduism', 'Goddess',
    'Tridevi', 'Durga', 'Lakshmi', 'Saraswati', 'Parvati', 'Kali',
    'Mahavidyas', 'Shakti Peethas', 'Spirituality', 'Indian Philosophy',
    'Mantras', 'Stotras', 'Tantra', 'Sadhana', 'Hindu Deities', 'Sanatan Dharma',
    'Spiritual feminine power', 'Hindu goddess worship', 'Mahadevi'
  ],
  authors: [{ name: 'Shakti Darshan Team', url: siteUrl }],
  creator: 'Shakti Darshan Team',
  publisher: 'Shakti Darshan',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
        default: `${siteName} – Divine Feminine Power & Cosmic Wisdom`,
        template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `An artistic representation of ${siteName} - The Realm of Divine Feminine Power`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
        default: `${siteName} – Divine Feminine Power & Cosmic Wisdom`,
        template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    images: [defaultOgImage],
    // site: '@YourTwitterHandle', // Add your Twitter handle if available
    // creator: '@YourTwitterHandle',
  },
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-touch-icon.png', // Add if you have an apple-touch-icon
  },
  manifest: '/site.webmanifest', // Add if you have a manifest file
  viewport: 'width=device-width, initial-scale=1',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shakti Darshan",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`, // Replace with your actual logo URL
    "description": defaultDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@shaktidarshan.com", // Replace with actual contact
      "contactType": "Customer Support"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      
      <meta name="google-site-verification" content="mac7aLjz9hgBPOeatEJp8fZ6RL2GRi8PeWQfgcITzFU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <div className="flex flex-col flex-1 min-w-0">
              <AppHeader />
              <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
                {children}
              </main>
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
