import React, { useEffect, useState, Suspense } from 'react';
import { Camera, MapPin, ShieldCheck, HardDrive, Smartphone } from 'lucide-react';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';
import ProjectPageLayout from '@/components/ProjectPageLayout';

const CreditShopAfrica = () => {
  const fullTitle = "Sécurité pour Credit Shop Africa - Zetoun Labs";
  const mobileTitle = "Credit Shop Africa";
  const brandName = "CreditShopAfrica";
  const imageUrl = "/lovable-uploads/img/credit-shop-africa.png";
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const galleryImages = [
    { src: "/lovable-uploads/img/project/g1.png", alt: "Installation initiale de la caméra", description: "Fin d'installation" },
    { src: "/lovable-uploads/img/project/g2.png", alt: "Vue du système de gestion", description: "Fin d'installation" },
    { src: "/lovable-uploads/img/project/g3.png", alt: "Vue du système de gestion", description: "Avec le DG de CSA" },
    { src: "/lovable-uploads/img/project/g4.png", alt: "Périmètre surveillé", description: "Devant l'écrant de Monitoring" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming 768px as the breakpoint for mobile
    };

    checkMobile(); // Check on initial render
    window.addEventListener('resize', checkMobile); // Add event listener for resize

    const progressInterval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 95) {
          return prevProgress + 5;
        }
        return prevProgress;
      });
    }, 200);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 300000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(imageInterval);
      window.removeEventListener('resize', checkMobile); // Clean up event listener
    };
  }, [galleryImages.length]);

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const currentImage = galleryImages?.[currentImageIndex];
  const nextImageIndex = (currentImageIndex + 1) % galleryImages.length;
  const nextImage = galleryImages?.[nextImageIndex];

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
        title={isMobile ? mobileTitle : fullTitle.split(' - ')[0]} // Use mobileTitle for mobile, or extract "Credit Shop Africa" from fullTitle for desktop
        subtitle="Mise en place d'un nouveau système de vidéosurveillance pour une sécurité ciblée."
        imageUrl={imageUrl}
        brandName={brandName}
        darkMode={true}
        imageOnError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://placehold.co/1200x600/000000/FFFFFF?text=CreditShopAfrica";
          e.currentTarget.alt = "Image de remplacement pour CreditShopAfrica en noir et blanc";
        }}
      >
        <SEO
          title={fullTitle}
          description="Découvrez l'installation d'un nouveau système de vidéosurveillance par Zetoun Labs pour CreditShopAfrica, assurant une couverture efficace et une sécurité optimale de leurs installations."
          keywords={[
            'sécurité CreditShopAfrica',
            'vidéosurveillance Kinshasa',
            'CP+',
            'système de sécurité neuf',
            'protection des installations réduites',
            'CreditShopAfrica',
            'solutions de sécurité IT RDC',
            'Zetoun Labs Kinshasa'
          ]}
          imageUrl={imageUrl}
        />

        <h2 className="text-3xl font-bold mb-6 text-gray-900">Étude de Cas : Installation du système de sécurité pour Credit Shop Africa</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Contexte du projet</h3>
          <p className="text-gray-700 text-justify">
            Credit Shop Africa, dans le cadre de l'ouverture ou de la réorganisation de ses locaux, a exprimé le besoin de mettre en place un nouveau système
            de vidéosurveillance fiable. Contrairement à des projets d'extension, l'objectif ici était d'équiper un espace initial avec une solution
            de sécurité complète et performante, adaptée à une superficie plus réduite mais nécessitant une surveillance attentive des actifs et du personnel.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Défi à relever
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-justify"
        >
          Le défi consistait à concevoir et à déployer un système de vidéosurveillance efficace pour une surface ciblée,
          couvrant des zones clés telles que les comptoirs d'accueil, les bureaux et les points d'accès. Il était impératif
          de garantir une couverture optimale malgré la taille plus petite de l'espace, en assurant une qualité d'image élevée,
          une capacité d'enregistrement adéquate et une facilité d'accès à la surveillance en temps réel.
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
          Notre équipe a mis en place une solution de vidéosurveillance sur mesure, en se concentrant sur l'efficacité et la simplicité
          pour Credit Shop Africa :
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
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Installation de kits complets de caméras CP+ adaptées</h4>
              <p className="text-gray-700 text-justify">Déploiement stratégique de caméras de surveillance du kit complet CP+, sélectionnées pour leur performance optimale
                dans des espaces plus compacts, offrant une excellente résolution et fiabilité.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <MapPin className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Couverture précise des zones clés</h4>
              <p className="text-gray-700 text-justify">Mise en place d'un système de caméras analogiques assurant une surveillance complète des zones les plus importantes,
                minimisant les angles morts et maximisant la sécurité pour la surface concernée.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <ShieldCheck className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Mise en place d'un nouveau système de gestion</h4>
              <p className="text-gray-700 text-justify">Installation d'un système de gestion vidéo (VMS) neuf et intuitif, permettant une surveillance centralisée
                et une gestion simplifiée de l'ensemble du dispositif de sécurité.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <HardDrive className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Capacité d'enregistrement optimisée</h4>
              <p className="text-gray-700 text-justify">Configuration des enregistreurs vidéo numériques (DVR) avec une capacité de stockage suffisante pour
                conserver les flux vidéo sur une période adaptée aux besoins de CreditShopAfrica.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Galerie de photos du projet
        </motion.h3>
        <motion.div
          className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="w-full flex flex-col items-center">
            <img
              src={currentImage?.src}
              alt={currentImage?.alt}
              className="w-full max-w-xs h-auto rounded-lg shadow-md object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://placehold.co/600x400/000000/FFFFFF?text=Image+indisponible";
                e.currentTarget.alt = "Image de remplacement pour CreditShopAfrica en noir et blanc";
              }}
            />
            <p className="text-center text-gray-600 text-sm mt-2">{currentImage?.description}</p>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="w-full flex flex-col items-center">
            <img
              src={nextImage?.src}
              alt={nextImage?.alt}
              className="w-full max-w-xs h-auto rounded-lg shadow-md object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://placehold.co/600x400/000000/FFFFFF?text=Image+indisponible";
                e.currentTarget.alt = "Image de remplacement pour CreditShopAfrica en noir et blanc";
              }}
            />
            <p className="text-center text-gray-600 text-sm mt-2">{nextImage?.description}</p>
          </motion.div>
        </motion.div>


        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Technologies clés utilisées
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
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Caméras Analogiques CP+</h4>
              <p className="text-gray-700 text-justify">Solutions de vidéosurveillance de pointe de la marque CP+, reconnues pour leur qualité d'image et leur fiabilité.
              </p>
            </div>
          </motion.div>
          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <HardDrive className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Enregistreurs Vidéo Numériques (DVR)</h4>
              <p className="text-gray-700 text-justify">Systèmes dédiés à l'enregistrement et à la gestion des flux vidéo analogiques.</p>
            </div>
          </motion.div>
          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <Smartphone className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Accès et Surveillance à Distance</h4>
              <p className="text-gray-700 text-justify">Permet la visualisation et la gestion du système de sécurité via des applications mobiles et web.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Avantages clés pour Credit Shop Africa
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
              <h4 className="font-semibold text-gray-800">Sécurité fondamentale et dissuasive</h4>
              <p className="text-gray-700 text-justify">La mise en place d'un système de vidéosurveillance neuf agit comme un puissant moyen de dissuasion,
                contribuant à la prévention des intrusions et des vols, et protégeant ainsi les biens et les données.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Surveillance à distance et flexibilité</h4>
              <p className="text-gray-700 text-justify">Grâce à la connectivité Internet du système, le responsable peut surveiller les activités et les agents en temps réel,
                même lorsqu'il est à l'étranger, offrant une flexibilité et un contrôle accrus à tout moment et depuis n'importe où.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Surveillance continue des zones critiques</h4>
              <p className="text-gray-700 text-justify">Malgré la surface réduite, une couverture ciblée assure une surveillance ininterrompue des points sensibles,
                offrant une visibilité claire sur les opérations quotidiennes et les accès.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Réactivité et preuve en cas d'incident</h4>
              <p className="text-gray-700 text-justify">La surveillance en temps réel et les enregistrements de qualité fournissent des preuves essentielles,
                facilitant les investigations et permettant une réaction rapide face à tout incident.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Gestion de la sécurité simplifiée</h4>
              <p className="text-gray-700 text-justify">Le nouveau système est facile à gérer, permettant aux équipes de sécurité de CreditShopAfrica
                de surveiller efficacement sans complexité excessive.</p>
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
          Grâce à l'installation de son nouveau système de vidéosurveillance par Zetoun Labs, Credit Shop Africa bénéficie
          désormais d'une infrastructure de sécurité moderne et fiable. Cette nouvelle installation a considérablement
          amélioré la capacité de Credit Shop Africa à surveiller ses locaux, à prévenir les risques et à réagir rapidement
          en cas de besoin, offrant ainsi un environnement de travail plus sûr pour son personnel et une meilleure protection de ses actifs.
        </motion.p>
      </ProjectPageLayout>
    </Suspense>
  );
};

export default CreditShopAfrica;
