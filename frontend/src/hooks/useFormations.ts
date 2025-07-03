import { useState, useEffect } from 'react';
import { ENDPOINTS } from '@/config/api.config'; // API_URL n'est plus nécessaire ici

export interface Formation {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  duration: string;
  instructor: string;
  price: string;
  seats: number;
  level: string;
  image?: string;
}

interface PaginationData {
  total: number;
  limit: number;
  offset: number;
  pages: number;
}

interface FormationsResponse {
  formations: Formation[];
  pagination: PaginationData;
}

interface UseFormationsProps {
  limit?: number;
  initialOffset?: number;
  searchTerm?: string;
  levelFilter?: string;
  locationFilter?: string;
}

const useFormations = ({
  limit = 10,
  initialOffset = 0,
  searchTerm = '',
  levelFilter = '',
  locationFilter = '',
}: UseFormationsProps = {}) => {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    limit,
    offset: initialOffset,
    pages: 0,
  });
  
  const fetchFormations = async (offset = initialOffset) => {
    try {
      setLoading(true);
      
      // Build query parameters
      const params = new URLSearchParams();
      params.append('limit', limit.toString());
      params.append('offset', offset.toString());
      
      if (searchTerm) params.append('search', searchTerm);
      if (levelFilter) params.append('level', levelFilter);
      if (locationFilter) params.append('location', locationFilter);
      
      // Utilisation du chemin relatif pour l'API, comme défini dans api.config.ts
      const response = await fetch(`${ENDPOINTS.FORMATIONS}?${params.toString()}`);
      
      if (!response.ok) {
        // Si la réponse n'est pas OK (statut HTTP 4xx ou 5xx),
        // tente de lire le corps de la réponse comme du texte pour un message d'erreur plus précis.
        const errorText = await response.text();
        console.error(`Erreur HTTP ${response.status}: ${errorText}`);
        // Limite la longueur du message pour éviter un affichage trop long
        throw new Error(`Erreur du serveur (${response.status}): ${errorText.substring(0, 100)}...`);
      }
      
      // Tente de parser la réponse en JSON
      const data: FormationsResponse = await response.json();
      
      setFormations(data.formations);
      setPagination(data.pagination);
      setError(null);
    } catch (err) {
      console.error('Erreur lors du chargement des formations:', err);
      // Différencie les types d'erreurs pour fournir un message plus clair à l'utilisateur
      if (err instanceof SyntaxError) {
        setError('Impossible de lire la réponse du serveur. Format de données inattendu.');
      } else if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
        setError('Erreur réseau: Impossible de se connecter au serveur API.');
      } else {
        setError(err.message || 'Une erreur est survenue lors du chargement des formations.');
      }
      setFormations([]);
    } finally {
      setLoading(false);
    }
  };
  
  const goToPage = (page: number) => {
    const newOffset = (page - 1) * pagination.limit;
    fetchFormations(newOffset);
  };
  
  // Initial fetch des formations lors du montage du composant ou changement des filtres
  useEffect(() => {
    fetchFormations();
  }, [searchTerm, levelFilter, locationFilter, limit]); // Dépendances pour recharger les formations
  
  return {
    formations,
    loading,
    error,
    pagination,
    goToPage,
    refetch: fetchFormations, // Permet de recharger les formations manuellement
  };
};

export default useFormations;
