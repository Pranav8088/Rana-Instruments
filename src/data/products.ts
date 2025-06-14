import type { Product, ProductCategory, ProductData } from '@/lib/types';

const products: Product[] = [
  // Bore Gauges
  {
    id: 'rbg-150',
    name: 'Right Angle Bore Gauge 50-150mm',
    category: 'Bore Gauges',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'bore gauge',
    shortDescription: 'Measures internal bores in hard-to-reach areas.',
    longDescription: 'A Right-Angle Bore Gauge is a precision instrument designed for measuring internal bores in hard-to-reach areas, such as valve bodies and deep cavities. Commonly Used In Automotive, Oil & Gas, And Machining Industries, It Helps Maintain Tight Tolerances In Critical Components.',
    modelVariants: [
      { modelNo: 'RBG-150', measuringRange: '50-150 mm', repeatability: '±2 µm', depthReach: '200 mm', contactPoints: 'carbide', accuracy: '±8 µm' },
    ],
    productPortfolioText: 'Right Angle Bore Gauge for 50-150mm measurements, carbide contact points, ±8µm accuracy.'
  },
  {
    id: 'rbg-300',
    name: 'Right Angle Bore Gauge 150-300mm',
    category: 'Bore Gauges',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'precision tool',
    shortDescription: 'Precision measurement for larger internal bores in confined spaces.',
    longDescription: 'A Right-Angle Bore Gauge for larger diameters, maintaining precision in hard-to-reach areas. Ideal for automotive, oil & gas, and machining industries requiring tight tolerances.',
    modelVariants: [
      { modelNo: 'RBG-300', measuringRange: '150-300 mm', repeatability: '±2 µm', depthReach: '400 mm', contactPoints: 'carbide', accuracy: '±10 µm' },
    ],
    productPortfolioText: 'Right Angle Bore Gauge for 150-300mm measurements, carbide contact points, ±10µm accuracy.'
  },
  {
    id: 'special-90-bore-gauge',
    name: 'Special 90° Bore Gauge',
    category: 'Bore Gauges',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'angle gauge',
    shortDescription: 'Inspects larger diameters through smaller access points.',
    longDescription: 'Our precision gauge is designed to inspect larger diameters by passing through smaller diameters, ensuring accurate measurements in challenging conditions. We provide repeatability 0.002mm (±2 µm).',
    specifications: { Repeatability: '0.002mm (±2 µm)' },
    productPortfolioText: 'Special 90 degree bore gauge, inspects large diameters via small access, 0.002mm repeatability.'
  },
  {
    id: 'flat-bore-gauge-fbg-150',
    name: 'Flat Bore Gauge FBG-150',
    category: 'Bore Gauges',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'flat gauge',
    shortDescription: 'Measures flat-bottomed bores with 3.5mm face-to-contact point distance.',
    longDescription: 'The Flat Bore Gauge Is Designed with A Face-To-Contact Point Center Distance Of 3.5mm. This Gauge Is Suitable For Measuring Flat-Botomed Bores In Various Industrial Components, Including Valve Bodies And Machined Parts.',
    modelVariants: [
      { modelNo: 'FBG-150', measuringRange: '50-150 mm', repeatability: '±2 µm', depthReach: 'custom', contactPoints: 'carbide', accuracy: '±8-10 µm' },
    ],
    productPortfolioText: 'Flat Bore Gauge FBG-150, for 50-150mm flat-bottomed bores, carbide points, custom depth, ±8-10µm accuracy.'
  },

  // Groove Checking Gauges
  {
    id: 'c-type-groove-gauge',
    name: 'C-type Groove Checking Gauge',
    category: 'Groove Checking Gauges',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'groove tool',
    shortDescription: 'Simplifies ID groove inspection with enhanced accuracy.',
    longDescription: 'Identify The Difficulty In Checking The Id Groove With The Bosch , Then Design And Develop A New C-Type Id Checking Gauge To Make The Inspection Easier And More Accurate.',
    features: ['Easier and more accurate ID groove inspection', 'Custom designed solution'],
    productPortfolioText: 'C-Type ID Groove Checking Gauge, designed for easier and more accurate inspection of internal diameter grooves.'
  },
  {
    id: 'groove-diameter-gauge',
    name: 'Groove Diameter Checking Gauge',
    category: 'Groove Checking Gauges',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'diameter check',
    shortDescription: 'Precisely checks job grooves with a compact, durable design.',
    longDescription: 'Precisely checks the grooves of your jobs with a compact, durable design for easy handling. Custom-made groove checking sticks using high-quality materials for long-lasting performance.',
    customizationOptions: 'Gauge sticks or fitting balls developed as per your provided drawings, offering complete flexibility to meet your specific needs.',
    productPortfolioText: 'Groove Diameter Checking Gauge, compact and durable design, custom-made sticks/balls available.'
  },

  // Verniers
  {
    id: 'ball-fitment-verniers',
    name: 'Ball Fitment Verniers',
    category: 'Verniers',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'vernier caliper',
    shortDescription: 'Custom verniers with ball fitments for specialized measurements.',
    longDescription: 'Specialized verniers featuring ball fitments for precise measurements in unique applications. Tailored to specific requirements for enhanced accuracy.',
    customizationOptions: 'Available with various ball sizes and vernier configurations.',
    productPortfolioText: 'Ball Fitment Verniers, custom designed with ball attachments for specialized measurements.'
  },
  {
    id: 'custom-digital-verniers',
    name: 'Custom Digital Verniers',
    category: 'Verniers',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'digital caliper',
    shortDescription: 'Tailored digital verniers for high-precision needs.',
    longDescription: 'We specialize in custom designed Digital Verniers tailored to your specific requirements, ensuring precise digital measurements for enhanced accuracy and efficiency. Offering modifications in size, scale, or special features with high quality solutions to meet your unique needs.',
    customizationOptions: 'Modifications in size, scale, special features.',
    productPortfolioText: 'Custom Digital Verniers, tailored for specific digital measurement requirements, high precision.'
  },

  // Probes
  {
    id: 'precision-ball-probes',
    name: 'Precision Ball Probes',
    category: 'Probes',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'measuring probe',
    shortDescription: 'Carbide ball probes in 2mm, 3mm, and 6mm sizes.',
    longDescription: 'Rana Instrument offers precision ball probes with 2mm, 3mm, and 6mm Carbide balls, designed for accurate measurements in various applications.',
    features: ['Available in 2mm, 3mm, 6mm carbide balls', 'High accuracy'],
    productPortfolioText: 'Precision Ball Probes, available with 2mm, 3mm, and 6mm carbide balls for various applications.'
  },
  {
    id: 'carbide-ball-probe-20mm',
    name: 'Tungsten Carbide Ball Probe 20mm',
    category: 'Probes',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'large probe',
    shortDescription: '20mm tungsten carbide ball probe with 0.004mm tolerance.',
    longDescription: 'This tungsten carbide ball (20mm) maintains a height and runout tolerance of just 0.004 mm.',
    specifications: { Tolerance: '0.004 mm (height and runout)' },
    productPortfolioText: 'Tungsten Carbide Ball Probe 20mm, maintains height and runout tolerance of 0.004mm.'
  },
  
  // Custom Instruments
  {
    id: 'pcd-checking-gauge',
    name: 'PCD Checking Gauge',
    category: 'Custom Instruments',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'checking fixture',
    shortDescription: 'Precision gauge for checking Pitch Circle Diameter (PCD).',
    longDescription: 'A custom-designed gauge for accurately checking the Pitch Circle Diameter (PCD) of components, crucial for ensuring proper fitment and alignment in assemblies.',
    productPortfolioText: 'PCD Checking Gauge, for accurately verifying Pitch Circle Diameter.'
  },
  {
    id: 'valve-hole-gauge',
    name: 'Valve Hole Position Checking Gauge',
    category: 'Custom Instruments',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'hole alignment',
    shortDescription: 'Ensures precise valve hole positioning in wheel rims.',
    longDescription: 'Ensuring Precise Valve Hole Positioning Is Crucial For Wheel Performance And Safety. Such Gauges Are Essential In Verifying The Accurate Placement Of Valve Holes In Wheel Rims. Proper Alignment Ensures Optimal Tire Pressure Maintenance And Compatibility With Standard Valve Systems.',
    productPortfolioText: 'Valve Hole Position Checking Gauge, verifies accurate placement of valve holes in wheel rims.'
  },
];

const productPortfolioText = products.map(p => p.productPortfolioText || p.name).join('\n');

const productData: ProductData = {
  products,
  productPortfolioText,
};

export default productData;

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(p => p.category === category);
};

export const getAllCategories = (): ProductCategory[] => {
  const categories = new Set(products.map(p => p.category as ProductCategory));
  return Array.from(categories);
};
