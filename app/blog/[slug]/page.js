'use client'
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaClock, FaCalendar, FaQuoteRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Blog data (this would typically come from an API or CMS)
const blogData = {
  'what-is-metal-finishing': {
    title: "What Is Metal Finishing? A Beginner's Guide",
    date: "March 15, 2024",
    readTime: "5 min read",
    mainImage: "/images/blog/metal-finishing-guide.jpg",
    content: [
      {
        type: 'paragraph',
        content: "Metal finishing is a crucial process in manufacturing that enhances both the appearance and functionality of metal components..."
      },
      {
        type: 'image',
        src: "/images/blog/process-1.jpg",
        alt: "Metal Finishing Process",
        position: 'right'
      },
      {
        type: 'heading',
        content: "Why is Metal Finishing Important?"
      },
      {
        type: 'quote',
        content: "Metal finishing can increase a product's lifespan by up to 10 times while improving its aesthetic appeal."
      },
    ]
  },
  // Add other blog posts data here
};

export default function BlogPost() {
  const params = useParams();
  const blog = blogData[params.slug];

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="pt-32">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-[#0B1223]">
          <Image
            src={blog.mainImage}
            alt={blog.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
                {blog.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  {blog.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock />
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blogs */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-8"
            >
              <FaArrowLeft />
              Back to Blogs
            </Link>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content.map((section, index) => {
                switch (section.type) {
                  case 'paragraph':
                    return <p key={index} className="text-gray-600">{section.content}</p>;
                  case 'heading':
                    return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{section.content}</h2>;
                  case 'image':
                    return (
                      <div key={index} className={`my-8 ${section.position === 'right' ? 'float-right ml-8' : 'float-left mr-8'} w-1/3`}>
                        <Image
                          src={section.src}
                          alt={section.alt}
                          width={400}
                          height={300}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    );
                  case 'quote':
                    return (
                      <blockquote key={index} className="my-8 pl-6 border-l-4 border-orange-500 italic text-gray-700">
                        <FaQuoteRight className="text-orange-500 mb-2" />
                        {section.content}
                      </blockquote>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }) {
  // This would typically fetch data from your CMS or database
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
    keywords: ['metal finishing', 'surface treatment', 'anodizing', post.category.toLowerCase(), 'industrial coating'],
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