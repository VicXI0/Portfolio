import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  CalendarDays,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Target,
} from "lucide-react";

export function ExperienceSection() {
  const timeline = [
    {
      type: "experience",
      title: "Développeur Stagiaire Full-Stack",
      company: "TechSolutions Lyon",
      location: "Lyon, France",
      period: "Mai - Juillet 2024",
      duration: "3 mois",
      description:
        "Stage de développement dans une ESN innovante spécialisée dans les solutions digitales pour PME.",
      achievements: [
        "Développement d'une app mobile React Native (5000+ téléchargements)",
        "Optimisation API REST - réduction temps réponse de 40%",
        "Participation active aux méthodologies Agile/Scrum",
        "Formation équipe junior sur les bonnes pratiques Git",
      ],
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Git",
      ],
      impact:
        "Application déployée et utilisée par 500+ utilisateurs actifs",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "experience",
      title: "Lead Developer Assistant",
      company: "Association Étudiante BDE Lyon",
      location: "Lyon, France",
      period: "Sept 2023 - Présent",
      duration: "1+ an",
      description:
        "Responsable technique et développement web pour l'association étudiante de 2000+ membres.",
      achievements: [
        "Refonte complète du site web (x3 augmentation du trafic)",
        "Automatisation des processus administratifs",
        "Gestion infrastructure cloud (AWS/Vercel)",
        "Formation de 10+ étudiants aux technologies web",
      ],
      technologies: [
        "React",
        "Next.js",
        "Supabase",
        "Tailwind",
        "Vercel",
      ],
      impact:
        "Digitalisation complète des processus associatifs",
      icon: Briefcase,
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "education",
      title: "BTS SIO - Option SLAM",
      company: "Lycée Parc de Vilgénis",
      location: "Massy, France",
      period: "2023 - 2025",
      duration: "2 ans",
      description:
        "Formation spécialisée en Solutions Logicielles et Applications Métiers avec focus sur l'innovation.",
      achievements: [
        "Major de promotion en développement web (18.5/20)",
        "Projet de fin d'année primé au concours régional",
        "Certifications professionnelles obtenues",
        "Participation aux hackathons étudiants",
      ],
      technologies: [
        "PHP",
        "JavaScript",
        "Java",
        "SQL",
        "UML",
        "Méthodes Agiles",
      ],
      impact:
        "Préparation complète aux métiers du développement",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      type: "education",
      title: "Baccalauréat Professionnel SN - Option RISC",
      company: "Lycée Georges Brassens",
      location: "Evry - Courcouronnes, France",
      period: "2020 - 2023",
      duration: "3 ans",
      description:
        "Baccalauréat avec spécialité Numérique et Sciences Informatiques - Mention Très Bien.",
      achievements: [
        "Mention Très Bien (16.8/20)",
        "Spécialité NSI (Numérique Sciences Informatiques)",
        "Projet de terminale : IA de classification d'images",
        "Prix d'excellence en mathématiques et informatique",
      ],
      technologies: [
        "Python",
        "SQL",
        "HTML/CSS",
        "Algorithmique",
      ],
      impact: "Fondations solides en informatique et logique",
      icon: GraduationCap,
      color: "from-orange-500 to-red-500",
    },
  ];

  const skills_developed = [
    { skill: "Leadership technique", level: 85 },
    { skill: "Gestion de projet", level: 80 },
    { skill: "Travail en équipe", level: 95 },
    { skill: "Communication client", level: 75 },
    { skill: "Résolution de problèmes", level: 90 },
    { skill: "Veille technologique", level: 88 },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full gradient-bg-1 opacity-5 transform -rotate-12"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-sm px-6 py-2"
            >
              Mon parcours
            </Badge>
            <h2 className="mb-6 gradient-text">
              Expériences &<br />
              formation académique
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un parcours riche en apprentissages, défis
              techniques et collaborations qui ont forgé mon
              expertise en développement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"></div>

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative animate-fade-in-up timeline-item-${index}`}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-background shadow-lg`}
                      ></div>

                      {/* Content card */}
                      <div className="ml-16">
                        <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div
                                    className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                                  >
                                    <item.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <Badge
                                    variant={
                                      item.type === "experience"
                                        ? "default"
                                        : "secondary"
                                    }
                                  >
                                    {item.type === "experience"
                                      ? "Expérience"
                                      : "Formation"}
                                  </Badge>
                                </div>
                                <CardTitle className="mb-2">
                                  {item.title}
                                </CardTitle>
                                <div className="space-y-1 text-muted-foreground">
                                  <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                      <Briefcase className="w-4 h-4 mr-1" />
                                      {item.company}
                                    </div>
                                    <div className="flex items-center">
                                      <MapPin className="w-4 h-4 mr-1" />
                                      {item.location}
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                      <CalendarDays className="w-4 h-4 mr-1" />
                                      {item.period}
                                    </div>
                                    <span className="text-sm">
                                      ({item.duration})
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {item.description}
                            </p>

                            <div className="space-y-4">
                              <div>
                                <h5 className="mb-2 flex items-center">
                                  <Target className="w-4 h-4 mr-2 text-primary" />
                                  Réalisations clés :
                                </h5>
                                <ul className="space-y-1">
                                  {item.achievements.map(
                                    (
                                      achievement,
                                      achievementIndex,
                                    ) => (
                                      <li
                                        key={achievementIndex}
                                        className="text-sm text-muted-foreground flex items-start"
                                      >
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                        {achievement}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>

                              <div>
                                <h5 className="mb-2">
                                  Technologies utilisées :
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {item.technologies.map(
                                    (tech, techIndex) => (
                                      <Badge
                                        key={techIndex}
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {tech}
                                      </Badge>
                                    ),
                                  )}
                                </div>
                              </div>

                              <div className="bg-secondary/50 rounded-lg p-3">
                                <div className="flex items-center mb-1">
                                  <Award className="w-4 h-4 mr-2 text-accent" />
                                  <span className="text-sm">
                                    Impact :
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {item.impact}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side content */}
            <div className="space-y-8">
              {/* Soft skills */}
              <Card className="border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    Compétences développées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills_developed.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">
                            {skill.skill}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out w-[${skill.level}%]`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current objective */}
              <Card className="bg-gradient-to-br from-primary to-accent text-white border-0">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h4 className="mb-3 text-white">
                      Objectif 2025
                    </h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Décrocher un stage de fin d'études dans
                      une entreprise innovante pour mettre en
                      pratique mes compétences et contribuer à
                      des projets impactants.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements summary */}
              <Card className="border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    En chiffres
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl mb-1">15+</div>
                      <div className="text-xs text-muted-foreground">
                        Projets réalisés
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">500+</div>
                      <div className="text-xs text-muted-foreground">
                        Heures de code
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">8</div>
                      <div className="text-xs text-muted-foreground">
                        Technologies maîtrisées
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">3</div>
                      <div className="text-xs text-muted-foreground">
                        Certifications
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}