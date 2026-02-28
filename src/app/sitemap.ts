
import type { MetadataRoute } from 'next';
import { trideviData } from '@/data/tridevi-data';
import { mahavidyaData } from '@/data/mahavidya-data';
import { sacredChantsData } from '@/data/sacred-chants-data';
import { divineStoriesData } from '@/data/divine-stories-data'; // Updated import
import { allMajorFormsDetailedData } from '@/data/all-major-forms-detailed-data'; 
import { shaktiPeethaData } from '@/data/shakti-peetha-data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '/',
    '/explore',
    '/tridevi', 
    '/pancha-prakritis',
    '/mahavidyas', 
    '/devi-mahatmyam-forms',
    '/shakti-peethas', 
    '/sacred-chants', 
    '/philosophy',
    '/tantra-sadhana',
    '/stories', 
    '/timeline',
    '/contact',
    '/settings',
    '/about',
  ];

  const staticPageEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1.0 : 0.8,
  }));

  const trideviDetailPages: MetadataRoute.Sitemap = trideviData
    .filter(goddess => goddess.slug !== 'kali' && goddess.slug !== 'kamakshi' && goddess.slug !== 'meenakshi') 
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

  const otherFormsDetailPages: MetadataRoute.Sitemap = allMajorFormsDetailedData
    .map((form) => ({
      url: `${siteUrl}/tridevi/forms/${form.id}`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  const shaktiPeethaDetailPages: MetadataRoute.Sitemap = shaktiPeethaData.map((peetha) => ({
    url: `${siteUrl}/shakti-peethas/${peetha.id}`,
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
    ...otherFormsDetailPages,
    ...shaktiPeethaDetailPages,
  ];
}
