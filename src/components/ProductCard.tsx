
import { useState } from "react";
import { Product } from "@/utils/productData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AvailabilityBadge from "./AvailabilityBadge";
import ProductDetail from "./ProductDetail";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  isCompact?: boolean;
}

const ProductCard = ({ product, isCompact = false }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 group hover:shadow-lg border",
        isCompact ? "flex gap-3" : "h-full"
      )}
    >
      {isCompact ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              className="p-0 h-auto w-full flex justify-start text-left"
            >
              <div className="flex gap-3 p-3 w-full">
                <div 
                  className={cn(
                    "relative rounded-md overflow-hidden bg-muted flex-shrink-0",
                    !imageLoaded && "img-loading"
                  )}
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={cn(
                      "w-full h-full object-cover transition-opacity duration-300",
                      imageLoaded ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1 mb-1">{product.category}</p>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">
                      ${product.discountedPrice?.toFixed(2) || product.price.toFixed(2)}
                    </span>
                    {product.discountedPrice && (
                      <span className="text-xs line-through text-muted-foreground">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-1">
                    <AvailabilityBadge 
                      inStock={product.inStock} 
                      quantity={product.stockQuantity} 
                    />
                  </div>
                </div>
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
            <ProductDetail product={product} />
          </SheetContent>
        </Sheet>
      ) : (
        <>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-0 h-auto w-full">
                <div className="w-full flex flex-col h-full">
                  <div 
                    className={cn(
                      "relative w-full pt-[75%] bg-muted overflow-hidden",
                      !imageLoaded && "img-loading"
                    )}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
                        imageLoaded ? "opacity-100" : "opacity-0"
                      )}
                      onLoad={() => setImageLoaded(true)}
                    />
                    
                    {product.discountedPrice && (
                      <Badge 
                        className="absolute top-2 right-2 bg-primary/90 hover:bg-primary"
                      >
                        Sale
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-medium line-clamp-1 text-left">{product.name}</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2 text-left mb-3 flex-1">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold">
                          ${product.discountedPrice?.toFixed(2) || product.price.toFixed(2)}
                        </span>
                        {product.discountedPrice && (
                          <span className="ml-1 text-sm line-through text-muted-foreground">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      
                      <AvailabilityBadge 
                        inStock={product.inStock} 
                        quantity={product.stockQuantity} 
                      />
                    </div>
                  </div>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
              <ProductDetail product={product} />
            </SheetContent>
          </Sheet>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
