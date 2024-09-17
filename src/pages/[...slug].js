// pages/[...slug].js
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../app/globals.css";

// Sample data for recent comments (replace with real data or dynamic fetching as needed)
const recentComments = [
  {
    author: "Dhaval Manjrawalla",
    content:
      "A Day in the Life with Rojesh Koshy – Operation Manager/Civil Engineer",
    link: "/blogs/day-in-life-rojash",
  },
];

// Map categories using IDs for dynamic display
const categoriesMap = {
  1: "GDC News",
  2: "GDC Team",
  3: "Uncategorized",
};

const BlogPost = ({ blog, recentArticles }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Format publish date to MM/DD/YYYY format
  const formattedDate = new Date(blog.publishDate).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  // Get category name dynamically based on the categoryId from the API
  const categoryName = categoriesMap[blog.categoryId] || "Uncategorized";

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        {/* Categories section */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <nav className="flex space-x-10">
            {Object.entries(categoriesMap).map(([id, name]) => (
              <Link
                key={id}
                href={`#`}
                className={`text-md font-medium hover:text-customYellow ${
                  Number(id) === blog.categoryId
                    ? "text-customBlue"
                    : "text-gray-700"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>

        <main className="max-w-7xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
          {/* Main Blog Content */}
          <article className="lg:col-span-2">
            <h1 className="text-4xl font-bold">{blog.htmlTitle}</h1>
            <p className="text-gray-600 flex items-center gap-2 py-3">
              {blog.authorName} <span className="mx-1">•</span> {formattedDate}
            </p>
            <div className="relative w-full h-96 mb-6">
              <Image
                src={blog.featuredImage || "/images/projects/default.jpg"}
                fill
                sizes="100vw"
                className="object-cover rounded-lg"
                alt={blog.featuredImageAltText || blog.htmlTitle}
              />
            </div>
            <div
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: blog.postBody }}
            />

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
                href={`/${article.slug}`}
                key={index}
                className="flex items-center gap-4"
              >
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src={
                      article.featuredImage || "/images/projects/default.jpg"
                    }
                    fill
                    sizes="100vw"
                    className="object-cover rounded-md"
                    alt={article.name}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {article.name}
                  </h3>
                  <p className="text-sm text-gray-500">{article.authorName}</p>
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

export async function getServerSideProps({ params }) {
  const slugPath = params.slug.join("/"); // Join the slug parts to form the complete path

  try {
    // Fetch the data from your HubSpot API
    const res = await axios.get(`https://api.hubapi.com/cms/v3/blogs/posts`, {
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_BLOG_MANAGER_API_KEY}`,
      },
      params: {
        limit: 10, // Adjust the limit as needed
        state: "published",
      },
    });

    // Check if any blogs exist
    if (!res.data.results || res.data.results.length === 0) {
      return { notFound: true };
    }

    // Fetch the specific blog by slug
    const blog = res.data.results.find((post) => post.slug === slugPath);

    // Map recent articles to include necessary fields for display
    const recentArticles = res.data.results
      .filter((post) => post.slug !== slugPath) // Exclude the current post
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate)) // Sort by publish date
      .slice(0, 3) // Get the top 3 recent articles
      .map((post) => ({
        name: post.name,
        authorName: post.authorName || "Unknown Author",
        featuredImage: post.featuredImage,
        slug: post.slug,
      }));

    return {
      props: {
        blog,
        recentArticles,
      },
    };
  } catch (error) {
    console.error("Error fetching the blog post:", error);
    return { notFound: true };
  }
}

export default BlogPost;
