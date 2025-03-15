
import { useState, FormEvent, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-4 border-t flex items-center space-x-2"
    >
      <Input
        type="text"
        placeholder="Ask about products, prices, or inventory..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="flex-1 bg-background border-gray-200 focus-visible:ring-1 focus-visible:ring-primary"
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={!message.trim() || disabled}
        className={`rounded-full transition-all duration-300 ${!message.trim() || disabled ? 'opacity-50' : 'hover:scale-105'}`}
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInput;
