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
                I'm a passionate full-stack developer with a love for creating innovative solutions 
                that bridge the gap between complex technology and user-friendly experiences. 
                With expertise spanning across modern web technologies, mobile development, and 
                cloud platforms, I thrive on turning ideas into reality.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in development has equipped me with a strong foundation in both 
                frontend and backend technologies, allowing me to deliver comprehensive solutions 
                that are scalable, efficient, and maintainable.
              </p>
              
              {/* Key Traits */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="glass-card p-6 hover-lift">
                  <Code className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                  <p className="text-muted-foreground">
                    Writing maintainable, efficient code following best practices and industry standards.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <Lightbulb className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                  <p className="text-muted-foreground">
                    Passionate about tackling complex challenges with creative and efficient solutions.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <Target className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Goal Oriented</h3>
                  <p className="text-muted-foreground">
                    Focused on delivering high-quality results that exceed expectations and drive success.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Team Player</h3>
                  <p className="text-muted-foreground">
                    Collaborative approach to development with strong communication and leadership skills.
                  </p>
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