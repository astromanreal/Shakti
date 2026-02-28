"use client";

import Link from 'next/link';
import { useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  PanelLeft,
  Sparkles,
  User,
  Settings as SettingsIcon,
  Contact as ContactIcon,
  Sun,
  Moon,
  Compass
} from 'lucide-react';
import { useTheme } from '@/contexts/theme-provider';
import { cn } from '@/lib/utils';

export default function AppHeader() {
  const { isMobile, toggleSidebar, isMounted: isSidebarMounted } = useSidebar();
  const { mode, toggleMode, isMounted: isThemeMounted } = useTheme();

  // Simple placeholder for the button's visual space if icon is not ready
  const IconOnlyButtonPlaceholder = () => (
    <div className="h-10 w-10 flex items-center justify-center" aria-hidden="true">
      <div className="h-5 w-5 bg-muted rounded-sm animate-pulse"></div>
    </div>
  );

  return (
    <header className={cn(
      "p-2 border-b flex items-center justify-between sticky top-0 bg-background z-40 h-14",
      "md:px-4"
    )}>
      {/* Left Section */}
      <div className="flex items-center gap-2">
        {isSidebarMounted && isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle sidebar menu">
            <PanelLeft className="h-5 w-5" />
          </Button>
        )}
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">Shakti Darshan</span>
        </Link>
      </div>

      {/* Right Section - Utility Icons */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              {isThemeMounted ? (
                <Button variant="ghost" size="icon" onClick={toggleMode} aria-label={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                  {mode === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              ) : (
                // Render a disabled button or a simple div as placeholder for the trigger
                <div className="h-10 w-10 flex items-center justify-center p-2" aria-label="Loading theme toggle">
                   <div className="h-5 w-5 w-5 bg-muted rounded-sm animate-pulse" />
                </div>
              )}
            </TooltipTrigger>
            {isThemeMounted && ( // Only render content if mounted to avoid content mismatch
              <TooltipContent>
                <p>{mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/explore" passHref legacyBehavior>
                <Button variant="ghost" size="icon" asChild aria-label="Explore Sections">
                  <a><Compass className="h-5 w-5" /></a>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Explore Sections</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/profile" passHref legacyBehavior>
                <Button variant="ghost" size="icon" asChild aria-label="Profile">
                  <a><User className="h-5 w-5" /></a>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/settings" passHref legacyBehavior>
                <Button variant="ghost" size="icon" asChild aria-label="Settings">
                  <a><SettingsIcon className="h-5 w-5" /></a>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/contact" passHref legacyBehavior>
                <Button variant="ghost" size="icon" asChild aria-label="Contact Us">
                  <a><ContactIcon className="h-5 w-5" /></a>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Us</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
}

    