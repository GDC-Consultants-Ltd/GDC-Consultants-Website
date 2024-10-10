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
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    comment: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (blog?.slug) {
      fetchComments();
    }
  }, [blog?.slug]);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fields: [
        { name: "email", value: formData.email },
        { name: "comment", value: formData.comment },
        { name: "blog_post_slug", value: blog.slug },
      ],
    };

    try {
      const response = await axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}/${process.env.NEXT_PUBLIC_HUBSPOT_COMMENT_FORM_ID}`,
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
        fetchComments();
        setFormData({ email: "", comment: "" });
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
          href={`https://gdcgroup.netlify.app/blog/${blog.slug}`}
        />
      </Head>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <main className="max-w-7xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
          <article className="lg:col-span-2">
            <h1 className="text-4xl text-customBlue font-bold">{blog.name}</h1>
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

            <section className="mt-12">
              <h2 className="text-2xl text-customBlue font-bold mb-4">
                Leave a Reply
              </h2>
              <p className="text-gray-600 mb-4">
                Your email address will not be published. Required fields are
                marked *
              </p>

              {message && <p className="text-green-500 mb-4">{message}</p>}
              {error && <p className="text-red-500 mb-4">{error}</p>}

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

          <aside className="space-y-6">
            <h2 className="text-xl text-customBlue font-bold">Recent articles</h2>
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
                  <p className="text-sm text-gray-500">Bethany Rutter</p>
                </div>
              </Link>
            ))}

            <div className="p-4">
              <h2 className="text-xl text-customBlue font-bold mb-4">
                Recent Comments
              </h2>
              <ul className="list-none space-y-4">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <li key={index} className="flex space-x-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-semibold text-gray-800">
                            {comment.name || "Anonymous"}
                          </p>
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

export async function getStaticPaths() {
  try {
    const res = await axios.get(`https://api.hubapi.com/cms/v3/blogs/posts`, {
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_BLOG_MANAGER_API_KEY}`,
      },
      params: {
        limit: 100,
        state: "published",
      },
    });

    const paths = res.data.results.map((post) => ({
      params: { slug: post.slug.split("/") },
    }));

    return {
      paths,
      fallback: false, // Disable ISR and pre-render all paths during build
    };
  } catch (error) {
    console.error("Error fetching blog posts for paths:", error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  const slugPath = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;

  try {
    const res = await axios.get(`https://api.hubapi.com/cms/v3/blogs/posts`, {
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_BLOG_MANAGER_API_KEY}`,
      },
      params: {
        limit: 10,
        state: "published",
      },
    });

    if (!res.data.results || res.data.results.length === 0) {
      return { notFound: true };
    }

    const blog = res.data.results.find((post) => post.slug === slugPath);

    if (!blog) {
      return { notFound: true };
    }

    const recentArticles = res.data.results
      .filter((post) => post.slug !== slugPath)
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .slice(0, 3)
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
