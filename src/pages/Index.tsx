
import { useState, useEffect } from "react";
import { getFilteredProducts, products as allProducts } from "@/utils/productData";
import SearchBar from "@/components/SearchBar";
import FilterSection from "@/components/FilterSection";
import ProductGrid from "@/components/ProductGrid";
import ChatInterface from "@/components/ChatInterface";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay for visual polish
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      const filtered = getFilteredProducts(
        searchTerm, 
        selectedCategory, 
        minPrice, 
        maxPrice, 
        inStockOnly
      );
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, minPrice, maxPrice, inStockOnly]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Makers Tech
            </h1>
            <Badge variant="outline" className="ml-3">
              Inventory System
            </Badge>
          </div>
          
          <SearchBar 
            onSearch={setSearchTerm}
            className="w-full sm:w-auto sm:min-w-[300px] rounded-full border"
          />
        </div>
      </header>
      
      <main className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <FilterSection 
              minPrice={minPrice}
              maxPrice={maxPrice}
              selectedCategory={selectedCategory}
              inStockOnly={inStockOnly}
              onPriceChange={handlePriceChange}
              onCategoryChange={handleCategoryChange}
              onStockFilterChange={setInStockOnly}
            />
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium">
                {selectedCategory || "All Products"}
                <span className="text-sm text-muted-foreground ml-2">
                  ({filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'})
                </span>
              </h2>
            </div>
            
            <ProductGrid products={filteredProducts} isLoading={isLoading} />
          </div>
        </div>
      </main>
      
      {/* Contact Us Button replacing ChatInterface */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="w-auto h-auto px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 animate-float focus:outline-none"
          asChild
        >
          <a href="https://makerstech.streamlit.app/" target="_blank" rel="noopener noreferrer">
            <MessageSquare className="h-5 w-5 mr-2" />
            Comunícate con nosotros
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
