import React, { useEffect, useState, Suspense } from 'react';
import { ArrowLeft, Network, Router, Computer, Wifi, Globe, Lock, Server, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const NetworkAdministration = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // State for mobile view

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Check if screen width is less than 768px (md breakpoint)
    };

    checkMobile(); // Initial check on mount
    window.addEventListener('resize', checkMobile); // Add event listener for window resize

    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 95) {
          return prevProgress + 5;
        }
        return prevProgress;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile); // Cleanup event listener
    };
  }, []);

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-gray-800 border-b-gray-800 border-l-gray-400 border-r-gray-400 animate-spin"></div>
          <div
            className="absolute inset-2 rounded-full bg-gray-50 flex items-center justify-center"
            style={{
              clipPath: `inset(${100 - loadingProgress}% 0 0 0)`,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              transition: 'clip-path 0.2s ease-out'
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-gray-900 text-2xl font-bold">
            {loadingProgress}%
          </div>
        </div>
      </div>
    }>
      <PageLayout>
        <SEO
          title="Formation Administration Réseau CISCO | CCNA, Routage & Switching - Zetoun Labs"
          description="Devenez un administrateur réseau CISCO certifié avec Zetoun Labs à Kinshasa : maîtrisez la configuration de routeurs,
          switches, la sécurité réseau et préparez la certification CCNA avec des TP intensifs."
          keywords={[
            'formation administration réseau',
            'CISCO',
            'CCNA',
            'routage',
            'switching',
            'configuration réseau',
            'sécurité réseau',
            'GNS3',
            'Packet Tracer',
            'certifications réseau Kinshasa',
            'Zetoun Labs Kinshasa'
          ]}
          imageUrl="../lovable-uploads/training/4a.png"
        />
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>

              <motion.div
                className="relative h-64 md:h-80 w-full mb-12 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="../lovable-uploads/training/4a.png"
                  alt="Équipement réseau CISCO pour formation en administration"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Réseau+Cisco";
                    e.currentTarget.alt = "Image de remplacement pour la formation Cisco";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 md:p-8">
                    <motion.h1
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-3xl sm:text-4xl font-bold mb-2 text-white"
                    >
                      {isMobile ? "Formation Admin. Réseau" : "Formation Administration Réseau CISCO"}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-base sm:text-lg text-white/90"
                    >
                      Formation complète orientée routage, switching et configuration CISCO, idéale pour les débutants
                      et la préparation à la certification CCNA.
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Network className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold">
                      {isMobile ? "Objectifs pédagogiques" : "Objectifs pédagogiques de notre formation CISCO"}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[
                      { text: "Comprendre les fondamentaux des réseaux informatiques et le modèle OSI", icon: <Globe className="w-6 h-6 text-gray-600" /> },
                      { text: "Configurer les routeurs et switches CISCO pour des environnements complexes", icon: <Router className="w-6 h-6 text-gray-600" /> },
                      { text: "Maîtriser les protocoles de routage (OSPF, EIGRP) et les VLAN", icon: <Network className="w-6 h-6 text-gray-600" /> },
                      { text: "Implémenter la sécurité de base et dépanner les problèmes réseau courants", icon: <Lock className="w-6 h-6 text-gray-600" /> }
                    ].map((objective, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 flex items-start"
                      >
                        <div className="mr-4 mt-1 text-gray-500">
                          {objective.icon}
                        </div>
                        <p className="text-gray-700">{objective.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="rounded-lg overflow-hidden mb-10"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <img
                      src="../lovable-uploads/training/4b.png"
                      alt="Salle serveur avec équipement réseau CISCO"
                      className="w-full h-64 md:h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Équipement+Réseau";
                        e.currentTarget.alt = "Image de remplacement pour l'équipement réseau";
                      }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Router className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold">
                      {isMobile ? "Contenu détaillé" : "Contenu détaillé de la formation en administration réseau CISCO"}
                    </h2>
                  </div>

                  <p className="text-gray-600 mb-8 text-base max-w-3xl">
                    Notre programme d'administration réseau CISCO vous donne toutes les compétences nécessaires
                    pour configurer, gérer et dépanner des réseaux d'entreprise complexes,
                    et vous prépare efficacement aux certifications CCNA.
                  </p>

                  <Tabs defaultValue="content" className="w-full mb-12">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                      <TabsTrigger value="content">Contenu</TabsTrigger>
                      <TabsTrigger value="methodology">Méthodologie</TabsTrigger>
                      <TabsTrigger value="audience">Public cible</TabsTrigger>
                      <TabsTrigger value="duration">Durée</TabsTrigger>
                    </TabsList>

                    <TabsContent value="content" className="space-y-4">
                      <Card>
                        <CardContent className="pt-6">
                          <motion.ul
                            className="space-y-4"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.1 } }
                            }}
                          >
                            {[
                              { text: "Fondamentaux des réseaux et du modèle OSI/TCP-IP", icon: <Globe className="w-5 h-5 mr-2" /> },
                              { text: "Configuration et dépannage du routage dynamique (OSPF, EIGRP)", icon: <Router className="w-5 h-5 mr-2" /> },
                              { text: "Mise en œuvre des VLAN, ACL et NAT", icon: <Network className="w-5 h-5 mr-2" /> },
                              { text: "Protocoles DHCP, WAN et VPN", icon: <Wifi className="w-5 h-5 mr-2" /> },
                              { text: "Travaux pratiques et simulations sur GNS3 et Packet Tracer", icon: <Computer className="w-5 h-5 mr-2" /> }
                            ].map((item, i) => (
                              <motion.li
                                key={i}
                                className="flex items-center"
                                variants={listItemVariants}
                                transition={{ duration: 0.3 }}
                              >
                                {item.icon}
                                <span>{item.text}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="methodology">
                      <Card>
                        <CardContent className="pt-6">
                          <p className="mb-4">Notre approche pédagogique est axée sur la pratique, combinant :</p>
                          <motion.ul
                            className="space-y-2"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.1 } }
                            }}
                          >
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Computer className="w-5 h-5 mr-2" /> Travaux pratiques intensifs sur simulateurs réseau (GNS3, Packet Tracer)</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Network className="w-5 h-5 mr-2" /> Étude de cas concrets et schémas/diagrammes détaillés</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Router className="w-5 h-5 mr-2" /> Exercices de configuration et de dépannage réels</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Globe className="w-5 h-5 mr-2" /> Mises en situation pour le dépannage de réseaux complexes</motion.li>
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="audience">
                      <Card>
                        <CardContent className="pt-6">
                          <p>Cette formation s'adresse principalement aux :</p>
                          <motion.ul
                            className="space-y-2 mt-4"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.1 } }
                            }}
                          >
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Computer className="w-5 h-5 mr-2" /> Étudiants en réseaux informatiques et débutants</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Network className="w-5 h-5 mr-2" /> Techniciens réseaux débutants ou souhaitant une spécialisation CISCO</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Router className="w-5 h-5 mr-2" /> Candidats aux certifications CCNA de CISCO</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Lock className="w-5 h-5 mr-2" /> Professionnels IT souhaitant se spécialiser dans l'administration réseau</motion.li>
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="duration">
                      <Card>
                        <CardContent className="pt-6">
                          <p>La formation se déroule sur :</p>
                          <motion.ul
                            className="space-y-2 mt-4"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.1 } }
                            }}
                          >
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Network className="w-5 h-5 mr-2" /> Durée totale : 8 semaines</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Router className="w-5 h-5 mr-2" /> Fréquence : 2 sessions de 3 heures par semaine</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Computer className="w-5 h-5 mr-2" /> Volume horaire total : 48 heures de formation encadrée</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Globe className="w-5 h-5 mr-2" /> Travaux pratiques supplémentaires sur simulateur pour une meilleure maîtrise</motion.li>
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Computer className="w-5 h-5 text-gray-700" />
                      <h3 className="text-xl font-bold">Équipement et ressources de formation</h3>
                    </div>
                    <p className="text-gray-600">
                      Pour suivre cette formation, vous aurez besoin d'un ordinateur capable de faire fonctionner
                      les simulateurs réseau professionnels comme GNS3 ou Packet Tracer. Nous recommandons un minimum
                      de 8 Go de RAM et un processeur multi-cœur pour une expérience fluide. Tous les logiciels
                      nécessaires sont gratuits et seront fournis ainsi que configurés pour vous pendant la formation.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMobile ? "Formateurs experts" : "Formateurs experts CISCO"}
                  </h3>
                  <p className="text-gray-600">Des professionnels certifiés avec une solide expérience pratique dans la
                    conception, le déploiement et la gestion d’infrastructures réseau complexes.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMobile ? "Approche pratique" : "Approche pratique et certifiante"}
                  </h3>
                  <p className="text-gray-600">Nos formations en administration réseau allient théorie et pratique intensive
                    sur équipements professionnels simulés, axées sur la configuration, la sécurité et le dépannage
                    des réseaux LAN et WAN, en préparation au CCNA.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMobile ? "Préparation certifications" : "Préparation aux certifications"}
                  </h3>
                  <p className="text-gray-600">Cette formation est conçue pour vous préparer efficacement aux certifications
                    CISCO de l'industrie les plus demandées sur le marché de l'emploi en réseau.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </Suspense>
  );
};

export default NetworkAdministration;
