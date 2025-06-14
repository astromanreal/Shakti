
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SearchX } from 'lucide-react';
import type { Metadata } from 'next';

const pageTitle = "404 - Page Not Found | Shakti Darshan";
const pageDescription = "The sacred path you seek on Shakti Darshan could not be found. Please return to the main sanctum or explore other aspects of the Divine Feminine.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: {
    index: false, // Do not index 404 pages
    follow: false,
  },
  alternates: {
    canonical: '/404', // Or handle this to redirect or show no canonical
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    // url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com'}/404`, // Not typically needed for 404
    // images: [], // Not typically needed for 404
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    // images: [], // Not typically needed for 404
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center shadow-2xl" role="main">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
            <SearchX className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="mt-4 text-2xl font-bold text-primary">
            404 - Page Not Found
          </CardTitle>
          <CardDescription className="text-foreground/80">
            The sacred path you seek seems to be hidden or does not exist.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Let&apos;s guide you back to the main sanctum.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
