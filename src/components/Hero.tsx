import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Sangamesh</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-muted-foreground animate-slide-up">
            Full-Stack Developer
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.2s]">
            I design and build scalable, user-friendly web & mobile applications 
            with cutting-edge technologies and modern development practices.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in [animation-delay:0.4s]">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 neon-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-slide-up [animation-delay:0.6s]">
            <a 
              href="https://github.com/sangamesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:neon-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/sangamesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:neon-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:sangamesh@example.com"
              className="p-3 rounded-full glass hover:neon-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div 
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;