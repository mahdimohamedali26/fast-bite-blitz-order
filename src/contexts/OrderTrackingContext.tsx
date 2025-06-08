
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
  customerInfo?: {
    name: string;
    phone: string;
    address: string;
  };
}

interface OrderTrackingContextType {
  orders: Order[];
  activeOrders: Order[];
  createOrder: (items: any[], total: number, customerInfo?: any) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  clearOrder: (orderId: string) => void;
  clearAllOrders: () => void;
}

const OrderTrackingContext = createContext<OrderTrackingContextType | undefined>(undefined);

export const OrderTrackingProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const createOrder = (items: any[], total: number, customerInfo?: any) => {
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
      placedAt: new Date(),
      customerInfo: customerInfo || {
        name: 'Guest Customer',
        phone: '(555) 123-4567',
        address: '123 Main St, Delivery Address'
      }
    };
    setOrders(prev => [...prev, newOrder]);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  const clearOrder = (orderId: string) => {
    setOrders(prev => prev.filter(order => order.id !== orderId));
  };

  const clearAllOrders = () => {
    setOrders([]);
  };

  const activeOrders = orders.filter(order => order.status !== 'delivered');

  return (
    <OrderTrackingContext.Provider value={{
      orders,
      activeOrders,
      createOrder,
      updateOrderStatus,
      clearOrder,
      clearAllOrders
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
