export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface Blog {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
  published: boolean;
  publishDate: string;
  createdAt: string;
}

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read?: boolean;
  readAt?: string;
  createdAt?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
}
