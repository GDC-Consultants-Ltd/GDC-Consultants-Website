// pages/blogs/[slug].js
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../../app/globals.css";

// Sample data for blog posts with categories
const blogPosts = {
  coffee: {
    title: "Little Things Do Make A Difference",
    content:
      "Why do you want to motivate yourself? Actually, just answering that question fully can be one of the better ways to get your daily motivation.",
    backgroundImage: "/images/projects/1.webp",
    author: "Kathryn Shelton",
    authorImage: "/images/authors/kathryn.webp",
    date: "September 14, 2024",
    category: "GDC News",
  },
  // Add other blog data here...
};

const recentArticles = [
  {
    title: "Common Symbols And Their Meanings",
    author: "Susie Russell",
    authorImage: "/images/authors/susie.webp",
    image: "/images/projects/2.webp",
    link: "/blogs/common-symbols",
  },
  {
    title: "Success Steps For Your Business",
    author: "Connor Parsons",
    authorImage: "/images/authors/connor.webp",
    image: "/images/projects/3.webp",
    link: "/blogs/success-steps",
  },
  {
    title: "The Strength Of Your Belief",
    author: "Jonathan Yates",
    authorImage: "/images/authors/jonathan.webp",
    image: "/images/projects/4.webp",
    link: "/blogs/strength-belief",
  },
];

// Sample data for recent comments
const recentComments = [
  {
    author: "Dhaval Manjrawalla",
    content:
      "A Day in the Life with Rojesh Koshy – Operation Manager/Civil Engineer",
    link: "/blogs/day-in-life-rojash",
  },
];

// Define categories list
const categories = ["GDC News", "GDC Team", "Uncategorized"];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogPosts[slug];

  // Return loading state if data is not available yet
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        {/* Categories section */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <nav className="flex space-x-10">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`#`} // Link to the appropriate category or filter page if available
                className={`text-md font-medium hover:text-customYellow ${
                  category === blog.category
                    ? "text-customBlue"
                    : "text-gray-700"
                }`}
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>

        <main className="max-w-7xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
          {/* Main Blog Content */}
          <article className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="relative w-full h-96 mb-6">
              <Image
                src={blog.backgroundImage}
                fill
                sizes="100vw"
                className="object-cover rounded-lg"
                alt={blog.title}
              />
            </div>
            <p className="text-gray-700 mb-4">{blog.content}</p>
            <div className="flex items-center mt-6">
              <Image
                src={blog.authorImage}
                alt={blog.author}
                width={40} // Set the width of the image
                height={40} // Set the height of the image
                className="rounded-full" // Add any additional classes like rounded corners
              />
              <span className="ml-3 text-gray-800">{blog.author}</span>
            </div>

            {/* Leave a Reply Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
              <p className="text-gray-600 mb-4">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Comment *</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Website</label>
                    <input
                      type="url"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-customBlue text-white rounded-md hover:bg-customYellow transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </section>
          </article>

          {/* Sidebar with Recent Articles and Recent Comments */}
          <aside className="space-y-6">
            <h2 className="text-xl font-bold">Recent articles</h2>
            {recentArticles.map((article, index) => (
              <Link
                href={article.link}
                key={index}
                className="flex items-center gap-4"
              >
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src={article.image}
                    fill
                    sizes="100vw"
                    className="object-cover rounded-md"
                    alt={article.title}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500">{article.author}</p>
                </div>
              </Link>
            ))}

            {/* Recent Comments Section */}
            <div>
              <h2 className="text-xl font-bold">Recent Comments</h2>
              <ul className="list-disc pl-5">
                {recentComments.map((comment, index) => (
                  <li key={index} className="text-gray-700">
                    <Link href={comment.link}>
                      <span className="font-semibold">{comment.author}</span> on{" "}
                      {comment.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BlogPost;
