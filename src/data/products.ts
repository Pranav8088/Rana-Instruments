
import type { Product, ProductCategory, ProductData } from '@/lib/types';

const products: Product[] = [
  // =======================================================================
  // BORE GAUGES
  // =======================================================================
  {
    id: 'right-angle-bore-gauge-50-150',
    name: 'Right Angle Bore Gauge 50-150mm',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/rbg150/600/400',
    aiHint: 'bore gauge',
    shortDescription: 'Measures internal bores in hard-to-reach areas.',
    longDescription: 'A Right-Angle Bore Gauge is a precision instrument designed for measuring internal bores in hard-to-reach areas, such as valve bodies and deep cavities. Commonly used in automotive, oil & gas, and machining industries, it helps maintain tight tolerances in critical components.',
    modelVariants: [
      { modelNo: 'RBG-150', measuringRange: '50-150 mm', repeatability: '±2 µm', depthReach: '200 mm', contactPoints: 'carbide', accuracy: '±8 µm' },
    ],
  },
  {
    id: 'right-angle-bore-gauge-150-300',
    name: 'Right Angle Bore Gauge 150-300mm',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/rbg300/600/400',
    aiHint: 'precision tool',
    shortDescription: 'Precision measurement for larger internal bores in confined spaces.',
    longDescription: 'A Right-Angle Bore Gauge for larger diameters, maintaining precision in hard-to-reach areas. Ideal for automotive, oil & gas, and machining industries requiring tight tolerances.',
    modelVariants: [
      { modelNo: 'RBG-300', measuringRange: '150-300 mm', repeatability: '±2 µm', depthReach: '400 mm', contactPoints: 'carbide', accuracy: '±10 µm' },
    ],
  },
  {
    id: 'special-90-bore-gauge',
    name: 'Special 90° Bore Gauge',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/sbg90/600/400',
    aiHint: 'angle gauge',
    shortDescription: 'Inspects larger diameters through smaller access points.',
    longDescription: 'Our precision gauge is designed to inspect larger diameters by passing through smaller diameters, ensuring accurate measurements in challenging conditions. We provide repeatability of 0.002mm (±2 µm).',
    specifications: { Repeatability: '0.002mm (±2 µm)' },
  },
  {
    id: 'special-180-bore-gauge',
    name: 'Special 180° Bore Gauge',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/sbg180/600/400',
    aiHint: 'special gauge',
    shortDescription: 'Inspects internal features straight-on in confined spaces.',
    longDescription: 'Our precision 180° gauge is designed to inspect larger diameters by passing through smaller diameters, ensuring accurate measurements in challenging conditions. We provide repeatability of 0.002mm (±2 µm).',
    specifications: { Repeatability: '0.002mm (±2 µm)' },
  },
  {
    id: 'flat-bore-gauge',
    name: 'Flat Bore Gauge',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/fbg/600/400',
    aiHint: 'flat gauge',
    shortDescription: 'Measures flat-bottomed bores with high precision.',
    longDescription: 'The Flat Bore Gauge is designed with a face-to-contact point center distance of 3.5mm. This gauge is suitable for measuring flat-bottomed bores in various industrial components, including valve bodies and machined parts.',
    modelVariants: [
      { modelNo: 'FBG-150', measuringRange: '50-150 mm', repeatability: '±2 µm', depthReach: 'custom', contactPoints: 'carbide', accuracy: '±8-10 µm' },
      { modelNo: 'FBG-300', measuringRange: '150-300 mm', repeatability: '±2 µm', depthReach: 'custom', contactPoints: 'carbide', accuracy: '±8-10 µm' },
      { modelNo: 'FBG-600', measuringRange: '400-600 mm', repeatability: '±2 µm', depthReach: 'custom', contactPoints: 'carbide', accuracy: '±8-10 µm' },
      { modelNo: 'FBG-1000', measuringRange: '800-1000 mm', repeatability: '±2 µm', depthReach: 'custom', contactPoints: 'carbide', accuracy: '±8-10 µm' },
    ],
  },
  {
    id: 'bore-gauge-max-depth',
    name: 'Bore Gauge with Maximum Depth',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/bgd/600/400',
    aiHint: 'deep gauge',
    shortDescription: 'Designed for measuring bores at extended depths up to 2000mm.',
    longDescription: 'This series of bore gauges is engineered for measuring deep bores, offering a consistent depth reach of 2000mm across various diameter ranges while maintaining high accuracy and repeatability.',
    modelVariants: [
      { modelNo: 'LBG-150', measuringRange: '50-150 mm', repeatability: '±2 µm', depthReach: '2000 mm', contactPoints: 'carbide', accuracy: '±8-10 µm' },
      { modelNo: 'LBG-300', measuringRange: '150-300 mm', repeatability: '±2 µm', depthReach: '2000 mm', contactPoints: 'carbide', accuracy: '±8-10 µm' },
      { modelNo: 'LBG-600', measuringRange: '400-600 mm', repeatability: '±2 µm', depthReach: '2000 mm', contactPoints: 'carbide', accuracy: '±8-10 µm' },
      { modelNo: 'LBG-1000', measuringRange: '800-1000 mm', repeatability: '±2 µm', depthReach: '2000 mm', contactPoints: 'carbide', accuracy: '±8-10 µm' },
    ]
  },
  {
    id: 'pitch-checking-bore-gauge',
    name: 'Pitch Checking Bore Gauge',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/pcbg/600/400',
    aiHint: 'pitch gauge',
    shortDescription: 'Customizable bore gauge for checking pitch dimensions.',
    longDescription: 'We provide this bore gauge in various sizes for checking pitch. The ball size and other parameters can be customized as per your requirements.',
    modelVariants: [
      { modelNo: 'PBG-150', measuringRange: 'custom', repeatability: '±2 µm', depthReach: 'custom', contactPoints: 'carbide', accuracy: '±8 µm' },
      { modelNo: 'PBG-300', measuringRange: 'custom', repeatability: '±2 µm', depthReach: 'custom', contactPoints: 'carbide', accuracy: '±8 µm' },
    ]
  },
  {
    id: 'bore-gauge-800-1000',
    name: 'Bore Gauge 800-1000mm',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/bg1000/600/400',
    aiHint: 'large bore gauge',
    shortDescription: 'Precision instrument for inspecting large-diameter bores.',
    longDescription: 'The Bore Gauge (800-1000mm) is a precision instrument for inspecting large-diameter bores with ±2µm repeatability. It features customizable contact point size and depth, ensuring high accuracy in industrial applications.',
    specifications: { Range: '800-1000mm', Repeatability: '±2 µm' },
    customizationOptions: 'Contact point size and depth are customizable.'
  },
  {
    id: 'bore-gauge-300-900',
    name: 'Bore Gauge 300-900mm',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/bg900/600/400',
    aiHint: 'industrial gauge',
    shortDescription: 'For inspecting ovality, taper, and geometry variations in large bores.',
    longDescription: 'We specialize in precision-engineered bore gauges (300mm - 900mm) with carbide-tipped contact points for durability and ±2µm repeatability. Designed for stability and efficiency, our gauges detect ovality, taper, and geometry variations, ensuring reliable measurements in automotive, aerospace, and heavy machinery industries.',
    specifications: { Range: '300-900mm', Repeatability: '±2 µm', 'Contact Points': 'Carbide-tipped' },
  },
  {
    id: 'lever-type-bore-gauge',
    name: 'Lever Type Bore Gauge',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/ltbg/600/400',
    aiHint: 'lever gauge',
    shortDescription: 'Features a lever mechanism for high sensitivity in challenging applications.',
    longDescription: 'The Lever-Type Bore Gauge is a precision instrument designed for accurate internal diameter measurement in challenging applications. Featuring a lever mechanism for high sensitivity, it ensures reliable readings with ease of use.',
  },
  {
    id: 'two-point-bore-gauge',
    name: 'Two Point Bore Gauge',
    category: 'Bore Gauges',
    image: 'https://picsum.photos/seed/tpbg/600/400',
    aiHint: 'two point gauge',
    shortDescription: 'Specialized two-point contact system for specific geometric measurements.',
    longDescription: 'A special type of bore gauge that uses a two-point contact system, ideal for measuring ovality or for applications where a three-point system is not suitable. Developed according to customer requirements.',
    customizationOptions: 'Fully customizable based on customer drawings and specifications.'
  },

  // =======================================================================
  // GROOVE CHECKING GAUGES
  // =======================================================================
  {
    id: 'c-type-groove-gauge',
    name: 'C-Type Groove Checking Gauge',
    category: 'Groove Checking Gauges',
    image: 'https://picsum.photos/seed/ctgg/600/400',
    aiHint: 'groove tool',
    shortDescription: 'Simplifies ID groove inspection with enhanced accuracy.',
    longDescription: 'Developed to solve the difficulty in checking ID grooves, this C-Type ID Checking Gauge makes the inspection process easier and more accurate.',
    features: ['Easier and more accurate ID groove inspection', 'Custom designed solution'],
  },
  {
    id: 'groove-diameter-gauge',
    name: 'Groove Diameter Checking Gauge',
    category: 'Groove Checking Gauges',
    image: 'https://picsum.photos/seed/gdg/600/400',
    aiHint: 'diameter check',
    shortDescription: 'Precisely checks job grooves with a compact, durable design.',
    longDescription: 'Precisely checks the grooves of your jobs with a compact, durable design for easy handling. Custom-made groove checking sticks using high-quality materials for long-lasting performance.',
    customizationOptions: 'Gauge sticks or fitting balls can be developed as per your provided drawings, offering complete flexibility to meet your specific needs.',
  },
  {
    id: 'id-checking-gauge',
    name: 'ID Checking Gauge',
    category: 'Groove Checking Gauges',
    image: 'https://picsum.photos/seed/idg/600/400',
    aiHint: 'internal gauge',
    shortDescription: 'Custom gauge for internal diameter verification.',
    longDescription: 'A specialized gauge for checking internal diameters (ID) of various components, ensuring they meet specification. Custom built for specific applications.',
  },
  {
    id: 'small-groove-checking-gauge',
    name: 'Small Groove Checking Gauge',
    category: 'Groove Checking Gauges',
    image: 'https://picsum.photos/seed/sgcg/600/400',
    aiHint: 'small gauge',
    shortDescription: 'For precise measurement of small grooves in complex components.',
    longDescription: 'The Small Groove Checking Gauge is designed for precise measurement in critical conditions where accuracy is essential. It ensures reliable inspection of small grooves in complex components, providing ease of use and consistent results.',
  },
  {
    id: 'groove-width-checking-gauge',
    name: 'Groove Width Checking Gauge',
    category: 'Groove Checking Gauges',
    image: 'https://picsum.photos/seed/gwcg/600/400',
    aiHint: 'width gauge',
    shortDescription: 'Measures the width of internal or external grooves.',
    longDescription: 'A gauge specifically designed to measure the width of grooves, ensuring they are within tolerance for retaining rings, O-rings, or other components.',
  },

  // =======================================================================
  // VERNIERS
  // =======================================================================
  {
    id: 'groove-checking-ball-verniers',
    name: 'Groove Checking Ball Verniers',
    category: 'Verniers',
    image: 'https://picsum.photos/seed/gcbv/600/400',
    aiHint: 'ball vernier',
    shortDescription: 'Vernier caliper with special ball attachments for groove measurement.',
    longDescription: 'A specialized vernier caliper equipped with ball attachments on the jaws, designed specifically for accurately measuring the diameter or width of internal and external grooves.',
  },
  {
    id: 'ball-fitment-verniers',
    name: 'Ball Fitment Verniers',
    category: 'Verniers',
    image: 'https://picsum.photos/seed/bfv/600/400',
    aiHint: 'vernier caliper',
    shortDescription: 'Custom verniers with ball fitments for specialized measurements.',
    longDescription: 'Specialized verniers featuring ball fitments for precise measurements in unique applications. Tailored to specific requirements for enhanced accuracy.',
    customizationOptions: 'Available with various ball sizes and vernier configurations.',
  },
  {
    id: 'extra-long-jaw-vernier',
    name: 'Extra Long Jaw Vernier',
    category: 'Verniers',
    image: 'https://picsum.photos/seed/eljv/600/400',
    aiHint: 'long caliper',
    shortDescription: 'Vernier with extended jaws to measure hard-to-reach features.',
    longDescription: 'A custom vernier caliper featuring extra-long jaws, designed to measure dimensions that are difficult to access with standard calipers.',
  },
  {
    id: 'custom-digital-verniers',
    name: 'Custom Digital Verniers',
    category: 'Verniers',
    image: 'https://picsum.photos/seed/cdv/600/400',
    aiHint: 'digital caliper',
    shortDescription: 'Tailored digital verniers for high-precision needs.',
    longDescription: 'We specialize in custom designed Digital Verniers tailored to your specific requirements, ensuring precise digital measurements for enhanced accuracy and efficiency. Offering modifications in size, scale, or special features with high quality solutions to meet your unique needs.',
    customizationOptions: 'Modifications in size, scale, or special features available.',
  },

  // =======================================================================
  // PROBES
  // =======================================================================
  {
    id: 'precision-ball-probes',
    name: 'Precision Ball Probes',
    category: 'Probes',
    image: 'https://picsum.photos/seed/pbp/600/400',
    aiHint: 'measuring probe',
    shortDescription: 'Carbide ball probes in 2mm, 3mm, and 6mm sizes.',
    longDescription: 'Rana Instrument offers precision ball probes with 2mm, 3mm, and 6mm Carbide balls, designed for accurate measurements in various applications.',
    features: ['Available in 2mm, 3mm, and 6mm carbide balls', 'High accuracy and durability'],
  },
  {
    id: 'carbide-ball-probe-20mm',
    name: 'Tungsten Carbide Ball Probe 20mm',
    category: 'Probes',
    image: 'https://picsum.photos/seed/tcbp20/600/400',
    aiHint: 'large probe',
    shortDescription: '20mm tungsten carbide ball probe with 0.004mm tolerance.',
    longDescription: 'This tungsten carbide ball probe (20mm) maintains a height and runout tolerance of just 0.004 mm, making it suitable for high-precision CMM or custom fixture applications.',
    specifications: { 'Ball Diameter': '20mm', 'Material': 'Tungsten Carbide', Tolerance: '0.004 mm (height and runout)' },
  },
  {
    id: 'faro-machine-probe',
    name: 'Faro Machine Probe',
    category: 'Probes',
    image: 'https://picsum.photos/seed/fmp/600/400',
    aiHint: 'CMM probe',
    shortDescription: 'Custom probes compatible with Faro measurement arms.',
    longDescription: 'Custom-designed and manufactured probes for use with Faro portable CMM arms and other measurement systems. Tailored tips and shafts to meet specific application needs.',
  },

  // =======================================================================
  // CUSTOM INSTRUMENTS
  // =======================================================================
  {
    id: 'pcd-checking-gauge',
    name: 'PCD Checking Gauge',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/pcdg/600/400',
    aiHint: 'checking fixture',
    shortDescription: 'Precision gauge for checking Pitch Circle Diameter (PCD).',
    longDescription: 'A custom-designed gauge for accurately checking the Pitch Circle Diameter (PCD) of components like wheel hubs or flanges, crucial for ensuring proper fitment and alignment in assemblies.',
  },
  {
    id: 'valve-hole-gauge',
    name: 'Valve Hole Position Checking Gauge',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/vhg/600/400',
    aiHint: 'hole alignment',
    shortDescription: 'Ensures precise valve hole positioning in wheel rims.',
    longDescription: 'Ensuring precise valve hole positioning is crucial for wheel performance and safety. Such gauges are essential in verifying the accurate placement of valve holes in wheel rims. Proper alignment ensures optimal tire pressure maintenance and compatibility with standard valve systems.',
  },
  {
    id: 'ph-hole-checking-gauge',
    name: 'PH Hole Position Checking Gauge',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/phg/600/400',
    aiHint: 'position gauge',
    shortDescription: 'Gauge for checking the position of PH (Pilot Holes) or other critical holes.',
    longDescription: 'A custom fixture designed to verify the location and spacing of pilot holes or other critical features on a workpiece relative to a datum or each other.',
  },
  {
    id: 'runout-checking-fixture',
    name: 'Runout Checking Fixture',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/rcf/600/400',
    aiHint: 'runout fixture',
    shortDescription: 'Measures circular runout on shafts and other cylindrical parts.',
    longDescription: 'A custom fixture designed to measure the runout of a rotating component. It helps to ensure that shafts, gears, and other cylindrical parts are concentric and will rotate without vibration.',
  },
  {
    id: 'flange-micrometer-300-325',
    name: 'Flange Micrometer 300-325mm',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/fm300/600/400',
    aiHint: 'micrometer',
    shortDescription: 'Special micrometer for measuring flange thickness and spacing.',
    longDescription: 'A specialized micrometer with a measuring range of 300-325mm, designed with deep anvils to measure flange thickness or features set back from an edge.',
  },
  {
    id: 'flange-micrometer-400-600',
    name: 'Flange Micrometer 400-600mm',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/fm600/600/400',
    aiHint: 'large micrometer',
    shortDescription: 'Large-range micrometer for measuring wide flanges.',
    longDescription: 'A large-scale flange micrometer with a range of 400-600mm, built for measuring substantial industrial flanges and components where standard micrometers cannot reach.',
  },
  {
    id: 'dial-depth-gauge-0-200',
    name: 'Dial Depth Gauge 0-200mm',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/ddg200/600/400',
    aiHint: 'depth gauge',
    shortDescription: 'Measures depth of holes, slots, and steps up to 200mm.',
    longDescription: 'A dial depth gauge with a 0-200mm range for accurately measuring the depth of holes, slots, and steps. Can be provided with a setting master for calibration.',
    customizationOptions: 'Can be supplied with a master for setting purposes.'
  },
  {
    id: 'rtj-groove-masters',
    name: 'RTJ Groove Masters',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/rtjm/600/400',
    aiHint: 'master gauge',
    shortDescription: 'Setting masters for calibrating Ring Type Joint (RTJ) groove gauges.',
    longDescription: 'Precision-ground setting masters used for calibrating and verifying gauges that measure Ring Type Joint (RTJ) grooves on flanges.',
  },
  {
    id: 'bore-gauge-setting-masters',
    name: 'Bore Gauge Setting Masters',
    category: 'Custom Instruments',
    image: 'https://picsum.photos/seed/bgsm/600/400',
    aiHint: 'setting ring',
    shortDescription: 'High-accuracy rings for setting and calibrating bore gauges.',
    longDescription: 'High-accuracy setting rings and masters used to calibrate bore gauges to a specific diameter before measurement, ensuring traceability and precision.',
  },
];

const productPortfolioText = products.map(p => p.name).join(', ');

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
  const categories: ProductCategory[] = [
    'Bore Gauges',
    'Groove Checking Gauges',
    'Verniers',
    'Probes',
    'Custom Instruments'
  ];
  return categories;
};
