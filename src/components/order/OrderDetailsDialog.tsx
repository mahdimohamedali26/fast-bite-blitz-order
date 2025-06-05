
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import OrderCard from "./OrderCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

interface OrderDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  activeOrders: Order[];
  selectedOrder: string | null;
  onSelectOrder: (orderId: string) => void;
  orderTimers: {[key: string]: number};
  onUpdateStatus: (orderId: string, status: Order['status']) => void;
  onClearOrder: (orderId: string) => void;
}

const OrderDetailsDialog = ({
  isOpen,
  onClose,
  activeOrders,
  selectedOrder,
  onSelectOrder,
  orderTimers,
  onUpdateStatus,
  onClearOrder
}: OrderDetailsDialogProps) => {
  const currentOrderIndex = activeOrders.findIndex(order => order.id === selectedOrder);
  const currentOrder = activeOrders[currentOrderIndex];

  const goToPreviousOrder = () => {
    if (currentOrderIndex > 0) {
      onSelectOrder(activeOrders[currentOrderIndex - 1].id);
    }
  };

  const goToNextOrder = () => {
    if (currentOrderIndex < activeOrders.length - 1) {
      onSelectOrder(activeOrders[currentOrderIndex + 1].id);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-black flex items-center justify-between">
            <span>Order Tracking - {activeOrders.length} Active Orders</span>
            {activeOrders.length > 1 && currentOrder && (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPreviousOrder}
                  disabled={currentOrderIndex <= 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-gray-600">
                  {currentOrderIndex + 1} of {activeOrders.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextOrder}
                  disabled={currentOrderIndex >= activeOrders.length - 1}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={selectedOrder || activeOrders[0]?.id} onValueChange={onSelectOrder}>
          <TabsList className="grid w-full grid-cols-auto overflow-x-auto">
            {activeOrders.map((order) => (
              <TabsTrigger key={order.id} value={order.id} className="text-xs">
                #{order.id.slice(-4)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {activeOrders.map((order) => (
            <TabsContent key={order.id} value={order.id}>
              <OrderCard
                order={order}
                timeRemaining={orderTimers[order.id] || 0}
                onUpdateStatus={onUpdateStatus}
                onClearOrder={onClearOrder}
              />
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsDialog;
