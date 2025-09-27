import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Sangamesh</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate full-stack developer creating innovative solutions 
                that bridge technology and user experience.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Projects", "Skills", "Experience", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>sangamesh@example.com</p>
                <p>+91 98765 43210</p>
                <p>Bangalore, India</p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/sangamesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sangamesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sangamesh@example.com"
                  className="p-2 rounded-lg bg-background/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Sangamesh. All rights reserved.
              </p>
              
              <div className="flex items-center text-muted-foreground text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
                <span>using React & TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;