import { useState } from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  Star,
  Calendar,
  Users,
  Eye,
  Play,
  Heart,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [likedProjects, setLikedProjects] = useState<number[]>(
    [],
  );

  const projects = [
    {
      id: 1,
      title: "EcoTrack - App Mobile",
      subtitle: "Design & Développement",
      description:
        "Application mobile complète pour le suivi écologique personnel avec interface moderne, animations fluides et gamification.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f7ead8f927f5a5fee32?w=600&h=400&fit=crop",
      technologies: [
        "React Native",
        "Figma",
        "Node.js",
        "MongoDB",
      ],
      category: "mobile",
      type: "Design + Dev",
      status: "completed",
      featured: true,
      stats: {
        duration: "4 mois",
        team: "3 personnes",
        rating: 4.9,
        downloads: "2.5k",
      },
      features: [
        "Interface UI moderne et intuitive",
        "Animations micro-interactions",
        "Dashboard analytics avancé",
        "Gamification et challenges",
        "Design system complet",
      ],
      designProcess:
        "Research → Wireframe → Prototype → Dev → Test",
      outcome: "95% satisfaction utilisateur",
      colors: ["#4CAF50", "#2196F3", "#FF9800"],
      demoUrl: "#",
      figmaUrl: "#",
    },
    {
      id: 2,
      title: "Dashboard Analytics Pro",
      subtitle: "Interface complexe simplifiée",
      description:
        "Refonte UX/UI complète d'un dashboard d'analytics avec focus sur la lisibilité des données et l'expérience utilisateur.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "D3.js",
        "Figma",
        "SCSS",
      ],
      category: "web",
      type: "UI/UX Design",
      status: "completed",
      featured: true,
      stats: {
        duration: "3 mois",
        team: "4 personnes",
        rating: 4.8,
        users: "10k+",
      },
      features: [
        "Design data-driven moderne",
        "Visualisations D3.js custom",
        "Responsive design adaptatif",
        "Mode sombre/clair",
        "Animations de transition fluides",
      ],
      designProcess:
        "User Research → Information Architecture → Prototyping",
      outcome: "Temps de compréhension -60%",
      colors: ["#667eea", "#764ba2", "#f093fb"],
      demoUrl: "#",
      figmaUrl: "#",
    },
    {
      id: 3,
      title: "Branding Startup Tech",
      subtitle: "Identité visuelle complète",
      description:
        "Création d'identité visuelle complète pour startup tech incluant logo, charte graphique, site web et supports marketing.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: [
        "Illustrator",
        "Photoshop",
        "Figma",
        "After Effects",
      ],
      category: "branding",
      type: "Brand Design",
      status: "completed",
      featured: false,
      stats: {
        duration: "2 mois",
        team: "2 personnes",
        rating: 4.7,
        deliverables: "50+",
      },
      features: [
        "Logo et déclinaisons",
        "Charte graphique complète",
        "Design system web",
        "Supports print et digital",
        "Guidelines d'utilisation",
      ],
      designProcess:
        "Brand Strategy → Visual Identity → Guidelines",
      outcome: "Reconnaissance marque +300%",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
      demoUrl: "#",
      figmaUrl: "#",
    },
    {
      id: 4,
      title: "E-learning Platform",
      subtitle: "UX pour l'éducation",
      description:
        "Conception UX/UI d'une plateforme e-learning innovante avec parcours personnalisés et interface gamifiée.",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      technologies: [
        "Figma",
        "Principle",
        "Vue.js",
        "PHP",
        "MySQL",
      ],
      category: "web",
      type: "UX Design",
      status: "in-progress",
      featured: false,
      stats: {
        duration: "5 mois",
        team: "5 personnes",
        rating: 4.6,
        students: "1.2k",
      },
      features: [
        "Parcours d'apprentissage adaptatifs",
        "Interface gamifiée engageante",
        "Système de progression visuel",
        "Interactions sociales intégrées",
        "Design accessible et inclusif",
      ],
      designProcess:
        "User Journey → Wireframes → Prototypes → Tests utilisateurs",
      outcome: "Engagement étudiant +150%",
      colors: ["#8B5CF6", "#06D6A0", "#FFD23F"],
      demoUrl: "#",
      figmaUrl: "#",
    },
    {
      id: 5,
      title: "Portfolio Interactif",
      subtitle: "Créativité & technique",
      description:
        "Mon portfolio personnel alliant créativité design et prouesses techniques avec animations avancées et interactions.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "Three.js",
        "GSAP",
        "Tailwind",
        "Framer Motion",
      ],
      category: "web",
      type: "Creative Dev",
      status: "completed",
      featured: false,
      stats: {
        duration: "2 mois",
        team: "1 personne",
        rating: 4.9,
        visitors: "500+",
      },
      features: [
        "Animations 3D avec Three.js",
        "Transitions GSAP fluides",
        "Design responsive créatif",
        "Mode interactif avancé",
        "Performance optimisée",
      ],
      designProcess: "Concept → Design → Dev → Polish",
      outcome: "Taux de conversion +200%",
      colors: ["#667eea", "#764ba2", "#f093fb"],
      demoUrl: "#",
      figmaUrl: "#",
    },
    {
      id: 6,
      title: "App Fitness Tracker",
      subtitle: "Santé & bien-être",
      description:
        "Design d'application de fitness avec suivi personnalisé, coaching IA et communauté sociale intégrée.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: [
        "Figma",
        "Principle",
        "React Native",
        "Firebase",
      ],
      category: "mobile",
      type: "Mobile Design",
      status: "completed",
      featured: false,
      stats: {
        duration: "3 mois",
        team: "3 personnes",
        rating: 4.7,
        users: "5k+",
      },
      features: [
        "Interface motivante et claire",
        "Visualisation données sportives",
        "Coaching personnalisé IA",
        "Gamification sociale",
        "Design inclusif et accessible",
      ],
      designProcess:
        "Research → Personas → User Flows → UI Design",
      outcome: "Rétention utilisateur +180%",
      colors: ["#00C851", "#FF4444", "#ffbb33"],
      demoUrl: "#",
      figmaUrl: "#",
    },
  ];

  const filters = [
    {
      id: "all",
      label: "Tous les projets",
      count: projects.length,
    },
    {
      id: "web",
      label: "Web Design",
      count: projects.filter((p) => p.category === "web")
        .length,
    },
    {
      id: "mobile",
      label: "Mobile Design",
      count: projects.filter((p) => p.category === "mobile")
        .length,
    },
    {
      id: "branding",
      label: "Branding",
      count: projects.filter((p) => p.category === "branding")
        .length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter,
        );

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId],
    );
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-sm px-6 py-2 hover:scale-105 transition-transform"
            >
              <Star className="w-4 h-4 mr-2" />
              Portfolio créatif
            </Badge>
            <h2 className="mb-6 gradient-text">
              Projets design &<br />
              développement créatif
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une sélection de mes créations alliant vision
              créative et expertise technique. Chaque projet
              raconte une histoire unique.
            </p>
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={
                  activeFilter === filter.id
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="group hover:scale-105 transition-all duration-300 relative"
              >
                {filter.label}
                <Badge
                  variant="secondary"
                  className="ml-2 text-xs group-hover:scale-110 transition-transform"
                >
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 group cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Project Preview */}
                  <div className="w-full h-full bg-gradient-to-br bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-700 relative">
                    {/* Color palette preview */}
                    <div className="absolute top-4 left-4 flex space-x-1">
                      {project.colors.map(
                        (color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: color }}
                          ></div>
                        ),
                      )}
                    </div>

                    {/* Main visual */}
                    <div className="text-center text-muted-foreground group-hover:text-primary transition-colors">
                      <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                        {project.category === "mobile"
                          ? "📱"
                          : project.category === "web"
                            ? "💻"
                            : project.category === "branding"
                              ? "🎨"
                              : "⚡"}
                      </div>
                      <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                    <div className="text-white w-full">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="group/btn"
                          >
                            <Eye className="w-3 h-3 mr-1 group-hover/btn:scale-125 transition-transform" />
                            Demo
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="group/btn"
                          >
                            <Play className="w-3 h-3 mr-1 group-hover/btn:scale-125 transition-transform" />
                            Figma
                          </Button>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(project.id);
                          }}
                          className="group/like"
                        >
                          <Heart
                            className={`w-4 h-4 group-hover/like:scale-125 transition-all ${
                              likedProjects.includes(project.id)
                                ? "fill-red-500 text-red-500"
                                : "text-white"
                            }`}
                          />
                        </Button>
                      </div>
                      <p className="text-xs opacity-90">
                        {project.designProcess}
                      </p>
                    </div>
                  </div>

                  {/* Status badges */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    {project.featured && (
                      <Badge className="bg-accent text-accent-foreground border-0">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    )}
                    <Badge
                      variant={
                        project.status === "completed"
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {project.status === "completed"
                        ? "✅ Terminé"
                        : "🚧 En cours"}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      <h4 className="group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span>{project.stats.rating}</span>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm mb-2 flex items-center">
                        <Zap className="w-3 h-3 mr-1 text-primary" />
                        Points forts :
                      </h5>
                      <ul className="space-y-1">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-xs text-muted-foreground flex items-center"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs hover:scale-105 transition-transform"
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground border-t pt-3">
                      <div className="text-center">
                        <Calendar className="w-3 h-3 mx-auto mb-1" />
                        <div>{project.stats.duration}</div>
                      </div>
                      <div className="text-center">
                        <Users className="w-3 h-3 mx-auto mb-1" />
                        <div>{project.stats.team}</div>
                      </div>
                      <div className="text-center">
                        <Eye className="w-3 h-3 mx-auto mb-1" />
                        <div>
                          {project.stats.users ||
                            project.stats.downloads ||
                            "1k+"}
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/30 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <Zap className="w-3 h-3 mr-1 text-accent" />
                        <span className="text-xs">
                          Impact :
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary via-accent to-primary border-0 text-white max-w-2xl mx-auto overflow-hidden group relative">
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  ></div>
                ))}
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <h3 className="mb-4 text-white">
                  Impressed by my work?
                </h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Découvrez l'ensemble de mes créations sur
                  Behance et GitHub. Chaque projet raconte une
                  histoire unique de créativité et d'innovation.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="group/cta hover:scale-105 transition-all"
                  >
                    <Eye className="w-4 h-4 mr-2 group-hover/cta:rotate-12 transition-transform" />
                    Behance Portfolio
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group/cta hover:scale-105 transition-all border-white/30 text-white hover:bg-white hover:text-primary"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/cta:rotate-12 transition-transform" />
                    GitHub Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}