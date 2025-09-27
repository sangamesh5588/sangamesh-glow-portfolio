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
    title: "Frontend Development",
    icon: Globe,
    color: "text-primary",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 80 },
      { name: "JavaScript", level: 95 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-secondary",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "Django", level: 80 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "text-accent",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Dart", level: 90 },
      { name: "iOS Development", level: 70 },
      { name: "Android", level: 75 },
      { name: "Firebase", level: 90 }
    ]
  },
  {
    title: "Database & Storage",
    icon: Layers,
    color: "text-primary",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Supabase", level: 90 },
      { name: "Firebase", level: 85 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-secondary",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Vercel", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "Nginx", level: 75 },
      { name: "Linux", level: 80 }
    ]
  },
  {
    title: "Tools & Others",
    icon: Settings,
    color: "text-accent",
    skills: [
      { name: "Git", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 90 },
      { name: "Jest", level: 85 },
      { name: "Webpack", level: 75 }
    ]
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-primary/10 ${category.color} mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${skillIndex * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center glass-card p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="text-center glass-card p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div className="text-center glass-card p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-muted-foreground text-sm">Technologies</div>
            </div>
            <div className="text-center glass-card p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Learning Mode</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;