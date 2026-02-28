
"use client";

import { shaktiPeethaData } from '@/data/shakti-peetha-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    MapPin, 
    Zap, 
    Heart, 
    Shield, 
    Landmark, 
    ChevronRight, 
    Type as TypeIcon, 
    CalendarDays,
    ListX 
} from 'lucide-react';
import type { ShaktiPeetha } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';

export default function ShaktiPeethasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPeethas = useMemo(() => {
    if (!searchTerm) {
      return shaktiPeethaData;
    }
    return shaktiPeethaData.filter(peetha => 
      peetha.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      peetha.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      peetha.bodyPart.toLowerCase().includes(searchTerm.toLowerCase()) ||
      peetha.shakti.toLowerCase().includes(searchTerm.toLowerCase()) ||
      peetha.bhairava.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const formattedLocation = (peetha: ShaktiPeetha) => {
    if (peetha.detailedLocation) {
      const parts = [peetha.detailedLocation.place, peetha.detailedLocation.city, peetha.detailedLocation.state, peetha.detailedLocation.country].filter(Boolean);
      return parts.join(', ');
    }
    return peetha.location;
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12" aria-labelledby="shakti-peethas-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4 shadow-md">
            <Landmark className="w-12 h-12 text-primary" />
          </div>
          <h1 id="shakti-peethas-title" className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Sacred Shakti Peethas
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the holy Shakti Peethas, sites imbued with immense spiritual power where parts of Devi Sati's body fell.
          </p>
        </header>

        <div className="mb-8 max-w-md mx-auto">
            <Input 
                type="text"
                placeholder="Search by name, location, body part..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
            />
        </div>

        <div className="mb-8 text-center text-muted-foreground">
          <p>
            Displaying {filteredPeethas.length} of {shaktiPeethaData.length} Sacred Shakti Peethas.
          </p>
        </div>

        {filteredPeethas.length > 0 ? (
          <section aria-label="List of Shakti Peethas" className="pt-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPeethas.map((peetha) => (
                <Card 
                  key={peetha.id} 
                  className="flex flex-col h-full bg-card rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-102 border border-border/30 group overflow-hidden"
                  data-ai-hint={`${peetha.name.toLowerCase().replace(/\s+/g, "-")} shakti peetha sacred site`}
                >
                  <CardHeader className="p-5 border-b border-border/20 bg-gradient-to-br from-card via-background to-muted/10">
                    <div className="flex items-start gap-3 mb-1">
                        <Landmark className="w-7 h-7 text-primary/90 group-hover:text-accent transition-colors duration-300 flex-shrink-0 mt-0.5" />
                        <div>
                            <CardTitle className="text-lg md:text-xl text-primary group-hover:text-accent transition-colors duration-300 tracking-tight">
                                {peetha.name}
                            </CardTitle>
                            <CardDescription className="text-xs text-muted-foreground flex items-center mt-1">
                                <MapPin className="w-3 h-3 mr-1 text-secondary flex-shrink-0" /> 
                                {formattedLocation(peetha)}
                            </CardDescription>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 flex-grow space-y-2.5 text-sm text-foreground/90">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-destructive flex-shrink-0"/> 
                        <div><strong className="font-medium text-secondary/90">Body Part:</strong> {peetha.bodyPart}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-secondary flex-shrink-0"/> 
                        <div><strong className="font-medium text-secondary/90">Shakti:</strong> {peetha.shakti}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-accent flex-shrink-0"/> 
                        <div><strong className="font-medium text-secondary/90">Bhairava:</strong> {peetha.bhairava}</div>
                      </div>
                  </CardContent>
                   <CardFooter className="border-t border-border/20 pt-3 pb-4 px-5 flex flex-col sm:flex-row justify-between items-center gap-3">
                     <div className="flex flex-wrap gap-1.5">
                        {peetha.templeType && (
                            <Badge variant="outline" className="text-xs px-2 py-0.5 flex items-center gap-1 border-primary/50 text-primary/90 bg-primary/10">
                                <TypeIcon className="w-3 h-3" /> {peetha.templeType}
                            </Badge>
                        )}
                        {peetha.associatedFestival && (
                            <Badge variant="outline" className="text-xs px-2 py-0.5 flex items-center gap-1 border-secondary/50 text-secondary/90 bg-secondary/10">
                                <CalendarDays className="w-3 h-3" /> {peetha.associatedFestival}
                            </Badge>
                        )}
                     </div>
                    <Button asChild variant="link" className="text-accent p-0 font-semibold group-hover:text-accent-foreground transition-colors text-sm self-end sm:self-center mt-2 sm:mt-0">
                      <Link href={`/shakti-peethas/${peetha.id}`}>
                        Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ) : (
            <Card className="text-center p-10 bg-muted/50 rounded-2xl shadow-lg border border-border/30 col-span-full mt-4">
              <ListX className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <CardTitle className="text-2xl text-primary mb-3 tracking-tight">No Peethas Found</CardTitle>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                No Shakti Peethas match the current filter criteria. Please adjust your search or location filter.
              </p>
            </Card>
        )}
        
        {shaktiPeethaData.length === 0 && (
           <Card className="text-center p-8 bg-muted mt-8">
              <p className="text-lg text-muted-foreground">
                  Information about the sacred Shakti Peethas is being compiled and will be available soon.
              </p>
          </Card>
        )}
      </div>
    </>
  );
}
