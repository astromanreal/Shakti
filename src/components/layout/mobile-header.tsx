
"use client";

import Link from 'next/link';
import { useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { PanelLeft, Sparkles } from 'lucide-react';

export default function MobileHeader() {
  const { isMobile, toggleSidebar } = useSidebar();

  if (!isMobile) {
    return null; // Only render this header on mobile screens
  }

  return (
    <header className="md:hidden p-2 border-b flex items-center justify-between sticky top-0 bg-background z-40 h-14">
      <Link href="/" className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-primary" />
        <span className="font-semibold text-lg">Shakti Darshan</span>
      </Link>
      <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle sidebar menu">
        <PanelLeft className="h-5 w-5" />
      </Button>
    </header>
  );
}
