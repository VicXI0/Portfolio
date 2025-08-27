import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À propos' },
    { href: '#projets', label: 'Projets' },
    { href: '#competences', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-soft border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#accueil" 
            className="text-xl font-semibold text-brown hover:text-tan transition-colors"
          >
            <span className="font-mono">{'<'}PHANORMyron{'/>'}</span>
          </a>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-brown transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Réseaux sociaux */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary hover:bg-tan hover:text-white flex items-center justify-center transition-all duration-300 hover-lift"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary hover:bg-tan hover:text-white flex items-center justify-center transition-all duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary hover:bg-tan hover:text-white flex items-center justify-center transition-all duration-300 hover-lift"
              aria-label="Behance"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-brown transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brown transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brown transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brown transition-colors"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}