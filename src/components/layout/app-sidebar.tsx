
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
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Home,
  Settings as SettingsIcon, 
  Compass,
  User,
  Sparkles,
  BookOpen,
  MapPin,
  Library,
  Brain,
  Flame,
  CalendarClock,
  BookHeart,
  LayoutGrid,
  Contact,
  Shapes,
  Users as UsersIcon,
  Award,
  PanelLeft,
  PanelRight,
  // Wand2 Icon for Mantra Personalizer removed
} from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/explore', label: 'Explore All Sections', icon: Compass },
  { href: '/tridevi', label: 'Tridevi & Major Forms', icon: LayoutGrid },
  { href: '/pancha-prakritis', label: 'Pancha Prakritis', icon: Shapes },
  { href: '/mahavidyas', label: 'Das Mahavidyas', icon: UsersIcon },
  { href: '/devi-mahatmyam-forms', label: 'Devi Mahatmyam Forms', icon: Award },
  { href: '/shakti-peethas', label: 'Shakti Peethas', icon: MapPin },
  { href: '/sacred-chants', label: 'Sacred Chants Library', icon: Library },
  // { href: '/mantra-personalizer', label: 'AI Mantra Personalizer', icon: Wand2 }, // Removed
  { href: '/philosophy', label: 'Feminine Divinity Philosophy', icon: Brain },
  { href: '/tantra-sadhana', label: 'Tantra & Shakti Sadhana', icon: Flame },
  { href: '/stories', label: 'Divine Stories', icon: BookHeart },
  { href: '/timeline', label: 'Spiritual Timeline', icon: CalendarClock },
];

const user = {
  name: "Devi Bhakta",
  avatarUrl: "https://placehold.co/100x100.png",
  imageHint: "spiritual avatar small"
};

export default function AppSidebar() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile, open, toggleSidebar } = useSidebar(); 

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4 flex flex-col items-center shrink-0">
        <Link href="/" className="flex items-center gap-2 mb-2" onClick={handleLinkClick}>
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-semibold group-data-[collapsible=icon]:hidden">Shakti Darshan</h1>
        </Link>
      </SidebarHeader>
      <Separator className="mb-2 shrink-0" />

      <ScrollArea className="flex-1 min-h-0">
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
                    onClick={handleLinkClick}
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

      <SidebarFooter className="p-4 border-t border-sidebar-border shrink-0 space-y-2">
        <Link href="/profile" legacyBehavior passHref>
          <a 
            className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center w-full hover:bg-sidebar-accent p-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            <Avatar className="w-8 h-8 border-2 border-primary/50">
              <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint={user.imageHint} />
              <AvatarFallback>{user.name.substring(0, 1).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="group-data-[collapsible=icon]:hidden">
              <p className="text-sm font-medium text-sidebar-foreground">{user.name}</p>
            </div>
          </a>
        </Link>

        {!isMobile && (
          <div className={cn(
            "flex",
            open ? "justify-end" : "justify-center" 
          )}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
              className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              title={open ? 'Collapse sidebar' : 'Expand sidebar'}
            >
              {open ? <PanelLeft className="h-5 w-5" /> : <PanelRight className="h-5 h-5" />}
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
