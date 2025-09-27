import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Globe, 
  Settings,
  Layers,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "text-primary",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend",
    icon: Database,
    color: "text-secondary", 
    skills: ["Node.js", "Python", "REST APIs", "Express.js"]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "text-accent",
    skills: ["Flutter", "React Native", "Firebase", "Dart"]
  },
  {
    title: "Database",
    icon: Layers,
    color: "text-primary",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-secondary",
    skills: ["AWS", "Docker", "Vercel", "GitHub Actions"]
  },
  {
    title: "Tools",
    icon: Settings,
    color: "text-accent",
    skills: ["Git", "VS Code", "Figma", "Postman"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-primary/10 ${category.color} mr-3`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-muted/20 text-muted-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;