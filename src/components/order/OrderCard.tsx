
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatTime } from "@/utils/orderUtils";
import OrderStatusSteps from "./OrderStatusSteps";
import { Phone, MapPin, Clock } from "lucide-react";

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

interface OrderCardProps {
  order: Order;
  timeRemaining: number;
  onUpdateStatus: (orderId: string, status: Order['status']) => void;
  onClearOrder: (orderId: string) => void;
}

const OrderCard = ({ order, timeRemaining, onUpdateStatus, onClearOrder }: OrderCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Order #{order.id}</span>
          <Badge className={`${order.status === 'preparing' ? 'bg-yellow-500' : 
            order.status === 'cooking' ? 'bg-orange-500' :
            order.status === 'ready' ? 'bg-green-500' : 'bg-blue-500'} text-white`}>
            {order.status.toUpperCase()}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress Steps */}
        <OrderStatusSteps currentStatus={order.status} />

        {/* Time Remaining */}
        <div className="bg-brand-yellow/10 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-brand-red">
            {timeRemaining > 0 ? formatTime(timeRemaining) : '🎉 Ready!'}
          </div>
          <div className="text-sm text-gray-600">
            {timeRemaining > 0 ? 'Estimated time remaining' : 'Your order is ready for pickup'}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-brand-red/10 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-brand-black mb-2">Restaurant Information</h4>
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="w-4 h-4 text-brand-red" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-brand-red" />
            <span>123 Main St, Food District</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-4 h-4 text-brand-red" />
            <span>Placed at {order.placedAt.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Order Items */}
        <div className="space-y-2">
          <h4 className="font-semibold text-brand-black">Order Items:</h4>
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>{item.quantity}x {item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 flex justify-between font-bold">
            <span>Total:</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          {order.status === 'ready' && (
            <Button 
              onClick={() => onUpdateStatus(order.id, 'delivered')}
              className="w-full bg-green-500 hover:bg-green-600"
            >
              Mark as Picked Up
            </Button>
          )}
          {order.status === 'delivered' && (
            <Button 
              onClick={() => onClearOrder(order.id)}
              className="w-full bg-brand-red hover:bg-brand-red/90"
            >
              Close Order
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
