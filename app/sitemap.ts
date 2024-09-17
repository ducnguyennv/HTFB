import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://htfb.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://htfb.vercel.app/tin-tuc',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://htfb.vercel.app/tin-tuc/cach-bao-ve-tai-khoan-facebook-khoi-bi-hack',
      lastModified: new Date('2024-03-22'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // ... (các URL khác)
  ]
}