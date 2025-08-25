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
  Palette,
  Layers,
  Zap,
  Eye,
  MousePointer,
  Sparkles,
} from "lucide-react";

export function CreativeSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(
    null,
  );

  const creativeWorks = [
    {
      id: 1,
      title: "Brand Identity Refresh",
      type: "Branding",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tools: ["Illustrator", "Photoshop", "Figma"],
      description:
        "Refonte complète de l'identité visuelle d'une startup tech",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 2,
      title: "E-commerce UI Kit",
      type: "UI Design",
      category: "ui",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      tools: ["Figma", "Principle", "CSS"],
      description:
        "Kit d'interface moderne pour applications e-commerce",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      title: "Motion Graphics Reel",
      type: "Animation",
      category: "motion",
      image:
        "https://images.unsplash.com/photo-1611095973763-414019e72400?w=600&h=400&fit=crop",
      tools: ["After Effects", "Cinema 4D"],
      description: "Animations créatives pour réseaux sociaux",
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 4,
      title: "Web App Prototype",
      type: "UX Design",
      category: "ux",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      tools: ["Figma", "Miro", "Maze"],
      description:
        "Prototype interactif d'application de productivité",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 5,
      title: "Typography Exploration",
      type: "Type Design",
      category: "typography",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      tools: ["Illustrator", "FontLab"],
      description:
        "Recherches typographiques pour projet éditorial",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 6,
      title: "Mobile App Concept",
      type: "App Design",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tools: ["Figma", "Principle", "Framer"],
      description:
        "Concept d'application mobile pour la méditation",
      color: "from-teal-500 to-blue-600",
    },
  ];

  const categories = [
    { id: "all", label: "Tous mes travaux", icon: Sparkles },
    {
      id: "branding",
      label: "Identité visuelle",
      icon: Palette,
    },
    { id: "ui", label: "Interface UI", icon: Layers },
    { id: "ux", label: "Expérience UX", icon: MousePointer },
    { id: "motion", label: "Motion Design", icon: Zap },
    { id: "typography", label: "Typographie", icon: Eye },
  ];

  const filteredWorks =
    activeCategory === "all"
      ? creativeWorks
      : creativeWorks.filter(
          (work) => work.category === activeCategory,
        );

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-sm px-6 py-2 hover:scale-105 transition-transform"
            >
              <Palette className="w-4 h-4 mr-2" />
              Portfolio créatif
            </Badge>
            <h2 className="mb-6 gradient-text">
              Créations &<br />
              expérimentations visuelles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Entre code et création, je explore les
              possibilités infinies du design numérique. Chaque
              projet est une nouvelle aventure visuelle.
            </p>
          </div>

          {/* Interactive Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  activeCategory === category.id
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="group hover:scale-105 transition-all duration-300"
              >
                <category.icon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Creative Works Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work, index) => (
              <Card
                key={work.id}
                className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 group cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl"
                onMouseEnter={() => setHoveredItem(work.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br bg-muted group-hover:scale-110 transition-transform duration-700">
                    {/* Placeholder pour l'image avec effet hover */}
                    <div
                      className={`w-full h-full bg-gradient-to-br ${work.color} opacity-80 flex items-center justify-center`}
                    >
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                          {work.type.includes("UI")
                            ? "🎨"
                            : work.type.includes("Animation")
                              ? "✨"
                              : work.type.includes("Brand")
                                ? "🚀"
                                : work.type.includes("UX")
                                  ? "💡"
                                  : work.type.includes("Type")
                                    ? "✍️"
                                    : "📱"}
                        </div>
                        <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                          {work.type}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Overlay au hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4`}
                  >
                    <div className="text-white">
                      <p className="text-sm mb-2">
                        {work.description}
                      </p>
                      <div className="flex space-x-2">
                        {work.tools
                          .slice(0, 3)
                          .map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="text-xs bg-white/20 px-2 py-1 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`bg-gradient-to-r ${work.color} text-white border-0 group-hover:scale-110 transition-transform`}
                    >
                      {work.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between">
                    <span className="group-hover:text-primary transition-colors">
                      {work.title}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${work.color} opacity-20 group-hover:opacity-100 transition-opacity`}
                    ></div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tools.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        variant="outline"
                        className="text-xs hover:scale-105 transition-transform"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group/btn"
                    >
                      <Eye className="w-3 h-3 mr-1 group-hover/btn:scale-125 transition-transform" />
                      Voir
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      <Sparkles className="w-3 h-3 mr-1 group-hover/btn:rotate-180 transition-transform" />
                      Détails
                    </Button>
                  </div>
                </CardContent>

                {/* Effet de brillance au hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none`}
                ></div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary via-accent to-primary border-0 text-white max-w-2xl mx-auto overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent/80 to-primary/80 group-hover:from-primary group-hover:via-accent group-hover:to-primary transition-all duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <h3 className="mb-4 text-white">
                  Collaborons sur votre projet créatif
                </h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Vous avez un projet qui nécessite une approche
                  créative ? Discutons de vos besoins et créons
                  quelque chose d'unique ensemble.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="group/cta hover:scale-105 transition-all"
                >
                  <MousePointer className="w-4 h-4 mr-2 group-hover/cta:rotate-12 transition-transform" />
                  Démarrer un projet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}