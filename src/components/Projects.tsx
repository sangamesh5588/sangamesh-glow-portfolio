import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskAppImg from "@/assets/project-taskapp.jpg";
import chatImg from "@/assets/project-chat.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import socialImg from "@/assets/project-social.jpg";
import expenseImg from "@/assets/project-expense.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, admin dashboard, and inventory management. Built with React, Node.js, and MySQL.",
    image: ecommerceImg,
    tech: ["React", "Node.js", "Express", "MySQL", "Stripe", "Redux"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Cross-platform mobile app for task and project management with real-time sync and team collaboration features.",
    image: taskAppImg,
    tech: ["Flutter", "Firebase", "Provider", "Cloud Functions"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 3,
    title: "Real-Time Chat App",
    description: "WebSocket-based chat application with rooms, file sharing, and message encryption. Scalable architecture with Redis.",
    image: chatImg,
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, charts, and weather alerts using multiple APIs.",
    image: weatherImg,
    tech: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "Full-featured social networking platform with posts, messaging, stories, and advanced privacy controls.",
    image: socialImg,
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3", "WebRTC"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "Personal finance management app with budget tracking, expense categorization, and financial insights dashboard.",
    image: expenseImg,
    tech: ["Python", "Django", "PostgreSQL", "Chart.js", "Bootstrap"],
    github: "#",
    live: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in web development, mobile apps, and full-stack solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`glass-card overflow-hidden hover-lift group ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/90 backdrop-blur-sm border-primary/50 hover:bg-primary/20"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-primary text-primary-foreground"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-muted-foreground/20 hover:border-primary/50"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary text-primary-foreground"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;