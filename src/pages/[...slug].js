import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../app/globals.css";
import Head from "next/head";

// Map categories using IDs for dynamic display
const categoriesMap = {
  1: "GDC News",
  2: "GDC Team",
  3: "Uncategorized",
};

const BlogPost = ({ blog, recentArticles }) => {
  const router = useRouter();
  const [comments, setComments] = useState([]); // State to store fetched comments
  const [formData, setFormData] = useState({
    email: "",
    comment: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments(); // Fetch comments when the component mounts
  }, [blog.slug]);

  // Fetch comments related to the current blog post
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `/api/get-comments?formId=4712e0e3-c31d-482b-be76-3882c5ed3d77&slug=${blog.slug}`
      );
      const fetchedComments = await response.json();
      setComments(fetchedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to HubSpot
    const data = {
      fields: [
        { name: "email", value: formData.email },
        { name: "comment", value: formData.comment },
        { name: "blog_post_slug", value: blog.slug }, // Pass the slug to identify the post
      ],
    };

    try {
      const response = await axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}/${process.env.NEXT_PUBLIC_HUBSPOT_COMMENT_FORM_ID}`, // Use environment variables
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setMessage("Comment submitted successfully.");
        setError(null);
        fetchComments(); // Refresh comments after submission
        setFormData({ email: "", comment: "" }); // Clear form fields
      }
    } catch (error) {
      setMessage(null);
      setError("Error submitting comment. Please try again later.");
      console.error("Error submitting comment:", error);
    }
  };

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

  return (
    <>
      <Head>
        <title>{blog.htmlTitle} | GDC Consultants Blog</title>
        <meta
          name="description"
          content={
            blog.metaDescription ||
            "Read the latest blog post from GDC Consultants about architecture, engineering, and project management."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href={`https://www.gdcgroup.co.nz/blog/${blog.slug}`}
        />
      </Head>
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
            <h1 className="text-4xl text-customBlue font-bold">
              {blog.htmlTitle}
            </h1>
            <p className="text-gray-600 flex items-center gap-2 py-3">
              GDC Admin <span className="mx-1">•</span> {formattedDate}
            </p>
            <div className="relative w-full h-96 mb-6">
              <Image
                src={blog.featuredImage || "/images/default-blog.webp"}
                fill
                sizes="100vw"
                className="object-cover rounded-lg"
                alt={blog.featuredImageAltText || blog.htmlTitle}
              />
            </div>
            <div
              className="text-gray-700 text-justify mb-4 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: blog.postBody }}
            />

            {/* Leave a Reply Section */}
            <section className="mt-12">
              <h2 className="text-2xl text-customBlue font-bold mb-4">
                Leave a Reply
              </h2>
              <p className="text-gray-600 mb-4">
                Your email address will not be published. Required fields are
                marked *
              </p>

              {/* Display Success or Error Message */}
              {message && <p className="text-green-500 mb-4">{message}</p>}
              {error && <p className="text-red-500 mb-4">{error}</p>}

              {/* Custom Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700">Comment*</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-black"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-black"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-customBlue text-white rounded-md hover:bg-customYellow transition-colors"
                >
                  Submit
                </button>
              </form>
            </section>
          </article>

          {/* Sidebar with Recent Articles */}
          <aside className="space-y-6">
            <h2 className="text-xl text-customBlue font-bold">
              Recent articles
            </h2>
            {recentArticles.map((article, index) => (
              <Link
                href={`/${article.slug}`}
                key={index}
                className="flex items-center gap-4"
              >
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src={article.featuredImage || "/images/default-blog.webp"}
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
            <div className="p-4">
              <h2 className="text-xl text-customBlue font-bold mb-4">
                Recent Comments
              </h2>
              <ul className="list-none space-y-4">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <li key={index} className="flex space-x-3">
                      {/* <Image
                        src="/images/comment-avatar.webp" // Ensure the path is correct
                        alt="Avatar"
                        width={80} // Set the desired width
                        height={80} // Set the desired height
                        objectFit="cover" // Ensures the image fills the dimensions without distortion
                        objectPosition="center" // Centers the image within its bounding box
                        className="rounded-full" // Keeps the avatar shape rounded
                        priority // Optional: speeds up image loading, useful for critical images like avatars
                      /> */}

                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-semibold text-gray-800">
                            {comment.name || "Anonymous"}
                          </p>{" "}
                          {/* Display name or default to 'Anonymous' */}
                          <small className="text-xs text-gray-500">
                            {new Date(comment.submittedOn).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </small>
                        </div>
                        <p className="mt-1 text-gray-700">{comment.comment}</p>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}
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
