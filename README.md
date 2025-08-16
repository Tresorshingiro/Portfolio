# 🚀 Tresor Shingiro - Full Stack Portfolio

A modern, responsive full-stack portfolio website showcasing my projects, skills, and professional journey. Built with the MERN stack and deployed with modern DevOps practices.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

## 🌟 Live Demo

- **Frontend**: [https://tresorshingiro.vercel.app](https://tresorshingiro.vercel.app)
- **Admin Panel**: [https://tresorshingiro.vercel.app/admin](https://tresorshingiro.vercel.app/admin)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Admin Panel](#admin-panel)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [Contact](#contact)

## ✨ Features

### 🎨 Frontend Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive UI** - Smooth animations with Framer Motion
- **Dynamic Content** - Projects and blogs fetched from REST API
- **Modern Routing** - Client-side routing with React Router
- **Performance Optimized** - Code splitting and lazy loading
- **SEO Friendly** - Proper meta tags and semantic HTML

### ⚙️ Backend Features
- **RESTful API** - Complete CRUD operations for projects and blogs
- **Authentication** - JWT-based admin authentication with bcrypt
- **Database Management** - MongoDB with Mongoose ODM
- **Security** - CORS, environment variables, and input validation
- **Admin Dashboard** - Full content management system

### 📱 Pages & Sections
- **Home** - Hero section with featured projects
- **About** - Professional story and skills showcase
- **Projects** - Filterable project gallery with live demos
- **Blog** - Technical articles and insights
- **Contact** - Contact form with email integration
- **Admin Panel** - Protected dashboard for content management

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### DevOps & Deployment
- **Vercel** - Frontend deployment
- **Render** - Backend deployment
- **Git & GitHub** - Version control
- **Environment Variables** - Secure configuration management

## 📁 Project Structure

```
Portfolio/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   │   └── images/        # Project images
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript interfaces
│   │   └── assets/        # Images and files
│   ├── vercel.json        # Vercel deployment config
│   └── package.json
├── backend/               # Backend Node.js application
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── server.js         # Main server file
│   ├── seedProjects.js   # Database seeding
│   ├── seedBlogs.js      # Blog seeding
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tresorshingiro/Portfolio.git
   cd Portfolio
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Add your environment variables (see Environment Variables section)
   
   # Seed the database
   node seedProjects.js
   node seedBlogs.js
   node createAdmin.js
   
   # Start development server
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   
   # Create .env file
   echo "VITE_API_URL=http://localhost:5000/api" > .env
   
   # Start development server
   npm run dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`
   - Admin Panel: `http://localhost:5173/admin`

## 🌐 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_URL`

### Backend (Render)
1. Create new Web Service on Render
2. Connect GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add all environment variables

### Client-side Routing Fix
The `vercel.json` file ensures that routes like `/admin` work correctly:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📚 API Documentation

### Base URL
```
Production: https://<your-backend-url>.onrender.com/api
Development: http://localhost:5000/api
```

### Authentication
```http
POST /auth/login
Content-Type: application/json

{
  "email": "<admin-email>",
  "password": "<admin-password>"
}
```

### Projects
```http
GET    /projects           # Get all projects
GET    /projects/featured  # Get featured projects
POST   /projects           # Create project (auth required)
PUT    /projects/:id       # Update project (auth required)
DELETE /projects/:id       # Delete project (auth required)
```

### Blogs
```http
GET    /blogs              # Get published blogs
GET    /blogs/all          # Get all blogs (auth required)
POST   /blogs              # Create blog (auth required)
PUT    /blogs/:id          # Update blog (auth required)
DELETE /blogs/:id          # Delete blog (auth required)
```

### Contact
```http
POST   /contact            # Send contact message
GET    /contact            # Get all messages (auth required)
```

## 🔐 Admin Panel

Access the admin panel at `/admin` with the following features:

### 🎛️ Dashboard
- Project statistics
- Blog statistics
- Recent activity overview

### 📊 Content Management
- **Projects**: Add, edit, delete, and toggle featured status
- **Blogs**: Create, edit, delete, and manage publication status
- **Messages**: View and manage contact form submissions

### 🔒 Authentication
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected routes and middleware

### Admin Credentials
- **Email**: Set via environment variables
- **Password**: Set via environment variables

## 🔧 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
PORT=5000
NODE_ENV=production
JWT_SECRET=<your-super-secret-jwt-key>
ADMIN_EMAIL=<your-admin-email>
ADMIN_PASSWORD=<your-secure-password>
ADMIN_USERNAME=<your-admin-username>
```

### Frontend
Set in Vercel dashboard or local .env:
```env
VITE_API_URL=https://<your-backend-url>.onrender.com/api
```

## 🎨 Key Features Showcase

### Interactive Project Gallery
- Filterable by technology
- Hover animations
- Live demo and GitHub links
- Featured project highlighting

### Dynamic Blog System
- Markdown content support
- "Read More" functionality
- Publication status management
- Responsive article layout

### Responsive Design
- Mobile-first approach
- Tailwind CSS utilities
- Smooth animations
- Cross-browser compatibility

### Performance Optimizations
- Image optimization
- Code splitting
- Lazy loading
- Efficient API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 🐛 Known Issues & Solutions

### Routing Issues
If direct URLs like `/admin` return 404:
- Ensure `vercel.json` is properly configured
- Check Vercel deployment settings

### API Connection Issues
- Verify `VITE_API_URL` environment variable
- Check CORS settings in backend
- Ensure backend is deployed and accessible

## 📈 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog search functionality
- [ ] Project filtering improvements
- [ ] Performance monitoring
- [ ] Analytics integration
- [ ] Email newsletter signup
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Tresor Shingiro**
- 🌐 Website: [https://tresorshingiro.vercel.app](https://tresorshingiro.vercel.app)
- 📧 Email: [tresorshingiro26@gmail.com](mailto:tresorshingiro26@gmail.com)
- 💼 LinkedIn: [Tresor Shingiro](https://www.linkedin.com/in/tresor-shingiro-5706042ab)
- 🐱 GitHub: [@Tresorshingiro](https://github.com/Tresorshingiro)

---

⭐ **If you like this project, please give it a star!** ⭐

Built with ❤️ by [Tresor Shingiro](https://github.com/Tresorshingiro)
