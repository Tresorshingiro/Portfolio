import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, EyeOff, BarChart3, MessageSquare, FolderOpen, LogOut } from 'lucide-react';
import { adminApi } from '../services/api';
import { Blog, Project, ContactMessage } from '../types';
import BlogForm from '../components/BlogForm';
import ProjectForm from '../components/ProjectForm';

interface AdminStats {
  blogs: {
    total: number;
    published: number;
    draft: number;
  };
  projects: number;
  messages: number;
}

const AdminPage: React.FC<{ user?: any; onLogout?: () => void }> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'blogs' | 'projects' | 'messages'>('dashboard');
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  
  // Form states
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    switch (activeTab) {
      case 'blogs':
        fetchBlogs();
        break;
      case 'projects':
        fetchProjects();
        break;
      case 'messages':
        fetchMessages();
        break;
    }
  }, [activeTab]);

  const fetchStats = async () => {
    try {
      const response = await adminApi.getStats();
      setStats(response.data);
      setError('');
    } catch (error: any) {
      console.error('Error fetching stats:', error);
      setError('Failed to load dashboard stats. Please check your authentication.');
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await adminApi.getBlogs();
      setBlogs(response.data.blogs);
      setError('');
    } catch (error: any) {
      console.error('Error fetching blogs:', error);
      setError('Failed to load blogs.');
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await adminApi.getProjects();
      setProjects(response.data.projects);
      setError('');
    } catch (error: any) {
      console.error('Error fetching projects:', error);
      setError('Failed to load projects.');
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await adminApi.getMessages();
      setMessages(response.data.messages);
      setError('');
    } catch (error: any) {
      console.error('Error fetching messages:', error);
      setError('Failed to load messages.');
    }
  };

  const toggleBlogPublish = async (blogId: string) => {
    try {
      await adminApi.toggleBlogPublish(blogId);
      fetchBlogs();
      fetchStats();
    } catch (error: any) {
      console.error('Error toggling blog publish status:', error);
      setError('Failed to update blog status.');
    }
  };

  const deleteBlog = async (blogId: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await adminApi.deleteBlog(blogId);
        fetchBlogs();
        fetchStats();
      } catch (error: any) {
        console.error('Error deleting blog:', error);
        setError('Failed to delete blog.');
      }
    }
  };

  const deleteProject = async (projectId: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await adminApi.deleteProject(projectId);
        fetchProjects();
        fetchStats();
      } catch (error: any) {
        console.error('Error deleting project:', error);
        setError('Failed to delete project.');
      }
    }
  };

  const markMessageAsRead = async (messageId: string) => {
    try {
      await adminApi.markMessageAsRead(messageId);
      fetchMessages();
      fetchStats();
    } catch (error: any) {
      console.error('Error marking message as read:', error);
      setError('Failed to mark message as read.');
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await adminApi.deleteMessage(messageId);
        fetchMessages();
        fetchStats();
      } catch (error: any) {
        console.error('Error deleting message:', error);
        setError('Failed to delete message.');
      }
    }
  };

  // Blog CRUD functions
  const handleSaveBlog = async (blogData: any) => {
    try {
      if (editingBlog) {
        await adminApi.updateBlog(editingBlog._id, blogData);
      } else {
        await adminApi.createBlog(blogData);
      }
      fetchBlogs();
      fetchStats();
      setEditingBlog(null);
    } catch (error: any) {
      throw error;
    }
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setShowBlogForm(true);
  };

  const handleCloseBlogForm = () => {
    setShowBlogForm(false);
    setEditingBlog(null);
  };

  // Project CRUD functions
  const handleSaveProject = async (projectData: any) => {
    try {
      if (editingProject) {
        await adminApi.updateProject(editingProject._id, projectData);
      } else {
        await adminApi.createProject(projectData);
      }
      fetchProjects();
      fetchStats();
      setEditingProject(null);
    } catch (error: any) {
      throw error;
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setShowProjectForm(true);
  };

  const handleCloseProjectForm = () => {
    setShowProjectForm(false);
    setEditingProject(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your portfolio content and messages</p>
            </div>
            {onLogout && (
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            )}
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="mb-8">
            <nav className="flex space-x-8">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                { id: 'blogs', label: 'Blogs', icon: FolderOpen },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'messages', label: 'Messages', icon: MessageSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-emerald-600 text-white'
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    <Icon size={20} className="mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <>
              {stats ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Blogs</h3>
                    <p className="text-3xl font-bold text-emerald-600">{stats.blogs.total}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      {stats.blogs.published} published, {stats.blogs.draft} draft
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects</h3>
                    <p className="text-3xl font-bold text-blue-600">{stats.projects}</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Messages</h3>
                    <p className="text-3xl font-bold text-purple-600">{stats.messages}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                  <p className="text-gray-500">Unable to load dashboard statistics. Please check your authentication.</p>
                </div>
              )}
            </>
          )}

          {/* Blogs Tab */}
          {activeTab === 'blogs' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
                <button 
                  onClick={() => setShowBlogForm(true)}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
                >
                  <Plus size={20} className="mr-2" />
                  New Blog
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogs.map((blog) => (
                      <tr key={blog._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                            <div className="text-sm text-gray-500">{blog.excerpt.substring(0, 100)}...</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              blog.published
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {blog.published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(blog.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => toggleBlogPublish(blog._id)}
                              className={`p-2 rounded-lg transition-colors ${
                                blog.published
                                  ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                                  : 'text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100'
                              }`}
                            >
                              {blog.published ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                            <button 
                              onClick={() => handleEditBlog(blog)}
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-2 rounded-lg transition-colors"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => deleteBlog(blog._id)}
                              className="text-red-600 hover:text-red-800 hover:bg-red-100 p-2 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                <button 
                  onClick={() => setShowProjectForm(true)}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
                >
                  <Plus size={20} className="mr-2" />
                  New Project
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {projects.map((project) => (
                  <div key={project._id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description.substring(0, 100)}...</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{formatDate(project.createdAt)}</span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleEditProject(project)}
                            className="text-blue-600 hover:text-blue-800 p-1 rounded transition-colors"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => deleteProject(project._id)}
                            className="text-red-600 hover:text-red-800 p-1 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <div key={message._id} className={`p-6 ${!message.read ? 'bg-blue-50' : ''}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{message.subject}</h3>
                        <p className="text-sm text-gray-600">
                          From: {message.name} ({message.email})
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{message.createdAt ? formatDate(message.createdAt) : 'No date'}</span>
                        {!message.read && (
                          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{message.message}</p>
                    <div className="flex space-x-3">
                      {!message.read && message._id && (
                        <button
                          onClick={() => markMessageAsRead(message._id!)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                        >
                          Mark as Read
                        </button>
                      )}
                      {message._id && (
                        <button
                          onClick={() => deleteMessage(message._id!)}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Blog Form Modal */}
      <BlogForm
        blog={editingBlog}
        onSave={handleSaveBlog}
        onClose={handleCloseBlogForm}
        isOpen={showBlogForm}
      />

      {/* Project Form Modal */}
      <ProjectForm
        project={editingProject}
        onSave={handleSaveProject}
        onClose={handleCloseProjectForm}
        isOpen={showProjectForm}
      />
    </div>
  );
};

export default AdminPage;
