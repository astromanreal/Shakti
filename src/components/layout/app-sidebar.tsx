"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
// SheetTitle is handled by the Sidebar component internally for mobile view.
// No need to import or use SheetTitle directly here.
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Home,
  Settings as SettingsIcon, 
  Moon,
  Sun,
  Compass,
  User,
  Sparkles,
  BookOpen,
  MapPin,
  Library,
  Wand2,
  Brain,
  Flame,
  CalendarClock,
  BookHeart,
  LayoutGrid,
  Contact,
  Shapes, 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import { useTheme } from '@/contexts/theme-provider'; 
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/explore', label: 'Explore', icon: Compass },
  { href: '/tridevi', label: 'Tridevi & Major Forms', icon: LayoutGrid },
  { href: '/pancha-prakritis', label: 'Pancha Prakritis', icon: Shapes }, 
  { href: '/mahavidyas', label: 'Das Mahavidyas', icon: BookOpen }, 
  { href: '/shakti-peethas', label: 'Shakti Peethas', icon: MapPin },
  { href: '/sacred-chants', label: 'Sacred Chants', icon: Library },
  { href: '/mantra-personalizer', label: 'Mantra Personalizer', icon: Wand2 },
  { href: '/philosophy', label: 'Philosophy', icon: Brain },
  { href: '/tantra-sadhana', label: 'Tantra & Sadhana', icon: Flame },
  { href: '/stories', label: 'Divine Stories', icon: BookHeart },
  { href: '/timeline', label: 'Spiritual Timeline', icon: CalendarClock },
];

const utilityNavItems = [
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/settings', label: 'Settings', icon: SettingsIcon },
  { href: '/contact', label: 'Contact Us', icon: Contact },
];


export default function AppSidebar() {
  const pathname = usePathname();
  const { mode, toggleMode, isMounted } = useTheme(); 
  
  const user = {
    name: "Devi Bhakta", 
    avatarUrl: "https://picsum.photos/seed/sidebaravatar/100/100", 
    // email: "devi.bhakta@example.com" // Email is not displayed in the footer currently
  };

  if (!isMounted) { // Ensures theme and mode are loaded before rendering to prevent flicker
    return null; 
  }

  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      {/* SheetTitle for mobile accessibility is handled within the Sidebar component */}
      <SidebarHeader className="p-4 flex flex-col items-center shrink-0">
        <Link href="/" className="flex items-center gap-2 mb-2">
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-semibold group-data-[collapsible=icon]:hidden">Shakti Darshan</h1>
        </Link>
      </SidebarHeader>
      <Separator className="mb-2 shrink-0" />

      {/* Main navigation items - Scrollable area that takes up remaining space */}
      <ScrollArea className="flex-1 min-h-0"> {/* MODIFIED: Use flex-1 and min-h-0 to grow and enable scrolling */}
        <SidebarContent className="p-0">
          <SidebarMenu className="px-2">
            {mainNavItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    asChild
                    variant="ghost"
                    className={cn(
                      'justify-start', 
                      pathname === item.href ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold' : 'font-normal'
                    )}
                    tooltip={item.label}
                  >
                    <a>
                      <item.icon className="w-5 h-5" />
                      <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </ScrollArea>

      <Separator className="my-2 shrink-0" />

      {/* Utility navigation items - Fixed section at the bottom */}
      <SidebarContent className="p-0 shrink-0"> {/* MODIFIED: Added shrink-0, removed any mt-auto that might have been here */}
         <SidebarMenu className="px-2">
            {utilityNavItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    asChild
                    variant="ghost"
                    className={cn(
                      'justify-start',
                       pathname === item.href ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold' : 'font-normal'
                    )}
                    tooltip={item.label}
                  >
                    <a>
                      <item.icon className="w-5 h-5" />
                      <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
             <SidebarMenuItem>
                <SidebarMenuButton
                    variant="ghost"
                    className="justify-start"
                    onClick={toggleMode}
                    tooltip={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  >
                    <a>
                      {mode === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      <span className="group-data-[collapsible=icon]:hidden">
                        {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                      </span>
                    </a>
                  </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

      {/* Sidebar Footer - Profile Link - Fixed section at the very bottom */}
      <SidebarFooter className="p-4 border-t border-sidebar-border shrink-0"> {/* MODIFIED: Added shrink-0, removed any mt-auto */}
        <Link href="/profile" legacyBehavior passHref>
          <a className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center w-full hover:bg-sidebar-accent p-2 rounded-md transition-colors">
            <Avatar className="w-8 h-8 border-2 border-primary/50">
              <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="profile avatar small" />
              <AvatarFallback>{user.name.substring(0, 1).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="group-data-[collapsible=icon]:hidden">
              <p className="text-sm font-medium text-sidebar-foreground">{user.name}</p>
            </div>
          </a>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}