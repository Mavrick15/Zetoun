import React, { useEffect, useState, Suspense } from 'react';
import { Camera, MapPin, ShieldCheck, HardDrive, Smartphone } from 'lucide-react';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';
import ProjectPageLayout from '@/components/ProjectPageLayout';

const EyanoSecurity = () => {
  const fullTitle = "Sécurité renforcée Centre Diagnostic EYANO - Zetoun Labs";
  const mobileTitle = "Centre Diagnostic EYANO"; // Shortened title for mobile
  const brandName = "Centre de Diagnostic EYANO";
  const imageUrl = "/lovable-uploads/img/Eyano.png";
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // New state for mobile detection

  useEffect(() => {
    window.scrollTo(0, 0);

    // Function to check if the screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint as needed
    };

    checkMobile(); // Set initial mobile state
    window.addEventListener('resize', checkMobile); // Add resize listener

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
      window.removeEventListener('resize', checkMobile); // Clean up resize listener
    };
  }, []);

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
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
      <ProjectPageLayout
        title={isMobile ? mobileTitle : fullTitle.split(' - ')[0]} // Conditional title rendering
        subtitle="Modernisation et déploiement étendu de la vidéosurveillance pour une sécurité optimale."
        imageUrl={imageUrl}
        brandName={brandName}
        darkMode={true}
        imageOnError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://placehold.co/1200x600/000000/FFFFFF?text=Centre+Diagnostic+EYANO";
          e.currentTarget.alt = "Image de remplacement pour le Centre de Diagnostic EYANO en noir et blanc";
        }}
      >
        <SEO
          title={fullTitle}
          description="Découvrez l'extension et le renforcement du système de vidéosurveillance par Zetoun Labs pour le Centre de Diagnostic EYANO à Kinshasa, assurant une
          couverture étendue et une sécurité optimale de ses installations et de son personnel."
          keywords={[
            'sécurité Centre EYANO',
            'vidéosurveillance Kinshasa',
            'HIKVISION',
            'système de sécurité avancé',
            'protection des installations',
            'Centre de Diagnostic EYANO',
            'solutions de sécurité IT RDC',
            'Zetoun Labs Kinshasa'
          ]}
          imageUrl={imageUrl}
        />

        <h2 className="text-3xl font-bold mb-6 text-gray-900">Étude de Cas : Renforcement et extension du système de sécurité du Centre de Diagnostic EYANO</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Contexte du Projet</h3>
          <p className="text-gray-700 text-justify">
            Face à la croissance continue de ses activités et à l'agrandissement de ses infrastructures,
            le Centre de Diagnostic EYANO a identifié un besoin crucial de moderniser et d'étendre son système de surveillance existant.
            L'objectif principal était d'adapter l'infrastructure de sécurité à la nouvelle envergure du centre,
            garantissant ainsi une protection intégrale et une tranquillité d'esprit pour ses biens précieux et son personnel.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Défi à Relever
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-justify"
        >
          Le défi majeur consistait à concevoir et déployer un système de vidéosurveillance robuste, capable de couvrir une
          vaste superficie de plus de 70 m², englobant toutes les zones clés du centre : salles de consultation, laboratoires,
          zones d'accueil et périmètres extérieurs. Il était impératif d'assurer une intégration parfaite des nouvelles caméras
          avec l'infrastructure existante, tout en améliorant significativement la qualité des images,
          la capacité d'enregistrement vidéo et la réactivité globale du dispositif de sécurité.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Solution mise en œuvre
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-700 text-justify"
        >
          Notre équipe d'experts a conçu et déployé une solution de vidéosurveillance de pointe, intégrant des technologies avancées pour
          répondre précisément aux exigences spécifiques du Centre de Diagnostic EYANO :
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-6 my-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <Camera className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Déploiement de caméras HIKVISION haute performance</h4>
              <p className="text-gray-700 text-justify">Installation stratégique de caméras de surveillance HIKVISION, mondialement reconnues pour leur robustesse,
                leur résolution exceptionnelle et leurs fonctionnalités intelligentes (détection de mouvement avancée, analyse comportementale, vision nocturne).</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <MapPin className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Couverture géographique étendue et optimisée</h4>
              <p className="text-gray-700 text-justify">Mise en place d'un réseau intelligent de caméras IP couvrant l'intégralité des 70 m² du centre, y compris les zones
                sensibles,
                les points d'accès et les périmètres extérieurs, garantissant une surveillance complète sans angle mort.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <ShieldCheck className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Intégration et centralisation fluides</h4>
              <p className="text-gray-700 text-justify">Intégration transparente des nouvelles caméras au système de gestion vidéo (VMS) existant, permettant une surveillance
                centralisée intuitive et une gestion simplifiée de l'ensemble du dispositif depuis un tableau de bord unique.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <HardDrive className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Capacité d'enregistrement et archivage améliorés</h4>
              <p className="text-gray-700 text-justify">Augmentation significative de la capacité de stockage des enregistreurs vidéo réseau (NVR) et optimisation des systèmes
                d'archivage pour conserver les flux vidéo sur une période prolongée, en conformité avec les exigences légales et de sécurité.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Technologies Clés Utilisées
        </motion.h3>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <Camera className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Caméras IP HIKVISION</h4>
              <p className="text-gray-700 text-justify">Leader mondial en solutions de vidéosurveillance, HIKVISION offre des caméras robustes et fiables avec des fonctionnalités avancées.</p>
            </div>
          </motion.div>
          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <HardDrive className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Enregistreurs Vidéo Réseau (NVR)</h4>
              <p className="text-gray-700 text-justify">Systèmes dédiés à l'enregistrement et à la gestion des flux vidéo IP avec des capacités de stockage optimisées.</p>
            </div>
          </motion.div>
          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <Smartphone className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Accès et Surveillance à Distance</h4>
              <p className="text-gray-700 text-justify">Mise en place de solutions permettant la visualisation et la gestion du système de sécurité via des applications
                mobiles et web.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Avantages clés pour le Centre EYANO
        </motion.h3>
        <motion.div
          className="space-y-6 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Sécurité renforcée et effet dissuasif</h4>
              <p className="text-gray-700 text-justify">La présence visible et l'efficacité des caméras HIKVISION dissuadent les intrusions, les vols et les actes malveillants,
                protégeant ainsi activement les actifs, les équipements médicaux et le personnel.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Surveillance complète et continue 24/7</h4>
              <p className="text-gray-700 text-justify">La couverture étendue sur plus de 70 m² assure une surveillance ininterrompue de toutes les zones critiques,
                de jour comme de nuit, offrant une vision claire de chaque recoin du centre.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Réactivité accrue en cas d'incident</h4>
              <p className="text-gray-700 text-justify">La surveillance en temps réel et les enregistrements de haute qualité permettent une détection rapide
                des incidents, facilitent les investigations post-événement et réduisent les temps de réaction.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Optimisation des opérations de sécurité</h4>
              <p className="text-gray-700 text-justify">La gestion centralisée et intuitive du système simplifie la surveillance pour les équipes de sécurité,
                améliorant leur efficacité opérationnelle et leur capacité à gérer proactivement les menaces potentielles.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Résultats obtenus et impact
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-700 text-justify">
          Grâce au renforcement et à l'extension de son système de vidéosurveillance par Zetoun Labs, le Centre de Diagnostic EYANO
          bénéficie désormais d'une infrastructure de sécurité à la pointe de la technologie. Cette modernisation a
          significativement amélioré la capacité du centre à surveiller ses installations, à prévenir les risques et à
          réagir efficacement en cas d'incident, offrant ainsi un environnement plus sûr et plus serein pour les patients, le personnel et les visiteurs.
        </motion.p>
      </ProjectPageLayout>
    </Suspense>
  );
};

export default EyanoSecurity;
