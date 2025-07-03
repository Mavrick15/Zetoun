import { useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { Separator } from '../components/ui/separator';
import SEO from '../components/SEO';
import { useEffect, useState, Suspense } from 'react';
import { blogPosts } from '../data/blogPosts';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, MessageSquare, Share, Tag } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

const formatDateForISO = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return null;
  }
  return date.toISOString().split('T')[0];
};

const extractKeywords = (post) => {
  const baseKeywords = [post.category];
  const titleWords = post.title.toLowerCase().split(' ').filter(word => word.length > 3);
  const contentKeywords = post.excerpt ? post.excerpt.toLowerCase().split(' ').slice(0, 5) : [];
  const allKeywords = [...new Set([...baseKeywords, ...titleWords, ...contentKeywords])];
  return allKeywords;
};

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

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
  }, [slug]);

  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <p>Nous n'avons pas pu trouver l'article que vous recherchez.</p>
        </div>
      </PageLayout>
    );
  }

  const isSensorPost = post.category === 'Capteurs';

  const wordCount = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(/\s+/).length;
    } else if (section.items) {
      return count + section.items.join(' ').split(/\s+/).length;
    }
    return count;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Ensure imageUrl starts with a '/' for absolute path from root
  const absoluteImageUrl = post.imageUrl.startsWith('/') ? post.imageUrl : `/${post.imageUrl}`;

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
          title={`${post.title} - Zetoun Labs`}
          description={post.excerpt}
          imageUrl={absoluteImageUrl}
          type="article"
          isBlogPost={true}
          publishDate={formatDateForISO(post.date)}
          modifiedDate={formatDateForISO(post.date)}
          author={post.author}
          category={post.category}
          keywords={extractKeywords(post)}
        />

        <div
          className={cn(
            "w-full pt-32 pb-16 relative",
            isSensorPost ? "bg-black text-white" : "bg-gradient-to-b from-gray-900 to-black text-white"
          )}
          style={{
            backgroundImage: isSensorPost
              ? `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url('${absoluteImageUrl}')`
              : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${absoluteImageUrl}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 flex items-center gap-1.5">
                  <Tag size={14} />
                  {post.category}
                </Badge>
                <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </Badge>
                <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                  <Clock size={14} />
                  {readingTime} min de lecture
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center text-gray-300">
                <BookOpen size={18} className="mr-2" />
                <span>Par {post.author}</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={cn("mb-8", section.type === 'quote' && "my-10")}
                >
                  {section.type === 'paragraph' && <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>}
                  {section.type === 'heading' && (
                    <div className="flex items-center gap-3 mt-12 mb-6">
                      <div className="w-1.5 h-7 bg-purple-500 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.content}</h2>
                    </div>
                  )}
                  {section.type === 'subheading' && (
                    <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      {section.content}
                    </h3>
                  )}
                  {section.type === 'list' && (
                    <ul className="list-disc pl-5 my-4 space-y-2">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.type === 'quote' && (
                    <blockquote className="border-l-4 border-purple-500 pl-5 py-2 my-8 bg-purple-50 rounded-r-lg italic text-gray-700">
                      <div className="flex">
                        <MessageSquare size={20} className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-lg m-0">{section.content}</p>
                      </div>
                    </blockquote>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <Separator className="my-8" />

            <div className="flex flex-col sm:flex-row items-center justify-between py-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <div>
                <p className="text-sm text-gray-600 font-medium">Catégorie: {post.category}</p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </Suspense>
  );
};

export default BlogPostDetail;
