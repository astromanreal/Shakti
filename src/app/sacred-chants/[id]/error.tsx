
"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SacredChantError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Sacred Chant Page Error:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
      <Card className="w-full max-w-lg text-center shadow-xl">
        <CardHeader>
          <div className="mx-auto bg-destructive/10 p-3 rounded-full w-fit mb-4">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold text-destructive">
            Error Loading Sacred Chant
          </CardTitle>
          <CardDescription className="text-foreground/80">
            We couldn&apos;t retrieve the details for this sacred chant.
            {error?.message && <p className="text-sm mt-2">Details: {error.message}</p>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Please try reloading or return to the chants library.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => reset()}
            variant="destructive"
            className="w-full sm:w-auto"
          >
            Try Again
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/sacred-chants">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
