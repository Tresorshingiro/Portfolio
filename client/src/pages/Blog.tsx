import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogsApi } from '../services/api';
import { Blog } from '../types';

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogsApi.getAll();
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogs.flatMap(blog => blog.tags))
  );

  const filteredBlogs = selectedTag === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.tags.includes(selectedTag));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-gray-600">Loading blog posts...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Blog</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Thoughts, tutorials, and insights about web development, technology, 
              and my journey as a developer.
            </p>
          </motion.div>
        </div>
      </section>

      {blogs.length === 0 ? (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Coming Soon!</h2>
              <p className="text-lg text-gray-600 mb-12">
                I'm working on some exciting blog posts about web development, 
                tutorials, and my experiences. Check back soon for updates!
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Web Development Tutorials</h3>
                  <p className="text-gray-600">Step-by-step guides on React, Node.js, and full-stack development</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Tech Insights</h3>
                  <p className="text-gray-600">My thoughts on the latest technologies and development trends</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">📚 Learning Journey</h3>
                  <p className="text-gray-600">Sharing my experiences and lessons learned as a developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <>
          {/* Filter Section */}
          <section className="py-8 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 text-gray-700">
                  <Tag size={20} />
                  <span className="font-medium">Filter by tag:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === 'All'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedTag('All')}
                  >
                    All
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedTag === tag
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-600">
                  Showing {filteredBlogs.length} of {blogs.length} posts
                  {selectedTag !== 'All' && ` tagged with "${selectedTag}"`}
                </p>
              </motion.div>

              {filteredBlogs.length === 0 ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-gray-600">No blog posts found for the selected tag.</p>
                </motion.div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBlogs.map((blog, index) => (
                    <motion.article
                      key={blog._id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={blog.imageUrl} 
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{formatDate(blog.publishDate)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={16} />
                            <span>{calculateReadTime(blog.content)} min read</span>
                          </div>
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 mb-3">{blog.title}</h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {blog.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link 
                          to={`/blog/${blog._id}`}
                          className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors inline-flex items-center"
                        >
                          Read More →
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default BlogPage;
