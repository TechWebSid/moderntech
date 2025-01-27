// This would typically fetch data from your CMS or database
const blogData = {
  'what-is-metal-finishing': {
    title: "What Is Metal Finishing? A Beginner's Guide",
    excerpt: "Discover the fundamentals of metal finishing processes...",
    mainImage: "/images/blog/metal-finishing-guide.jpg",
    date: "March 15, 2024",
  },
  // Add other blog posts data here
};

export async function generateMetadata({ params }) {
  const post = blogData[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | Modern Technologies Blog`,
    description: post.excerpt || 'Read our expert insights on metal finishing technologies and industry updates.',
    keywords: ['metal finishing', 'surface treatment', 'anodizing', 'industrial coating'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Modern Technologies'],
      images: [
        {
          url: post.mainImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    }
  };
} 