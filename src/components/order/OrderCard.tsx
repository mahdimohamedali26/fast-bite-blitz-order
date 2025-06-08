
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatTime } from "@/utils/orderUtils";
import OrderStatusSteps from "./OrderStatusSteps";
import { Phone, MapPin, Clock, User } from "lucide-react";

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

        {/* Visitor/Customer Information - NOW PROPERLY DISPLAYED */}
        <div className="bg-brand-blue/10 p-4 rounded-lg space-y-3">
          <h4 className="font-semibold text-brand-black mb-3 flex items-center">
            <User className="w-4 h-4 text-brand-red mr-2" />
            Visitor Information
          </h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <User className="w-4 h-4 text-brand-red" />
              <span className="font-medium">Name:</span>
              <span>{order.customerInfo?.name || 'Guest Customer'}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-brand-red" />
              <span className="font-medium">Phone:</span>
              <span>{order.customerInfo?.phone || '(555) 123-4567'}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-medium">Address:</span>
              <span>{order.customerInfo?.address || '123 Main St, Delivery Address'}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-brand-red" />
              <span className="font-medium">Order Time:</span>
              <span>{order.placedAt.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        {/* Order Items - PROPERLY POSITIONED */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-brand-black mb-3">Order Items:</h4>
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm py-2 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <span className="bg-brand-red text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {item.quantity}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="font-bold text-brand-red">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span className="text-brand-red">${order.total.toFixed(2)}</span>
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
