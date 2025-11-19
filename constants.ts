import { CatalogItem, Project, TikTokVideo } from './types';

export const BRAND_LOGO = {
  // TODO: Replace this URL with your actual logo URL (e.g., local path '/logo.png' or a hosted URL)
  src: 'images/logo.png', 
  alt: 'Trunc Woodworks Logo'
};

export const HERO_IMAGE_URL = 'images/hero.jpeg';

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/truncwoodworks',
  tiktok: 'https://tiktok.com/@truncwoodworks',
  youtube: 'https://youtube.com/@truncwoodworks',
  email: 'mailto:joe@truncale.dev'
};

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: '1',
    name: 'Custom Benches',
    basePrice: '$450+',
    description: 'Sturdy, handcrafted benches for entryways, dining tables, or mudrooms. Built to handle daily life.',
    features: ['Solid hardwood construction', 'Custom lengths', 'Optional storage underneath'],
    imageUrl: 'images/entryway_bench.jpeg'
  },
  {
    id: '2',
    name: 'Bookshelves',
    basePrice: '$600+',
    description: 'Floor-to-ceiling or floating wall-mounted units designed to showcase your library perfectly.',
    features: ['Adjustable shelving', 'Built-in options available', 'Crown molding details'],
    imageUrl: 'images/bookshelf.jpeg'
  },
  {
    id: '3',
    name: 'Personalized Wooden Growth Charts',
    basePrice: '$120',
    description: 'Heirloom quality rulers to track your little one’s height. Moves with you, unlike marks on a doorframe.',
    features: ['Custom name engraving', 'Variety of stains', 'Easy wall mounting'],
    imageUrl: 'images/growth_chart.jpeg'
  },
  {
    id: '4',
    name: 'Kids Wardrobes',
    basePrice: '$850+',
    description: 'Montessori-inspired open wardrobes that encourage independence and keep clothes organized.',
    features: ['Accessible height', 'Solid wood joinery', 'Safety rounded corners'],
    imageUrl: 'images/kids_wardrobe.jpeg'
  },
  {
    id: '5',
    name: 'Play Tables',
    basePrice: '$350+',
    description: 'Durable, low-profile tables perfect for trains, legos, drawing, and imaginative play.',
    features: ['Easy-clean finish', 'Storage bins included', 'Rounded edges for safety'],
    imageUrl: 'images/play_table.jpeg'
  },
  {
    id: '6',
    name: 'Toy Storage Units',
    basePrice: '$400+',
    description: 'Stylish organization solutions that look beautiful in your living room while hiding the clutter.',
    features: ['Deep storage cubbies', 'Soft-close lids', 'Modern aesthetic'],
    imageUrl: 'images/toy_storage.jpeg'
  },
  {
    id: '7',
    name: 'Custom Baby Gates',
    basePrice: '$250+',
    description: 'Safety without sacrificing style. Secure, custom-fit gates that match your home’s woodwork.',
    features: ['Secure latching', 'Matches stair banisters', 'No-trip threshold'],
    imageUrl: 'images/baby_gate.jpeg'
  },
  {
    id: '8',
    name: 'Furniture-Style Dog Crates',
    basePrice: '$900+',
    description: 'A cozy den for your pet that doubles as a functional end table or media console.',
    features: ['Chew-resistant bars', 'Removable tray', 'Integrates with decor'],
    imageUrl: 'images/dog_crate.jpeg'
  },
  {
    id: '9',
    name: 'Custom Picture Frames',
    basePrice: '$80+',
    description: 'Showcase your memories with handcrafted frames made from premium hardwoods to match your decor.',
    features: ['Custom sizing', 'Museum-quality glass options', 'Various wood species available'],
    imageUrl: 'images/picture_frame.jpeg'
  },
  {
    id: '10',
    name: 'Custom Cabinet Doors',
    basePrice: '$65+',
    description: 'Upgrade your kitchen or built-ins with custom-made doors. Shaker, slab, or raised panel styles available.',
    features: ['Exact sizing', 'Hinge boring available', 'Paint-grade or stain-grade'],
    imageUrl: 'images/cabinet_doors.jpeg'
  }
];

export const GALLERY_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Walnut Credenza',
    description: 'Mid-century inspired media console with sliding doors.',
    category: 'furniture',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    additionalImages: [
      'https://picsum.photos/800/600?random=101',
      'https://picsum.photos/800/600?random=102',
      'https://picsum.photos/800/600?random=103'
    ]
  },
  {
    id: 'p2',
    title: 'White Oak Vanity',
    description: 'Floating bathroom vanity with waterproof finish.',
    category: 'furniture',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    additionalImages: [
      'https://picsum.photos/800/600?random=104',
      'https://picsum.photos/800/600?random=105'
    ]
  },
  {
    id: 'p3',
    title: 'Cedar Outdoor Bench',
    description: 'Weather-resistant modern bench for a patio.',
    category: 'furniture',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    additionalImages: [
      'https://picsum.photos/800/600?random=106'
    ]
  },
  {
    id: 'p4',
    title: 'Geometric Wall Art',
    description: 'Reclaimed wood mosaic art piece.',
    category: 'decor',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    additionalImages: [
      'https://picsum.photos/800/600?random=107',
      'https://picsum.photos/800/600?random=108'
    ]
  },
  {
    id: 'p5',
    title: 'Epoxy River Desk',
    description: 'Black walnut with midnight blue epoxy river.',
    category: 'furniture',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    additionalImages: [
      'https://picsum.photos/800/600?random=109',
      'https://picsum.photos/800/600?random=110',
      'https://picsum.photos/800/600?random=111'
    ]
  },
  {
    id: 'p6',
    title: 'Restored Antique Chair',
    description: 'Full restoration and refinishing of a 1920s chair.',
    category: 'restoration',
    imageUrl: 'https://picsum.photos/800/600?random=6',
     additionalImages: [
      'https://picsum.photos/800/600?random=112'
    ]
  }
];

// Mock TikTok IDs for embedding. In a real scenario, these would be real video IDs.
export const TIKTOK_VIDEOS: TikTokVideo[] = [
  { id: '1', embedUrl: '7492063509136608554', description: 'Custom Children\'s Costume Wardrobe' },
  { id: '2', embedUrl: '7493604143953759534', description: 'Router Table Cabinet Build' },
  { id: '3', embedUrl: '7492064368994094378', description: '3D Printed Baby Gate Repair' },
  { id: '4', embedUrl: '7503267279488994606', description: 'Power Wheels Battery Swap' },
];