const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

const seedProjects = async () => {
  try {
    // Clear existing projects
    await Project.deleteMany();

    const projects = [
      {
        title: "AutoHub",
        description: "A comprehensive automotive platform for car enthusiasts and dealers. Features include vehicle listings, detailed specifications, and user reviews.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        imageUrl: "/src/assets/autohub.PNG",
        liveUrl: "https://autohub-sigma.vercel.app",
        githubUrl: "",
        featured: true
      },
      {
        title: "MediConnect",
        description: "A healthcare management system connecting patients with healthcare providers. Features appointment scheduling, patient records, and telemedicine capabilities.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        imageUrl: "/src/assets/mediconnect.PNG",
        liveUrl: "https://mediconnect-three.vercel.app",
        githubUrl: "",
        featured: true
      },
      {
        title: "Cinema Show",
        description: "A movie discovery platform where users can explore movies, watch trailers, and read reviews. Features trending movies, search functionality, and user ratings.",
        technologies: ["React", "Redux", "TMDb API", "CSS3"],
        imageUrl: "/src/assets/cinemashow.PNG",
        liveUrl: "https://cinema-show.vercel.app",
        githubUrl: "",
        featured: true
      },
      {
        title: "Real-time Chat Application",
        description: "A modern chat application with real-time messaging, user authentication, and group chat functionality. Built with Socket.io for instant communication.",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
        imageUrl: "/src/assets/chatapp.PNG",
        liveUrl: "https://chat-app-sand-kappa.vercel.app/login",
        githubUrl: "",
        featured: false
      },
      {
        title: "Umuheto",
        description: "A digital platform for community engagement and social networking. Features user profiles, posts, comments, and community building tools.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        imageUrl: "/src/assets/umuheto.PNG",
        liveUrl: "https://umuheto.onrender.com",
        githubUrl: "",
        featured: false
      },
      {
        title: "Ikirere Bot",
        description: "An intelligent chatbot designed to provide automated customer support and assistance. Features natural language processing and contextual responses.",
        technologies: ["Python", "NLP", "Flask", "Machine Learning"],
        imageUrl: "/src/assets/ikirerebot.PNG",
        liveUrl: "https://ikirerebot.onrender.com",
        githubUrl: "",
        featured: false
      }
    ];

    await Project.insertMany(projects);
    console.log('Projects seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding projects:', error);
    process.exit(1);
  }
};

seedProjects();
