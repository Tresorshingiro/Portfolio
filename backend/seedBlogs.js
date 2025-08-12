const mongoose = require('mongoose');
const Blog = require('./models/Blog');
require('dotenv').config();

const blogs = [
  {
    title: "Getting Started with React and TypeScript",
    content: `# Getting Started with React and TypeScript

React and TypeScript make a powerful combination for building robust web applications. TypeScript adds static type checking to JavaScript, helping catch errors early and improving code quality.

## Why Use TypeScript with React?

1. **Type Safety**: Catch errors at compile time rather than runtime
2. **Better IDE Support**: Enhanced autocomplete and refactoring
3. **Self-Documenting Code**: Types serve as documentation
4. **Easier Refactoring**: Large codebases become more maintainable

## Setting Up a React TypeScript Project

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

## Basic Component Example

\`\`\`tsx
import React from 'react';

interface Props {
  name: string;
  age: number;
}

const UserCard: React.FC<Props> = ({ name, age }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
\`\`\`

TypeScript helps ensure that components receive the correct props and helps prevent common React bugs. Start incorporating TypeScript into your React projects today!`,
    excerpt: "Learn how to combine React with TypeScript for better type safety and developer experience. Perfect for beginners looking to level up their React skills.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "TypeScript", "JavaScript", "Web Development"],
    published: true,
    publishDate: new Date('2024-01-15')
  },
  {
    title: "Modern CSS Techniques: Grid and Flexbox",
    content: `# Modern CSS Techniques: Grid and Flexbox

CSS Grid and Flexbox are two powerful layout systems that have revolutionized how we create layouts in modern web development. Understanding when and how to use each one is crucial for any frontend developer.

## CSS Flexbox

Flexbox is perfect for one-dimensional layouts - either rows or columns.

### Key Flexbox Properties

\`\`\`css
.flex-container {
  display: flex;
  justify-content: center; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  gap: 1rem;
}
\`\`\`

### Common Flexbox Patterns

1. **Centering Content**
\`\`\`css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

2. **Equal Height Cards**
\`\`\`css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1; /* Equal width */
}
\`\`\`

## CSS Grid

Grid is ideal for two-dimensional layouts with rows and columns.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## When to Use Which?

- **Use Flexbox**: Navigation bars, card layouts, centering content
- **Use Grid**: Complex layouts, magazine-style designs, dashboard layouts

Both Grid and Flexbox work great together - use Grid for the overall page layout and Flexbox for component layouts!`,
    excerpt: "Master CSS Grid and Flexbox to create beautiful, responsive layouts. Learn when to use each technique and see practical examples.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["CSS", "Flexbox", "Grid", "Frontend", "Responsive Design"],
    published: true,
    publishDate: new Date('2024-02-10')
  },
  {
    title: "Building RESTful APIs with Node.js and Express",
    content: `# Building RESTful APIs with Node.js and Express

Node.js and Express provide a powerful combination for building scalable REST APIs. In this guide, we'll cover the fundamentals of creating robust APIs.

## Setting Up Express

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## RESTful Route Structure

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get single user |
| POST | /api/users | Create new user |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

## Error Handling Middleware

\`\`\`javascript
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: error.message
  });
});
\`\`\`

## Database Integration

Using MongoDB with Mongoose:

\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
\`\`\`

## Best Practices

1. Use proper HTTP status codes
2. Implement input validation
3. Handle errors gracefully
4. Use middleware for common functionality
5. Document your API endpoints

Building RESTful APIs is essential for modern web development. Start with these fundamentals and gradually add more advanced features!`,
    excerpt: "Learn how to build robust RESTful APIs using Node.js and Express. Covers routing, middleware, error handling, and best practices.",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tags: ["Node.js", "Express", "API", "Backend", "JavaScript"],
    published: true,
    publishDate: new Date('2024-02-20')
  },
  {
    title: "Introduction to MongoDB and Database Design",
    content: `# Introduction to MongoDB and Database Design

MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It's perfect for modern applications that need to handle diverse data types.

## Why Choose MongoDB?

1. **Flexible Schema**: Documents can have different structures
2. **Scalability**: Built-in support for horizontal scaling
3. **Rich Query Language**: Powerful aggregation framework
4. **Developer Friendly**: Works naturally with JavaScript/JSON

## Basic MongoDB Operations

### Connecting to MongoDB

\`\`\`javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));
\`\`\`

### Creating a Schema

\`\`\`javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
\`\`\`

### CRUD Operations

\`\`\`javascript
// Create
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 25
});
await newUser.save();

// Read
const users = await User.find({ age: { $gte: 18 } });
const user = await User.findById(userId);

// Update
await User.findByIdAndUpdate(userId, { age: 26 });

// Delete
await User.findByIdAndDelete(userId);
\`\`\`

## Database Design Best Practices

1. **Embed vs Reference**: Embed related data that's accessed together
2. **Indexing**: Create indexes on frequently queried fields
3. **Validation**: Use schema validation to ensure data integrity
4. **Aggregation**: Use MongoDB's powerful aggregation pipeline

MongoDB offers great flexibility while maintaining performance. It's an excellent choice for modern web applications!`,
    excerpt: "Get started with MongoDB and learn database design principles. Covers schema design, CRUD operations, and best practices for NoSQL databases.",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80",
    tags: ["MongoDB", "Database", "NoSQL", "Backend", "Data Modeling"],
    published: true,
    publishDate: new Date('2024-03-05')
  },
  {
    title: "Responsive Web Design with Tailwind CSS",
    content: `# Responsive Web Design with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that makes it easy to build responsive, modern websites. Let's explore how to create responsive designs efficiently.

## Why Tailwind CSS?

1. **Utility-First**: Compose designs using utility classes
2. **Responsive by Design**: Built-in responsive breakpoints
3. **Customizable**: Easily customize design system
4. **Performance**: Only includes CSS you actually use

## Responsive Breakpoints

Tailwind uses a mobile-first approach:

\`\`\`html
<!-- Mobile first approach -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on medium, third on large -->
</div>
\`\`\`

| Prefix | Min Width | CSS |
|--------|-----------|-----|
| sm | 640px | @media (min-width: 640px) |
| md | 768px | @media (min-width: 768px) |
| lg | 1024px | @media (min-width: 1024px) |
| xl | 1280px | @media (min-width: 1280px) |
| 2xl | 1536px | @media (min-width: 1536px) |

## Common Responsive Patterns

### Responsive Grid

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow">Card 1</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 2</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 3</div>
</div>
\`\`\`

### Responsive Typography

\`\`\`html
<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>
<p class="text-sm md:text-base lg:text-lg text-gray-600">
  Responsive paragraph text
</p>
\`\`\`

### Hide/Show on Different Screens

\`\`\`html
<!-- Show on mobile, hide on desktop -->
<div class="block md:hidden">
  Mobile menu
</div>

<!-- Hide on mobile, show on desktop -->
<nav class="hidden md:block">
  Desktop navigation
</nav>
\`\`\`

## Advanced Responsive Techniques

### Container Queries (coming soon)
### Responsive Images
### Flexible Layouts

\`\`\`html
<img class="w-full h-48 md:h-64 lg:h-80 object-cover" 
     src="image.jpg" 
     alt="Responsive image" />
\`\`\`

Tailwind CSS makes responsive design intuitive and efficient. Start with mobile-first design and progressively enhance for larger screens!`,
    excerpt: "Master responsive web design using Tailwind CSS. Learn mobile-first design principles, breakpoints, and common responsive patterns.",
    imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
    tags: ["Tailwind CSS", "Responsive Design", "CSS", "Frontend", "Web Development"],
    published: true,
    publishDate: new Date('2024-03-15')
  }
];

async function seedBlogs() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('Cleared existing blogs');

    // Insert dummy blogs
    await Blog.insertMany(blogs);
    console.log(`Successfully seeded ${blogs.length} blogs`);

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding blogs:', error);
    process.exit(1);
  }
}

seedBlogs();
