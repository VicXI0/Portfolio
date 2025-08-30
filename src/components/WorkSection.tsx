import { useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, Palette, Users, Smartphone, ArrowRight, Monitor } from 'lucide-react';

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = ['Tous', 'UI Design', 'UX Research', 'Web Design'];

  const projects = [
    {
      id: 1,
      title: 'Antrophia - Gestion de RH',
      description: 'Design complet d\'une application mobile de gestion des ressources humaines avec un focus sur l\'expérience utilisateur.',
      category: 'Projet d\'école',
      tags: ['UI Design', 'Mobile First', 'E-commerce'],
      gradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
      icon: '📱',
      behance: '#',
      status: 'Terminé',
      year: '2024',
      type: 'Projet personnel'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Interface de tableau de bord pour visualiser des données complexes de manière intuitive et actionnable.',
      category: 'Web Design',
      tags: ['Dashboard', 'Data Viz', 'B2B'],
      gradient: 'bg-gradient-to-br from-purple-400 to-purple-600',
      icon: '📊',
      behance: '#',
      figma: '#',
      status: 'En cours',
      year: '2024',
      type: 'Étude de cas'
    },
    {
      id: 3,
      title: 'Recherche UX - App Fitness',
      description: 'Étude utilisateur complète pour améliorer l\'engagement dans une application de fitness.',
      category: 'UX Research',
      tags: ['User Research', 'Interviews', 'Testing'],
      gradient: 'bg-gradient-to-br from-green-400 to-green-600',
      icon: '🏃',
      behance: null,
      figma: '#',
      status: 'Terminé',
      year: '2024',
      type: 'Projet d\'école'
    },
  ];

  const filteredProjects = activeCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'UI Design': return <Palette className="w-4 h-4" />;
      case 'UX Research': return <Users className="w-4 h-4" />;
      case 'Web Design': return <Monitor className="w-4 h-4" />;
      default: return <Palette className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Freelance': return 'bg-green-100 text-green-800';
      case 'Projet personnel': return 'bg-blue-100 text-blue-800';
      case 'Étude de cas': return 'bg-purple-100 text-purple-800';
      case 'Projet d\'école': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projets" className="section-padding">
      <div className="container-wide">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-brown mb-6">Mes Projets</h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-brown hover:bg-tan text-white"
                  : "border-brown text-brown hover:bg-brown hover:text-white"
              }
            >
              {getCategoryIcon(category)}
              <span className="ml-2">{category}</span>
            </Button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-soft border border-border overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Zone visuelle avec gradient et icône */}
              <div className="aspect-landscape relative overflow-hidden">
                <div className={`w-full h-full ${project.gradient} flex items-center justify-center relative`}>
                  <div className="text-6xl text-white/90">{project.icon}</div>
                  
                  {/* Overlay avec actions */}
                  <div className="absolute inset-0 bg-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    {project.figma && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-brown hover:bg-beige"
                        asChild
                      >
                        <a href={project.figma} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          Figma
                        </a>
                      </Button>
                    )}
                    {project.behance && (
                      <Button
                        size="sm"
                        className="bg-tan hover:bg-brown text-white"
                        asChild
                      >
                        <a href={project.behance} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Behance
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Terminé' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-brown group-hover:text-tan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.category} • {project.year}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-beige text-brown text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section processus */}
        <div className="bg-beige/30 rounded-soft p-8 mb-16 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-brown mb-4">Mon processus design</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Chaque projet suit une méthodologie centrée utilisateur pour garantir des résultats pertinents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Recherche', desc: 'Analyse utilisateur & benchmarking', icon: '🔍' },
              { step: '02', title: 'Idéation', desc: 'Brainstorming & concepts initiaux', icon: '💡' },
              { step: '03', title: 'Prototypage', desc: 'Wireframes & maquettes interactives', icon: '✏️' },
              { step: '04', title: 'Test & Itération', desc: 'Tests utilisateur & améliorations', icon: '🔄' }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-tan text-white rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  {phase.icon}
                </div>
                <div className="font-mono text-xs text-brown mb-2">{phase.step}</div>
                <h4 className="font-semibold text-brown mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-brown">Intéressé par mon approche ?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Chaque projet est unique et mérite une approche personnalisée. 
              Discutons de votre vision et voyons comment la transformer en expérience utilisateur exceptionnelle !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-brown hover:bg-tan text-white px-8 hover-lift"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Palette className="mr-2 w-4 h-4" />
                  Portfolio complet sur Behance
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brown text-brown hover:bg-brown hover:text-white px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Démarrer un projet
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}