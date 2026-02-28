
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Maa Parvati | Shakti Darshan",
  description: "Learn about Maa Parvati, the gentle Mother Goddess, consort of Lord Shiva. Her detailed page is available in the Major Forms section.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function DeprecatedParvatiPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center">
      <Card className="max-w-2xl text-center shadow-lg">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Info className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-primary">
            Content Moved
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            The detailed information for Maa Parvati is now part of our unified 'Major Forms' section.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To maintain consistency and provide a better browsing experience, we've consolidated all major goddess profiles. Please visit the Tridevi & Major Forms page to find details about Maa Parvati.
          </p>
        </CardContent>
        <CardContent>
          <Button asChild>
            <Link href="/tridevi/parvati">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go to Maa Parvati's Page
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
