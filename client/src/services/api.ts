import axios from 'axios';
import { Project, Blog, ContactMessage } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Projects API
export const projectsApi = {
  getAll: () => api.get<Project[]>('/projects'),
  getFeatured: () => api.get<Project[]>('/projects/featured'),
  getById: (id: string) => api.get<Project>(`/projects/${id}`),
  create: (project: Omit<Project, '_id' | 'createdAt'>) => 
    api.post<Project>('/projects', project),
  update: (id: string, project: Partial<Project>) => 
    api.put<Project>(`/projects/${id}`, project),
  delete: (id: string) => api.delete(`/projects/${id}`),
};

// Blogs API
export const blogsApi = {
  getAll: () => api.get<Blog[]>('/blogs'),
  getAllIncludingUnpublished: () => api.get<Blog[]>('/blogs/all'),
  getById: (id: string) => api.get<Blog>(`/blogs/${id}`),
  create: (blog: Omit<Blog, '_id' | 'createdAt'>) => 
    api.post<Blog>('/blogs', blog),
  update: (id: string, blog: Partial<Blog>) => 
    api.put<Blog>(`/blogs/${id}`, blog),
  delete: (id: string) => api.delete(`/blogs/${id}`),
};

// Contact API
export const contactApi = {
  getAll: () => api.get<ContactMessage[]>('/contact'),
  getById: (id: string) => api.get<ContactMessage>(`/contact/${id}`),
  create: (message: Omit<ContactMessage, '_id' | 'isRead' | 'createdAt'>) => 
    api.post<{message: string; contact: ContactMessage}>('/contact', message),
  markAsRead: (id: string) => api.patch<ContactMessage>(`/contact/${id}/read`),
  delete: (id: string) => api.delete(`/contact/${id}`),
};

// Auth API
export const authApi = {
  login: (credentials: { email: string; password: string }) => 
    api.post<{ token: string; user: any; message: string }>('/auth/login', credentials),
  register: (userData: { username: string; email: string; password: string; role?: string }) =>
    api.post<{ token: string; user: any; message: string }>('/auth/register', userData),
  verify: () => api.get<{ user: any }>('/auth/verify'),
  logout: () => api.post('/auth/logout'),
  profile: () => api.get<any>('/auth/profile'),
};

// Admin API
export const adminApi = {
  // Stats
  getStats: () => api.get<{
    blogs: { total: number; published: number; draft: number };
    projects: number;
    messages: number;
  }>('/admin/stats'),

  // Blog management
  getBlogs: (page = 1, limit = 10) => 
    api.get<{ blogs: Blog[]; pagination: any }>(`/admin/blogs?page=${page}&limit=${limit}`),
  createBlog: (blog: Omit<Blog, '_id' | 'createdAt'>) => 
    api.post<Blog>('/admin/blogs', blog),
  updateBlog: (id: string, blog: Partial<Blog>) => 
    api.put<Blog>(`/admin/blogs/${id}`, blog),
  deleteBlog: (id: string) => api.delete(`/admin/blogs/${id}`),
  toggleBlogPublish: (id: string) => api.patch<Blog>(`/admin/blogs/${id}/toggle-publish`),

  // Project management
  getProjects: (page = 1, limit = 10) => 
    api.get<{ projects: Project[]; pagination: any }>(`/admin/projects?page=${page}&limit=${limit}`),
  createProject: (project: Omit<Project, '_id' | 'createdAt'>) => 
    api.post<Project>('/admin/projects', project),
  updateProject: (id: string, project: Partial<Project>) => 
    api.put<Project>(`/admin/projects/${id}`, project),
  deleteProject: (id: string) => api.delete(`/admin/projects/${id}`),

  // Message management
  getMessages: (page = 1, limit = 10) => 
    api.get<{ messages: ContactMessage[]; unread: number; pagination: any }>(`/admin/messages?page=${page}&limit=${limit}`),
  markMessageAsRead: (id: string) => api.patch<ContactMessage>(`/admin/messages/${id}/read`),
  deleteMessage: (id: string) => api.delete(`/admin/messages/${id}`),
};
