
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderCard from "./OrderCard";

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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-black">
            Order Tracking - {activeOrders.length} Active Orders
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
