import { Code, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-primary p-1 animate-glow">
                  <div className="w-full h-full bg-gradient-to-br from-muted/50 to-background rounded-2xl flex items-center justify-center">
                    <div className="text-6xl gradient-text font-bold">S</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate full-stack developer crafting innovative web & mobile solutions. 
                I love turning complex ideas into user-friendly applications using modern technologies.
              </p>
              
              {/* Key Traits */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center glass-card p-4 hover-lift">
                  <Code className="w-6 h-6 text-primary mr-3" />
                  <span className="font-semibold">Clean Code</span>
                </div>
                
                <div className="flex items-center glass-card p-4 hover-lift">
                  <Lightbulb className="w-6 h-6 text-accent mr-3" />
                  <span className="font-semibold">Problem Solver</span>
                </div>
                
                <div className="flex items-center glass-card p-4 hover-lift">
                  <Target className="w-6 h-6 text-secondary mr-3" />
                  <span className="font-semibold">Goal Oriented</span>
                </div>
                
                <div className="flex items-center glass-card p-4 hover-lift">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  <span className="font-semibold">Team Player</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;