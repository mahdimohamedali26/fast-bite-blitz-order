
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Package, Truck, CheckCircle, Bell } from "lucide-react";
import { useOrderTracking } from "@/contexts/OrderTrackingContext";

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

  if (activeOrders.length === 0) return null;

  const currentOrder = selectedOrder ? activeOrders.find(o => o.id === selectedOrder) : activeOrders[0];

  return (
    <>
      {/* Notification Bell */}
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
              <div key={order.id} className="p-2 border rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">#{order.id}</span>
                  <Badge className={`${getStatusColor(order.status)} text-white text-xs`}>
                    {order.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="text-sm text-brand-red font-bold">
                  {orderTimers[order.id] > 0 ? `${formatTime(orderTimers[order.id])} remaining` : 'Ready!'}
                </div>
              </div>
            ))}
            
            <Button 
              onClick={() => setIsDialogOpen(true)}
              className="w-full bg-brand-red hover:bg-brand-red/90"
            >
              View All Orders
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Order Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-black">
              Order Tracking - {activeOrders.length} Active Orders
            </DialogTitle>
          </DialogHeader>
          
          <Tabs value={selectedOrder || activeOrders[0]?.id} onValueChange={setSelectedOrder}>
            <TabsList className="grid w-full grid-cols-auto overflow-x-auto">
              {activeOrders.map((order) => (
                <TabsTrigger key={order.id} value={order.id} className="text-xs">
                  #{order.id.slice(-4)}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {activeOrders.map((order) => (
              <TabsContent key={order.id} value={order.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Order #{order.id}</span>
                      <Badge className={`${getStatusColor(order.status)} text-white`}>
                        {order.status.toUpperCase()}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress Steps */}
                    <div className="space-y-3">
                      {['preparing', 'cooking', 'ready', 'delivered'].map((step, index) => (
                        <div key={step} className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            order.status === step || 
                            (['cooking', 'ready', 'delivered'].includes(order.status) && step === 'preparing') ||
                            (['ready', 'delivered'].includes(order.status) && step === 'cooking') ||
                            (order.status === 'delivered' && step === 'ready')
                              ? getStatusColor(step) + ' text-white'
                              : 'bg-gray-200 text-gray-500'
                          }`}>
                            {getStatusIcon(step)}
                          </div>
                          <span className={`capitalize ${
                            order.status === step ? 'font-bold text-brand-black' : 'text-gray-600'
                          }`}>
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Time Remaining */}
                    <div className="bg-brand-yellow/10 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-brand-red">
                        {orderTimers[order.id] > 0 ? formatTime(orderTimers[order.id]) : '🎉 Ready!'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {orderTimers[order.id] > 0 ? 'Estimated time remaining' : 'Your order is ready for pickup'}
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
                          onClick={() => updateOrderStatus(order.id, 'delivered')}
                          className="w-full bg-green-500 hover:bg-green-600"
                        >
                          Mark as Picked Up
                        </Button>
                      )}
                      {order.status === 'delivered' && (
                        <Button 
                          onClick={() => clearOrder(order.id)}
                          className="w-full bg-brand-red hover:bg-brand-red/90"
                        >
                          Close Order
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderTracking;
