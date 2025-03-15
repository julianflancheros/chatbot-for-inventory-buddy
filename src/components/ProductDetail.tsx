
import { Product } from "@/utils/productData";
import AvailabilityBadge from "./AvailabilityBadge";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="space-y-6 py-6">
      <div 
        className={cn(
          "relative w-full pt-[75%] bg-muted overflow-hidden rounded-lg",
          !imageLoaded && "img-loading"
        )}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-medium">{product.name}</h2>
            <p className="text-muted-foreground">{product.category}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium">{product.rating}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl font-semibold">
            ${product.discountedPrice?.toFixed(2) || product.price.toFixed(2)}
          </span>
          {product.discountedPrice && (
            <>
              <span className="text-lg line-through text-muted-foreground">
                ${product.price.toFixed(2)}
              </span>
              <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                Save ${(product.price - product.discountedPrice).toFixed(2)}
              </Badge>
            </>
          )}
        </div>
        
        <div className="mt-4">
          <AvailabilityBadge 
            inStock={product.inStock} 
            quantity={product.stockQuantity} 
            className="text-sm px-3 py-1"
          />
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-medium mb-2">Description</h3>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-medium mb-3">Specifications</h3>
        <div className="space-y-2">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="text-muted-foreground capitalize">{key}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-medium mb-3">Recommended Uses</h3>
        <div className="flex flex-wrap gap-2">
          {product.recommendedUses.map((use) => (
            <Badge key={use} variant="secondary" className="px-3 py-1">
              {use}
            </Badge>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-medium mb-3">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <Button 
        className="w-full mt-6 transition-all duration-300 hover:shadow-md"
        disabled={!product.inStock}
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </Button>
    </div>
  );
};

export default ProductDetail;
