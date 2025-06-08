
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Plus, Minus, X, CreditCard, Truck } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useOrderTracking } from "@/contexts/OrderTrackingContext";
import { useToast } from "@/hooks/use-toast";

interface OrderSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderSystem = ({ isOpen, onClose }: OrderSystemProps) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { isLoggedIn } = useAuth();
  const { createOrder } = useOrderTracking();
  const { toast } = useToast();
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [customizations, setCustomizations] = useState({
    cheese: false,
    ketchup: false,
    onion: false
  });
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const deliveryFee = deliveryType === "delivery" ? 3.99 : 0;
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const total = subtotal + tax + deliveryFee;

  const handleCustomizationChange = (type: 'cheese' | 'ketchup' | 'onion') => {
    setCustomizations(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before placing an order.",
        variant: "destructive",
      });
      return;
    }

    if (!isLoggedIn && (!customerInfo.name || !customerInfo.phone || (deliveryType === "delivery" && !customerInfo.address))) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create the order in tracking system
    createOrder(cartItems, total);
    
    // Clear the cart
    clearCart();
    
    // Close the order dialog
    onClose();
    
    // Show success message
    toast({
      title: "Order placed successfully! 🎉",
      description: `Your order will be ${deliveryType === "delivery" ? "delivered" : "ready for pickup"} in about 25 minutes.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-black flex items-center">
            <ShoppingCart className="w-6 h-6 mr-2 text-brand-red" />
            Your Order ({cartItems.length} items)
          </DialogTitle>
        </DialogHeader>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some delicious items to get started!</p>
            <Button onClick={onClose} className="bg-brand-red hover:bg-brand-red/90">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size || 'default'}`} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-brand-black">{item.name}</h4>
                    {item.size && (
                      <Badge variant="outline" className="text-xs">
                        {item.size}
                      </Badge>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.size, Math.max(0, item.quantity - 1))}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-brand-red">${(item.price * item.quantity).toFixed(2)}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(item.id, item.size)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Customization Options */}
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Customize Your Order</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => handleCustomizationChange('cheese')}>
                  <Checkbox 
                    checked={customizations.cheese}
                    onChange={() => handleCustomizationChange('cheese')}
                  />
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-lg">
                      🧀
                    </div>
                    <span className="text-sm font-medium">Extra Cheese</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => handleCustomizationChange('ketchup')}>
                  <Checkbox 
                    checked={customizations.ketchup}
                    onChange={() => handleCustomizationChange('ketchup')}
                  />
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-lg">
                      🍅
                    </div>
                    <span className="text-sm font-medium">Extra Ketchup</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => handleCustomizationChange('onion')}>
                  <Checkbox 
                    checked={customizations.onion}
                    onChange={() => handleCustomizationChange('onion')}
                  />
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-lg">
                      🧅
                    </div>
                    <span className="text-sm font-medium">Extra Onion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Delivery Options</h3>
              <div className="grid grid-cols-2 gap-3">
                <Card 
                  className={`cursor-pointer border-2 ${deliveryType === "delivery" ? "border-brand-red bg-brand-red/5" : "border-gray-200"}`}
                  onClick={() => setDeliveryType("delivery")}
                >
                  <CardContent className="p-4 text-center">
                    <Truck className="w-6 h-6 mx-auto mb-2 text-brand-red" />
                    <div className="font-medium">Delivery</div>
                    <div className="text-sm text-gray-600">25-35 min • $3.99</div>
                  </CardContent>
                </Card>
                
                <Card 
                  className={`cursor-pointer border-2 ${deliveryType === "pickup" ? "border-brand-red bg-brand-red/5" : "border-gray-200"}`}
                  onClick={() => setDeliveryType("pickup")}
                >
                  <CardContent className="p-4 text-center">
                    <ShoppingCart className="w-6 h-6 mx-auto mb-2 text-brand-red" />
                    <div className="font-medium">Pickup</div>
                    <div className="text-sm text-gray-600">15-20 min • Free</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Customer Information */}
            {!isLoggedIn && (
              <div>
                <h3 className="font-semibold text-brand-black mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <Input
                    placeholder="Full Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                  />
                  <Input
                    placeholder="Phone Number *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                  />
                  {deliveryType === "delivery" && (
                    <Textarea
                      placeholder="Delivery Address *"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Special Instructions (Optional)</h3>
              <Textarea
                placeholder="Any special requests or instructions..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
              />
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Payment Method</h3>
              <div className="grid grid-cols-2 gap-3">
                <Card 
                  className={`cursor-pointer border-2 ${paymentMethod === "card" ? "border-brand-red bg-brand-red/5" : "border-gray-200"}`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <CardContent className="p-4 text-center">
                    <CreditCard className="w-6 h-6 mx-auto mb-2 text-brand-red" />
                    <div className="font-medium">Card Payment</div>
                  </CardContent>
                </Card>
                
                <Card 
                  className={`cursor-pointer border-2 ${paymentMethod === "cash" ? "border-brand-red bg-brand-red/5" : "border-gray-200"}`}
                  onClick={() => setPaymentMethod("cash")}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">💵</div>
                    <div className="font-medium">Cash on {deliveryType === "delivery" ? "Delivery" : "Pickup"}</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-brand-black mb-3">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{deliveryType === "delivery" ? "Delivery Fee:" : "Pickup:"}</span>
                  <span>{deliveryType === "delivery" ? `$${deliveryFee.toFixed(2)}` : "Free"}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-brand-red">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <Button 
              onClick={handlePlaceOrder}
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold py-4 text-lg"
              size="lg"
            >
              Place Order • ${total.toFixed(2)}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderSystem;
