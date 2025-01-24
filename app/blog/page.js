import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaClock, FaArrowRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Blog data that would typically come from a CMS or database
const blogs = [
  {
    slug: 'what-is-metal-finishing',
    title: "What Is Metal Finishing? A Beginner's Guide",
    excerpt: "Discover the fundamentals of metal finishing processes and their crucial role in modern manufacturing...",
    image: "/images/blog1.jpg",
    readTime: "5 min read",
    category: "Educational",
    date: "2024-03-15"
  },
  {
    slug: 'types-of-metal-finishing',
    title: "Understanding Different Types of Metal Finishing Processes",
    excerpt: "Explore various metal finishing techniques from electroplating to powder coating...",
    image: "/images/blog2.jpg",
    readTime: "7 min read",
    category: "Educational",
    date: "2024-03-10"
  },
  {
    slug: 'choosing-right-process',
    title: "How to Choose the Right Metal Finishing Process",
    excerpt: "Learn the key factors to consider when selecting a metal finishing process for your project...",
    image: "/images/blog3.jpg",
    readTime: "6 min read",
    category: "Guide",
    date: "2024-03-05"
  },
  {
    slug: 'automation-in-finishing',
    title: "How Automation Is Revolutionizing Metal Finishing",
    excerpt: "Discover how robotics and AI are transforming the metal finishing industry...",
    image: "/images/blog4.jpg",
    readTime: "8 min read",
    category: "Technology",
    date: "2024-02-28"
  },
  {
    slug: 'latest-equipment',
    title: "The Latest Equipment Enhancing Metal Finishing Quality",
    excerpt: "Explore cutting-edge technologies that are setting new standards in metal finishing...",
        image: "/images/blog5.jpg",
    readTime: "6 min read",
    category: "Technology",
    date: "2024-02-20"
  },
  {
    slug: 'why-choose-us',
    title: "Why Choose Us for Your Metal Finishing Needs?",
    excerpt: "Discover what sets Modern Technologies apart in the metal finishing industry...",
    image: "/images/blog6.jpg",
    readTime: "4 min read",
    category: "Company",
    date: "2024-02-15"
  }
];

export default function BlogList() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0B1223]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1223]/90 to-[#0B1223]/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, Updates, and Expert Knowledge in Metal Finishing
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                href={`/blog/${blog.slug}`} 
                key={blog.slug}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-64">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                      {blog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <FaClock className="text-orange-500" />
                        {blog.readTime}
                      </span>
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 mb-4">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center text-orange-500 font-semibold group-hover:text-orange-600">
                      Read More 
                      <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 