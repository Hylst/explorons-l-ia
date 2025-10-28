
import { Link } from 'react-router-dom';

interface FooterProps {
  author?: string;
  email?: string;
}

/**
 * Composant de pied de page avec liens et informations légales
 * @param {string} author - Nom de l'auteur du site (optionnel)
 * @param {string} email - Email de l'auteur du site (optionnel)
 * @returns {JSX.Element} Le composant Footer
 */
const Footer = ({ author = "Geoffroy Streit", email = "geoffroy.streit@gmail.com" }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-muted/20 py-6 md:py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Explorons l'IA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ressource éducative pour comprendre l'intelligence artificielle, ses applications et ses enjeux.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/types-ia" className="text-muted-foreground hover:text-primary transition-colors">Types d'IA</Link></li>
              <li><Link to="/niveaux-ia" className="text-muted-foreground hover:text-primary transition-colors">Niveaux d'IA</Link></li>
              <li><Link to="/machine-learning" className="text-muted-foreground hover:text-primary transition-colors">Machine Learning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ethique" className="text-muted-foreground hover:text-primary transition-colors">Éthique</Link></li>
              <li><Link to="/cas-usage" className="text-muted-foreground hover:text-primary transition-colors">Cas d'usage</Link></li>
              <li><Link to="/glossaire" className="text-muted-foreground hover:text-primary transition-colors">Glossaire</Link></li>
              <li><Link to="/ressources" className="text-muted-foreground hover:text-primary transition-colors">Ressources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="text-muted-foreground hover:text-primary transition-colors">Confidentialité</Link></li>
              <li><Link to="/cgu" className="text-muted-foreground hover:text-primary transition-colors">CGU</Link></li>
              <li><Link to="/gestion-donnees-rgpd" className="text-muted-foreground hover:text-primary transition-colors">Mes données RGPD</Link></li>
              <li><Link to="/registre-traitements" className="text-muted-foreground hover:text-primary transition-colors">Registre des traitements</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Questions ou suggestions ? Écrivez-nous.
            </p>
            <a href={`mailto:${email}`} className="text-primary hover:underline text-sm">
              {email}
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-6 md:mt-8 pt-4 md:pt-6 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {currentYear} Explorons l'IA. Créé avec passion par {author}.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground/80 italic mt-1">
            Certaines illustrations et contenus ont été assistés par IA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
