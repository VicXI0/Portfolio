import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Download, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    "Développeur Web",
    "En reconversion",
    "Créateur d'expériences",
    "Designer passionné"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="accueil" className="min-h-screen flex items-center section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge statut */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-beige rounded-full">
              <div className="w-2 h-2 bg-tan rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brown">
                En transition • UI/UX Designer
              </span>
            </div>

            {/* Titre principal */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-large text-muted-foreground">
                  Salut, je suis
                </p>
                <h1 className="text-brown">
                  PHANOR Myron
                </h1>
              </div>
              
              {/* Texte qui change */}
              <div className="h-12 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateY(-${currentText * 48}px)`
                  }}
                >
                  {texts.map((text, index) => (
                    <div key={index} className="h-12 flex items-center">
                      <h2 className="gradient-text-warm">
                        {text}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-lg">
              <p className="text-large text-muted-foreground leading-relaxed">
                Après mon parcours technique en BTS SIO, j'ai découvert ma véritable passion : 
                créer des expériences utilisateur exceptionnelles et des interfaces qui font sens.
              </p>
              <p className="text-muted-foreground">
                Je combine ma compréhension technique du développement avec ma nouvelle passion 
                pour le design UI/UX, créant des solutions à la fois belles et fonctionnelles.
              </p>
            </div>

            {/* Tags compétences */}
            <div className="flex flex-wrap gap-2">
              {['UI Design', 'UX Research', 'Prototypage', 'Figma'].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-secondary text-sm text-brown rounded-full hover:bg-tan hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-brown hover:bg-tan text-white px-8 hover-lift"
                onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Découvrir mes projets
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-brown text-brown hover:bg-brown hover:text-white px-8"
              >
                <Download className="mr-2 w-4 h-4" />
                Mon CV
              </Button>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground font-mono">
                Me suivre
              </span>
              <div className="w-8 h-px bg-border" />
              <div className="flex items-center space-x-3">
                {[
                  { icon: ExternalLink, href: 'https://www.behance.net/myron-phanor/', label: 'Behance' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/myron-phanor-75b183282', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/VicXI0', label: 'GitHub' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border hover:border-tan hover:bg-tan hover:text-white flex items-center justify-center transition-all duration-300 hover-lift"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Élément visuel abstrait */}
          <div className="lg:justify-self-end animate-scale-in">
            <div className="relative max-w-md mx-auto">
              {/* Forme géométrique principale */}
              <div className="relative group">
                <div className="aspect-square relative overflow-hidden rounded-soft bg-gradient-warm shadow-warm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-brown/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-tan rounded-full flex items-center justify-center">
                        <div className="text-4xl"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-gradient-earth opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Éléments décoratifs */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-tan rounded-full shadow-soft" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brown rounded-full shadow-soft" />
              </div>

              {/* Cartes flottantes */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-soft shadow-medium hover-lift">
                <div className="text-center">
                  <div className="text-2xl mb-2"></div>
                  <div className="text-sm font-medium text-brown">UI/UX</div>
                  <div className="text-xs text-muted-foreground">Designer</div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-card border border-border p-4 rounded-soft shadow-medium hover-lift">
                <div className="text-center">
                  <div className="text-2xl mb-2"></div>
                  <div className="text-sm font-medium text-brown">Transition</div>
                  <div className="text-xs text-muted-foreground">Carrière</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
          <div className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-brown transition-colors cursor-pointer group">
            <span className="text-xs font-mono">Découvrir</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}