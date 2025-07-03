import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[]; // La prop keywords recevra les mots-clés spécifiques de la page
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zetoun Labs - Services IT & Formations', // Titre par défaut mis à jour
  description = `Zetoun Labs : Votre partenaire expert en services IT (support, réseau, vidéosurveillance, web, infogérance, solaire)
    et formations professionnelles (Linux, Windows, Cisco, virtualisation, maintenance PC).`, // Description par défaut mise à jour
  type = 'website',
  name = 'Zetoun Labs', // Nom de l'organisation mis à jour
  imageUrl = '/lovable-uploads/icon.svg', // Assurez-vous que c'est bien l'icône de Zetoun Labs
  publishDate,
  modifiedDate,
  author,
  category,
  // Mots-clés par défaut pour l'ensemble du site (à affiner par page)
  keywords = [
    'services IT',
    'formation IT',
    'support technique',
    'ingénierie réseau',
    'vidéosurveillance',
    'conception web',
    'infogérance',
    'installation solaire',
    'formation Linux',
    'formation Windows',
    'formation réseau Cisco',
    'formation virtualisation',
    'startup tech',
    'Kinshasa', // Si votre cible est Kinshasa
    'Zetoun Labs'
  ],
  isBlogPost = false
}) => {
  const location = useLocation();
  // Assurez-vous que l'URL de base est bien celle de votre site pour Zetoun Labs
  const baseUrl = 'https://zetounlabs.com'; // Corrected base URL to Zetoun Labs domain
  const currentUrl = `${baseUrl}${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  // --- Mise à jour de l'Objet Organization JSON-LD ---
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zetoun Labs', // Nom de l'organisation mis à jour
    url: 'https://zetounlabs.com', // URL de Zetoun Labs (à vérifier et modifier si différente)
    logo: `${baseUrl}/lovable-uploads/logo-zetoun-labs.png`, // Chemin vers le logo de Zetoun Labs (à vérifier)
    description: 'Zetoun Labs : Votre partenaire en services IT et formations professionnelles à Kinshasa.', // Description mise à jour
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@zetounlabs.com' // Email de contact de Zetoun Labs (à vérifier)
    },
    sameAs: [
      // Liens vers les réseaux sociaux de Zetoun Labs (exemples à vérifier et modifier)
      'https://www.linkedin.com/company/zetoun-labs',
      'https://twitter.com/zetounlabs'
    ]
  };

  // --- Mise à jour de l'Objet BlogPosting JSON-LD ---
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: absoluteImageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'Zetoun Labs' // Nom de l'auteur par défaut ou de l'organisation
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zetoun Labs', // Nom de l'éditeur mis à jour
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/lovable-uploads/logo-zetoun-labs.png` // Chemin du logo de l'éditeur (Zetoun Labs)
      }
    },
    description: description,
    keywords: keywords.join(', ') // Les mots-clés spécifiques de la page sont déjà passés
  } : null;

  // Combine keywords avec tout terme de catégorie additionnel
  const keywordString = category
    ? [...keywords, category.toLowerCase()].join(', ')
    : keywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />

      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />

      {/* JSON-LD structured data */}
      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>

      {/* Blog Post Structured Data (conditionally rendered) */}
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
