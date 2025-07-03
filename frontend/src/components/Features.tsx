import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, CheckCircle, Code, LifeBuoy, MessageSquare, MonitorCog, BrainCog, RefreshCcw, Rocket } from "lucide-react";
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [progressValue, setProgressValue] = useState(0);
  const isMobile = useIsMobile();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };

    animateProgress();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const stepFlowItems = [{
    icon: <BrainCog className="h-10 w-10 text-gray-700" />,
    title: "Analyse & planification",
    description: "Analyser les besoins du client afin de définir une solution sur-mesure, allouer les ressources adéquates et établir un planning clair."
  }, {
    icon: <MonitorCog className="h-10 w-10 text-gray-700" />,
    title: "Développement & déploiement",
    description: "Concevoir l’architecture, implémenter les fonctionnalités et assurer le déploiement opérationnel de la solution adaptée"
  }, {
    icon: <LifeBuoy className="h-10 w-10 text-gray-700" />,
    title: "Support & optimisation",
    description: "Garantir la pérennité des solutions à travers un support réactif, une maintenance fiable et une optimisation continue"
  }];

  const sprintPhases = [{
    name: "Planification",
    icon: <CheckCircle className="h-4 w-4" />
  }, {
    name: "Développement",
    icon: <Code className="h-4 w-4" />
  }, {
    name: "Essais",
    icon: <Box className="h-4 w-4" />
  }, {
    name: "Examen",
    icon: <RefreshCcw className="h-4 w-4" />
  }];

  return (
    <>
      <section id="technology" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-2 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold tracking-wide">
              Notre manière de transformer vos idées
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">Comprenez notre manière de travailler pour vous</h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Zetoun Labs guide ses clients à travers trois étapes essentielles : comprendre leurs exigences, concevoir des solutions personnalisées, et assurer un suivi
              constant pour optimiser leur efficacité.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 lg:p-12 mb-10 transition-all duration-300 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {stepFlowItems.map((item, index) => (
                <HoverCard key={index} openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gra
y-100 h-full cursor-pointer flex flex-col items-center text-center">
                      <div className="bg-gray-50 rounded-full p-4 mb-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-lg border-gray-200 bg-white p-4 rounded-lg text-gray-700">
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                      {index === 0 && <p className="text-xs text-gray-500 mt-1">Comprendre les besoins du client et définir la solution, les ressources et le planning.</p>}
                      {index === 1 && <p className="text-xs text-gray-500 mt-1">Concevoir, réaliser et mettre en place la solution adaptée.</p>}
                      {index === 2 && <p className="text-xs text-gray-500 mt-1">Assurer la maintenance, le support et l’amélioration continue.</p>}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            <div className="relative h-16 mb-10 flex items-center justify-center">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-700 rounded-full p-1 shadow-md">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>

              <div className="md:hidden flex justify-center items-center h-full w-full">
                <div className="flex-grow h-0.5 bg-gray-300"></div>
                <div className="bg-gray-700 rounded-full p-1 mx-2 shadow-md">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="flex-grow h-0.5 bg-gray-300"></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 sm:p-8 mb-10 shadow-md border border-gray-100">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                  <div className="flex items-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Adaptation de nos projets</h3>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-2 font-medium">Développement interactif</span>
                    <RefreshCcw className="h-5 w-5 text-gray-600 animate-spin-slow" />
                  </div>
                </div>

                <p className="text-gray-700 mb-5 text-base">Nous adaptons chaque solution aux besoins du client, étape par étape, avec un cycle d'itération continu.</p>

                <div className="relative mb-4">
                  <Progress value={progressValue} className="h-3 bg-gray-200 rounded-full" indicatorClassName="bg-blue-600" />
                </div>

                <div className={cn("grid gap-2 mt-6", isMobile ? "grid-cols-2 gap-y-3" : "grid-cols-4")}>
                  {sprintPhases.map((phase, index) => (
                    <div key={index} className={cn(
                      "text-center p-3 rounded-lg transition-all duration-300 border",
                      progressValue >= (index / sprintPhases.length) * 100 && progressValue < ((index + 1) / sprintPhases.length) * 100
                        ? "bg-blue-50 border-blue-200 text-blue-800 shadow-sm"
                        : "bg-gray-50 border-gray-100 text-gray-700"
                    )}>
                      <div className="flex flex-col items-center">
                        <div className={cn(
                          "rounded-full p-2 mb-2",
                          progressValue >= (index / sprintPhases.length) * 100
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-500"
                        )}>
                          {phase.icon}
                        </div>
                        <span className="text-sm font-semibold">{phase.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-3">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1.5 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Retour d'information à la clientèle intégré à chaque étape</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Amélioration continue</span>
                    <div className="flex space-x-1.5">
                      <span className="inline-block w-2.5 h-2.5 bg-gray-300 rounded-full animate-pulse-fast"></span>
                      <span className="inline-block w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse-fast animation-delay-200"></span>
                      <span className="inline-block w-2.5 h-2.5 bg-gray-500 rounded-full animate-pulse-fast animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-16 mb-10 flex items-center justify-center">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-700 rounded-full p-1 shadow-md">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>

              <div className="md:hidden flex justify-center items-center h-full w-full">
                <div className="flex-grow h-0.5 bg-gray-300"></div>
                <div className="bg-gray-700 rounded-full p-1 mx-2 shadow-md">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="flex-grow h-0.5 bg-gray-300"></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto text-center shadow-lg hover:shadow-xl transiti
on-all duration-300 border border-gray-100">
              <div className="relative inline-block mb-5">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-5 border border-gray-200 shadow-md flex items-center justify-center">
                  <Rocket className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Conquérir le marché</h3>
              <p className="text-gray-700 text-base leading-relaxed">Prêts pour l’utilisation, la production et le déploiement.</p>
              <div className="flex justify-center mt-5 space-x-2.5">
                <span className="inline-block w-3.5 h-3.5 rounded-full bg-blue-300 animate-pulse-fast"></span>
                <span className="inline-block w-3.5 h-3.5 bg-blue-500 animate-pulse-fast animation-delay-200"></span>
                <span className="inline-block w-3.5 h-3.5 rounded-full bg-blue-700 animate-pulse-fast animation-delay-400"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
