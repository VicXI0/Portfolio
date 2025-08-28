import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ExternalLink, 
  Linkedin, 
  Clock,
  Coffee,
  MessageCircle,
  Palette,
  Users,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Configuration EmailJS avec vos identifiants
  const EMAILJS_SERVICE_ID = 'service_jkydr4y'; // Votre service Gmail
  const EMAILJS_TEMPLATE_ID = 'template_d06n96q'; // Votre template Contact Us
  const EMAILJS_PUBLIC_KEY = 'cp92lLDgKLwvPSU39'; // Votre clé publique

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Paramètres du template EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        project_type: formData.projectType,
        message: formData.message,
        to_name: 'Myron', // Votre nom
      };

      // Envoi de l'email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '', 
        projectType: '' 
      });
      
      // Reset du statut après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      
      // Reset du statut après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'phanormyron.pro@gmail.com',
      href: 'mailto:phanormyron.pro@gmail.com',
      description: 'Pour vos projets design'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 6 50 35 19 94',
      href: 'tel:+33650351994',
      description: 'Disponible à tout moment'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Paris, France',
      href: '#',
      description: 'Remote & sur site'
    }
  ];

  const socialLinks = [
    {
      icon: ExternalLink,
      label: 'Behance',
      href: 'https://www.behance.net/myron-phanor',
      description: 'Mon portfolio design',
      color: 'hover:bg-purple-600 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/myron-phanor-75b183282',
      description: 'Mon profil professionnel',
      color: 'hover:bg-blue-600 hover:text-white'
    }
  ];

  const projectTypes = [
    'Design d\'application mobile',
    'Site web & interface',
    'Design system',
    'UX Research & audit',
    'Refonte d\'interface',
    'Consultation design',
    'Autre projet'
  ];

  const getSubmitButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <div className="w-4 h-4 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Envoi en cours...
        </>
      );
    }
    
    if (submitStatus === 'success') {
      return (
        <>
          <CheckCircle className="mr-2 w-4 h-4" />
          Message envoyé !
        </>
      );
    }
    
    if (submitStatus === 'error') {
      return (
        <>
          <AlertCircle className="mr-2 w-4 h-4" />
          Réessayer
        </>
      );
    }
    
    return (
      <>
        <Send className="mr-2 w-4 h-4" />
        Envoyer ma demande
      </>
    );
  };

  const getButtonClassName = () => {
    let baseClass = "w-full text-white hover-lift transition-all duration-300";
    
    if (submitStatus === 'success') {
      return `${baseClass} bg-green-600 hover:bg-green-700`;
    }
    
    if (submitStatus === 'error') {
      return `${baseClass} bg-red-600 hover:bg-red-700`;
    }
    
    return `${baseClass} bg-brown hover:bg-tan`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-brown mb-6">Créons ensemble</h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vous avez un projet design en tête ? Une interface à repenser ? 
            Une expérience utilisateur à améliorer ? Discutons-en !
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Formulaire de contact */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="bg-card p-8 rounded-soft border border-border shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-tan rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-brown">Si la moindre question vous vient à l'esprit ?</h3>
                  <p className="text-sm text-muted-foreground">Je vous répondrai sous 24h !</p>
                </div>
              </div>

              {/* Message de statut */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-soft">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      Message envoyé avec succès ! Je vous répondrai très bientôt 🎨
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-soft">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 font-medium">
                      Une erreur s'est produite. Veuillez réessayer ou me contacter directement.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brown mb-2">
                      Votre nom *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="focus:border-tan focus:ring-tan/20"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brown mb-2">
                      Votre email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="focus:border-tan focus:ring-tan/20"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-brown mb-2">
                    Type de projet *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-border rounded-soft focus:border-tan focus:ring-tan/20 bg-input-background disabled:opacity-50"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brown mb-2">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Le titre de votre projet"
                    className="focus:border-tan focus:ring-tan/20"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown mb-2">
                    Détails du projet *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre projet : contexte, objectifs, timeline, budget approximatif..."
                    className="focus:border-tan focus:ring-tan/20 resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className={getButtonClassName()}
                >
                  {getSubmitButtonContent()}
                </Button>
              </form>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="lg:col-span-5 space-y-8 animate-scale-in">
            {/* Infos contact */}
            <div>
              <h4 className="text-brown mb-6">Me contacter directement</h4>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start space-x-4 p-4 bg-card rounded-soft border border-border hover:shadow-soft transition-all duration-300 hover-lift group"
                  >
                    <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-tan group-hover:text-white transition-colors">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-brown group-hover:text-tan transition-colors">
                        {info.label}
                      </h5>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Portfolio en ligne */}
            <div>
              <h4 className="text-brown mb-6">Mon travail en ligne</h4>
              <div className="grid gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 bg-card rounded-soft border border-border transition-all duration-300 hover-lift group ${social.color}`}
                  >
                    <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-transparent transition-colors">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium">{social.label}</h5>
                      <p className="text-sm text-muted-foreground group-hover:text-current">
                        {social.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Types de projets */}
            <div className="bg-card p-6 rounded-soft border border-border shadow-soft">
              <h4 className="text-brown mb-4">Ce que je peux vous apporter</h4>
              <div className="space-y-3">
                {[
                  { icon: '📱', text: 'Design d\'apps mobiles' },
                  { icon: '💻', text: 'Interfaces web modernes' },
                  { icon: '🎨', text: 'Design systems complets' },
                  { icon: '👥', text: 'Recherche & audit UX' },
                  { icon: '⚡', text: 'Prototypage interactif' },
                  { icon: '🔄', text: 'Refonte d\'existant' }
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{service.icon}</span>
                    <span className="text-sm text-muted-foreground">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-warm p-6 rounded-soft text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-brown mb-2">Disponibilité actuelle</h4>
              <p className="text-brown/80 text-sm mb-4">
                Ouvert aux projets freelance et missions longues. 
                Particulièrement intéressé par les projets innovants et challenges UX.
              </p>
              <div className="flex items-center justify-center space-x-2 text-brown/70">
                <Coffee className="w-4 h-4" />
                <span className="text-xs font-mono">Toujours partant pour donner un tout nouveau souffle !</span>
              </div>
            </div>

            {/* Statut */}
            <div className="bg-card p-4 rounded-soft border border-border text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-brown">Disponible pour nouveaux projets</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Temps de réponse moyen : 2h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}