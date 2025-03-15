
import { formatDistanceToNow } from "date-fns";
import { Product } from "@/utils/productData";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
  products?: Product[];
}

const ChatMessage = ({
  message,
  isBot,
  timestamp,
  products,
}: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex flex-col max-w-[85%] animate-slide-in-bottom",
        isBot ? "items-start" : "items-end self-end"
      )}
    >
      <div
        className={cn(
          "rounded-xl px-4 py-2 shadow-sm",
          isBot
            ? "bg-muted rounded-tl-none"
            : "bg-primary text-primary-foreground rounded-tr-none"
        )}
      >
        <p className="whitespace-pre-line text-sm">{message}</p>
      </div>
      
      <span className="text-xs text-muted-foreground mt-1">
        {formatDistanceToNow(timestamp, { addSuffix: true })}
      </span>

      {/* Products grid/list */}
      {isBot && products && products.length > 0 && (
        <div className="grid gap-3 mt-3 w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isCompact={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
