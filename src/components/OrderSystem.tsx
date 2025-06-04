import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Plus, Minus, Trash2, X, Clock, MapPin, Phone, Mail, CreditCard, DollarSign } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

interface OrderSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderSystem = ({ isOpen, onClose }: OrderSystemProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    area: "",
    building: "",
    landmark: "",
    paymentMethod: "cash",
    deliveryTime: "asap",
    scheduledTime: "",
    specialInstructions: ""
  });
  const [orderNumber, setOrderNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState("received");

  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { user, isLoggedIn } = useAuth();

  const deliveryFee = 2.50;
  const subtotal = cartTotal;
  const total = subtotal + deliveryFee;

  // Pre-fill user data if logged in
  useEffect(() => {
    if (isLoggedIn && user) {
      setOrderDetails(prev => ({
        ...prev,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email
      }));
    }
  }, [isLoggedIn, user]);

  const generateOrderNumber = () => {
    return "FB" + Date.now().toString().slice(-6);
  };

  const placeOrder = () => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setCurrentStep(4);
    clearCart();
    // Here you would typically send the order to your backend
  };

  const renderCart = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-montserrat-bold text-brand-black">Your Order</h2>
        <Button variant="outline" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-montserrat-bold text-gray-600 mb-2">Your cart is empty</h3>
          <p className="text-gray-500">Add some delicious items to get started!</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {cartItems.map((item) => (
              <Card key={item.id} className="border-l-4 border-l-brand-red">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-montserrat-bold text-brand-black">{item.name}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Size: {item.customizations.size}</p>
                        {item.customizations.addOns.length > 0 && (
                          <p>Add-ons: {item.customizations.addOns.map(addon => addon.name).join(", ")}</p>
                        )}
                        {item.customizations.instructions && (
                          <p>Instructions: {item.customizations.instructions}</p>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="font-bold">{item.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-brand-red">
                            ${((item.price + item.customizations.addOns.reduce((sum, addon) => sum + addon.price, 0)) * item.quantity).toFixed(2)}
                          </span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="border-t pt-4 space-y-3">
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button variant="outline">Apply</Button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-brand-red">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              Estimated delivery: 30-45 minutes
            </div>

            <Button 
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white"
              onClick={() => setCurrentStep(2)}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );

  const renderCheckout = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-montserrat-bold text-brand-black">Checkout</h2>
        <Button variant="outline" onClick={() => setCurrentStep(1)}>
          Back to Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name *"
                  value={orderDetails.firstName}
                  onChange={(e) => setOrderDetails({...orderDetails, firstName: e.target.value})}
                />
                <Input 
                  placeholder="Last Name *"
                  value={orderDetails.lastName}
                  onChange={(e) => setOrderDetails({...orderDetails, lastName: e.target.value})}
                />
              </div>
              <Input 
                placeholder="Phone Number *"
                value={orderDetails.phone}
                onChange={(e) => setOrderDetails({...orderDetails, phone: e.target.value})}
              />
              <Input 
                placeholder="Email (optional)"
                value={orderDetails.email}
                onChange={(e) => setOrderDetails({...orderDetails, email: e.target.value})}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Delivery Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                placeholder="Street Address *"
                value={orderDetails.address}
                onChange={(e) => setOrderDetails({...orderDetails, address: e.target.value})}
              />
              <Select value={orderDetails.area} onValueChange={(value) => setOrderDetails({...orderDetails, area: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Area/District *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="uptown">Uptown</SelectItem>
                  <SelectItem value="suburbs">Suburbs</SelectItem>
                  <SelectItem value="eastside">East Side</SelectItem>
                </SelectContent>
              </Select>
              <Input 
                placeholder="Building/Floor details"
                value={orderDetails.building}
                onChange={(e) => setOrderDetails({...orderDetails, building: e.target.value})}
              />
              <Input 
                placeholder="Landmark"
                value={orderDetails.landmark}
                onChange={(e) => setOrderDetails({...orderDetails, landmark: e.target.value})}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Delivery Time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={orderDetails.deliveryTime} onValueChange={(value) => setOrderDetails({...orderDetails, deliveryTime: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP (30-45 mins)</SelectItem>
                  <SelectItem value="scheduled">Schedule for later</SelectItem>
                </SelectContent>
              </Select>
              {orderDetails.deliveryTime === "scheduled" && (
                <Input 
                  type="datetime-local"
                  value={orderDetails.scheduledTime}
                  onChange={(e) => setOrderDetails({...orderDetails, scheduledTime: e.target.value})}
                />
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={orderDetails.paymentMethod} onValueChange={(value) => setOrderDetails({...orderDetails, paymentMethod: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Cash on Delivery
                    </div>
                  </SelectItem>
                  <SelectItem value="online">Online Payment</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Special Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Any special delivery instructions..."
                value={orderDetails.specialInstructions}
                onChange={(e) => setOrderDetails({...orderDetails, specialInstructions: e.target.value})}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold">
                    ${((item.price + item.customizations.addOns.reduce((sum, addon) => sum + addon.price, 0)) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-brand-red">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-brand-yellow/10 p-4 rounded-lg">
                <div className="flex items-center text-sm text-brand-black">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Estimated delivery: 30-45 minutes</span>
                </div>
              </div>

              <Button 
                className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg py-6"
                onClick={placeOrder}
                disabled={!orderDetails.firstName || !orderDetails.lastName || !orderDetails.phone || !orderDetails.address || !orderDetails.area}
              >
                Place Order - ${total.toFixed(2)}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="text-center space-y-6">
      <div className="text-6xl mb-4">✅</div>
      <h2 className="text-3xl font-montserrat-bold text-brand-black">Order Placed Successfully!</h2>
      <div className="bg-brand-yellow/10 p-6 rounded-lg">
        <p className="text-lg mb-2">Your order number is:</p>
        <p className="text-3xl font-arial-black text-brand-red">{orderNumber}</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-left">
          <div>
            <p className="font-bold">Customer:</p>
            <p>{orderDetails.firstName} {orderDetails.lastName}</p>
            <p>{orderDetails.phone}</p>
          </div>
          <div>
            <p className="font-bold">Delivery Address:</p>
            <p>{orderDetails.address}</p>
            <p>{orderDetails.area}</p>
          </div>
          <div>
            <p className="font-bold">Estimated Delivery:</p>
            <p>30-45 minutes</p>
          </div>
          <div>
            <p className="font-bold">Total Amount:</p>
            <p className="text-xl font-bold text-brand-red">${total.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button 
          className="bg-brand-red hover:bg-brand-red/90 text-white"
          onClick={() => setCurrentStep(5)}
        >
          Track Your Order
        </Button>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );

  const renderTracking = () => {
    const statusSteps = [
      { status: "received", label: "Order Received", time: "12:30 PM", completed: true },
      { status: "preparing", label: "Preparing Your Order", time: "12:35 PM", completed: orderStatus !== "received" },
      { status: "quality", label: "Quality Check Complete", time: "", completed: false },
      { status: "delivery", label: "Out for Delivery", time: "", completed: false },
      { status: "delivered", label: "Delivered", time: "", completed: false }
    ];

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-montserrat-bold text-brand-black mb-2">Track Your Order</h2>
          <p className="text-lg">Order #{orderNumber}</p>
        </div>

        <div className="space-y-4">
          {statusSteps.map((step, index) => (
            <div key={step.status} className={`flex items-center space-x-4 p-4 rounded-lg ${step.completed ? 'bg-brand-yellow/10' : 'bg-gray-50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.completed ? 'bg-brand-yellow text-brand-black' : 'bg-gray-300 text-gray-600'}`}>
                {step.completed ? '✓' : index + 1}
              </div>
              <div className="flex-1">
                <p className={`font-bold ${step.completed ? 'text-brand-black' : 'text-gray-600'}`}>{step.label}</p>
                {step.time && <p className="text-sm text-gray-500">Time: {step.time}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-red/10 p-4 rounded-lg">
          <p className="text-center text-brand-red font-bold">
            🚚 Your delicious food will be delivered in approximately 25 minutes!
          </p>
        </div>

        <div className="text-center">
          <Button variant="outline" onClick={onClose}>
            Close Tracking
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {currentStep === 1 && "Shopping Cart"}
            {currentStep === 2 && "Checkout"}
            {currentStep === 4 && "Order Confirmation"}
            {currentStep === 5 && "Order Tracking"}
          </DialogTitle>
        </DialogHeader>
        
        {currentStep === 1 && renderCart()}
        {currentStep === 2 && renderCheckout()}
        {currentStep === 4 && renderConfirmation()}
        {currentStep === 5 && renderTracking()}
      </DialogContent>
    </Dialog>
  );
};

export default OrderSystem;
