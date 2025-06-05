
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  customizations: {
    size: string;
    addOns: Array<{name: string; price: number}>;
    spiceLevel: string;
    instructions: string;
  };
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, size?: string) => void;
  updateQuantity: (id: number, size: string | undefined, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  cartItemsCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => 
        cartItem.id === item.id && 
        cartItem.size === item.size &&
        JSON.stringify(cartItem.customizations) === JSON.stringify(item.customizations)
      );
      
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem === existingItem 
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (id: number, size?: string) => {
    setCartItems(prevItems => prevItems.filter(item => 
      !(item.id === id && item.size === size)
    ));
  };

  const updateQuantity = (id: number, size: string | undefined, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id, size);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id && item.size === size ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const addOnsTotal = item.customizations.addOns.reduce((sum, addon) => sum + addon.price, 0);
      return total + ((item.price + addOnsTotal) * item.quantity);
    }, 0);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const cartTotal = getTotalPrice();

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    cartItemsCount,
    cartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
