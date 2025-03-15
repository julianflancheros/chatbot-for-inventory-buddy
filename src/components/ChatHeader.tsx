
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-primary-foreground"
          >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
          </svg>
        </div>
        <div>
          <h3 className="font-medium text-sm">Makers Tech Assistant</h3>
          <p className="text-xs text-muted-foreground">Online</p>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onClose}
        className="h-8 w-8 rounded-full"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatHeader;
