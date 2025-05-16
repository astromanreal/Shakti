import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import AppSidebar from '@/components/layout/app-sidebar';
import MobileHeader from '@/components/layout/mobile-header';
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
const siteUrl = 'https://www.shaktidarshan.com'; // Replace with your actual domain
const defaultDescription = 'A digital portal dedicated to Maa Adi Shakti, celebrating her infinite forms, powers, and wisdom. Explore Tridevi, Mahavidyas, Shakti Peethas, sacred chants, and the philosophy of the Divine Feminine.';
const defaultOgImage = `${siteUrl}/og-default.jpg`; // Replace with a path to a default OG image

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} – The Eternal Source of Divine Feminine Power`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'Shakti', 'Adi Shakti', 'Divine Feminine', 'Hinduism', 'Goddess', 
    'Tridevi', 'Durga', 'Lakshmi', 'Saraswati', 'Parvati', 'Kali',
    'Mahavidyas', 'Shakti Peethas', 'Spirituality', 'Indian Philosophy', 
    'Mantras', 'Stotras', 'Tantra', 'Sadhana', 'Hindu Deities'
  ],
  authors: [{ name: 'Shakti Darshan Team', url: siteUrl }],
  creator: 'Shakti Darshan Team',
  publisher: 'Shakti Darshan',
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
        default: `${siteName} – The Eternal Source of Divine Feminine Power`,
        template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: defaultOgImage, // Replace with your actual default OG image URL
        width: 1200,
        height: 630,
        alt: `An artistic representation of ${siteName}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
        default: `${siteName} – The Eternal Source of Divine Feminine Power`,
        template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    images: [defaultOgImage], // Replace with your actual default Twitter image URL
    // creator: '@YourTwitterHandle', // Optional: Add your Twitter handle
  },
  icons: {
    icon: '/favicon.ico', // Path to your favicon
    // apple: '/apple-touch-icon.png', // Path to apple touch icon
  },
  manifest: '/site.webmanifest', // Path to your web app manifest
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <div className="flex flex-col flex-1 min-w-0">
              <MobileHeader />
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
