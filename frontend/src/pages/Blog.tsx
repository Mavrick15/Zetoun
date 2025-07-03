import React, { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from '@/components/BlogPostCard'; // Importez le composant ici

const Blog = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
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

  const featuredPost = blogPosts.find(post => post.id === '4') || blogPosts[0];
  const allOtherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allOtherPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(allOtherPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const keywords = ['support tech', 'assistance info', 'ingénierie réseau', 'conception réseau', 'installation réseau', 'vidéosurveillance', 'sécurité vidéo', 'conception web',
    'création site', 'infogérance IT', 'maintenance IT', 'supervision système', 'installation solaire', 'système solaire', 'formation Linux', 'admin Linux', 'serveurs Linux',
    'formation Windows', 'admin Windows', 'formation réseau', 'Cisco routage', 'Cisco switching', 'maintenance PC', 'dépannage info', 'formation virtualisation', 'VMware formation', 'ITIL formation',
    'cybersécurité formation', 'startup tech', 'innovation numérique', 'solutions IT', 'expert IT', 'consulting IT', 'Zetoun Labs'];

  const description = "Explorez les dernières actualités et les innovations proposées par Zetoun Labs, votre référence en services IT et formation.";

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
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
        <SEO
          title="Les dernières actualités technologiques - Zetoun Labs"
          description={description}
          imageUrl={featuredPost?.imageUrl}
          keywords={keywords}
          type="website"
        />

        <motion.div
          initial="initial"
          animate="animate"
          variants={containerVariants}
          className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white rounded-b-3xl shadow-xl"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                variants={textVariants}
                className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
              >
                Actualités &amp; informations
              </motion.h1>
              <motion.p
                variants={textVariants}
                className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto"
              >
                Explorez les dernières actualités et les innovations proposées par Zetoun Labs, votre référence en services IT et formation.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={containerVariants}
          className="container mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPost && (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="col-span-1 md:col-span-2 lg:col-span-3"
              >
                <Link to={`/blog/${featuredPost.slug}`} className="h-full block">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 h-full">
                      <div
                        className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center rounded-l-xl relative"
                        style={{
                          backgroundImage: `url('${featuredPost.imageUrl}')`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="text-white text-center bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                          <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium inline-block mb-4">À la une</span>
                          <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <div>
                          <p className="text-gray-500 text-sm mb-2">Publié le: {featuredPost.date}</p>
                          <p className="text-gray-700 mb-6">
                            {featuredPost.excerpt}
                          </p>
                        </div>
                        <Button variant="outline" className="group">
                          Continuer la lecture
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )}

            {currentPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <BlogPostCard
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.imageUrl}
                  date={post.date}
                  slug={post.slug}
                  category={post.category}
                />
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                className="flex items-center rounded-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>

              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  className="w-10 h-10 rounded-full transition-colors"
                >
                  {i + 1}
                </Button>
              ))}

              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                className="flex items-center rounded-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </motion.div>
      </PageLayout>
    </Suspense>
  );
};

export default Blog;
