
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bell, Eye } from "lucide-react";
import { getStatusColor, formatTime } from "@/utils/orderUtils";

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

interface OrderNotificationBellProps {
  activeOrders: Order[];
  orderTimers: {[key: string]: number};
  onViewAllOrders: () => void;
  onSelectSpecificOrder?: (orderId: string) => void;
}

const OrderNotificationBell = ({ 
  activeOrders, 
  orderTimers, 
  onViewAllOrders, 
  onSelectSpecificOrder 
}: OrderNotificationBellProps) => {
  if (activeOrders.length === 0) return null;

  const handleOrderClick = (orderId: string) => {
    if (onSelectSpecificOrder) {
      onSelectSpecificOrder(orderId);
    }
    onViewAllOrders();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <Bell className="w-4 h-4" />
          <Badge className="absolute -top-2 -right-2 bg-brand-red text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">
            {activeOrders.length}
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white border-2 border-brand-yellow z-50">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-brand-black">Active Orders</h4>
            <Badge className="bg-brand-red text-white">
              {activeOrders.length} Active
            </Badge>
          </div>
          
          {activeOrders.slice(0, 3).map((order) => (
            <div 
              key={order.id} 
              className="p-2 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => handleOrderClick(order.id)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">#{order.id.slice(-4)}</span>
                <div className="flex items-center space-x-2">
                  <Badge className={`${getStatusColor(order.status)} text-white text-xs`}>
                    {order.status.toUpperCase()}
                  </Badge>
                  <Eye className="w-3 h-3 text-gray-400" />
                </div>
              </div>
              <div className="text-sm text-brand-red font-bold">
                {orderTimers[order.id] > 0 ? `${formatTime(orderTimers[order.id])} remaining` : 'Ready!'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {order.items.length} item{order.items.length !== 1 ? 's' : ''} • ${order.total.toFixed(2)}
              </div>
            </div>
          ))}
          
          {activeOrders.length > 3 && (
            <div className="text-center text-xs text-gray-500 py-1">
              +{activeOrders.length - 3} more orders
            </div>
          )}
          
          <Button 
            onClick={onViewAllOrders}
            className="w-full bg-brand-red hover:bg-brand-red/90"
          >
            View All Orders
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default OrderNotificationBell;
