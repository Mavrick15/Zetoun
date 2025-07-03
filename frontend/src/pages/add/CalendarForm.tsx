import React, { useState, useEffect, Suspense } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPin, Clock, Users, UserCircle, Search, Filter, AlertCircle, ArrowLeft, Loader2, DollarSign, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import useFormations, { Formation } from '@/hooks/useFormations';
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import FloatingCart from '@/hooks/FloatingCart';
import { CartProvider, useCart } from '@/hooks/CartContext';

// Constantes pour CalendarForm
const DEBOUNCE_DELAY_MS = 500;
const INITIAL_LOADING_PROGRESS_STEP = 5;
const MAX_LOADING_PROGRESS = 95;
const LOADING_PROGRESS_INTERVAL_MS = 200;
const FORMATIONS_LIMIT_PER_PAGE = 5;

// Messages d'état
const EMPTY_STATE_MESSAGES = {
  TITLE: "Aucune formation trouvée",
  DESCRIPTION: "Veuillez ajuster vos critères de recherche ou consulter notre catalogue complet."
};

const ERROR_STATE_MESSAGES = {
  TITLE: "Une erreur est survenue",
  BUTTON_TEXT: "Réessayer"
};

const CUSTOM_FORMATION_SECTION = {
  TITLE: "Vous ne trouvez pas la formation que vous cherchez ?",
  DESCRIPTION: "Nous proposons également des formations sur mesure adaptées aux besoins spécifiques de votre entreprise. Contactez-nous pour discuter de vos exigences en matière de formation.",
  BUTTON_TEXT: "Demander une formation personnalisée",
  LINK: "/add/contact-nous"
};

// Classes CSS communes
const ICON_CLASS = "h-5 w-5 text-blue-600 mr-3 mt-0.5";
const CARD_BOTTOM_BORDER_CLASS = "flex flex-wrap items-center justify-end gap-4 border-t border-gray-100 pt-4";

const CalendarForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, DEBOUNCE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < MAX_LOADING_PROGRESS) {
          return prevProgress + INITIAL_LOADING_PROGRESS_STEP;
        }
        return prevProgress;
      });
    }, LOADING_PROGRESS_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const {
    formations,
    loading,
    error,
    pagination,
    goToPage,
    refetch
  } = useFormations({
    limit: FORMATIONS_LIMIT_PER_PAGE,
    searchTerm: debouncedSearchTerm
  });

  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, index) => (
      <Card key={`skeleton-${index}`} className="overflow-hidden border-0 shadow-md">
        <div className="grid md:grid-cols-3 gap-0">
          <div className="relative h-[200px] md:h-full bg-gray-100">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="p-6 md:col-span-2">
            <div className="space-y-4">
              <div>
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {Array(5).fill(0).map((_, idx) => (
                  <div key={`detail-${idx}`} className="flex items-start">
                    <Skeleton className="h-5 w-5 mr-3" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-20 mb-1" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-end gap-4 border-t border-gray-100 pt-4">
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    ));
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
          title="Calendrier des formations - Zetoun Labs"
          description="Consultez notre calendrier de formations et trouvez la session qui vous convient."
        />
        <CartProvider allFormations={formations}>
          <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </Link>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-space">Calendrier des formations</h1>
                  <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez nos prochaines sessions de formation et inscrivez-vous dès aujourd'hui !
                  </p>
                </motion.div>

                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="relative w-full sm:max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Rechercher une formation..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border-gray-200 focus:border-blue-500 rounded-lg w-full"
                      />
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <span className="text-sm text-gray-500 hidden sm:inline">
                        {pagination?.total} formation(s) disponible(s)
                      </span>
                    </div>
                  </div>
                </div>

                <FloatingCart allFormations={formations} />

                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loading-skeletons"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      {renderSkeletons()}
                    </motion.div>
                  ) : error ? (
                    <motion.div
                      key="error-message"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100 mb-8"
                    >
                      <AlertCircle className="h-12 w-12 mx-auto text-red-400 mb-3" />
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{ERROR_STATE_MESSAGES.TITLE}</h3>
                      <p className="text-gray-600">{error}</p>
                      <Button
                        variant="outline"
                        onClick={() => window.location.reload()}
                        className="mt-4"
                      >
                        {ERROR_STATE_MESSAGES.BUTTON_TEXT}
                      </Button>
                    </motion.div>
                  ) : formations?.length === 0 ? (
                    <motion.div
                      key="empty-state"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100"
                    >
                      <Filter className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{EMPTY_STATE_MESSAGES.TITLE}</h3>
                      <p className="text-gray-600">{EMPTY_STATE_MESSAGES.DESCRIPTION}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="formations-list"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="grid grid-cols-1 gap-8 mb-8"
                    >
                      {formations.map((course, index) => (
                        <FormationCard key={course._id} course={course} index={index} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {!loading && !error && formations?.length > 0 && pagination?.pages > 1 && (
                  <Pagination className="my-8">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (pagination.offset > 0) {
                              const prevPage = Math.floor(pagination.offset / pagination.limit);
                              goToPage(prevPage);
                            }
                          }}
                          className={pagination.offset === 0 ? 'pointer-events-none opacity-50' : ''}
                        />
                      </PaginationItem>

                      {Array.from({ length: pagination.pages }, (_, i) => (
                        <PaginationItem key={i + 1}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              goToPage(i + 1);
                            }}
                            isActive={Math.floor(pagination.offset / pagination.limit) + 1 === i + 1}
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            const currentPage = Math.floor(pagination.offset / pagination.limit) + 1;
                            if (currentPage < pagination.pages) {
                              goToPage(currentPage + 1);
                            }
                          }}
                          className={Math.floor(pagination.offset / pagination.limit) + 1 >= pagination.pages ? 'pointer-events-none opacity-50' : ''}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl text-center shadow-sm"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{CUSTOM_FORMATION_SECTION.TITLE}</h2>
                  <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                    {CUSTOM_FORMATION_SECTION.DESCRIPTION}
                  </p>
                  <Link to={CUSTOM_FORMATION_SECTION.LINK}>
                    <Button size="lg" variant="outline" className="bg-white hover:bg-blue-50">
                      {CUSTOM_FORMATION_SECTION.BUTTON_TEXT}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </CartProvider>
      </PageLayout>
    </Suspense>
  );
};

const FormationCard = ({ course, index }) => {
  const { addToCart, isCourseInCart, enrollingId } = useCart();
  const alreadyInCart = isCourseInCart(course._id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md`}>
        <div className="grid md:grid-cols-3 gap-0">
          {course.image && (
            <div className="relative h-full min-h-[200px] md:min-h-0 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://placehold.co/300x200/e2e8f0/64748b?text=${course.title.split(' ').map(n => n[0]).join('')}`;
                }}
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-blue-600 hover:bg-white/80 backdrop-blur-sm font-medium px-3 py-1">
                  {course.level}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-4 md:hidden">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                  <p className="font-semibold text-blue-600">{course.price}</p>
                  <p className="text-sm text-gray-700">{course.seats} places disponibles</p>
                </div>
              </div>
            </div>
          )}
          <div className={`p-6 ${course.image ? 'md:col-span-2' : 'md:col-span-3'}`}>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
                <p className="text-gray-700">{course.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="flex items-start">
                  <CalendarIcon className={ICON_CLASS} />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-gray-700">{course.date}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className={ICON_CLASS} />
                  <div>
                    <p className="font-medium">Lieu</p>
                    <p className="text-gray-700">{course.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className={ICON_CLASS} />
                  <div>
                    <p className="font-medium">Durée</p>
                    <p className="text-gray-700">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className={ICON_CLASS} />
                  <div>
                    <p className="font-medium">Places disponibles</p>
                    <p className="text-gray-700">{course.seats} places</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className={ICON_CLASS} />
                  <div>
                    <p className="font-medium">Prix</p>
                    <p className="text-gray-700">{course.price}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserCircle className={ICON_CLASS} />
                  <div>
                    <p className="font-medium">Formateur</p>
                    <p className="text-gray-700">{course.instructor}</p>
                  </div>
                </div>
              </div>

              <div className={CARD_BOTTOM_BORDER_CLASS}>
                <Button
                  size="lg"
                  onClick={() => addToCart(course._id)}
                  disabled={alreadyInCart || course.isEnrolled || enrollingId === course._id}
                  className="relative overflow-hidden group px-4 py-2"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {enrollingId === course._id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : alreadyInCart || course.isEnrolled ? (
                      <ShoppingCart className="h-4 w-4" />
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        <span className="font-bold text-lg">+</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CalendarForm;
