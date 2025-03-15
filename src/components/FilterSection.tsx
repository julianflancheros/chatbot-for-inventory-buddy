
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import CategoryFilter from "./CategoryFilter";

interface FilterSectionProps {
  minPrice: number;
  maxPrice: number;
  selectedCategory: string;
  inStockOnly: boolean;
  onPriceChange: (min: number, max: number) => void;
  onCategoryChange: (category: string) => void;
  onStockFilterChange: (checked: boolean) => void;
}

const FilterSection = ({
  minPrice,
  maxPrice,
  selectedCategory,
  inStockOnly,
  onPriceChange,
  onCategoryChange,
  onStockFilterChange,
}: FilterSectionProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  
  const handlePriceChange = (values: number[]) => {
    const [min, max] = values as [number, number];
    setPriceRange([min, max]);
    onPriceChange(min, max);
  };

  return (
    <div className="bg-background p-6 rounded-xl shadow-sm border">
      <h2 className="text-lg font-medium mb-6">Filters</h2>
      
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Price Range</h3>
        <Slider
          defaultValue={[minPrice, maxPrice]}
          min={0}
          max={2000}
          step={10}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="mb-4"
        />
        <div className="flex justify-between items-center text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch
          id="in-stock"
          checked={inStockOnly}
          onCheckedChange={onStockFilterChange}
        />
        <Label htmlFor="in-stock" className="text-sm font-medium cursor-pointer">
          In stock only
        </Label>
      </div>
    </div>
  );
};

export default FilterSection;
