import React, { useEffect, useState, Suspense } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo = '/signup'
}) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user && JSON.parse(user).isAuthenticated);

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

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const alertVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4, type: 'spring', stiffness: 100 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  if (isAuthenticated === null) {
    return (
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
    );
  }

  if (!isAuthenticated) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center min-h-[60vh] px-4"
      >
        <motion.div
          variants={alertVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full max-w-md"
        >
          <Alert className="mb-4 border-blue-200 bg-blue-50">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-800 font-medium text-lg">
              Accès restreint
            </AlertTitle>
            <AlertDescription className="text-blue-700 mt-2 text-center">
              <p className="mb-4">
                Vous devez être inscrit pour accéder au calendrier des formations.
                Créez un compte ou connectez-vous pour continuer.
              </p>
              <div className="flex flex-wrap gap-3 mt-2 justify-center">
                <Button
                  onClick={() => navigate('/signup')}
                  variant="default"
                >
                  S'inscrire
                </Button>
                <Button
                  onClick={() => navigate('/login')}
                  variant="outline"
                  className="border-blue-300"
                >
                  Se connecter
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </motion.div>
      </motion.div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
