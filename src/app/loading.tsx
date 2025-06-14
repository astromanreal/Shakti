
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-15rem)] text-primary">
      <Loader2 className="h-16 w-16 animate-spin mb-4" />
      <p className="text-lg font-semibold">Loading Shakti's Realm...</p>
    </div>
  );
}
