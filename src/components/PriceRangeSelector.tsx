
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

interface PriceRangeSelectorProps {
  min: number;
  max: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceRangeSelector = ({ min, max, onPriceChange }: PriceRangeSelectorProps) => {
  const [range, setRange] = useState<[number, number]>([min, max]);
  
  useEffect(() => {
    setRange([min, max]);
  }, [min, max]);

  const handleRangeChange = (values: number[]) => {
    const newRange = values as [number, number];
    setRange(newRange);
    onPriceChange(newRange[0], newRange[1]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Price Range</span>
        <span className="text-sm text-muted-foreground">
          ${range[0]} - ${range[1]}
        </span>
      </div>
      
      <Slider
        value={range}
        min={0}
        max={2000}
        step={50}
        minStepsBetweenThumbs={1}
        onValueChange={handleRangeChange}
        className="w-full"
      />
      
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>$0</span>
        <span>$2000</span>
      </div>
    </div>
  );
};

export default PriceRangeSelector;
