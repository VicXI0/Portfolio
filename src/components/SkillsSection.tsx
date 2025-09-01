import { useState } from 'react';
import { Palette, Users, Monitor, Code, BookOpen, Target } from 'lucide-react';

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState('UI Design');

  const skillsData = {
    'UI Design': {
      icon: <Palette className="w-5 h-5" />,
      description: 'Mes compétences en design d\'interface utilisateur et création visuelle.',
      skills: [
        { name: 'Figma', level: 65, description: 'Mon outil principal de design', color: 'bg-purple-500' },
        { name: 'Design Systems', level: 75, description: 'Création de systèmes cohérents', color: 'bg-blue-500' },
        { name: 'Prototypage', level: 80, description: 'Maquettes interactives', color: 'bg-green-500' },
        { name: 'Typographie', level: 70, description: 'Hiérarchie et lisibilité', color: 'bg-orange-500' },
        { name: 'Théorie couleurs', level: 75, description: 'Palettes et harmonies', color: 'bg-pink-500' },
        { name: 'Iconographie', level: 65, description: 'Création d\'icônes cohérentes', color: 'bg-indigo-500' }
      ]
    },
    'UX Research': {
      icon: <Users className="w-5 h-5" />,
      description: 'Mes compétences en recherche utilisateur et méthodologie UX.',
      skills: [
        { name: 'User Interviews', level: 70, description: 'Entretiens utilisateur qualitatifs', color: 'bg-cyan-500' },
        { name: 'Personas', level: 75, description: 'Création de profils utilisateur', color: 'bg-teal-500' },
        { name: 'User Journey', level: 80, description: 'Cartographie des parcours', color: 'bg-emerald-500' },
        { name: 'Wireframing', level: 85, description: 'Maquettes fonctionnelles', color: 'bg-gray-600' },
        { name: 'A/B Testing', level: 60, description: 'Tests comparatifs', color: 'bg-red-500' },
        { name: 'Analytics', level: 55, description: 'Analyse comportementale', color: 'bg-yellow-500' }
      ]
    },
    'Outils & Tech': {
      icon: <Monitor className="w-5 h-5" />,
      description: 'Mes outils de design et compétences techniques complémentaires.',
      skills: [
        { name: 'Figma Advanced', level: 70, description: 'Composants, variants, auto-layout', color: 'bg-purple-600' },
        { name: 'Canva', level: 40, description: 'Application de design graphique et de création de logos', color: 'bg-green-600' },
        { name: 'Miro/FigJam', level: 75, description: 'Collaboration et idéation', color: 'bg-orange-600' },
        { name: 'HTML/CSS', level: 80, description: 'Compréhension technique', color: 'bg-indigo-600' },
      ]
    },
    'Soft Skills': {
      icon: <Target className="w-5 h-5" />,
      description: 'Mes qualités humaines et compétences transversales en design.',
      skills: [
        { name: 'Empathie', level: 90, description: 'Comprendre les besoins utilisateur', color: 'bg-rose-500' },
        { name: 'Créativité', level: 85, description: 'Solutions innovantes et originales', color: 'bg-violet-500' },
        { name: 'Communication', level: 80, description: 'Présentation et argumentation', color: 'bg-blue-500' },
        { name: 'Collaboration', level: 85, description: 'Travail en équipe multidisciplinaire', color: 'bg-green-500' },
        { name: 'Pensée critique', level: 75, description: 'Analyse et résolution de problèmes', color: 'bg-amber-500' },
        { name: 'Adaptabilité', level: 90, description: 'Flexibilité face aux changements', color: 'bg-teal-500' }
      ]
    }
  };

  const tabs = Object.keys(skillsData);

  return (
    <section id="competences" className="section-padding bg-beige/30">
      <div className="container-wide">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-brown mb-6">Mes Compétences</h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un aperçu de mes compétences de développemen et UI/UX actuelles. Ma reconversion du développement 
            vers le design m'a permis d'acquérir une perspective technique unique.
          </p>
        </div>

        {/* Navigation des onglets */}
        <div className="flex flex-wrap justify-center mb-12 animate-fade-in-up">
          <div className="flex bg-card rounded-soft p-1 border border-border overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-soft transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-brown text-white shadow-soft'
                    : 'text-muted-foreground hover:text-brown hover:bg-beige'
                }`}
              >
                {skillsData[tab as keyof typeof skillsData].icon}
                <span className="font-medium">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenu des compétences */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-8">
            <p className="text-muted-foreground leading-relaxed">
              {skillsData[activeTab as keyof typeof skillsData].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillsData[activeTab as keyof typeof skillsData].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-soft border border-border hover:shadow-soft transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-brown">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                  <span className="text-sm font-mono text-brown bg-beige px-2 py-1 rounded">
                    {skill.level}%
                  </span>
                </div>

                {/* Barre de progression */}
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100 + 500}ms`
                    }}
                  />
                </div>

                {/* Niveau d'expertise */}
                <div className="mt-2 text-xs text-muted-foreground">
                  {skill.level >= 80 ? '🟢 Niveau avancé' : 
                   skill.level >= 65 ? '🟡 Bon niveau' : 
                   skill.level >= 50 ? '🟠 Débutant' : 
                   '🔴 En Développement'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ma philosophie design */}
        <div className="mt-20 animate-fade-in-up">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-warm p-8 rounded-soft">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-brown mb-4">Ma philosophie</h3>
                <p className="text-brown/80 leading-relaxed">
                  Mon approche est centrée sur l'utilisateur final. Je crois que 
                  le bon design doit être à la fois beau, fonctionnel et accessible à tous.
                </p>
              </div>
              
              {/* Principes design */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 p-6 rounded-soft text-center">
                  <div className="text-3xl mb-3">👥</div>
                  <h4 className="font-semibold text-brown mb-2">User-Centric</h4>
                  <p className="text-sm text-brown/70">
                    L'utilisateur au cœur de chaque décision design
                  </p>
                </div>
                <div className="bg-white/20 p-6 rounded-soft text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-semibold text-brown mb-2">Performance</h4>
                  <p className="text-sm text-brown/70">
                    Interfaces rapides et optimisées
                  </p>
                </div>
                <div className="bg-white/20 p-6 rounded-soft text-center">
                  <div className="text-3xl mb-3">♿</div>
                  <h4 className="font-semibold text-brown mb-2">Accessibilité</h4>
                  <p className="text-sm text-brown/70">
                    Design inclusif pour tous les utilisateurs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formation continue */}
        <div className="mt-12 text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-brown mb-6">Veille Technologique</h4>
            <p className="text-muted-foreground leading-relaxed mb-8">
              La cybersécurité et le développement web évoluent constamment. Je reste à jour avec les dernières menaces, 
              vulnérabilités, frameworks web et méthodologies de développement sécurisé à travers une veille active et continue.
            </p>
            
            <div className="text-left max-w-2xl mx-auto mb-8">
              <p className="text-muted-foreground mb-6">
          Voici quelques sujets que je suis régulièrement :
              </p>
              
              <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-3">
            <span className="text-lg">🔒</span>
            <div>
              <span className="font-semibold text-brown">Cybersécurité :</span>
              <span className="text-muted-foreground"> nouvelles vulnérabilités, attaques émergentes, frameworks de sécurité, conformité RGPD et normes ISO.</span>
            </div>
          </div>
          
            <div className="flex items-start space-x-3">
            <span className="text-lg">🌐</span>
            <div>
              <span className="font-semibold text-brown">Développement web :</span>
              <span className="text-muted-foreground"> React, TypeScript, Node.js, frameworks modernes, architectures web, optimisation des performances.</span>
            </div>
            </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-lg">💻</span>
            <div>
              <span className="font-semibold text-brown">Développement web sécurisé :</span>
              <span className="text-muted-foreground"> bonnes pratiques de codage, authentification, chiffrement, gestion des secrets.</span>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-lg">⚡</span>
            <div>
              <span className="font-semibold text-brown">Technologies web émergentes :</span>
              <span className="text-muted-foreground"> frameworks JavaScript, Progressive Web Apps, serverless, performances web.</span>
            </div>
          </div>
              </div>
              
              <div className="border-t border-border pt-6">
          <p className="text-muted-foreground mb-4">
            Je m'informe principalement via :
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-card px-3 py-2 rounded-soft border border-border">
              <span>🔐</span>
              <span className="text-sm text-brown">ANSSI / CERT-FR</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-3 py-2 rounded-soft border border-border">
              <span>🛡️</span>
              <span className="text-sm text-brown">Korben</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-3 py-2 rounded-soft border border-border">
              <span>📚</span>
              <span className="text-sm text-brown">CVE / NVD</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-3 py-2 rounded-soft border border-border">
              <span>🎬</span>
              <span className="text-sm text-brown">Youtube / LinkedIn</span>
            </div>
          </div>
              </div>
            </div>
            
            {/* Certifications et formations récentes */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
                <div className="bg-card p-4 rounded-soft border border-border text-center">
                  <div className="text-lg mb-2"></div>
                  <h5 className="font-medium text-brown mb-1">Certification ANSSI</h5>
                  <p className="text-xs text-muted-foreground">Certificat Obtenue</p>
                  <a 
                    href="../documents/ANSSI.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-brown hover:text-brown/80 transition-colors mt-2"
                  >
                    <span>Voir le certificat</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div className="bg-card p-4 rounded-soft border border-border text-center">
                  <div className="text-lg mb-2"></div>
                  <h5 className="font-medium text-brown mb-1">Design Thinking</h5>
                  <p className="text-xs text-muted-foreground">Méthodologie appliquée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}