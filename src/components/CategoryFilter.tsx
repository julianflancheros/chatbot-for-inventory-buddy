
import { useState } from "react";
import { categories } from "@/utils/productData";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="w-full mb-6">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('')}
          className={cn(
            "px-3 py-1.5 text-sm rounded-full transition-all duration-300 hover:shadow-sm",
            selectedCategory === '' 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-3 py-1.5 text-sm rounded-full transition-all duration-300 hover:shadow-sm",
              selectedCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
