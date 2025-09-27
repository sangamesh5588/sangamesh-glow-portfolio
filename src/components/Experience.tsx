import { Calendar, MapPin, Award, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full-Stack Developer Intern",
    company: "TechCorp Solutions",
    location: "Remote",
    duration: "Jun 2023 - Sep 2023",
    description: "Developed and maintained React-based web applications, implemented RESTful APIs using Node.js, and collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built responsive web components serving 10k+ users",
      "Optimized database queries reducing load time by 40%",
      "Implemented authentication system with JWT tokens"
    ],
    icon: Award
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "StartupHub",
    location: "Bangalore, India",
    duration: "Jan 2023 - May 2023",
    description: "Created modern, responsive user interfaces using React and TypeScript. Worked closely with designers to implement pixel-perfect designs and improve user experience.",
    achievements: [
      "Converted Figma designs to React components",
      "Improved website performance score by 35%",
      "Mentored 2 junior developers"
    ],
    icon: Award
  },
  {
    type: "education",
    title: "Bachelor of Engineering",
    company: "Computer Science & Engineering",
    location: "University of Technology",
    duration: "2020 - 2024",
    description: "Focused on software engineering, data structures, algorithms, and modern web technologies. Active member of coding club and participated in multiple hackathons.",
    achievements: [
      "CGPA: 8.5/10",
      "Winner of University Hackathon 2023",
      "Published research paper on ML applications"
    ],
    icon: GraduationCap
  },
  {
    type: "project",
    title: "Open Source Contributor",
    company: "Various Projects",
    location: "Global",
    duration: "2022 - Present",
    description: "Active contributor to open source projects focusing on React ecosystem, developer tools, and educational resources for new developers.",
    achievements: [
      "500+ GitHub contributions",
      "Maintained 3 NPM packages",
      "Contributed to React documentation"
    ],
    icon: Award
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Experience & Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey in software development and continuous learning
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}>
                    {/* Timeline Icon */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center z-10">
                      <IconComponent className="w-4 h-4 text-primary-foreground" />
                    </div>
                    
                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="glass-card p-6 hover-lift">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'work' ? 'bg-primary/10 text-primary' :
                            exp.type === 'education' ? 'bg-secondary/10 text-secondary' :
                            'bg-accent/10 text-accent'
                          }`}>
                            {exp.type === 'work' ? 'Work' : exp.type === 'education' ? 'Education' : 'Project'}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;