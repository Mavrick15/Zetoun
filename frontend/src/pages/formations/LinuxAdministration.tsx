import React, { useEffect, useState, Suspense } from 'react';
import { ArrowLeft, Server, Shield, Terminal, Code, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const LinuxAdministration = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

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
      window.removeEventListener('resize', checkMobile);
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
          title="Formation Administration Système Linux | Serveurs & Réseaux - Zetoun Labs"
          description="Devenez un administrateur système Linux expert avec Zetoun Labs à Kinshasa : maîtrisez la gestion de serveurs,
          la sécurité, les réseaux et l'automatisation avec notre formation complète et pratique."
          keywords={[
            'formation Linux',
            'administration système Linux',
            'gestion serveurs Linux',
            'sécurité Linux',
            'réseaux Linux',
            'automatisation Linux',
            'scripts Bash',
            'certification Linux Kinshasa',
            'Zetoun Labs Kinshasa',
            'formation IT Kinshasa'
          ]}
          imageUrl="../lovable-uploads/training/2a.png"
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
                  src="../lovable-uploads/training/2a.png"
                  alt="Administration Système sous Linux avec terminal"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Formation+Linux";
                    e.currentTarget.alt = "Image de remplacement pour la formation Linux";
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
                      {isMobile ? "Admin. sous linux" : "Formation administration système sous linux"}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-base sm:text-lg text-white/90"
                    >
                      Formation complète et pratique pour administrer un système Linux en entreprise,
                      essentielle pour tout professionnel IT.
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
                    <Terminal className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold">
                      {isMobile ? "Objectifs pédagogiques" : "Objectifs pédagogiques de notre formation Linux"}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[
                      { text: "Comprendre le fonctionnement interne et l'architecture du système Linux", icon: <Server className="w-6 h-6 text-gray-600" /> },
                      { text: "Gérer les comptes utilisateurs, les permissions, les scripts et les services Linux", icon: <Shield className="w-6 h-6 text-gray-600" /> },
                      { text: "Configurer et optimiser des services réseau essentiels comme Apache, SSH, DNS et FTP", icon: <Code className="w-6 h-6 text-gray-600" /> },
                      { text: "Mettre en œuvre la sécurité et superviser les performances des systèmes Linux", icon: <Terminal className="w-6 h-6 text-gray-600" /> }
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
                      src="../lovable-uploads/training/2b.png"
                      alt="Terminal Linux et ligne de commande pour l'administration système"
                      className="w-full h-64 md:h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Terminal+Linux";
                        e.currentTarget.alt = "Image de remplacement pour le terminal Linux";
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
                    <Server className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold">
                      {isMobile ? "Contenu détaillé" : "Contenu détaillé de la formation en administration Linux"}
                    </h2>
                  </div>

                  <p className="text-gray-600 mb-8 text-base max-w-3xl">
                    Notre programme complet d'administration système Linux couvre tous les aspects essentiels
                    pour devenir un administrateur système Linux compétent et recherché sur le marché de l'emploi à Kinshasa.
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
                              { text: "Maîtrise des commandes de base et de l'arborescence Linux", icon: <Terminal className="w-5 h-5 mr-2" /> },
                              { text: "Gestion avancée des utilisateurs, groupes et permissions", icon: <Database className="w-5 h-5 mr-2" /> },
                              { text: "Configuration et administration des services réseau (Apache, DNS, NFS)", icon: <Server className="w-5 h-5 mr-2" /> },
                              { text: "Création de scripts Bash et automatisation des tâches système", icon: <Code className="w-5 h-5 mr-2" /> },
                              { text: "Utilisation des outils de monitoring et supervision (Nagios, top, etc.)", icon: <Shield className="w-5 h-5 mr-2" /> }
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
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Server className="w-5 h-5 mr-2" /> Durée totale : 6 semaines</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Terminal className="w-5 h-5 mr-2" /> Fréquence : 2 sessions de 3 heures par semaine</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Database className="w-5 h-5 mr-2" /> Volume horaire : 36 heures de formation encadrée</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Code className="w-5 h-5 mr-2" /> Recommandation : Exercices pratiques supplémentaires pour consolider les acquis</motion.li>
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
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Database className="w-5 h-5 mr-2" /> Débutants en informatique souhaitant se spécialiser en administration Linux</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Server className="w-5 h-5 mr-2" /> Techniciens système ou réseau cherchant à étendre leurs compétences</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Code className="w-5 h-5 mr-2" /> Professionnels en reconversion vers les métiers de l'administration système</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Terminal className="w-5 h-5 mr-2" /> Administrateurs IT expérimentés souhaitant diversifier leurs compétences vers Linux</motion.li>
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-gray-700" />
                      <h3 className="text-xl font-bold">Certification et reconnaissance professionnelle</h3>
                    </div>
                    <p className="text-gray-600">
                      À l'issue de cette formation, vous recevrez un certificat de compétences validant vos acquis
                      en administration système Linux. Cette formation constitue également une excellente base pour
                      préparer des certifications Linux professionnelles reconnues mondialement comme LPIC-1 ou Red Hat
                      Certified System Administrator (RHCSA).
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Formateurs experts</h3>
                  <p className="text-gray-600">Des professionnels certifiés avec une expérience concrète dans
                    l'administration, la sécurisation et l'optimisation de systèmes Linux en environnement de production.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Approche pratique</h3>
                  <p className="text-gray-600">Nos formations en administration Linux allient théorie et ateliers pratiques
                    sur des systèmes Linux réels, avec des cas concrets de gestion, de sécurité et de dépannage.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Certifications reconnues</h3>
                  <p className="text-gray-600">Préparez-vous aux certifications de l'industrie les plus demandées sur le marché
                    de l'emploi en administration système Linux.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </Suspense>
  );
};

export default LinuxAdministration;
