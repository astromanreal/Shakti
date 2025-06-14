
"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next'; // Import Metadata type

// It's not standard to export Metadata from client components for Next.js App Router.
// Metadata should be handled by nearest layout.tsx or page.tsx (server component).
// However, defining it here for completeness if a title is desired for the error page itself.
// For true SEO control, error pages would ideally be server-rendered with appropriate status codes.

// export const metadata: Metadata = {
//   title: "Error - Something Went Wrong | Shakti Darshan",
//   robots: {
//     index: false, // Do not index error pages
//     follow: false,
//   }
// };
// The above metadata export won't work in a "use client" component for Next.js to pick up.
// For actual no-indexing, it's better to handle via server response headers or robots.txt if applicable for specific error paths.


export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error Handler:", error);
    // Dynamically set page title for client-rendered error page
    document.title = "Error - Something Went Wrong | Shakti Darshan";
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center shadow-2xl" role="alert">
        <CardHeader>
          <div className="mx-auto bg-destructive/10 p-3 rounded-full w-fit">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <CardTitle className="mt-4 text-2xl font-bold text-destructive">
            Oops! Something Went Wrong
          </CardTitle>
          <CardDescription className="text-foreground/80">
            We encountered an unexpected issue. Please try again.
            {error?.digest && <p className="text-xs mt-2">Error Digest: {error.digest}</p>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            If the problem persists, please contact support or try refreshing the page.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => reset()}
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
          >
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
