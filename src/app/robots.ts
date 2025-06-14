
import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Applies to all web crawlers
        allow: '/',     // Allow crawling of all content by default
        disallow: [
          '/profile/', // Disallow crawling of user profile pages (if intended to be private)
          '/settings/', // Disallow crawling of settings pages
        ],
      },
      // You can add more specific rules for other user agents if needed
      // For example:
      // {
      //   userAgent: 'Googlebot-Image',
      //   disallow: ['/images-to-exclude/'], 
      // },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    // host: siteUrl, // Optional: Specifies the preferred domain (www or non-www)
  };
}
