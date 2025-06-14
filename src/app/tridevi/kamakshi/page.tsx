import type { MetadataRoute } from 'next';
import { trideviData } from '@/data/tridevi-data';
import { mahavidyaData } from '@/data/mahavidya-data';
import { sacredChantsData } from '@/data/sacred-chants-data';
import { divineStoriesData } from '@/data/divine-stories-data';
import { allMajorFormsDetailedData } from '@/data/all-major-forms-detailed-data'; // Import the new consolidated data

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '/',
    '/explore',
    '/tridevi', // Overview page for Tridevi and Major Forms
    '/pancha-prakritis',
    '/mahavidyas', // Overview page for Mahavidyas
    '/devi-mahatmyam-forms',
    '/shakti-peethas',
    '/sacred-chants', // Overview page for Sacred Chants
    '/philosophy',
    '/tantra-sadhana',
    '/stories', // Overview page for Stories
    '/timeline',
    '/contact',
    '/settings',
  ];

  const staticPageEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1.0 : 0.8,
  }));

  // Detail pages for Durga, Lakshmi, Saraswati, Parvati (Kali is handled by Mahavidyas)
  const trideviDetailPages: MetadataRoute.Sitemap = trideviData
    .filter(goddess => goddess.slug !== 'kali' && goddess.slug !== 'kamakshi' && goddess.slug !== 'meenakshi') // Exclude Kali and forms now in dynamic route
    .map((goddess) => ({
      url: `${siteUrl}/tridevi/${goddess.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
  }));
  
  const mahavidyaPageEntries: MetadataRoute.Sitemap = mahavidyaData
    .map((mahavidya) => ({
        url: `${siteUrl}/mahavidyas/${mahavidya.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
  }));

  const sacredChantEntries: MetadataRoute.Sitemap = sacredChantsData.map((chant) => ({
    url: `${siteUrl}/sacred-chants/${chant.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const storyEntries: MetadataRoute.Sitemap = divineStoriesData.map((story) => ({
    url: `${siteUrl}/stories/${story.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Dynamic detail pages for "Other Prominent Manifestations" (Kamakshi, Meenakshi, Lalita, etc.)
  const otherFormsDetailPages: MetadataRoute.Sitemap = allMajorFormsDetailedData
    .map((form) => ({
      url: `${siteUrl}/tridevi/forms/${form.id}`, // Using the new dynamic route structure
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  return [
    ...staticPageEntries,
    ...trideviDetailPages,
    ...mahavidyaPageEntries,
    ...sacredChantEntries,
    ...storyEntries,
    ...otherFormsDetailPages, // Add the new dynamic pages
  ];
}