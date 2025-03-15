
import { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ProductCard from "./ProductCard";
import { Product, botResponses, getFilteredProducts, getProductById } from "@/utils/productData";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  products?: Product[];
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add greeting message
      setMessages([
        {
          id: "greeting",
          text: botResponses.greeting,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = (message: string) => {
    const userMessageId = Date.now().toString();
    
    setMessages((prev) => [
      ...prev,
      {
        id: userMessageId,
        text: message,
        isBot: false,
        timestamp: new Date(),
      },
    ]);

    setIsTyping(true);

    // Simulate bot "thinking" and then respond
    setTimeout(() => {
      const botMessage = processUserMessage(message);
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds for natural feel
  };

  const processUserMessage = (message: string): Message => {
    const lowerMessage = message.toLowerCase();
    let botMessage: Message = {
      id: `bot-${Date.now()}`,
      text: botResponses.fallback,
      isBot: true,
      timestamp: new Date(),
    };

    // Check for product search queries
    if (
      lowerMessage.includes("show") ||
      lowerMessage.includes("find") ||
      lowerMessage.includes("search") ||
      lowerMessage.includes("looking for") ||
      lowerMessage.includes("want") ||
      lowerMessage.includes("need")
    ) {
      let searchTerms = "";
      let category = "";
      
      // Extract category if mentioned
      for (const cat of ["laptop", "smartphone", "accessory", "accessories", "audio", "wearable", "monitor"]) {
        if (lowerMessage.includes(cat)) {
          category = cat === "laptop" ? "Laptops" 
            : cat === "smartphone" ? "Smartphones" 
            : (cat === "accessory" || cat === "accessories") ? "Accessories"
            : cat === "audio" ? "Audio"
            : cat === "wearable" ? "Wearables"
            : cat === "monitor" ? "Monitors"
            : "";
          break;
        }
      }
      
      // Extract other keywords
      const words = message.split(" ");
      searchTerms = words.filter(word => 
        !["show", "find", "search", "looking", "for", "want", "need", "me", "a", "the", "some"].includes(word.toLowerCase())
      ).join(" ");
      
      const matchedProducts = getFilteredProducts(searchTerms, category);
      
      if (matchedProducts.length > 0) {
        return {
          id: `bot-${Date.now()}`,
          text: botResponses.productFound(matchedProducts.length),
          isBot: true,
          timestamp: new Date(),
          products: matchedProducts.slice(0, 3) // Limit to 3 products to avoid overwhelming the chat
        };
      } else {
        return {
          id: `bot-${Date.now()}`,
          text: botResponses.notFound,
          isBot: true,
          timestamp: new Date(),
        };
      }
    }
    
    // Check for product detail queries
    const productMatches = message.match(/about the ([a-zA-Z0-9\s]+)/) || 
                           message.match(/([a-zA-Z0-9\s]+) details/) ||
                           message.match(/tell me about ([a-zA-Z0-9\s]+)/);
    
    if (productMatches && productMatches[1]) {
      const productName = productMatches[1];
      const products = getFilteredProducts(productName);
      
      if (products.length > 0) {
        const product = products[0]; // Take the best match
        return {
          id: `bot-${Date.now()}`,
          text: botResponses.productDetail(product),
          isBot: true,
          timestamp: new Date(),
          products: [product]
        };
      }
    }
    
    // Check for price queries
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
      const products = getFilteredProducts(message);
      if (products.length > 0) {
        const product = products[0]; // Take the best match
        return {
          id: `bot-${Date.now()}`,
          text: botResponses.priceInfo(product),
          isBot: true,
          timestamp: new Date(),
          products: [product]
        };
      }
    }
    
    // Check for inventory/stock queries
    if (
      lowerMessage.includes("stock") || 
      lowerMessage.includes("available") || 
      lowerMessage.includes("in store") ||
      lowerMessage.includes("inventory")
    ) {
      const products = getFilteredProducts(message);
      if (products.length > 0) {
        const product = products[0]; // Take the best match
        return {
          id: `bot-${Date.now()}`,
          text: botResponses.inventoryStatus(product),
          isBot: true,
          timestamp: new Date(),
          products: [product]
        };
      }
    }
    
    // Check for specification queries
    if (
      lowerMessage.includes("spec") || 
      lowerMessage.includes("feature") || 
      lowerMessage.includes("technical")
    ) {
      const products = getFilteredProducts(message);
      if (products.length > 0) {
        const product = products[0]; // Take the best match
        return {
          id: `bot-${Date.now()}`,
          text: botResponses.specifications(product),
          isBot: true,
          timestamp: new Date(),
          products: [product]
        };
      }
    }
    
    // Check for uses/recommendations
    if (
      lowerMessage.includes("use") || 
      lowerMessage.includes("recommend") || 
      lowerMessage.includes("good for")
    ) {
      const products = getFilteredProducts(message);
      if (products.length > 0) {
        const product = products[0]; // Take the best match
        return {
          id: `bot-${Date.now()}`,
          text: botResponses.recommendedUses(product),
          isBot: true,
          timestamp: new Date(),
          products: [product]
        };
      }
    }

    return botMessage;
  };

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 transition-transform hover:scale-105 animate-float focus:outline-none"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chat interface */}
      <div
        className={`fixed bottom-0 right-0 sm:right-6 sm:bottom-6 w-full sm:w-96 sm:h-[32rem] z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full sm:h-[32rem] sm:rounded-2xl overflow-hidden shadow-xl bg-card border">
          <ChatHeader onClose={toggleChat} />

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
                products={message.products}
              />
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2 animate-pulse-soft">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-muted-foreground"
                  >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40 sm:hidden"
          onClick={toggleChat}
        />
      )}
    </>
  );
};

export default ChatInterface;
