"use client";

import { MapPin } from 'lucide-react';

interface ShaktiPeethaMapProps {
  apiKey?: string; // Optional API key prop
}

const ShaktiPeethaMap: React.FC<ShaktiPeethaMapProps> = ({ apiKey }) => {
  return (
    <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-8 text-center bg-muted/50 min-h-[400px] flex flex-col justify-center items-center shadow-inner">
      <MapPin className="w-16 h-16 text-muted-foreground/70 mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Shakti Peetha Map</h3>
      <p className="text-muted-foreground max-w-md">
        This section will display an interactive map pinpointing the sacred Shakti Peethas across the Indian subcontinent and beyond. Detailed information for each Peetha will be available upon interaction.
      </p>
      {!apiKey && (
        <p className="mt-4 text-sm text-destructive bg-destructive/10 p-3 rounded-md">
          <strong>Note:</strong> To enable the interactive map, integration with a mapping library (e.g., <code>@vis.gl/react-google-maps</code> or Leaflet) and a valid API key (e.g., Google Maps API Key) are required.
        </p>
      )}
       {apiKey && (
        <p className="mt-4 text-sm text-green-600 bg-green-500/10 p-3 rounded-md">
          API Key provided. Map functionality would be active here.
        </p>
      )}
    </div>
  );
};

export default ShaktiPeethaMap;
