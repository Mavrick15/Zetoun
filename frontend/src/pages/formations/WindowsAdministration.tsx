import React, { useEffect, useState, Suspense } from 'react';
import { ArrowLeft, Server, Monitor, Shield, Settings, Database, Layers, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from '@/components/PageLayout'; // Keeping this import as per user's instruction
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO'; // Keeping this import as per user's instruction

const WindowsAdministration = () => {
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
          title="Formation Administration Système Windows Server | AD, GPO, Réseau - Zetoun Labs"
          description="Devenez administrateur Windows Server avec Zetoun Labs à Kinshasa : maîtrisez l'installation, la configuration
          et la gestion des rôles clés (Active Directory, DNS, DHCP, GPO) et la sécurité de l'infrastructure."
          keywords={[
            'formation Windows Server',
            'administration Windows',
            'Active Directory',
            'AD',
            'GPO',
            'DNS',
            'DHCP',
            'sécurité Windows Server',
            'gestion réseau Windows',
            'virtualisation Hyper-V',
            'Zetoun Labs Kinshasa',
            'formation IT Kinshasa'
          ]}
          imageUrl="../lovable-uploads/training/3a.png"
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
                  src="../lovable-uploads/training/3a.png"
                  alt="Administration Système sous Windows Server avec interface graphique"
                  className="w-full h-full object-cover mx-auto transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Windows+Server";
                    e.currentTarget.alt = "Image de remplacement pour l'administration Windows Server";
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
                      {isMobile ? "Admin. Windows" : "Formation Administration Système sous Windows"}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-base sm:text-lg text-white/90"
                    >
                      Cette formation couvre l'administration complète de systèmes Windows Server pour l'entreprise à Kinshasa.
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
                    <Monitor className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold">
                      {isMobile ? "Objectifs pédagogiques" : "Objectifs pédagogiques de notre formation Windows Server"}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[
                      { text: "Installer et configurer efficacement Windows Server", icon: <Monitor className="w-6 h-6 text-gray-600" /> },
                      { text: "Gérer les rôles et services essentiels : Active Directory, DNS, DHCP, GPO", icon: <Settings className="w-6 h-6 text-gray-600" /> },
                      { text: "Administrer les utilisateurs, les groupes et les politiques de sécurité", icon: <Shield className="w-6 h-6 text-gray-600" /> },
                      { text: "Mettre en œuvre des stratégies de sauvegarde et de restauration système", icon: <Database className="w-6 h-6 text-gray-600" /> }
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
                      src="../lovable-uploads/training/3b1.png"
                      alt="Configuration de Windows Server avec Active Directory"
                      className="w-full h-64 md:h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Active+Directory";
                        e.currentTarget.alt = "Image de remplacement pour la configuration Windows Server";
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
                    <Layers className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold">
                      {isMobile ? "Contenu détaillé" : "Contenu détaillé de la formation en administration Windows Server"}
                    </h2>
                  </div>

                  <p className="text-gray-600 mb-8 text-base max-w-3xl">
                    Notre programme d'administration de systèmes Windows Server vous donnera toutes les compétences nécessaires
                    pour gérer efficacement l'infrastructure informatique de votre entreprise à Kinshasa.
                  </p>

                  <Tabs defaultValue="content" className="w-full mb-12">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      <TabsTrigger value="content">Contenu</TabsTrigger>
                      <TabsTrigger value="duration">Durée</TabsTrigger>
                      <TabsTrigger value="audience">Public cible</TabsTrigger>
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
                              { text: "Installation et gestion de Windows Server 2019/2022", icon: <Monitor className="w-5 h-5 mr-2" /> },
                              { text: "Mise en place d'Active Directory, DNS, DHCP et services réseau", icon: <Network className="w-5 h-5 mr-2" /> },
                              { text: "Gestion des utilisateurs, des groupes et des stratégies de groupe (GPO)", icon: <Shield className="w-5 h-5 mr-2" /> },
                              { text: "Configuration des partages réseau et des droits d'accès", icon: <Database className="w-5 h-5 mr-2" /> },
                              { text: "Notions de base sur Hyper-V pour la virtualisation de serveurs", icon: <Layers className="w-5 h-5 mr-2" /> }
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
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Monitor className="w-5 h-5 mr-2" /> Durée
e totale : 5 semaines</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Settings className="w-5 h-5 mr-2" /> Fré
quence : 2 sessions de 3 heures par semaine</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Database className="w-5 h-5 mr-2" /> Vol
ume horaire : 30 heures de formation encadrée</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Shield className="w-5 h-5 mr-2" /> Exerc
ices pratiques et travaux dirigés inclus pour la mise en œuvre réelle</motion.li>
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
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Database className="w-5 h-5 mr-2" /> Étu
diants en informatique et jeunes diplômés</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Monitor className="w-5 h-5 mr-2" /> Tech
niciens Windows et support IT souhaitant progresser</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Network className="w-5 h-5 mr-2" /> Prof
essionnels IT souhaitant évoluer vers l'administration de serveurs</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Settings className="w-5 h-5 mr-2" /> Adm
inistrateurs système débutants ou en reconversion</motion.li>
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-gray-700" />
                      <h3 className="text-xl font-bold">Environnement de travail et ressources</h3>
                    </div>
                    <p className="text-gray-600">
                      Pendant la formation, vous travaillerez sur des environnements Windows Server réels et virtualisés,
                      offrant une expérience immersive. Vous apprendrez à installer, configurer et administrer tous les services
                      essentiels d'un réseau d'entreprise basé sur Windows Server, vous préparant aux défis du monde professionnel.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMobile ? "Formateurs experts" : "Formateurs experts"}
                  </h3>
                  <p className="text-gray-600">Des professionnels certifiés avec une expérience pratique et approfondie dans la
                    gestion, la sécurisation et le dépannage des environnements Windows Server et postes clients.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMobile ? "Approche pratique" : "Approche pratique"}
                  </h3>
                  <p className="text-gray-600">Nos formations en administration Windows combinent théorie et travaux pratiques
                    intensifs sur des environnements Windows Server réels, incluant la gestion des utilisateurs, des services réseau et des stratégies de groupe.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMobile ? "Certifications reconnues" : "Certifications reconnues"}
                  </h3>
                  <p className="text-gray-600">Préparez-vous aux certifications de l'industrie les plus demandées sur le marché
                    de l'emploi en administration système Windows, renforçant ainsi votre profil professionnel.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </Suspense>
  );
};

export default WindowsAdministration;
