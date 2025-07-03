import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageLayout = lazy(() => import('@/components/PageLayout'));
const Hero = lazy(() => import('@/components/Hero'));
const Features = lazy(() => import('@/components/Features'));
const Projects = lazy(() => import('@/components/Projects'));
const WhyWrlds = lazy(() => import('@/components/WhyWrlds'));
const BlogPreview = lazy(() => import('@/components/BlogPreview'));
const SEO = lazy(() => import('@/components/SEO'));

const Index = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      contactElements[1].id = 'contact-footer';
    }

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
          title="Zetoun Labs - Services IT & Formations | Kinshasa"
          description="Zetoun Labs offre des services IT complets et des formations certifiantes à Kinshasa, incluant le développement logiciel, la cybersécurité, l'ingénierie réseau et l'installation solaire. Boostez votre entreprise et vos compétences avec nos solutions innovantes."
          keywords={[
            'services IT Kinshasa',
            'formations IT Kinshasa',
            'développement logiciel Kinshasa',
            'cybersécurité RDC',
            'ingénierie réseau Kinshasa',
            'installation solaire Kinshasa',
            'Zetoun Labs',
            'IT Congo',
            'formation professionnelle IT'
          ]}
        />
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Hero />
          <Features />
          <WhyWrlds />
          <Projects />
          <BlogPreview />
        </motion.div>
      </PageLayout>
    </Suspense>
  );
};

export default Index;
