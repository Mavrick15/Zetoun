import React, { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    exit: { opacity: 0, y: 20 },
  };

  const title = "Politique de confidentialité | Zetoun Labs";
  const description = `Consultez notre politique de confidentialité pour comprendre comment nous
    collectons, utilisons et protégeons vos informations personnelles.`;
  const keywords = ["politique de confidentialité", "vie privée", "protection des données", "Zetoun Labs"];

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
        <SEO title={title} description={description} keywords={keywords} />
        <motion.section
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={contentVariants}
            className="container mx-auto"
          >
            <div className="max-w-4xl mx-auto">
              <Link
                to="/"
                className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>

              <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">Dernière mise à jour : Mardi le, 06 05 2025 à 16h 15' UTC+1</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Chez Zetoun Labs (« nous », « notre » ou « nos »), nous respectons votre vie privée
                  et nous engageons à protéger vos informations personnelles. Cette politique de confidentialité
                  explique comment nous collectons, utilisons, divulgons et protégeons vos informations lorsque vous
                  visitez notre site web ou utilisez nos services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Les informations que nous collectons</h2>
                <p className="text-gray-600 mb-4">
                  Nous pouvons collecter les informations personnelles que vous nous fournissez volontairement lorsque vous :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Nous contactez via notre site web</li>
                  <li>Vous abonnez à notre newsletter</li>
                  <li>Vous inscrivez à nos services</li>
                  <li>Vous participez à nos enquêtes ou promotions</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Ces informations peuvent inclure votre nom, votre adresse e-mail, le nom de votre entreprise,
                  votre numéro de téléphone et toute autre information que vous choisissez de nous fournir.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Comment nous utilisons vos informations</h2>
                <p className="text-gray-600 mb-4">
                  Nous pouvons utiliser les informations que nous collectons à diverses fins, notamment pour :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Fournir, exploiter et entretenir nos services</li>
                  <li>Améliorer, personnaliser et étendre nos services</li>
                  <li>Comprendre et analyser comment vous utilisez nos services</li>
                  <li>Développer de nouveaux produits, services, fonctionnalités et caractéristiques</li>
                  <li>Communiquer avec vous à propos de nos services, mises à jour et autres informations</li>
                  <li>Traiter les transactions et envoyer les informations associées</li>
                  <li>Détecter et prévenir la fraude</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies et technologies de suivi</h2>
                <p className="text-gray-600 mb-4">
                  Nous pouvons utiliser des cookies et des technologies de suivi similaires pour suivre l'activité
                  sur notre site web et stocker certaines informations. Les cookies sont des fichiers contenant une
                  petite quantité de données pouvant inclure un identifiant unique anonyme. Vous pouvez configurer
                  votre navigateur pour refuser tous les cookies ou pour vous avertir lorsqu'un cookie est envoyé.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Services tiers</h2>
                <p className="text-gray-600 mb-4">
                  Nous pouvons utiliser des services tiers qui collectent, surveillent et analysent des données
                  afin d'améliorer nos services. Ces tiers disposent de leurs propres politiques de confidentialité
                  concernant l'utilisation de ces informations.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Conservation des données</h2>
                <p className="text-gray-600 mb-4">
                  Nous conserverons vos informations personnelles uniquement aussi longtemps que nécessaire
                  aux fins énoncées dans la présente politique de confidentialité.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Sécurité</h2>
                <p className="text-gray-600 mb-4">
                  La sécurité de vos données est importante pour nous, mais n'oubliez pas qu'aucune méthode de
                  transmission sur Internet ou méthode de stockage électronique n'est sûre à 100 %. Bien que
                  nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos
                  informations personnelles, nous ne pouvons garantir leur sécurité absolue.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Vos droits</h2>
                <p className="text-gray-600 mb-4">
                  Selon votre emplacement, vous pouvez disposer de certains droits concernant vos informations
                  personnelles, tels que le droit d'accéder, de corriger ou de supprimer vos informations personnelles.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications de la présente politique de confidentialité</h2>
                <p className="text-gray-600 mb-4">
                  Nous sommes susceptibles de mettre à jour notre Politique de confidentialité de temps à autre.
                  Nous vous informerons de toute modification en publiant la nouvelle Politique de confidentialité
                  sur cette page. Nous vous informerons par e-mail et/ou par un avis bien visible sur notre site
                  web avant l'entrée en vigueur de la modification.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contactez-nous</h2>
                <p className="text-gray-600 mb-4">Si vous avez des questions sur cette politique de confidentialité,
                  veuillez nous contacter à support@zetounlabs.cd</p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </PageLayout>
    </Suspense>
  );
};

export default PrivacyPolicy;
