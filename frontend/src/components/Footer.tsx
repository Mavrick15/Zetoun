import { ArrowRight, Linkedin, Mail, Phone, MapPin, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
// Removed useState and useToast as they are no longer needed for the contact form

const Footer = () => {
  // Removed email, message, isSubmitting states and handleSubscribe function

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
             <div className="h-12 w-12 mr-2">
                <img
                  src="/lovable-uploads/logo/Logo2.png"
                  alt="Zetoun Labs Logo"
                  className="h-full w-full object-contain"
                  onError={(e) => { // Fallback for image loading error
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/48x48/000000/FFFFFF?text=ZL"; // Placeholder image
                    e.currentTarget.alt = "ZetounLabs Logo Placeholder";
                  }}
                />
             </div>
             <span className="text-2xl font-bold text-white">Zetoun Labs</span>
            </div>
            <p className="text-gray-300 mb-6">
              Zetoun Labs est une plateforme tout-en-un pour le développement et le déploiement
              de solutions informatiques intelligentes, offrant à ses clients une maîtrise totale
              de leurs outils tout en assurant la prise en charge complète du développement technologique.
            </p>
            {/* Removed the direct display of physical address here, it will be moved to "Contactez-nous" section */}
            {/* Removed the direct display of Linkedin icon here, it will be moved to "Contactez-nous" section */}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">À propos de nous</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Parcours professionnel</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contactez-nous</h3>
            <div className="space-y-4">
              {/* Physical Address */}
              <div className="flex items-start text-gray-300">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>
                  6284 1st Street<br />
                  Matete, Kinshasa DRCongo
                </span>
              </div>

              {/* Email Address */}
              <div className="flex items-center text-gray-300">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a href="mailto:zetouncontacts@gmail.com" className="hover:text-white transition-colors">zetouncontacts@gmail.com</a>
              </div>

              {/* Phone Number */}
              <div className="flex items-center text-gray-300">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <a href="tel:+243812583947" className="hover:text-white transition-colors">+243 812 583 947</a> {/* Replace with actual phone number */}
              </div>

              {/* Social Media Accounts */}
              <div className="flex space-x-4 pt-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/zetounlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/243812583947" // Replace with actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Xeboulon.baki" // Replace with actual Facebook page URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Zetoun Labs inc. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
