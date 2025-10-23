import { MetadataRoute } from 'next';
import { travelerTypes } from '@/data/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ohmyseoul.page';

  // Base pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // 7 traveler type result pages
  const resultPages = travelerTypes.map((type) => ({
    url: `${baseUrl}/result/${type.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...resultPages];
}
