import React, { useEffect, useState, Suspense } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const VideoSurveillance = () => {
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
            title="Vidéosurveillance & Sécurité | Installation Caméras - Zetoun Labs"
            description="Protégez vos locaux avec les solutions de vidéosurveillance de Zetoun Labs à Kinshasa :
            caméras HD, détection de mouvement, stockage sécurisé et intégration avec systèmes d'alarme."
            keywords={[
              'vidéosurveillance',
              'sécurité',
              'installation caméras',
              'caméra HD',
              'système d alarme',
              'contrôle accès',
              'détection mouvement',
              'stockage vidéo cloud',
              'Zetoun Labs Kinshasa',
              'protection locaux'
            ]}
            imageUrl="../lovable-uploads/services/1a.png"
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
                  <div className="bg-red-100 p-4 rounded-full">
                    <Camera className="h-8 w-8 text-red-600" />
                  </div>
                  <h1 className="text-4xl font-bold">Vidéosurveillance & Sécurité</h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  Zetoun Labs propose des solutions de vidéosurveillance et sécurité sur mesure à Kinshasa,
                  garantissant la protection de vos biens et de vos locaux grâce à des installations adaptées et performantes.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="w-full h-64 md:h-80 mb-12 overflow-hidden rounded-xl"
                >
                  <img
                    src="../lovable-uploads/services/1a.png"
                    alt="[Image of Video Surveillance Center]"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Surveillance+Vidéo";
                      e.currentTarget.alt = "Image de remplacement pour le centre de surveillance de sécurité vidéo";
                    }}
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-red-50 p-8 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-red-700">Notre approche de la sécurité par vidéosurveillance</h2>
                    <p className="text-gray-700 mb-4">
                      La sécurité de vos locaux commence par une analyse précise de vos besoins. Nous réalisons une étude
                      complète de votre site pour identifier les points stratégiques et les vulnérabilités potentielles, à
                      Kinshasa et ses environs.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Notre expertise nous permet de vous recommander les équipements les plus adaptés et de concevoir une
                      installation sur mesure, discrète mais efficace, pour une protection optimale de vos biens.
                    </p>
                    <div className="mt-6 rounded-lg overflow-hidden">
                      <img
                        src="../lovable-uploads/services/1b.png"
                        alt="[Image of Site Analysis]"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Analyse+Site";
                          e.currentTarget.alt = "Image de remplacement pour l'analyse de site";
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
                    <h2 className="text-2xl font-semibold mb-4 text-red-700">Nos solutions complètes de sécurité et vidéosurveillance</h2>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Caméras HD intérieures et extérieures</span>
                          <p className="text-gray-600 text-base mt-1">Haute résolution, grand angle de vue et résistantes
                            aux intempéries pour une surveillance optimale.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Vision nocturne et détection de mouvement avancée</span>
                          <p className="text-gray-600 text-base mt-1">Enregistrement intelligent déclenché par événements,
                            optimisant l'espace de stockage.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Stockage sécurisé (Local ou Cloud)</span>
                          <p className="text-gray-600 text-base mt-1">Conservation des données conforme à la
                            réglementation avec sauvegarde automatique et récupération rapide.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Accès à distance via smartphone et alertes</span>
                          <p className="text-gray-600 text-base mt-1">Application mobile sécurisée pour une surveillance
                            en temps réel et des notifications immédiates.</p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Intégration avec systèmes d'alarme et infogérance</span>
                          <p className="text-gray-600 text-base mt-1">Coordination automatisée entre votre
                            vidéosurveillance et votre système d'alarme. Pensez aussi à notre service d'
                            <Link to="/services/it-management" className="text-red-600 hover:underline font-semibold">infogérance IT</Link>.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-red-500 font-bold mr-3 text-xl">•</span>
                        <div>
                          <span className="font-medium">Contrôle d'accès et identification avancée</span>
                          <p className="text-gray-600 text-base mt-1">Solutions incluant reconnaissance faciale, badges
                            et capteurs biométriques pour une sécurité renforcée.</p>
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
                    className="bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="/lovable-uploads/services/1c.png"
                      alt="[Image of HD Camera]"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Caméra+HD";
                        e.currentTarget.alt = "Image de remplacement pour la caméra HD";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-red-700">Équipements de pointe</h3>
                      <p className="text-gray-600 text-sm">Caméras HD avec fonctions avancées de détection et vision nocturne.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="/lovable-uploads/services/1d.png"
                      alt="[Image of Control Center]"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Centre+Contrôle";
                        e.currentTarget.alt = "Image de remplacement pour le centre de contrôle de sécurité";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-red-700">Surveillance centralisée</h3>
                      <p className="text-gray-600 text-sm">Monitoring en temps réel et accès à l'historique des événements sécurisés.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="/lovable-uploads/services/1e.png"
                      alt="[Image of Access Control]"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/600x400/e0e0e0/6a6a6a?text=Contrôle+Accès";
                        e.currentTarget.alt = "Image de remplacement pour le système de contrôle d'accès";
                      }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-red-700">Contrôle d'accès intégré</h3>
                      <p className="text-gray-600 text-sm">Solutions sécurisées et évolutives pour la gestion des accès à vos locaux.</p>
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

export default VideoSurveillance;
