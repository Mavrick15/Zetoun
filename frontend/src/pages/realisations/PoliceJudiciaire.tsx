import React, { useEffect, useState, Suspense } from 'react';
import { Network, Repeat, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from "framer-motion";
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';

const PoliceJudiciaire = () => {
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

  const fullTitle = "Réhabilitation de l’infrastructure IT de la Police judiciaire";
  const mobileTitle = "Police judiciaire";

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
        title={isMobile ? mobileTitle : fullTitle} // Conditional title
        subtitle="Modernisation du réseau pour la performance, la sécurité et la haute disponibilité."
        imageUrl="/lovable-uploads/img/police.png"
        brandName="Zetoun Labs"
        darkMode={true}
        imageOnError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://placehold.co/1200x600/000000/FFFFFF?text=Police+Judiciaire";
          e.currentTarget.alt = "Image de remplacement pour l'infrastructure IT de la Police judiciaire en noir et blanc";
        }}
      >
        <SEO
          title="Infrastructure IT Police Judiciaire - Zetoun Labs"
          description="Découvrez comment Zetoun Labs a modernisé l'infrastructure réseau de la Police judiciaire à Kinshasa,
            améliorant performances, sécurité et disponibilité des services IT."
          keywords={[
            'infrastructure IT',
            'réhabilitation réseau',
            'police judiciaire Kinshasa',
            'sécurité réseau',
            'haute disponibilité IT',
            'optimisation performance réseau',
            'étude de cas IT',
            'Zetoun Labs Kinshasa'
          ]}
          imageUrl="/lovable-uploads/img/police.jpg"
        />

        <h2 className="text-3xl font-bold mb-6 text-gray-900">Étude de Cas : Réhabilitation de l’infrastructure IT de la Police judiciaire - Zetoun Labs</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Contexte</h3>
          <p className="text-gray-700 text-justify">
            L’infrastructure réseau de la Police judiciaire était devenue obsolète et dysfonctionnelle depuis un certain temps,
            compromettant gravement la qualité et l’efficacité des services administratifs. Le réseau souffrait de performances
            médiocres, de limitations en termes de capacité et de fiabilité, ainsi que d’une sécurité défaillante,
            exposant ainsi les systèmes à des menaces importantes.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Défi
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-justify"
        >
          Moderniser l'infrastructure réseau du Commissariat pour offrir performance, sécurité renforcée,
          haute disponibilité des services et évolutivité face aux besoins futurs.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Solution
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-700 text-justify"
        >
          Notre équipe a conçu et déployé une infrastructure réseau moderne, sécurisée et redondante intégrant des équipements de
          dernière génération. Les actions clés incluent :
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
            <Network className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Refonte complète</h4>
              <p className="text-gray-700 text-justify">Mise en place d’une topologie hiérarchisée et structurée pour optimiser les performances et simplifier la gestion
.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <ShieldCheck className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Sécurisation avancée</h4>
              <p className="text-gray-700 text-justify">Déploiement de pare-feux, VLANs, contrôle d’accès et segmentation du réseau pour protéger les données sensibles
</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <Repeat className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Haute disponibilité</h4>
              <p className="text-gray-700 text-justify">Intégration de solutions redondantes (liens, équipements) pour assurer une continuité de service sans interruption.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.4 }} className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-200 flex items-start"
          >
            <TrendingUp className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Évolutivité</h4>
              <p className="text-gray-700 text-justify">Conception d’une infrastructure évolutive, capable d’absorber la montée en charge et de s’adapter aux besoins futurs.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Avantages
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
              <h4 className="font-semibold text-gray-800">Connectivité optimisée</h4>
              <p className="text-gray-700 text-justify">Des performances réseau élevées dans tous les services, assurant un fonctionnement fluide des opérations.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Sécurité des données renforcée</h4>
              <p className="text-gray-700 text-justify">Protection des données confidentielles grâce à une infrastructure conforme aux normes de cybersécurité.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Haute disponibilité des services</h4>
              <p className="text-gray-700 text-justify">Architecture redondante permettant une continuité des services, même en cas de panne.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Évolutivité assurée</h4>
              <p className="text-gray-700 text-justify">Un réseau pensé pour s’adapter facilement aux besoins futurs et aux évolutions technologiques.</p>
            </div>
          </motion.div>

          <motion.div variants={listItemVariants} transition={{ duration: 0.3 }} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3 mt-1 text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold text-gray-800">Réduction des coûts de maintenance</h4>
              <p className="text-gray-700 text-justify">Une infrastructure modernisée, plus stable et plus simple à administrer, réduisant les interventions techniques répétées.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-semibold mb-4 mt-8 text-gray-900"
        >
          Résultat
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-700 text-justify"
        >
          La réhabilitation du réseau informatique du commissariat avait permis d’atteindre un niveau de performance et de fiabilité
          nettement supérieur. Grâce à une infrastructure modernisée, sécurisée et évolutive, le commissariat avait disposé d’un
          environnement numérique stable, capable de soutenir efficacement ses missions critiques, avec une réduction notable des
          interruptions de service et une meilleure gestion des flux d’informations sensibles.
        </motion.p>
      </ProjectPageLayout>
    </Suspense>
  );
};

export default PoliceJudiciaire;
