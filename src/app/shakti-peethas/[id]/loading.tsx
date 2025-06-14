
import { Loader2, Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ShaktiPeethaDetailLoading() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-5 shadow-lg animate-pulse">
          <Landmark className="w-16 h-16 text-primary/50" />
        </div>
        <Skeleton className="h-12 w-3/4 md:w-1/2 mx-auto mb-3" />
        <Skeleton className="h-6 w-1/2 md:w-1/3 mx-auto" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <Card className="sticky top-10 shadow-xl rounded-xl overflow-hidden border-2 border-primary/30">
            <CardHeader className="p-0">
              <Skeleton className="h-[300px] w-full rounded-t-lg" />
            </CardHeader>
            <CardContent className="p-6 bg-primary/5 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-px w-full my-4" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-20 rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-xl rounded-xl border border-border/50">
            <CardHeader className="bg-muted/20">
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Skeleton className="h-7 w-7 rounded-full" />
                <Skeleton className="h-7 w-48" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
            </CardContent>
          </Card>
          
          <Card className="shadow-xl rounded-xl border border-border/50 bg-accent/5">
            <CardHeader className="bg-accent/10">
               <CardTitle className="text-xl text-accent flex items-center gap-2">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-36" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <Loader2 className="w-16 h-16 text-accent/50 mx-auto mb-4 animate-spin" />
              <Skeleton className="h-6 w-3/4 mx-auto" />
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Skeleton className="h-px w-full my-12" />

      <div className="text-center mt-10">
        <Skeleton className="h-12 w-60 mx-auto rounded-md" />
      </div>
    </div>
  );
}
