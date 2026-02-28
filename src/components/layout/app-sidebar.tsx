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
} from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/explore', label: 'Explore All Sections', icon: Compass },
  { href: '/tridevi', label: 'Tridevi & Major Forms', icon: LayoutGrid },
  { href: '/pancha-prakritis', label: 'Pancha Prakritis', icon: Shapes },
  { href: '/mahavidyas', label: 'Das Mahavidyas', icon: UsersIcon },
  { href: '/devi-mahatmyam-forms', label: 'Devi Mahatmyam Forms', icon: Award },
  { href: '/shakti-peethas', label: 'Shakti Peethas', icon: MapPin },
  { href: '/sacred-chants', label: 'Sacred Chants Library', icon: Library },
  { href: '/philosophy', label: 'Feminine Divinity Philosophy', icon: Brain },
  { href: '/tantra-sadhana', label: 'Tantra & Shakti Sadhana', icon: Flame },
  { href: '/stories', label: 'Divine Stories', icon: BookHeart },
  { href: '/timeline', label: 'Spiritual Timeline', icon: CalendarClock },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile, open, toggleSidebar, isMounted } = useSidebar(); 

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

      <SidebarFooter className="p-4 border-t border-sidebar-border shrink-0">
        {isMounted && !isMobile && (
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
