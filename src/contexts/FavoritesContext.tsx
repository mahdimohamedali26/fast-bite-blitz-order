
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (item: FavoriteItem) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedFavorites = localStorage.getItem('fastbite-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fastbite-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites(prev => [...prev, item]);
    toast({
      title: "Added to Favorites! ❤️",
      description: `${item.name} has been added to your favorites.`,
      duration: 2000,
    });
  };

  const removeFromFavorites = (id: number) => {
    const item = favorites.find(fav => fav.id === id);
    setFavorites(prev => prev.filter(fav => fav.id !== id));
    if (item) {
      toast({
        title: "Removed from Favorites",
        description: `${item.name} has been removed from your favorites.`,
        duration: 2000,
      });
    }
  };

  const isFavorite = (id: number) => {
    return favorites.some(fav => fav.id === id);
  };

  const toggleFavorite = (item: FavoriteItem) => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      toggleFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};
