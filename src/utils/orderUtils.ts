
import { Package, Clock, CheckCircle, Truck } from "lucide-react";

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'preparing': return Package;
    case 'cooking': return Clock;
    case 'ready': return CheckCircle;
    case 'delivered': return Truck;
    default: return Package;
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'preparing': return 'bg-yellow-500';
    case 'cooking': return 'bg-orange-500';
    case 'ready': return 'bg-green-500';
    case 'delivered': return 'bg-blue-500';
    default: return 'bg-gray-500';
  }
};

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
