
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (term: string) => void;
  className?: string;
  placeholder?: string;
}

const SearchBar = ({
  onSearch,
  className,
  placeholder = "Search products...",
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Debounce search to avoid too many searches while typing
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        isFocused ? "ring-2 ring-primary/10 shadow-md" : "",
        className
      )}
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10 bg-background border-0 shadow-none focus-visible:ring-0"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;
