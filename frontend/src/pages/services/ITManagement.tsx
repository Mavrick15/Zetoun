import React, { useEffect, useState, Suspense } from 'react';
import { ArrowLeft, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const ITManagement = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 95) {
          return prevProgress + 5;
        }
        return prevProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

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
      <div className="min-h-screen bg-white">
        <PageLayout>
          <SEO
            title="Infogérance IT | Supervision & Maintenance Informatique - Zetoun Labs"
            description="Déléguez la gestion de votre SI à Zetoun Labs à Kinshasa : monitoring 24/7, gestion proactive des incidents,
            sauvegarde sécurisée, restauration et maintenance informatique complète."
            keywords={[
              'infogérance', 'gestion IT', 'maintenance informatique', 'supervision 24/7', 'sauvegarde données',
              'restauration système', 'support informatique', 'gestion incidents IT', 'Zetoun Labs Kinshasa', 'services IT Kinshasa'
            ]}
            imageUrl="../lovable-uploads/services/1.png"
          />

          <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </Link>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center mb-6 space-x-4"
                >
                  <div className="bg-purple-100 p-4 rounded-full">
                    <Monitor className="h-8 w-8 text-purple-600" />
                  </div>
                  <h1 className="text-4xl font-bold">Infogérance IT</h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  Zetoun Labs vous offre des services d'infogérance IT à Kinshasa pour une supervision continue et une
                  maintenance complète de votre infrastructure informatique, garantissant performance et sécurité.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
                >
                  <img
                    src="../lovable-uploads/services/1.png"
                    alt="Centre de supervision informatique et de gestion IT"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Infogérance+IT";
                      e.currentTarget.alt = "Image de remplacement pour l'infogérance IT";
                    }}
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-purple-50 p-8 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-700">Notre approche de l'infogérance</h2>
                    <p className="text-gray-700 mb-4">
                      L'infogérance représente une solution complète pour déléguer la gestion et l'optimisation de votre
                      système d'information à une équipe d'experts certifiés de Zetoun Labs. Notre service surveille,
                      maintient et optimise votre parc informatique en continu pour vous permettre de vous concentrer
                      pleinement sur votre cœur de métier.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Nous détectons et résolvons proactivement les problèmes avant qu'ils n'affectent votre activité,
                      garantissant ainsi la continuité de vos opérations et la sécurité de vos données.
                    </p>
                    <div className="mt-6 rounded-lg overflow-hidden">
                      <img
                        src="../lovable-uploads/services/2.png"
                        alt="Équipe informatique de Zetoun Labs en action pour l'infogérance"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Équipe+Zetoun+Labs";
                          e.currentTarget.alt = "Image de remplacement pour l'équipe Zetoun Labs";
                        }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-700">Services clés de notre infogérance IT</h2>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Monitoring 24/7 et alertes proactives</span>
                          <p className="text-gray-600 text-base mt-1">Surveillance continue de vos serveurs, réseaux et
                            applications critiques pour une détection rapide des anomalies.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Gestion des incidents et support réactif</span>
                          <p className="text-gray-600 text-base mt-1">Détection et résolution rapide des problèmes techniques
                            pour minimiser les interruptions. Voir aussi notre service de 
                            <Link to="/services/technical-support" className="text-purple-600 hover:underline font-semibold"> Support Technique</Link>.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Sauvegarde et restauration sécurisées</span>
                          <p className="text-gray-600 text-base mt-1">Protection et récupération de vos données essentielles
                            avec des stratégies robustes de sauvegarde et restauration.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Mises à jour et correctifs de sécurité</span>
                          <p className="text-gray-600 text-base mt-1">Maintien à jour de vos systèmes pour garantir la sécurité,
                            la performance et la conformité. Inclut la
                            <Link to="/formations/computer-maintenance" className="text-purple-600 hover:underline font-semibold"> Maintenance informatique</Link>.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Reporting détaillé et optimisation continue</span>
                          <p className="text-gray-600 text-base mt-1">Rapports réguliers sur la performance et documentation
                            technique de votre infrastructure pour une visibilité complète.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-purple-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Gestion proactive des risques et optimisation</span>
                          <p className="text-gray-600 text-base mt-1">Anticipation des problèmes potentiels et optimisation
                            continue de votre infrastructure IT pour une efficacité maximale.</p>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="../lovable-uploads/services/3.png"
                      alt="Dashboard de supervision en temps réel pour l'infogérance"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Supervision+Réel";
                        e.currentTarget.alt = "Image de remplacement pour la supervision en temps réel";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-purple-700">Supervision en temps réel</h3>
                      <p className="text-gray-600 text-sm">Tableaux de bord et alertes personnalisées 24/7 pour une réactivité optimale.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="../lovable-uploads/services/4.png"
                      alt="Serveurs en datacenter sous gestion d'infogérance"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Serveurs+Datacenter";
                        e.currentTarget.alt = "Image de remplacement pour les serveurs en datacenter";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-purple-700">Infrastructure sécurisée</h3>
                      <p className="text-gray-600 text-sm">Gestion complète de vos serveurs, incluant la sécurité des données et des systèmes.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="bg-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="../lovable-uploads/services/5.jpg"
                      alt="Protection des données et solutions de sauvegarde"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Protection+Données";
                        e.currentTarget.alt = "Image de remplacement pour la protection des données";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-purple-700">Continuité d'activité</h3>
                      <p className="text-gray-600 text-sm">Solutions robustes de sauvegarde, de reprise d'activité et de reprise après sinistre.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </PageLayout>
      </div>
    </Suspense>
  );
};

export default ITManagement;
