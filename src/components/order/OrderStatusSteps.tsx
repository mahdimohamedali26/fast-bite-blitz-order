
import { getStatusIcon, getStatusColor } from "@/utils/orderUtils";

interface OrderStatusStepsProps {
  currentStatus: 'preparing' | 'cooking' | 'ready' | 'delivered';
}

const OrderStatusSteps = ({ currentStatus }: OrderStatusStepsProps) => {
  const steps = ['preparing', 'cooking', 'ready', 'delivered'] as const;

  const isStepCompleted = (step: string) => {
    const stepIndex = steps.indexOf(step as any);
    const currentIndex = steps.indexOf(currentStatus);
    return stepIndex <= currentIndex;
  };

  return (
    <div className="space-y-3">
      {steps.map((step) => {
        const IconComponent = getStatusIcon(step);
        const isCompleted = isStepCompleted(step);
        
        return (
          <div key={step} className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isCompleted
                ? getStatusColor(step) + ' text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <span className={`capitalize ${
              currentStatus === step ? 'font-bold text-brand-black' : 'text-gray-600'
            }`}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default OrderStatusSteps;
