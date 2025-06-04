
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Clock, Package, Truck, CheckCircle, Bell } from "lucide-react";
import { useOrderTracking } from "@/contexts/OrderTrackingContext";

const OrderTracking = () => {
  const { currentOrder, updateOrderStatus, clearOrder } = useOrderTracking();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (currentOrder) {
      setTimeRemaining(currentOrder.estimatedTime * 60); // Convert to seconds
      setIsDialogOpen(true);
    }
  }, [currentOrder]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            updateOrderStatus('ready');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeRemaining, updateOrderStatus]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'preparing': return <Package className="w-5 h-5" />;
      case 'cooking': return <Clock className="w-5 h-5" />;
      case 'ready': return <CheckCircle className="w-5 h-5" />;
      case 'delivered': return <Truck className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing': return 'bg-yellow-500';
      case 'cooking': return 'bg-orange-500';
      case 'ready': return 'bg-green-500';
      case 'delivered': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentOrder) return null;

  return (
    <>
      {/* Notification Bell */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-2 -right-2 bg-brand-red text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">
              1
            </Badge>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white border-2 border-brand-yellow z-50">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-brand-black">Order Status</h4>
              <Badge className={`${getStatusColor(currentOrder.status)} text-white`}>
                {currentOrder.status.toUpperCase()}
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(currentOrder.status)}
              <span className="text-sm text-gray-600">Order #{currentOrder.id}</span>
            </div>
            <div className="text-lg font-bold text-brand-red">
              {timeRemaining > 0 ? `${formatTime(timeRemaining)} remaining` : 'Ready for pickup!'}
            </div>
            <Button 
              onClick={() => setIsDialogOpen(true)}
              className="w-full bg-brand-red hover:bg-brand-red/90"
            >
              View Details
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Order Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-black">
              Order Tracking
            </DialogTitle>
          </DialogHeader>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Order #{currentOrder.id}</span>
                <Badge className={`${getStatusColor(currentOrder.status)} text-white`}>
                  {currentOrder.status.toUpperCase()}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress Steps */}
              <div className="space-y-3">
                {['preparing', 'cooking', 'ready', 'delivered'].map((step, index) => (
                  <div key={step} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentOrder.status === step || 
                      (['cooking', 'ready', 'delivered'].includes(currentOrder.status) && step === 'preparing') ||
                      (['ready', 'delivered'].includes(currentOrder.status) && step === 'cooking') ||
                      (currentOrder.status === 'delivered' && step === 'ready')
                        ? getStatusColor(step) + ' text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {getStatusIcon(step)}
                    </div>
                    <span className={`capitalize ${
                      currentOrder.status === step ? 'font-bold text-brand-black' : 'text-gray-600'
                    }`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              {/* Time Remaining */}
              <div className="bg-brand-yellow/10 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-brand-red">
                  {timeRemaining > 0 ? formatTime(timeRemaining) : '🎉 Ready!'}
                </div>
                <div className="text-sm text-gray-600">
                  {timeRemaining > 0 ? 'Estimated time remaining' : 'Your order is ready for pickup'}
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-2">
                <h4 className="font-semibold text-brand-black">Order Items:</h4>
                {currentOrder.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${currentOrder.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                {currentOrder.status === 'ready' && (
                  <Button 
                    onClick={() => updateOrderStatus('delivered')}
                    className="w-full bg-green-500 hover:bg-green-600"
                  >
                    Mark as Picked Up
                  </Button>
                )}
                {currentOrder.status === 'delivered' && (
                  <Button 
                    onClick={() => {
                      clearOrder();
                      setIsDialogOpen(false);
                    }}
                    className="w-full bg-brand-red hover:bg-brand-red/90"
                  >
                    Close Order
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderTracking;
