import React, { useEffect, useState, Suspense } from 'react';
import { ArrowLeft, Router, Monitor, Shield, Settings, Database, Layers, Network, Computer, Wifi, Globe, Lock, Server, Box, Terminal, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const NetworkEngineering = () => {
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
            title="Ingénierie Réseau | Conception & Installation - Zetoun Labs"
            description="Optimisez votre infrastructure avec l'ingénierie réseau de Zetoun Labs à Kinshasa :
            conception LAN/WAN, câblage structuré, configuration d'équipements Cisco et sécurité réseau."
            keywords={[
              'ingénierie réseau',
              'conception réseau',
              'installation réseau',
              'LAN WAN',
              'câblage structuré',
              'fibre optique',
              'sécurité réseau',
              'configuration routeurs',
              'configuration switches',
              'Wi-Fi haute densité',
              'audit réseau',
              'Kinshasa',
              'Zetoun Labs'
            ]}
            imageUrl="/lovable-uploads/services/11.jpg"
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
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Router className="h-8 w-8 text-blue-600" />
                  </div>
                  <h1 className="text-4xl font-bold">Ingénierie Réseau</h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  Zetoun Labs est votre expert en ingénierie réseau à Kinshasa, spécialisé dans la conception et la mise en
                  place d'infrastructures réseau performantes, sécurisées et évolutives.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
                >
                  <img
                    src="../lovable-uploads/services/11.jpg"
                    alt="Infrastructure réseau moderne et performante installée par Zetoun Labs"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Réseau+Moderne";
                      e.currentTarget.alt = "Image de remplacement pour l'ingénierie réseau";
                    }}
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Nos solutions réseau complètes</h2>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Conception d'architectures LAN/WAN évolutives</span>
                          <p className="text-gray-600 text-base mt-1">Optimisées pour répondre aux besoins actuels et
                            futurs de votre entreprise à Kinshasa.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Installation de câblage structuré professionnel</span>
                          <p className="text-gray-600 text-base mt-1">Fibre optique, cuivre catégorie 6A/7,
                            certifications et tests de performance fiables.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Configuration de routeurs et switches managés</span>
                          <p className="text-gray-600 text-base mt-1">Équipements de grade professionnel pour une
                            performance et une fiabilité inégalées.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Mise en place de solutions Wi-Fi haute densité</span>
                          <p className="text-gray-600 text-base mt-1">Couverture optimale et gestion centralisée pour
                            grandes surfaces et environnements exigeants.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Sécurisation de l'infrastructure réseau</span>
                          <p className="text-gray-600 text-base mt-1">Déploiement de firewalls nouvelle génération,
                            segmentation réseau et détection d'intrusion avancée. Découvrez aussi nos services de
                            <Link to="/services/video-surveillance" className="text-blue-600 hover:underline font-semibold"> vidéosurveillance et sécurité</Link>.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-blue-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Documentation technique détaillée et formation</span>
                          <p className="text-gray-600 text-base mt-1">Schémas, rapports complets et documentation pour une
                            maintenance facilitée. Pensez également à notre
                            <Link to="/formations/network-administration" className="text-blue-600 hover:underline font-semibold"> formation en administration réseau </Link>
                            pour vos équipes.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col space-y-8"
                  >
                    <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Notre approche personnalisée</h2>
                      <p className="text-gray-700 mb-4">
                        Chaque entreprise a des besoins spécifiques en matière de réseau. Notre équipe d'experts
                        analyse vos exigences pour concevoir une infrastructure sur mesure qui répond à vos besoins
                        actuels tout en anticipant votre croissance future.
                      </p>
                      <p className="text-gray-700">
                        Nous privilégions la qualité des composants, la rigueur de l'installation et la documentation
                        complète pour garantir la fiabilité et la pérennité de votre réseau.
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <img
                        src="../lovable-uploads/services/reseau.webp"
                        alt="Technicien configurant du matériel réseau Cisco"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Technicien+Réseau";
                          e.currentTarget.alt = "Image de remplacement pour la configuration réseau";
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="../lovable-uploads/services/2.avif"
                      alt="Centre de données moderne avec serveurs réseau"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Centre+Données";
                        e.currentTarget.alt = "Image de remplacement pour le centre de données";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-blue-700">Infrastructure évolutive</h3>
                      <p className="text-gray-600 text-sm">Solutions adaptées aux PME et grandes entreprises de Kinshasa.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="../lovable-uploads/services/1.avif"
                      alt="Câblage réseau structuré dans un rack informatique"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Câblage+Réseau";
                        e.currentTarget.alt = "Image de remplacement pour le câblage réseau";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-blue-700">Performance optimale</h3>
                      <p className="text-gray-600 text-sm">Matériel de pointe et configurations optimisées pour des performances réseau maximales.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="bg-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="../lovable-uploads/services/3.avif"
                      alt="Firewall protégeant un réseau d'entreprise contre les menaces"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Sécurité+Réseau";
                        e.currentTarget.alt = "Image de remplacement pour le firewall réseau";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-blue-700">Sécurité intégrée</h3>
                      <p className="text-gray-600 text-sm">Protection proactive contre les menaces avancées et les cyberattaques.</p>
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

export default NetworkEngineering;
