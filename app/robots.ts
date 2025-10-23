import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://oh-my-seoul-qr97pjg5m-mokkas-projects-8367cd87.vercel.app/sitemap.xml',
  };
}
