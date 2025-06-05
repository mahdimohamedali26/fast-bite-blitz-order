
import { useState, useEffect } from "react";
import { useOrderTracking } from "@/contexts/OrderTrackingContext";
import OrderNotificationBell from "./order/OrderNotificationBell";
import OrderDetailsDialog from "./order/OrderDetailsDialog";

const OrderTracking = () => {
  const { activeOrders, updateOrderStatus, clearOrder } = useOrderTracking();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [orderTimers, setOrderTimers] = useState<{[key: string]: number}>({});

  useEffect(() => {
    activeOrders.forEach(order => {
      if (!orderTimers[order.id]) {
        setOrderTimers(prev => ({
          ...prev,
          [order.id]: order.estimatedTime * 60
        }));
      }
    });
  }, [activeOrders]);

  useEffect(() => {
    const timers = Object.keys(orderTimers).map(orderId => {
      if (orderTimers[orderId] > 0) {
        return setInterval(() => {
          setOrderTimers(prev => {
            const newTime = prev[orderId] - 1;
            if (newTime <= 0) {
              updateOrderStatus(orderId, 'ready');
              return { ...prev, [orderId]: 0 };
            }
            return { ...prev, [orderId]: newTime };
          });
        }, 1000);
      }
      return null;
    }).filter(Boolean);

    return () => {
      timers.forEach(timer => timer && clearInterval(timer));
    };
  }, [orderTimers, updateOrderStatus]);

  const handleSelectSpecificOrder = (orderId: string) => {
    setSelectedOrder(orderId);
  };

  const handleViewAllOrders = () => {
    setIsDialogOpen(true);
  };

  if (activeOrders.length === 0) return null;

  return (
    <>
      <OrderNotificationBell
        activeOrders={activeOrders}
        orderTimers={orderTimers}
        onViewAllOrders={handleViewAllOrders}
        onSelectSpecificOrder={handleSelectSpecificOrder}
      />
      
      <OrderDetailsDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        activeOrders={activeOrders}
        selectedOrder={selectedOrder}
        onSelectOrder={setSelectedOrder}
        orderTimers={orderTimers}
        onUpdateStatus={updateOrderStatus}
        onClearOrder={clearOrder}
      />
    </>
  );
};

export default OrderTracking;
