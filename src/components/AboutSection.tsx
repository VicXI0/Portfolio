import { Button } from './ui/button';
import { ArrowRight, Download, MapPin, Calendar, Palette, Code } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: '',
      title: 'Créativité technique',
      description: 'J\'allie ma compréhension du développement à ma passion naissante pour le design.'
    },
    {
      icon: '',
      title: 'Centré utilisateur',
      description: 'Chaque design part d\'un besoin réel et vise à améliorer l\'expérience utilisateur.'
    },
    {
      icon: '',
      title: 'Approche itérative',
      description: 'J\'améliore constamment mes créations grâce aux retours et aux tests utilisateur.'
    },
    {
      icon: '',
      title: 'Curiosité constante',
      description: 'Je me forme continuellement aux dernières tendances et outils du design.'
    }
  ];

  const journey = [
    {
      period: '2024-2026',
      title: 'BTS SIO Option SLAM',
      description: 'Le BTS SIO (Services Informatiques aux Organisations) est un diplôme de niveau Bac+2. L’option SLAM (Solutions Logicielles et Applications Métiers) est orientée vers le développement d’applications web, mobile et desktop, ainsi que la gestion de bases de données. Il permet d’acquérir une solide base en programmation et en conception de solutions logicielles. ',
      icon: Code,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      period: '2024',
      title: 'Révélation Design',
      description: 'Découverte de ma passion pour l\'UI/UX et début de ma transition',
      icon: Palette,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      period: '2025',
      title: 'Designer UI/UX',
      description: 'Focus total sur le design d\'expériences utilisateur',
      icon: Palette,
      color: 'bg-tan text-white'
    }
  ];

  return (
    <section id="apropos" className="section-padding bg-beige/30">
      <div className="container-wide">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-brown mb-6">Mon histoire</h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            De développeur à designer : l'histoire d'une reconversion passionnée 
            vers la création d'expériences utilisateur mémorables.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
          {/* Contenu gauche */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-brown">Ma transition vers le design</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Actuellement en BTS SIO Option SLAM, je voulais être Développeur Web Full-Stack, mais lorsque j'ai eu l'occasion de créer des projets de sites web, j'ai plus pensé comme un Designer UI / UX au lieu d'un Développeur.
                  Je faisais attention aux détails, à l'expérience utilisateur et à l'esthétique globale, ce qui m'a fait réaliser que ma véritable passion résidait dans le design.
                </p>
                <p>
                  Ce qui devait être un parcours purement technique s'est transformé en 
                  révélation. J'ai réalisé que ma véritable passion résidait dans la 
                  création d'interfaces intuitives, belles et centrées sur l'utilisateur. 
                  Le code était devenu un moyen, pas une fin en soi.
                </p>
                <p>
                  Aujourd'hui, je me consacre entièrement au design UI/UX. Mon background 
                  technique est devenu un atout précieux : je comprends les contraintes 
                  de développement et peux créer des designs à la fois ambitieux et réalistes.
                </p>
              </div>
            </div>

            {/* Parcours timeline */}
            <div>
              <h4 className="text-brown mb-6">Mon évolution</h4>
              <div className="space-y-4">
                {journey.map((step, index) => (
                  <div key={step.period} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${step.color}`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h5 className="font-semibold text-brown">{step.title}</h5>
                        <span className="text-xs bg-beige text-brown px-2 py-1 rounded-full font-mono">
                          {step.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mes valeurs */}
            <div>
              <h4 className="text-brown mb-6">Ce qui guide mon approche design</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                    className="p-4 bg-card rounded-soft border border-border hover:shadow-soft transition-all duration-300 hover-lift"
                  >
                    <div className="text-2xl mb-3">{value.icon}</div>
                    <h5 className="font-medium text-brown mb-2">{value.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-brown hover:bg-tan text-white px-8 hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Collaborons ensemble
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brown text-brown hover:bg-brown hover:text-white px-8"
              >
                <Download className="mr-2 w-4 h-4" />
                Mon portfolio complet
              </Button>
            </div>
          </div>

          {/* Contenu droite */}
          <div className="lg:col-span-5 space-y-8 animate-scale-in">
            {/* Élément visuel abstrait */}
            <div className="relative">
              <div className="aspect-square bg-gradient-warm rounded-soft overflow-hidden shadow-warm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h4 className="text-brown font-semibold">Design Thinking</h4>
                  <p className="text-brown/70 text-sm">Ma méthodologie</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-tan text-white p-3 rounded-soft shadow-medium">
                <span className="font-mono text-sm">Design First</span>
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="bg-card p-6 rounded-soft border border-border shadow-soft">
              <h4 className="text-brown mb-4">En résumé</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Orientation</span>
                  <span className="text-sm font-medium text-brown">UI/UX Designer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Background</span>
                  <span className="text-sm font-medium text-brown">Développement</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Localisation</span>
                  <span className="text-sm font-medium text-brown">Paris, France</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Disponibilité</span>
                  <span className="text-sm font-medium text-green-600">Alternance/Stage</span>
                </div>
              </div>
            </div>

            {/* Outils favoris */}
            <div className="bg-card p-6 rounded-soft border border-border shadow-soft">
              <h4 className="text-brown mb-4">Mes outils</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Figma', 'Webflow', 'Canva', 'Cavalry', 'Notion'].map((tool) => (
                  <div key={tool} className="text-center p-2 bg-beige rounded text-sm font-medium text-brown">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}