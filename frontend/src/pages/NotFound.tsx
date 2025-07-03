import React, { useEffect, useState, Suspense } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 95) {
          return prevProgress + 5;
        }
        return prevProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [location.pathname]);

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
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
          <div className="max-w-md w-full space-y-8 text-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6">
                  <AlertCircle className="h-10 w-10 text-red-600" />
                </div>

                <h1 className="text-5xl font-bold text-gray-900 dark:text-white font-space">404</h1>
                <p className="mt-3 text-xl font-medium text-gray-700 dark:text-gray-300">Page introuvable</p>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                  Désolé, nous n'avons pas pu trouver la page que vous recherchez.
                </p>

                <div className="mt-8 space-y-4">
                  <Button
                    className="w-full hover:scale-105 transition-transform"
                    onClick={() => navigate(-1)}
                  >
                    Retourner en arrière
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => navigate("/")}
                  >
                    Retourner à l'accueil
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </Suspense>
  );
};

export default NotFound;
