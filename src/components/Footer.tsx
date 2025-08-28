import { ArrowUp, Github, Linkedin, ExternalLink, Heart, Coffee, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#apropos', label: 'À propos' },
    { href: '#projets', label: 'Projets' },
    { href: '#competences', label: 'Compétences' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/VicXI0',
      label: 'GitHub',
      description: 'Mes projets'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/myron-phanor-75b183282',
      label: 'LinkedIn',
      description: 'Mon profil LinkedIn'
    },
    {
      icon: ExternalLink,
      href: 'https://www.behance.net/myron-phanor',
      label: 'Behance',
      description: 'Mes designs'
    }
  ];

  return (
    <footer className="relative bg-dark-brown text-cream overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-tan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-brown/10 rounded-full blur-3xl" />
      </div>

      {/* Bouton retour en haut */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-tan hover:bg-brown text-white shadow-soft hover-lift"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container-wide py-16 relative z-10">
        {/* Contenu principal */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Colonne principale */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-cream text-2xl mb-3 font-semibold">
                PHANOR Myron
              </h3>
              <p className="text-cream/80 leading-relaxed max-w-md">
              Etudiant en BTS SIO option SLAM, je me passionne pour le design UI/UX. Je crée des interfaces intuitives et esthétiques qui améliorent l'expérience utilisateur. Mon objectif est de fusionner technologie et design pour des solutions innovantes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-tan">3</div>
                <div className="text-xs text-cream/60 font-mono">Projets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tan">100%</div>
                <div className="text-xs text-cream/60 font-mono">Passion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tan">∞</div>
                <div className="text-xs text-cream/60 font-mono">Créativité</div>
              </div>
            </div>

            {/* Contact rapide */}
            <div className="space-y-3">
              <h4 className="text-cream font-medium">Contact rapide</h4>
              <a 
                href="mailto:phanormyron.pro@gmail.com"
                className="flex items-center space-x-3 text-cream/80 hover:text-tan transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:translate-x-1 transition-transform">
                 phanormyron.pro@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-cream font-medium mb-4">Navigation</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream/70 hover:text-tan transition-colors py-1 hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Réseaux sociaux */}
          <div className="lg:col-span-4">
            <h4 className="text-cream font-medium mb-4">Me suivre</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-cream/70 hover:text-tan transition-all duration-300 group hover:translate-x-1 transform"
                >
                  <div className="w-8 h-8 bg-cream/10 rounded-full flex items-center justify-center group-hover:bg-tan group-hover:text-white transition-colors">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">{social.label}</div>
                    <div className="text-xs text-cream/50">{social.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-cream/60">
              <span className="text-sm">
                © {currentYear} PHANOR Myron. Créé avec
              </span>
              <Heart className="w-4 h-4 text-tan animate-pulse" />
              <span className="text-sm">et beaucoup d'admiration.</span>
            </div>

            {/* Statut */}
            <div className="flex items-center space-x-2 bg-cream/5 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-cream/80 font-mono">
                Disponible pour un stage ou une Alternance.
              </span>
            </div>
          </div>

          {/* Message inspirant */}
          <div className="text-center mt-6 pt-6 border-t border-cream/5">
            <p className="text-xs text-cream/40 font-mono italic">
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}