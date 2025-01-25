export default function sitemap() {
  const baseUrl = 'https://moderntechnologies.com';
  
  // Core pages
  const routes = [
    '',
    '/about',
    '/services',
    '/infrastructure',
    '/contact',
    '/blog',
    '/quotation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogPosts = [
    'what-is-metal-finishing',
    'types-of-metal-finishing',
    'choosing-right-process',
    'automation-in-finishing',
    'latest-equipment',
    'why-choose-us'
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
} 