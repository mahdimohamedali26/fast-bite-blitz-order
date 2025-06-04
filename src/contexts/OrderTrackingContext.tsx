
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Order {
  id: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'preparing' | 'cooking' | 'ready' | 'delivered';
  estimatedTime: number;
  placedAt: Date;
}

interface OrderTrackingContextType {
  currentOrder: Order | null;
  createOrder: (items: any[], total: number) => void;
  updateOrderStatus: (status: Order['status']) => void;
  clearOrder: () => void;
}

const OrderTrackingContext = createContext<OrderTrackingContextType | undefined>(undefined);

export const OrderTrackingProvider = ({ children }: { children: ReactNode }) => {
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const createOrder = (items: any[], total: number) => {
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total,
      status: 'preparing',
      estimatedTime: 25,
      placedAt: new Date()
    };
    setCurrentOrder(newOrder);
  };

  const updateOrderStatus = (status: Order['status']) => {
    if (currentOrder) {
      setCurrentOrder(prev => prev ? { ...prev, status } : null);
    }
  };

  const clearOrder = () => {
    setCurrentOrder(null);
  };

  return (
    <OrderTrackingContext.Provider value={{
      currentOrder,
      createOrder,
      updateOrderStatus,
      clearOrder
    }}>
      {children}
    </OrderTrackingContext.Provider>
  );
};

export const useOrderTracking = () => {
  const context = useContext(OrderTrackingContext);
  if (context === undefined) {
    throw new Error('useOrderTracking must be used within an OrderTrackingProvider');
  }
  return context;
};
