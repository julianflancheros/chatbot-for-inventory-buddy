
import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  inStock: boolean;
  quantity: number;
  className?: string;
}

const AvailabilityBadge = ({ inStock, quantity, className }: AvailabilityBadgeProps) => {
  let colorClass = '';
  let label = '';
  
  if (inStock) {
    if (quantity > 10) {
      colorClass = 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      label = 'In Stock';
    } else if (quantity > 0) {
      colorClass = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      label = `Low Stock (${quantity})`;
    }
  } else {
    colorClass = 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    label = 'Out of Stock';
  }
  
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all",
      colorClass,
      className
    )}>
      <span className={cn(
        "w-1.5 h-1.5 rounded-full mr-1.5",
        inStock ? (quantity > 10 ? "bg-green-500" : "bg-yellow-500") : "bg-red-500"
      )} />
      {label}
    </span>
  );
};

export default AvailabilityBadge;
