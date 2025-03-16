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
  specifications: Record<string, any>;
  recommendedUses: string[];
  features: string[];
  rating: number;
}

export const categories = [
  'Laptops',
  'Audio',
  'Componentes PC',
  'Monitores Gamer',
  'Smartphones'
];

export const products: Product[] = [
  // Laptops
  {
    id: 'LT-101',
    name: 'TechMaster CreatorBook Pro',
    description: 'Laptop profesional de alto rendimiento para creadores de contenido.',
    price: 2899.99,
    category: 'Laptops',
    inStock: true,
    stockQuantity: 15,
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
    specifications: {
      procesador: {
        modelo: "Intel Core i9-13900H",
        nucleos: 14,
        hilos: 20
      },
      graficos: "NVIDIA RTX 4080 12GB",
      pantalla: {
        tamanio: "16''",
        resolucion: "2560x1600",
        color_gamut: "100% DCI-P3"
      },
      almacenamiento: "2TB NVMe Gen4",
      conectividad: ["Thunderbolt 4", "WiFi 6E"]
    },
    recommendedUses: ['Edición de video profesional', 'Diseño 3D', 'Desarrollo de software'],
    features: ['Pantalla de alta fidelidad de color', 'Refrigeración avanzada', 'Thunderbolt 4', 'ISV Certified'],
    rating: 4.9
  },
  {
    id: 'LT-102',
    name: 'GamingTech Aurora X5',
    description: 'Laptop gaming de alto rendimiento con sistema de refrigeración avanzado.',
    price: 1999.99,
    category: 'Laptops',
    inStock: true,
    stockQuantity: 11,
    imageUrl: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6',
    specifications: {
      procesador: "AMD Ryzen 9 7940HS",
      graficos: "RTX 4070 8GB",
      refrigeracion: "Sistema vapor chamber",
      teclado: "Mecánico RGB per-key"
    },
    recommendedUses: ['Gaming AAA', 'Streaming', 'Multitarea'],
    features: ['Teclado mecánico RGB', 'Sistema de refrigeración vapor chamber', 'Pantalla de alta frecuencia'],
    rating: 4.8
  },
  {
    id: 'LT-103',
    name: 'UltraBook SlimX 14',
    description: 'Laptop ultradelgada con gran autonomía para profesionales móviles.',
    price: 1299.99,
    category: 'Laptops',
    inStock: true,
    stockQuantity: 22,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    specifications: {
      procesador: "Intel Core i7-1360P",
      graficos: "Intel Iris Xe",
      pantalla: {
        tamanio: "14''",
        resolucion: "1920x1200",
        brillo: "500 nits"
      },
      almacenamiento: "1TB NVMe Gen4",
      conectividad: ["WiFi 6", "USB-C"]
    },
    recommendedUses: ['Trabajo en movilidad', 'Productividad', 'Uso diario'],
    features: ['Ultraligera', 'Gran autonomía', 'Pantalla brillante', 'Conectividad completa'],
    rating: 4.7
  },
  {
    id: 'LT-104',
    name: 'WorkPro Elite Business 15',
    description: 'Laptop empresarial con características de seguridad avanzadas.',
    price: 999.99,
    category: 'Laptops',
    inStock: true,
    stockQuantity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33',
    specifications: {
      procesador: "AMD Ryzen 7 7735U",
      graficos: "AMD Radeon 680M",
      pantalla: {
        tamanio: "15.6''",
        resolucion: "1920x1080",
        antireflejo: true
      },
      almacenamiento: "512GB NVMe",
      seguridad: ["Lector de huellas", "TPM 2.0"]
    },
    recommendedUses: ['Uso empresarial', 'Videoconferencias', 'Ofimática avanzada'],
    features: ['Seguridad empresarial', 'Pantalla antirreflejo', 'Batería de larga duración', 'TPM 2.0'],
    rating: 4.5
  },
  {
    id: 'LT-105',
    name: 'GigaGamer Extreme G17',
    description: 'La laptop gaming más potente del mercado con refrigeración extrema.',
    price: 3999.99,
    category: 'Laptops',
    inStock: true,
    stockQuantity: 4,
    imageUrl: 'https://images.unsplash.com/photo-1605134513573-938a3cc69042',
    specifications: {
      procesador: "Intel Core i9-14900HX",
      graficos: "RTX 4090 16GB",
      pantalla: {
        tamanio: "17.3''",
        resolucion: "3840x2160",
        refresh_rate: "144Hz"
      },
      almacenamiento: "2TB NVMe Gen4",
      teclado: "Mecánico RGB"
    },
    recommendedUses: ['Gaming extremo', 'Desarrollo de videojuegos', 'Renderizado 3D'],
    features: ['GPU de gama alta', 'Pantalla 4K 144Hz', 'Sistema de refrigeración avanzado'],
    rating: 4.9
  },
  // Audio Products
  {
    id: 'AUD-401',
    name: 'SonicPro X900 Wireless',
    description: 'Auriculares over-ear premium con cancelación de ruido activa y larga autonomía.',
    price: 349.99,
    category: 'Audio',
    inStock: true,
    stockQuantity: 15,
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
    specifications: {
      tipo: "Over-ear",
      inalambrico: true,
      cancelacion_ruido: "ANC híbrido",
      autonomia: "60h",
      codecs: ["LDAC", "aptX HD"]
    },
    recommendedUses: ['Viajes largos', 'Trabajo en oficinas abiertas', 'Audiofilia'],
    features: ['Cancelación de ruido híbrida', 'Autonomía de 60 horas', 'Compatibilidad con códecs de alta resolución'],
    rating: 4.8
  },
  {
    id: 'AUD-402',
    name: 'BassMaster Pro',
    description: 'Altavoz portátil resistente al agua con graves potentes y larga duración de batería.',
    price: 199.99,
    category: 'Audio',
    inStock: true,
    stockQuantity: 23,
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1',
    specifications: {
      potencia: "200W RMS",
      resistencia: "IPX7",
      bateria: "24h reproducción"
    },
    recommendedUses: ['Fiestas', 'Exteriores', 'Playa y piscina'],
    features: ['Resistente al agua IPX7', 'Batería de 24 horas', 'Graves potentes', 'Bluetooth multipunto'],
    rating: 4.6
  },
  {
    id: 'AUD-403',
    name: 'HyperSound Elite Buds',
    description: 'Auriculares in-ear inalámbricos con cancelación de ruido activa y control táctil.',
    price: 149.99,
    category: 'Audio',
    inStock: true,
    stockQuantity: 32,
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
    specifications: {
      tipo: "In-ear",
      inalambrico: true,
      cancelacion_ruido: "ANC",
      autonomia: "30h",
      codecs: ["AAC", "SBC"]
    },
    recommendedUses: ['Deportes', 'Commuting', 'Llamadas telefónicas'],
    features: ['Cancelación de ruido activa', 'Resistencia al agua', 'Controles táctiles', 'Estuche de carga'],
    rating: 4.5
  },
  // Componentes PC
  {
    id: 'GPU-301',
    name: 'NVIDIA RTX 4090 Founders Edition',
    description: 'Tarjeta gráfica tope de gama con rendimiento excepcional para gaming y creación de contenido.',
    price: 1999.99,
    category: 'Componentes PC',
    inStock: true,
    stockQuantity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1591489392514-9d5733d6335a',
    specifications: {
      vram: "24GB GDDR6X",
      velocidad: "2.52 GHz boost",
      consumo: "450W",
      conectores: ["3x PCIe 8-pin"]
    },
    recommendedUses: ['Gaming 4K/8K', 'Renderizado 3D', 'Machine Learning'],
    features: ['Arquitectura Ada Lovelace', 'Ray Tracing de 3ra generación', 'DLSS 3', 'Tensor cores'],
    rating: 4.9
  },
  {
    id: 'CPU-201',
    name: 'AMD Ryzen 9 7950X',
    description: 'Procesador tope de gama con 16 núcleos para workstations y gaming de alto rendimiento.',
    price: 699.99,
    category: 'Componentes PC',
    inStock: true,
    stockQuantity: 15,
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea',
    specifications: {
      nucleos: 16,
      hilos: 32,
      frecuencia: "4.5GHz base / 5.7GHz boost"
    },
    recommendedUses: ['Workstation', 'Gaming de alto rendimiento', 'Compilación de código'],
    features: ['Arquitectura Zen 4', 'Soporte PCIe 5.0', 'Compatible con DDR5'],
    rating: 4.8
  },
  {
    id: 'MB-601',
    name: 'ASUS ROG Strix X670E-E',
    description: 'Placa base premium para procesadores AMD con características gaming avanzadas.',
    price: 449.99,
    category: 'Componentes PC',
    inStock: true,
    stockQuantity: 10,
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26',
    specifications: {
      socket: "AM5",
      chipset: "X670E",
      memoria_maxima: "128GB DDR5",
      puertos: ["PCIe 5.0", "USB-C 20Gbps"]
    },
    recommendedUses: ['Gaming de alto nivel', 'Overclocking', 'Sistemas con múltiples dispositivos'],
    features: ['Diseño de VRM robusto', 'Refrigeración avanzada', 'Iluminación Aura Sync', 'Audio SupremeFX'],
    rating: 4.7
  },
  // Monitores Gamer
  {
    id: 'MG-001',
    name: 'HyperVision UltraSpeed 27',
    description: 'Monitor gamer de 27 pulgadas con alta tasa de refresco y tiempo de respuesta ultrarrápido.',
    price: 499.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 10,
    imageUrl: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1',
    specifications: {
      tamaño: "27''",
      resolucion: "2560x1440",
      tasa_refresco: "240Hz",
      tiempo_respuesta: "1ms",
      panel: "IPS"
    },
    recommendedUses: ['Gaming competitivo', 'E-sports', 'Diseño gráfico'],
    features: ['Alta tasa de refresco de 240Hz', 'Tiempo de respuesta de 1ms', 'Resolución QHD', 'Panel IPS con colores vibrantes'],
    rating: 4.7
  },
  {
    id: 'MG-002',
    name: 'GamerElite Xtreme 32',
    description: 'Monitor de 32 pulgadas con resolución 4K y excelente calidad de imagen para gaming inmersivo.',
    price: 699.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 8,
    imageUrl: 'https://images.unsplash.com/photo-1595328651889-29b023f14263',
    specifications: {
      tamaño: "32''",
      resolucion: "3840x2160",
      tasa_refresco: "144Hz",
      tiempo_respuesta: "1ms",
      panel: "VA"
    },
    recommendedUses: ['Gaming 4K', 'Edición de video', 'Diseño gráfico profesional'],
    features: ['Resolución 4K UHD', 'Panel VA con alto contraste', 'Tasa de refresco 144Hz', 'Compatible con HDR'],
    rating: 4.6
  },
  {
    id: 'MG-003',
    name: 'VisionTech ProGamer 24',
    description: 'Monitor económico de 24 pulgadas con tiempo de respuesta ultrarrápido ideal para gaming competitivo.',
    price: 249.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 15,
    imageUrl: 'https://images.unsplash.com/photo-1619953942547-233eab5a70d4',
    specifications: {
      tamaño: "24''",
      resolucion: "1920x1080",
      tasa_refresco: "165Hz",
      tiempo_respuesta: "0.5ms",
      panel: "TN"
    },
    recommendedUses: ['E-sports', 'FPS competitivo', 'Gaming de alta velocidad'],
    features: ['Tiempo de respuesta ultrarápido de 0.5ms', 'Panel TN de alta velocidad', 'Tasa de refresco 165Hz', 'Perfecto para juegos competitivos'],
    rating: 4.5
  },
  {
    id: 'MG-004',
    name: 'XtremeView CurvaMaster 34',
    description: 'Monitor curvo ultrawide de 34 pulgadas para una experiencia gaming inmersiva.',
    price: 899.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1623934199716-dc28818a6ec7',
    specifications: {
      tamaño: "34''",
      resolucion: "3440x1440",
      tasa_refresco: "175Hz",
      tiempo_respuesta: "1ms",
      panel: "IPS Curvo"
    },
    recommendedUses: ['Gaming inmersivo', 'Simuladores', 'Productividad multitarea'],
    features: ['Pantalla curva ultrawide', 'Formato 21:9', 'Panel IPS con excelente reproducción del color', 'Compatible con G-Sync y FreeSync'],
    rating: 4.8
  },
  {
    id: 'MG-005',
    name: 'NeonPixel FastPlay 27',
    description: 'Monitor gaming de 27 pulgadas con excelente relación calidad-precio y buena tasa de refresco.',
    price: 429.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 12,
    imageUrl: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d',
    specifications: {
      tamaño: "27''",
      resolucion: "2560x1440",
      tasa_refresco: "165Hz",
      tiempo_respuesta: "1ms",
      panel: "IPS"
    },
    recommendedUses: ['Gaming casual', 'Uso diario', 'Multimedia'],
    features: ['Resolución QHD', 'Panel IPS con colores precisos', 'Tasa de refresco 165Hz', 'Iluminación ambiental RGB'],
    rating: 4.6
  },
  {
    id: 'MG-006',
    name: 'UltraGear Elite32 4K',
    description: 'Monitor 4K de alta gama con 32 pulgadas y excelente calidad de imagen para gaming premium.',
    price: 799.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 7,
    imageUrl: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa',
    specifications: {
      tamaño: "32''",
      resolucion: "3840x2160",
      tasa_refresco: "144Hz",
      tiempo_respuesta: "1ms",
      panel: "IPS"
    },
    recommendedUses: ['Gaming 4K', 'Edición profesional', 'Visualización de contenido HDR'],
    features: ['Panel IPS 4K', 'HDR 1000', 'Cobertura 98% DCI-P3', 'Calibración de fábrica'],
    rating: 4.9
  },
  {
    id: 'MG-007',
    name: 'DarkVision Stealth 24',
    description: 'Monitor compacto de 24 pulgadas con altísima tasa de refresco para gaming competitivo profesional.',
    price: 279.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 14,
    imageUrl: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2',
    specifications: {
      tamaño: "24''",
      resolucion: "1920x1080",
      tasa_refresco: "240Hz",
      tiempo_respuesta: "0.5ms",
      panel: "TN"
    },
    recommendedUses: ['E-sports profesional', 'FPS competitivo', 'Gaming de alta velocidad'],
    features: ['240Hz para máxima fluidez', 'Tiempo de respuesta mínimo', 'Diseño sin marcos', 'Soporte ajustable en altura'],
    rating: 4.5
  },
  {
    id: 'MG-008',
    name: 'OpticView ProUltra 29',
    description: 'Monitor ultrawide de 29 pulgadas con formato 21:9 y alta tasa de refresco.',
    price: 499.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 9,
    imageUrl: 'https://images.unsplash.com/photo-1616788867657-97b23197f50f',
    specifications: {
      tamaño: "29''",
      resolucion: "2560x1080",
      tasa_refresco: "200Hz",
      tiempo_respuesta: "1ms",
      panel: "IPS"
    },
    recommendedUses: ['Multitarea', 'Gaming panorámico', 'Productividad'],
    features: ['Formato ultrawide 21:9', 'Alta tasa de refresco de 200Hz', 'Panel IPS con buena reproducción cromática', 'Diseño sin marcos'],
    rating: 4.6
  },
  {
    id: 'MG-009',
    name: 'GigaScreen HyperWide 49',
    description: 'Monitor superultrawide curvo de 49 pulgadas para una experiencia de inmersión total.',
    price: 1299.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 3,
    imageUrl: 'https://images.unsplash.com/photo-1547119957-637f8679db1e',
    specifications: {
      tamaño: "49''",
      resolucion: "5120x1440",
      tasa_refresco: "120Hz",
      tiempo_respuesta: "2ms",
      panel: "VA Curvo"
    },
    recommendedUses: ['Simuladores', 'Productividad profesional', 'Gaming inmersivo'],
    features: ['Pantalla super ultrawide equivalente a dos monitores 27" QHD', 'Curvatura 1800R', 'Picture-by-picture', 'KVM integrado'],
    rating: 4.7
  },
  {
    id: 'MG-010',
    name: 'NeonTech Vision360 27',
    description: 'Monitor gaming premium de 27 pulgadas con máxima tasa de refresco para gamers profesionales.',
    price: 999.99,
    category: 'Monitores Gamer',
    inStock: true,
    stockQuantity: 6,
    imageUrl: 'https://images.unsplash.com/photo-1603481546238-487240415921',
    specifications: {
      tamaño: "27''",
      resolucion: "2560x1440",
      tasa_refresco: "360Hz",
      tiempo_respuesta: "0.5ms",
      panel: "IPS"
    },
    recommendedUses: ['E-sports profesional', 'Competiciones de gaming', 'Streaming'],
    features: ['Tasa de refresco extrema de 360Hz', 'QHD con tiempo de respuesta mínimo', 'Tecnología de sincronización adaptativa', 'RGB personalizable'],
    rating: 4.9
  },
  // Smartphones
  {
    id: 'SPH-001',
    name: 'QuantumMobile Nexus Pro 5G',
    description: 'Smartphone flagship con hardware de última generación y excelentes capacidades fotográficas.',
    price: 1099.99,
    category: 'Smartphones',
    inStock: true,
    stockQuantity: 23,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02ff9',
    specifications: {
      hardware: {
        procesador: {
          modelo: "Snapdragon 8 Gen 3",
          nucleos: 8,
          velocidad_max: "3.3 GHz"
        },
        memoria: {
          ram: "12GB LPDDR5X",
          almacenamiento: "256GB UFS 4.0",
          expansion: false
        }
      },
      pantalla: {
        tipo: "Dynamic AMOLED 2X",
        tamanio: "6.8''",
        resolucion: "1440x3088",
        refresh_rate: "120Hz",
        proteccion: "Gorilla Glass Victus 3"
      },
      bateria: {
        capacidad: "5000mAh",
        carga_rapida: "100W",
        inalambrica: true
      }
    },
    recommendedUses: ['Fotografía móvil profesional', 'Gaming móvil', 'Multitarea intensa'],
    features: ['Cámara de 200MP con estabilización avanzada', 'Pantalla AMOLED 120Hz', 'Carga ultrarrápida de 100W', 'Conectividad 5G'],
    rating: 4.9
  },
  {
    id: 'SPH-002',
    name: 'PhotoMaster CamPro X',
    description: 'Smartphone centrado en fotografía con sensor principal de 1 pulgada y zoom óptico 10x.',
    price: 899.99,
    category: 'Smartphones',
    inStock: true,
    stockQuantity: 17,
    imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd',
    specifications: {
      hardware: {
        procesador: "Dimensity 9200+",
        memoria: {
          ram: "16GB",
          almacenamiento: "512GB"
        }
      },
      camara: {
        principal: "1'' Sony IMX989",
        zoom: "10x óptico",
        video: "8K@30fps"
      },
      bateria: "5500mAh con carga 120W"
    },
    recommendedUses: ['Fotografía móvil profesional', 'Videografía', 'Streaming'],
    features: ['Sensor de 1 pulgada', 'Zoom óptico 10x', 'Batería de alta capacidad', 'Carga ultrarrápida'],
    rating: 4.8
  },
  {
    id: 'SPH-003',
    name: 'NeoTech Ultra 7',
    description: 'Smartphone de gama media-alta con excelente relación calidad-precio y rendimiento.',
    price: 699.99,
    category: 'Smartphones',
    inStock: true,
    stockQuantity: 35,
    imageUrl: 'https://images.unsplash.com/photo-1612442443556-09b5b309e637',
    specifications: {
      hardware: {
        procesador: "Exynos 2400",
        memoria: {
          ram: "8GB",
          almacenamiento: "128GB"
        }
      },
      bateria: "4800mAh carga 65W"
    },
    recommendedUses: ['Uso diario', 'Multimedia', 'Gaming casual'],
    features: ['Excelente rendimiento', 'Carga rápida', 'Diseño premium', 'Actualizaciones garantizadas'],
    rating: 4.6
  },
  {
    id: 'SPH-004',
    name: 'HyperPhone Max Power 5G',
    description: 'Smartphone con gran potencia y batería de larga duración para usuarios intensivos.',
    price: 799.99,
    category: 'Smartphones',
    inStock: true,
    stockQuantity: 11,
    imageUrl: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f',
    specifications: {
      hardware: {
        procesador: "Snapdragon 8 Gen 2",
        memoria: {
          ram: "12GB",
          almacenamiento: "256GB"
        }
      },
      bateria: "5000mAh carga 80W"
    },
    recommendedUses: ['Gaming móvil', 'Multitarea', 'Productividad'],
    features: ['Gran autonomía', 'Refrigeración avanzada', 'Pantalla de alta frecuencia', 'Audio estéreo potente'],
    rating: 4.7
  },
  {
    id: 'SPH-005',
    name: 'NextGen Prime X',
    description: 'Smartphone premium con procesador de última generación y experiencia de usuario fluida.',
    price: 1199.99,
    category: 'Smartphones',
    inStock: true,
    stockQuantity: 8,
    imageUrl: 'https://images.unsplash.com/photo-1591447337751-c7b95cf704be',
    specifications: {
      hardware: {
        procesador: "Apple A17 Bionic",
        memoria: {
          ram: "8GB",
          almacenamiento: "512GB"
        }
      },
      bateria: "4500mAh carga 30W"
    },
    recommendedUses: ['Productividad', 'Creación de contenido', 'Uso empresarial'],
    features: ['Rendimiento de CPU y GPU líderes', 'Sistema operativo optimizado', 'Ecosistema integrado', 'Soporte a largo plazo'],
    rating: 4.9
  },
  {
    id: 'SPH-006',
    name: 'SmartTech Infinity Z',
    description: 'Smartphone asequible con buena relación calidad-precio y batería de larga duración.',
    price: 349.99,
    category: 'Smartphones',
    inStock: true,
    stockQuantity: 45,
    imageUrl: 'https://images.unsplash.com/photo-1581993192008-63e896f4f744',
    specifications: {
      hardware: {
        procesador: "MediaTek Helio G99",
        memoria: {
          ram: "6GB",
          almacenamiento: "128GB"
        }
      },
      bateria: "5000mAh carga 33W"
    },
    recommendedUses: ['Uso diario', 'Estudiantes', 'Presupuesto ajustado'],
    features: ['Batería de larga duración', 'Buen rendimiento para su precio', 'Almacenamiento ampliable', 'Diseño moderno'],
    rating: 4.4
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

export const botResponses = {
  greeting: "¡Hola! Bienvenido a Makers Tech. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros productos, estado del inventario o cualquier pregunta técnica específica.",
  
  notFound: "No encontré productos que coincidan con tus criterios. ¿Te gustaría intentar otra búsqueda?",
  
  productFound: (count: number) => `Encontré ${count} productos que podrían interesarte. Aquí están:`,
  
  productDetail: (product: Product) => `
    ${product.name} está ${product.inStock ? 'actualmente en stock' : 'actualmente fuera de stock'}. 
    ${product.stockQuantity > 0 ? `Tenemos ${product.stockQuantity} unidades disponibles.` : ''}
    
    El precio es $${product.price.toFixed(2)}${product.discountedPrice ? ` (En oferta: $${product.discountedPrice.toFixed(2)})` : ''}.
    
    Características principales: ${product.features.join(', ')}.
  `,
  
  askMore: "¿Te gustaría saber más sobre algún producto específico? ¿O quieres refinar tu búsqueda?",
  
  priceInfo: (product: Product) => `
    El ${product.name} tiene un precio de $${product.price.toFixed(2)}.
    ${product.discountedPrice ? `Actualmente está en oferta por $${product.discountedPrice.toFixed(2)}, ¡ahorrando $${(product.price - product.discountedPrice).toFixed(2)}!` : ''}
  `,
  
  inventoryStatus: (product: Product) => `
    El ${product.name} está ${product.inStock ? 'en stock' : 'actualmente fuera de stock'}.
    ${product.stockQuantity > 0 ? `Tenemos ${product.stockQuantity} unidades disponibles para envío inmediato.` : 'Esperamos reabastecerlo pronto.'}
  `,
  
  specifications: (product: Product) => {
    let specText = `Aquí están las especificaciones para ${product.name}:\n`;
    for (const [key, value] of Object.entries(product.specifications)) {
      if (typeof value === 'object' && value !== null) {
        specText += `- ${key.charAt(0).toUpperCase() + key.slice(1)}:\n`;
        for (const [subKey, subValue] of Object.entries(value)) {
          specText += `  * ${subKey}: ${subValue}\n`;
        }
      } else {
        specText += `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
      }
    }
    return specText;
  },
  
  recommendedUses: (product: Product) => `
    El ${product.name} es recomendado para: ${product.recommendedUses.join(', ')}.
  `,
  
  compareProducts: (product1: Product, product2: Product) => `
    Comparando ${product1.name} vs ${product2.name}:
    
    Precio: $${product1.price.toFixed(2)} vs $${product2.price.toFixed(2)}
    
    Principales diferencias:
    - Categoría: ${product1.category} vs ${product2.category}
    - ${product1.name} ${product1.inStock ? 'está en stock' : 'está fuera de stock'} y ${product2.name} ${product2.inStock ? 'está en stock' : 'está fuera de stock'}
  `,
  
  fallback: "No estoy seguro de entender tu pregunta. ¿Podrías reformularla? Puedes preguntar sobre detalles del producto, precios, inventario o especificaciones."
};
