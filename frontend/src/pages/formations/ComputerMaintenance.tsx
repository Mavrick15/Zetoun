import React, { useEffect, useState, Suspense } from 'react';
import { ArrowLeft, HardDrive, Wrench, Settings, Cpu, Monitor, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const ComputerMaintenance = () => {
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
          title="Formation Maintenance Informatique | Dépannage PC & Réparation - Zetoun Labs"
          description="Devenez expert en maintenance informatique avec Zetoun Labs à Kinshasa : apprenez à diagnostiquer, réparer et optimiser les ordinateurs (matériel et logiciel), avec une formation pratique et certifiante."
          keywords={[
            'formation maintenance informatique',
            'dépannage PC',
            'réparation ordinateur',
            'matériel informatique',
            'logiciel informatique',
            'certification informatique Kinshasa',
            'cours maintenance PC',
            'Zetoun Labs Kinshasa',
            'formation technique informatique'
          ]}
          imageUrl="../lovable-uploads/training/1a.png"
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
                  src="../lovable-uploads/training/1a.png"
                  alt="Formation en maintenance et réparation d'ordinateurs"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Image+de+Formation";
                    e.currentTarget.alt = "Image de remplacement pour la formation en maintenance informatique";
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
                      {isMobile ? "Maintenance" : "Formation en Maintenance des Ordinateurs"}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-base sm:text-lg text-white/90"
                    >
                      Acquérez les compétences essentielles pour diagnostiquer, réparer et optimiser les systèmes informatiques.
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
                    <Wrench className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold">
                      {isMobile ? "Objectifs pédagogiques" : "Objectifs pédagogiques de notre formation"}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[
                      { text: "Identifier et comprendre l'architecture des composants d'un PC", icon: <Cpu className="w-6 h-6 text-gray-600" /> },
                      { text: "Diagnostiquer et dépanner les problèmes matériels et logiciels courants", icon: <Wrench className="w-6 h-6 text-gray-600" /> },
                      { text: "Maîtriser l'installation et la configuration des systèmes d'exploitation (Windows, Linux)", icon: <Monitor className="w-6 h-6 text-gray-600" /> },
                      { text: "Optimiser les performances et sécuriser un système informatique", icon: <Shield className="w-6 h-6 text-gray-600" /> }
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
                      src="../lovable-uploads/training/1b.png"
                      alt="Composants et matériel informatique pour l'apprentissage de la maintenance"
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Matériel+informatique";
                        e.currentTarget.alt = "Image de remplacement pour le matériel informatique";
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
                    <HardDrive className="w-5 h-5 text-gray-700" />
                    <h2 className="text-2xl font-bold">
                      {isMobile ? "Contenu détaillé" : "Contenu détaillé de la formation"}
                    </h2>
                  </div>

                  <p className="text-gray-600 mb-8 text-base max-w-3xl">
                    Notre formation en maintenance informatique vous permettra d'acquérir les compétences pratiques pour
                    diagnostiquer et réparer efficacement les problèmes courants sur les ordinateurs, qu'ils soient
                    d'ordre matériel ou logiciel.
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
                              { text: "Architecture et fonctionnement des ordinateurs (PC)", icon: <Cpu className="w-5 h-5 mr-2" /> },
                              { text: "Assemblage et remplacement des composants matériels", icon: <HardDrive className="w-5 h-5 mr-2" /> },
                              { text: "Diagnostic et résolution des problèmes logiciels et systèmes d'exploitation", icon: <Monitor className="w-5 h-5 mr-2" /> },
                              { text: "Principes de sécurité informatique de base et bonnes pratiques", icon: <Shield className="w-5 h-5 mr-2" /> },
                              { text: "Notions fondamentales sur les réseaux locaux et la connectivité", icon: <Settings className="w-5 h-5 mr-2" /> }
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
                          <p className="mb-4">Notre approche pédagogique est résolument pratique et interactive, combinant :</p>
                          <motion.ul
                            className="space-y-2"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.1 } }
                            }}
                          >
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><HardDrive className="w-5 h-5 mr-2" /> Ateliers pratiques intensifs sur machines réelles</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Monitor className="w-5 h-5 mr-2" /> Démonstrations en direct des techniques de dépannage</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Cpu className="w-5 h-5 mr-2" /> Mise à disposition de fiches de dépannage et de procédures claires</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Wrench className="w-5 h-5 mr-2" /> Exercices de diagnostic et de résolution de problèmes concrets</motion.li>
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="audience">
                      <Card>
                        <CardContent className="pt-6">
                          <p>Cette formation s'adresse à un large public souhaitant maîtriser la maintenance informatique :</p>
                          <motion.ul
                            className="space-y-2 mt-4"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.1 } }
                            }}
                          >
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Monitor className="w-5 h-5 mr-2" /> Débutants en informatique avec un intérêt pour le matériel</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Wrench className="w-5 h-5 mr-2" /> Techniciens de maintenance junior ou en début de carrière</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><HardDrive className="w-5 h-5 mr-2" /> Particuliers souhaitant acquérir l'autonomie pour réparer leur propre matériel</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Cpu className="w-5 h-5 mr-2" /> Personnes en reconversion professionnelle vers les métiers techniques de l'informatique</motion.li>
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="duration">
                      <Card>
                        <CardContent className="pt-6">
                          <p>La formation est structurée comme suit :</p>
                          <motion.ul
                            className="space-y-2 mt-4"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.1 } }
                            }}
                          >
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><HardDrive className="w-5 h-5 mr-2" /> Durée totale : 4 semaines</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Wrench className="w-5 h-5 mr-2" /> Fréquence : 3 sessions de 3 heures par semaine</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Monitor className="w-5 h-5 mr-2" /> Volume horaire : 36 heures de formation encadrée</motion.li>
                            <motion.li className="flex items-center" variants={listItemVariants} transition={{ duration: 0.3 }}><Cpu className="w-5 h-5 mr-2" /> Recommandation : Exercices pratiques supplémentaires pour consolider les acquis</motion.li>
                          </motion.ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Settings className="w-5 h-5 text-gray-700" />
                      <h3 className="text-xl font-bold">Matériel et ressources fournis</h3>
                    </div>
                    <p className="text-gray-600">
                      Pendant la formation, vous aurez accès à un environnement d'apprentissage complet comprenant des
                      ordinateurs de différentes générations, des composants de rechange variés, et tous les outils
                      nécessaires pour les travaux pratiques. Des systèmes d'exploitation et des logiciels de diagnostic
                      performants seront également mis à votre disposition pour une immersion totale.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Formateurs experts</h3>
                  <p className="text-gray-600">Des professionnels certifiés avec une vaste expertise pratique dans la
                    maintenance préventive et corrective des infrastructures informatiques et réseau.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Approche pratique</h3>
                  <p className="text-gray-600">Nos formations en maintenance allient théorie et pratique intensive pour
                    assurer l'acquisition des compétences de diagnostic, de réparation et de prévention des pannes informatiques.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Certifications reconnues</h3>
                  <p className="text-gray-600">Préparez-vous aux certifications de l'industrie les plus demandées sur le marché
                    de l'emploi en maintenance informatique.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </Suspense>
  );
};

export default ComputerMaintenance;
