import React, { useState, useRef, useEffect, Suspense } from 'react';
import { ArrowLeft, CheckCircle, Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const DevelopmentProcess = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);
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

  const processes = [
    {
      id: 1,
      title: "Compréhension des besoins",
      description: `Cette première étape vise à établir une vision claire et partagée du projet.
        Elle consiste à analyser l’environnement du client, comprendre ses enjeux métiers,
        identifier ses objectifs et déterminer les contraintes techniques ou budgétaires.
        L’objectif est de poser des bases solides pour une solution réellement adaptée.`,
      steps: [
        "Organisation de réunions d’échange avec les parties prenantes",
        "Analyse de l’existant (infrastructure, logiciels, flux de travail)",
        "Identification des points de douleur et des opportunités",
        "Rédaction d’un cahier des charges fonctionnel et technique"
      ]
    },
    {
      id: 2,
      title: "Conception de la solution",
      description: `À partir des besoins identifiés, cette étape permet de concevoir l’architecture de la solution IT.
        Elle comprend le choix des technologies, la définition des modules fonctionnels, ainsi que la planification
        globale du projet. C’est ici que la solution prend forme sur le papier.`,
      steps: [
        "Élaboration de l’architecture logicielle et réseau",
        "Sélection des outils, frameworks et plateformes adaptés",
        "Modélisation des processus (diagrammes, maquettes, wireframes)",
        "Construction du planning projet (jalons, livrables, ressources nécessaires)"
      ]
    },
    {
      id: 3,
      title: "Développement & Intégration",
      description: `L’étape de mise en œuvre technique où la solution est construite et intégrée à l’environnement IT existant.
        Elle requiert des tests rigoureux, un contrôle qualité permanent, et une communication continue avec le client.`,
      steps: [
        "Développement des composants logiciels, API, bases de données",
        "Configuration des serveurs, réseaux et environnements cloud",
        "Intégration avec les systèmes internes ou tiers (ERP, CRM, etc.)",
        "Réalisation des tests unitaires et tests d’intégration"
      ]
    },
    {
      id: 4,
      title: "Déploiement & Mise en production",
      description: `C’est le moment de rendre la solution pleinement opérationnelle. Elle est installée dans l’environnement final,
        testée à grande échelle, et les utilisateurs sont accompagnés pour une adoption fluide.`,
      steps: [
        "Déploiement dans l’environnement de production",
        "Exécution des tests de validation (charge, sécurité, stabilité)",
        "Migration des données et synchronisation des systèmes",
        "Formation des utilisateurs finaux et livraison de la documentation"
      ]
    },
    {
      id: 5,
      title: "Support & Amélioration continue",
      description: `Une fois la solution en place, le travail continue : garantir la stabilité, corriger les éventuels problèmes,
        et faire évoluer le système selon les besoins futurs. Cette phase favorise la pérennité de la solution.`,
      steps: [
        {
          type: "link",
          textBefore: "Mise en place du ",
          link: { to: "/services/technical-support", label: "support technique" },
          textAfter: " (helpdesk, supervision)"
        },
        "Maintenance corrective et préventive",
        "Suivi des indicateurs de performance",
        "Recueil des retours utilisateurs et implémentation d’évolutions."
      ]
    }
  ];

  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;

      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });

      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const title = "Notre Processus de Déploiement Structuré - Zetoun Labs";
  const description = `Découvrez notre processus de développement IT structuré, de la compréhension des besoins au support continu,
    pour des solutions innovantes et efficaces.`;
  const keywords = ["processus de développement", "déploiement IT", "méthodologie", "gestion de projet", "ZL Technologies"];

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-gray-800 border-b-gray-800 border-l-gray-400 border-r-gray-400 dark:border-t-white dark:border-b-white dark:border-l-gray-400 dark:border-r-gray-400 animate-spin"></div>
          <div
            className="absolute inset-2 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center"
            style={{
              clipPath: `inset(${100 - loadingProgress}% 0 0 0)`,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              transition: 'clip-path 0.2s ease-out'
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-gray-900 dark:text-white text-2xl font-bold">
            {loadingProgress}%
          </div>
        </div>
      </div>
    }>
      <PageLayout>
        <SEO title={title} description={description} keywords={keywords} />
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>

              <h1 className="text-4xl font-bold mb-8">Notre processus de déploiement structuré</h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-12">
                  Nous avons affiné notre méthodologie de développement pour minimiser les risques et maximiser l'innovation,
                  en veillant à ce que votre solution IT passe efficacement du concept à la réalité.
                </p>

                <div className="relative mt-12" ref={processRef} style={{
                  opacity: 0
                }}>
                  <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>

                  <div className="space-y-10 relative">
                    {processes.map((process, index) => (
                      <div
                        key={process.id}
                        ref={el => processSectionsRef.current[index] = el}
                        className={cn(
                          "relative flex flex-col md:flex-row md:items-center gap-6",
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
                        )}
                      >
                        <div className="md:w-1/2">
                          <div
                            className={cn(
                              "md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                              activeProcess === process.id ? "bg-gray-700 text-white scale-110" : "bg-white text-gray-700 border border-gray-300"
                            )}
                            onClick={() => setActiveProcess(process.id)}
                          >
                            <span className="font-bold">{process.id}</span>
                          </div>

                          <h3 className="text-xl font-bold mb-2 mt-3 md:mt-0">{process.title}</h3>
                          <p className="text-gray-600 mb-3 text-sm">{process.description}</p>

                          <button
                            onClick={() => setActiveProcess(process.id)}
                            className={cn(
                              "text-sm font-medium transition-colors",
                              activeProcess === process.id ? "text-gray-700" : "text-gray-500 hover:text-gray-700"
                            )}
                          >
                            {activeProcess === process.id ? "actuellement en cours de visualisation" : "voir les détails"}
                          </button>
                        </div>

                        <div
                          className={cn(
                            "md:w-1/2 bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all duration-300",
                            activeProcess === process.id ? "opacity-100 translate-y-0 shadow-md border-gray-200" : "opacity-50 md:opacity-30 hover:opacity-70 cursor-pointer"
                          )}
                          onClick={() => setActiveProcess(process.id)}
                        >
                          <h4 className="font-semibold mb-3 text-gray-700">Activités clés :</h4>
                          <ul className="space-y-2">
                            {process.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2">
                                  <Check className="w-3 h-3 text-gray-700" />
                                </span>
                                {typeof step === 'object' && step.type === 'link' ? (
                                  <span className="text-gray-700 text-sm text-left">
                                    {step.textBefore}
                                    <Link to={step.link.to} className="text-blue-600 hover:underline">
                                      {step.link.label}
                                    </Link>
                                    {step.textAfter}
                                  </span>
                                ) : (
                                  <span className="text-gray-700 text-sm text-left">{step}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Notre principe de développement</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Itérations rapides pour une amélioration continue</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Communication transparente à chaque étape</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Architecture modulaire et évolutive</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Stratégies de réduction des risques intégrées</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Priorité à l’expérience utilisateur et à l’utilité</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </Suspense>
  );
};
export default DevelopmentProcess;
