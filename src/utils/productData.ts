
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  category: string;
  inStock: boolean;
  stockQuantity: number;
  imageUrl: string;
  specifications: Record<string, string | number>;
  recommendedUses: string[];
  features: string[];
  rating: number;
}

export const categories = [
  'Laptops',
  'Smartphones',
  'Accessories',
  'Audio',
  'Wearables',
  'Monitors'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'ProBook X5',
    description: 'Professional grade laptop with high-performance capabilities for demanding tasks.',
    price: 1299.99,
    discountedPrice: 1199.99,
    category: 'Laptops',
    inStock: true,
    stockQuantity: 15,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    specifications: {
      processor: 'Intel Core i7-11800H',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      display: '15.6" 4K IPS',
      graphics: 'NVIDIA RTX 3060 6GB'
    },
    recommendedUses: ['Professional Video Editing', 'Software Development', '3D Modeling'],
    features: ['Backlit Keyboard', 'Fingerprint Reader', 'Thunderbolt 4', 'Wi-Fi 6'],
    rating: 4.7
  },
  {
    id: '2',
    name: 'UltraPhone 12',
    description: 'Next-generation smartphone with advanced camera system and all-day battery life.',
    price: 899.99,
    category: 'Smartphones',
    inStock: true,
    stockQuantity: 42,
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
    specifications: {
      processor: 'A15 Bionic',
      ram: '8GB',
      storage: '256GB',
      display: '6.1" OLED',
      camera: 'Triple 12MP System'
    },
    recommendedUses: ['Photography', 'Gaming', 'Social Media'],
    features: ['Face ID', 'Water Resistant', 'Wireless Charging', '5G Connectivity'],
    rating: 4.9
  },
  {
    id: '3',
    name: 'AudioMax Pro',
    description: 'Premium noise-cancelling headphones with spatial audio and crystal clear sound.',
    price: 349.99,
    discountedPrice: 299.99,
    category: 'Audio',
    inStock: true,
    stockQuantity: 30,
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
    specifications: {
      driver: '40mm Dynamic',
      batteryLife: '30 hours',
      connectivity: 'Bluetooth 5.2',
      noiseReduction: '-40dB',
      weight: '250g'
    },
    recommendedUses: ['Travel', 'Work Focus', 'Audiophile Listening'],
    features: ['Active Noise Cancellation', 'Ambient Mode', 'Touch Controls', 'Voice Assistant'],
    rating: 4.8
  },
  {
    id: '4',
    name: 'SmartWatch Elite',
    description: 'Advanced fitness and health tracking with an always-on display and premium design.',
    price: 429.99,
    category: 'Wearables',
    inStock: false,
    stockQuantity: 0,
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    specifications: {
      display: '1.4" AMOLED',
      batteryLife: '7 days',
      waterResistance: '50m',
      sensors: 'Heart, ECG, SpO2',
      connectivity: 'Wi-Fi, Bluetooth'
    },
    recommendedUses: ['Fitness Tracking', 'Health Monitoring', 'Notifications'],
    features: ['ECG App', 'Sleep Tracking', 'GPS', 'Cellular Option'],
    rating: 4.6
  },
  {
    id: '5',
    name: 'UltraWide Monitor',
    description: 'Professional ultrawide monitor with stunning color accuracy and immersive viewing experience.',
    price: 699.99,
    discountedPrice: 599.99,
    category: 'Monitors',
    inStock: true,
    stockQuantity: 8,
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
    specifications: {
      size: '34"',
      resolution: '3440x1440',
      refreshRate: '144Hz',
      panelType: 'IPS',
      responseTime: '1ms'
    },
    recommendedUses: ['Content Creation', 'Gaming', 'Multitasking'],
    features: ['HDR10', 'AMD FreeSync', 'USB-C Power Delivery', 'VESA Mount Compatible'],
    rating: 4.5
  },
  {
    id: '6',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad with multiple device support and sleek design.',
    price: 59.99,
    category: 'Accessories',
    inStock: true,
    stockQuantity: 50,
    imageUrl: 'https://images.unsplash.com/photo-1606913419164-a8b1220a349f',
    specifications: {
      power: '15W',
      compatibility: 'Qi Standard',
      ports: 'USB-C',
      dimensions: '10cm x 10cm',
      weight: '120g'
    },
    recommendedUses: ['Desk Setup', 'Nightstand', 'Office'],
    features: ['Multi-Device', 'Foreign Object Detection', 'LED Indicator', 'Anti-Slip Surface'],
    rating: 4.3
  },
  {
    id: '7',
    name: 'Performance Gaming Laptop',
    description: 'High-performance gaming laptop with advanced cooling and superior graphics.',
    price: 1799.99,
    category: 'Laptops',
    inStock: true,
    stockQuantity: 12,
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
    specifications: {
      processor: 'AMD Ryzen 9 5900HX',
      ram: '32GB DDR4',
      storage: '1TB NVMe SSD',
      display: '17.3" 165Hz',
      graphics: 'NVIDIA RTX 3080 16GB'
    },
    recommendedUses: ['AAA Gaming', 'Streaming', 'Virtual Reality'],
    features: ['RGB Keyboard', 'Advanced Cooling', 'AI Enhanced Audio', 'Multiple Display Outputs'],
    rating: 4.8
  },
  {
    id: '8',
    name: 'Premium Compact Camera',
    description: 'Professional-grade compact camera with exceptional image quality and versatility.',
    price: 1299.99,
    discountedPrice: 1099.99,
    category: 'Accessories',
    inStock: true,
    stockQuantity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    specifications: {
      sensor: '1" 20.1MP',
      zoom: '24-200mm f/2.8-4.5',
      video: '4K 30fps',
      stabilization: '5-axis',
      connectivity: 'Wi-Fi, Bluetooth'
    },
    recommendedUses: ['Street Photography', 'Travel', 'Vlogging'],
    features: ['Eye AF', 'Touch Screen', 'Built-in ND Filter', 'Time-lapse'],
    rating: 4.7
  }
];

export const getFilteredProducts = (
  searchTerm: string = '',
  category: string = '',
  minPrice: number = 0,
  maxPrice: number = 10000,
  inStockOnly: boolean = false
): Product[] => {
  return products.filter(product => {
    const matchesSearch = 
      searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = category === '' || product.category === category;
    
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    
    const matchesStock = inStockOnly ? product.inStock : true;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesStock;
  });
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Sample bot messages for the chat interface
export const botResponses = {
  greeting: "Hello! Welcome to Makers Tech. How can I help you today? You can ask about our products, inventory status, or any specific tech questions.",
  
  notFound: "I couldn't find any products matching your criteria. Would you like to try a different search?",
  
  productFound: (count: number) => `I found ${count} products that might interest you. Here they are:`,
  
  productDetail: (product: Product) => `
    ${product.name} is ${product.inStock ? 'currently in stock' : 'currently out of stock'}. 
    ${product.stockQuantity > 0 ? `We have ${product.stockQuantity} units available.` : ''}
    
    The price is $${product.price.toFixed(2)}${product.discountedPrice ? ` (On sale: $${product.discountedPrice.toFixed(2)})` : ''}.
    
    Key features include: ${product.features.join(', ')}.
  `,
  
  askMore: "Would you like to know more about any specific product? Or would you like to refine your search?",
  
  priceInfo: (product: Product) => `
    The ${product.name} is priced at $${product.price.toFixed(2)}.
    ${product.discountedPrice ? `It's currently on sale for $${product.discountedPrice.toFixed(2)}, saving you $${(product.price - product.discountedPrice).toFixed(2)}!` : ''}
  `,
  
  inventoryStatus: (product: Product) => `
    The ${product.name} is ${product.inStock ? 'in stock' : 'currently out of stock'}.
    ${product.stockQuantity > 0 ? `We have ${product.stockQuantity} units available for immediate shipping.` : 'We expect to restock soon.'}
  `,
  
  specifications: (product: Product) => {
    let specText = `Here are the specifications for ${product.name}:\n`;
    for (const [key, value] of Object.entries(product.specifications)) {
      specText += `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
    }
    return specText;
  },
  
  recommendedUses: (product: Product) => `
    The ${product.name} is recommended for: ${product.recommendedUses.join(', ')}.
  `,
  
  compareProducts: (product1: Product, product2: Product) => `
    Comparing ${product1.name} vs ${product2.name}:
    
    Price: $${product1.price.toFixed(2)} vs $${product2.price.toFixed(2)}
    
    Main differences:
    - ${product1.name} has ${product1.specifications.processor} while ${product2.name} has ${product2.specifications.processor}
    - ${product1.name} ${product1.inStock ? 'is in stock' : 'is out of stock'} and ${product2.name} ${product2.inStock ? 'is in stock' : 'is out of stock'}
  `,
  
  fallback: "I'm not sure I understand. Could you rephrase your question? You can ask about product details, pricing, inventory, or specifications."
};
