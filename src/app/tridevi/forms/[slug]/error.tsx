
"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MajorFormError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Major Form Page Error:", error);
    document.title = "Error Loading Form Details | Shakti Darshan";
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-lg text-center shadow-xl p-6">
        <CardHeader>
          <div className="mx-auto bg-destructive/10 p-3 rounded-full w-fit mb-4">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold text-destructive">
            Error Loading Divine Form Details
          </CardTitle>
          <CardDescription className="text-foreground/80 mt-2">
            We encountered an issue while trying to display information for this divine manifestation.
            {error?.message && <p className="text-sm mt-2 text-muted-foreground">Details: {error.message}</p>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You can try to reload the page or return to the overview of major forms.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <Button
            onClick={() => reset()}
            variant="destructive"
            className="w-full sm:w-auto"
          >
            Try Again
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/tridevi">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Major Forms
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

    