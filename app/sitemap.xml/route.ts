import { MetadataRoute } from 'next';
import type { SanityDocument } from '@sanity/client';
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

async function getData() {
    const query = `*[_type == "post"] {
        "currentSlug": slug.current,
        "updated": _updatedAt
    }`;
    const data = await client.fetch(query);
    return data;
}
const siteUrl='https://sumrlabs.com';

export async function GET() {
    const data = await getData();
    const posts: MetadataRoute.Sitemap = data.map((post: SanityDocument) => ({
        url: `${siteUrl}/blog/${post.currentSlug}`,
        lastModified: post.updated,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
        },
        {
            url: `${siteUrl}/termsofuse`,
            lastModified: new Date(),
        },
        {
            url: `${siteUrl}/privacypolicy`,
            lastModified: new Date(),
        },
        // ...posts,
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemap.map(entry => `  <url>
                <loc>${entry.url}</loc>
                <lastmod>${entry?.lastModified?.toString()}</lastmod>
            </url>`).join('\n')}
         </urlset>`;

         return new NextResponse(sitemapContent, {
            headers: {
              'Content-Type': 'application/xml',
            },
          });
}