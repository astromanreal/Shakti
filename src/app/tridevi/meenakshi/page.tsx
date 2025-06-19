
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import type { Metadata } from 'next';

const pageTitle = "Maa Meenakshi - Content Moved";
const pageDescription = "Information for Maa Meenakshi is now available through the main Tridevi & Major Forms section.";

// No static metadata export for this placeholder
// export const metadata: Metadata = { ... }

export default function DeprecatedMeenakshiPage() {
  // This component indicates that the content has moved or is handled dynamically.

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-lg text-center shadow-xl p-8">
        <CardHeader>
          <Info className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-2xl text-primary">{pageTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg text-foreground/80">
            {pageDescription} Please visit the main "Tridevi & Major Forms" section to find details for Maa Meenakshi.
          </CardDescription>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild>
            <Link href="/tridevi">Go to Major Forms Overview</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
