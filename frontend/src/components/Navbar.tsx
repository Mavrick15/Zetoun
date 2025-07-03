import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Network, Shield, Globe, Server, HeadsetIcon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsAchievementsOpen(false);
    setIsServicesOpen(false);
    setIsFormationsOpen(false);
  };

  const handleMobileNavLinkClick = () => {
    setIsMenuOpen(false);
    setIsAchievementsOpen(false);
    setIsServicesOpen(false);
    setIsFormationsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-sm" : "bg-black"
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className={cn("flex items-center")}>
                <img
                  src="/lovable-uploads/logo/Logo1.svg"
                  alt="ZetounLabs Logo"
                  className={cn(
                    "h-8 mr-2",
                    isScrolled ? "filter-none" : "filter invert"
                  )}
                />
                <span className={cn("text-xl font-bold", isScrolled ? "text-gray-800" : "text-white")}>
                  Zetoun Labs
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                  >
                    <Link
                      to="/"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      Accueil
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                  >
                    <Link
                      to="/about"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      À propos
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Réalisations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/projects/realisations/police-judiciaire">
                            <div className="font-medium">Police judiciaire</div>
                            <p className="text-sm text-gray-500">Réhabilitation de l’infrastructure IT</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/projects/realisations/eyano-security">
                            <div className="font-medium">Centre de Diagnostic EYANO</div>
                            <p className="text-sm text-gray-500">Renforcement et extension du système de sécurité</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/projects/realisations/credit-shop-africa">
                            <div className="font-medium">Credit Shop Africa</div>
                            <p className="text-sm text-gray-500">Installation d'un nouveau système de vidéosurveillance</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/development-process">
                            <div className="font-medium">Processus de déploiement</div>
                            <p className="text-sm text-gray-500">Notre approche pour créer des solutions IT sur mesure</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/network-engineering" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-800">
                              <Network size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Ingénierie Réseau</div>
                              <p className="text-sm text-gray-700">Conception & installation réseau</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/video-surveillance" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-800">
                              <Shield size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Vidéosurveillance & Sécurité</div>
                              <p className="text-sm text-gray-700">Installations de vidéosurveillance adaptées</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/web-development" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-800">
                              <Globe size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Conception Web</div>
                              <p className="text-sm text-gray-700">Solutions web taillées pour votre activité</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/it-management" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-800">
                              <Server size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Infogérance</div>
                              <p className="text-sm text-gray-700">Supervision et maintenance IT</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/solar-installation" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-800">
                              <Sun size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Installation solaire</div>
                              <p className="text-sm text-gray-700">Conception et installation de systèmes solaires</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="flex items-center p-3 space-x-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <Link to="/services/technical-support" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-800">
                              <HeadsetIcon size={20} />
                            </div>
                            <div>
                              <div className="font-medium">Support Technique</div>
                              <p className="text-sm text-gray-700">Assistance technique réactive</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Formations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/linux-administration">
                            <div className="font-medium">Administration sous Linux</div>
                            <p className="text-sm text-gray-500">Formation Linux et gestion de serveurs</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/windows-administration">
                            <div className="font-medium">Administration sous Windows</div>
                            <p className="text-sm text-gray-500">Formation Windows et gestion de serveurs</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/network-administration">
                            <div className="font-medium">Administration Réseau</div>
                            <p className="text-sm text-gray-500">Formation routage et switching CISCO</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/computer-maintenance">
                            <div className="font-medium">Maintenance des Ordinateurs</div>
                            <p className="text-sm text-gray-500">Formation dépannage matériel et logiciel</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/formations/virtualization-training">
                            <div className="font-medium">Virtualisation</div>
                            <p className="text-sm text-gray-500">Formation aux technologies de virtualisation</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {/* Nouvelle rubrique "Voir plus..." */}
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <Link to="/add/calendar-form">
                            <div className="font-medium">Voir plus...</div>
                            <p className="text-sm text-gray-500">Explorer toutes nos formations</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                  >
                    <Link
                      to="/blog"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                      )}
                    >
                      Nouveautés
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <div className={cn("h-6 w-px mx-4", isScrolled ? "bg-gray-300" : "bg-gray-600")}></div>
              <div className="flex items-center "> <UserMenu /> </div>
            </NavigationMenu>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
            Accueil
          </Link>

          <Link to="/about" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
            À propos
          </Link>

          <div className="block">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsAchievementsOpen(!isAchievementsOpen);
                setIsServicesOpen(false);
                setIsFormationsOpen(false);
              }}
              className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              <span>Réalisations</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isAchievementsOpen ? "rotate-180" : "")} />
            </button>
            <div className={cn("ml-4 mt-1 space-y-1", isAchievementsOpen ? "block" : "hidden")}>
              <Link to="/projects/realisations/police-judiciaire" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Police judiciaire
              </Link>
              <Link to="/projects/realisations/eyano-security" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Centre de Diagnostic EYANO
              </Link>
              <Link to="/projects/realisations/credit-shop-africa" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Credit Shop Africa
              </Link>
              <Link to="/development-process" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Processus de déploiement
              </Link>
            </div>
          </div>

          <div className="block">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsServicesOpen(!isServicesOpen);
                setIsAchievementsOpen(false);
                setIsFormationsOpen(false);
              }}
              className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              <span>Services</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen ? "rotate-180" : "")} />
            </button>
            <div className={cn("ml-4 mt-1 space-y-1", isServicesOpen ? "block" : "hidden")}>
              <Link to="/services/network-engineering" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Ingénierie Réseau
              </Link>
              <Link to="/services/video-surveillance" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Vidéosurveillance & Sécurité
              </Link>
              <Link to="/services/web-development" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Conception Web
              </Link>
              <Link to="/services/it-management" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Infogérance
              </Link>
              <Link to="/services/solar-installation" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Installation solaire
              </Link>
              <Link to="/services/technical-support" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Support Technique
              </Link>
            </div>
          </div>

          <div className="block">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsFormationsOpen(!isFormationsOpen);
                setIsAchievementsOpen(false);
                setIsServicesOpen(false);
              }}
              className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              <span>Formations</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isFormationsOpen ? "rotate-180" : "")} />
            </button>
            <div className={cn("ml-4 mt-1 space-y-1", isFormationsOpen ? "block" : "hidden")}>
              <Link to="/formations/linux-administration" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Administration sous Linux
              </Link>
              <Link to="/formations/windows-administration" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Administration sous Windows
              </Link>
              <Link to="/formations/network-administration" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Administration Réseau
              </Link>
              <Link to="/formations/computer-maintenance" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Maintenance des Ordinateurs
              </Link>
              <Link to="/formations/virtualization-training" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Virtualisation
              </Link>
              {/* Nouvelle rubrique "Voir plus..." pour mobile */}
              <Link to="/add/calendar-form" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
                Voir plus...
              </Link>
            </div>
          </div>

          <Link to="/blog" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={handleMobileNavLinkClick}>
            Nouveautés
          </Link>

          <Link to="/add/contact-nous" className={cn("block w-full text-center px-3 py-2 rounded-md", isScrolled ? "text-gray-900 bg-gray-200 hover:bg-gray-300" : "text-white bg-gray-700 hover:bg-gray-600")} onClick={handleMobileNavLinkClick}>
            Contactez-nous
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
