import { CatalogItem, Project, TikTokVideo } from './types';

export const BRAND_LOGO = {
  // TODO: Replace this URL with your actual logo URL (e.g., local path '/logo.png' or a hosted URL)
  src: 'images/catalog/logo.png',
  alt: 'Trunc Woodworks Logo'
};

export const HERO_IMAGE_URL = 'images/catalog/hero.jpeg';

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
    imageUrl: 'images/catalog/entryway_bench.jpeg'
  },
  {
    id: '2',
    name: 'Bookshelves',
    basePrice: '$600+',
    description: 'Floor-to-ceiling or floating wall-mounted units designed to showcase your library perfectly.',
    features: ['Adjustable shelving', 'Built-in options available', 'Crown molding details'],
    imageUrl: 'images/catalog/bookshelf.jpeg'
  },
  {
    id: '3',
    name: 'Personalized Wooden Growth Charts',
    basePrice: '$120',
    description: 'Heirloom quality rulers to track your little one’s height. Moves with you, unlike marks on a doorframe.',
    features: ['Custom name engraving', 'Variety of stains', 'Easy wall mounting'],
    imageUrl: 'images/catalog/growth_chart.jpeg'
  },
  {
    id: '4',
    name: 'Kids Wardrobes',
    basePrice: '$850+',
    description: 'Montessori-inspired open wardrobes that encourage independence and keep clothes organized.',
    features: ['Accessible height', 'Solid wood joinery', 'Safety rounded corners'],
    imageUrl: 'images/catalog/kids_wardrobe.jpeg'
  },
  {
    id: '5',
    name: 'Play Tables',
    basePrice: '$350+',
    description: 'Durable, low-profile tables perfect for trains, legos, drawing, and imaginative play.',
    features: ['Easy-clean finish', 'Storage bins included', 'Rounded edges for safety'],
    imageUrl: 'images/catalog/play_table.jpeg'
  },
  {
    id: '6',
    name: 'Toy Storage Units',
    basePrice: '$400+',
    description: 'Stylish organization solutions that look beautiful in your living room while hiding the clutter.',
    features: ['Deep storage cubbies', 'Soft-close lids', 'Modern aesthetic'],
    imageUrl: 'images/catalog/toy_storage.jpeg'
  },
  {
    id: '7',
    name: 'Custom Baby Gates',
    basePrice: '$250+',
    description: 'Safety without sacrificing style. Secure, custom-fit gates that match your home’s woodwork.',
    features: ['Secure latching', 'Matches stair banisters', 'No-trip threshold'],
    imageUrl: 'images/catalog/baby_gate.jpeg'
  },
  {
    id: '8',
    name: 'Furniture-Style Dog Crates',
    basePrice: '$900+',
    description: 'A cozy den for your pet that doubles as a functional end table or media console.',
    features: ['Chew-resistant bars', 'Removable tray', 'Integrates with decor'],
    imageUrl: 'images/catalog/dog_crate.jpeg'
  },
  {
    id: '9',
    name: 'Custom Picture Frames',
    basePrice: '$80+',
    description: 'Showcase your memories with handcrafted frames made from premium hardwoods to match your decor.',
    features: ['Custom sizing', 'Museum-quality glass options', 'Various wood species available'],
    imageUrl: 'images/catalog/picture_frame.jpeg'
  },
  {
    id: '10',
    name: 'Custom Cabinet Doors',
    basePrice: '$65+',
    description: 'Upgrade your kitchen or built-ins with custom-made doors. Shaker, slab, or raised panel styles available.',
    features: ['Exact sizing', 'Hinge boring available', 'Paint-grade or stain-grade'],
    imageUrl: 'images/catalog/cabinet_doors.jpeg'
  }
];

export const GALLERY_PROJECTS: Project[] = [
  {
    id: 'bench',
    title: 'Bench',
    description: 'Custom handcrafted bench.',
    category: 'furniture',
    imageUrl: 'images/portfolio/bench/bench.jpeg',
    priority: 10,
    additionalImages: [
      'images/portfolio/bench/build/build1.jpeg',
      'images/portfolio/bench/build/build2.jpeg',
      'images/portfolio/bench/build/build3.jpeg',
      'images/portfolio/bench/build/build4.jpeg',
      'images/portfolio/bench/build/build5.jpeg',
      'images/portfolio/bench/build/build6.jpeg',
      'images/portfolio/bench/build/build7.jpeg',
      'images/portfolio/bench/build/build8.jpeg',
    ]
  },
  {
    id: 'toy_storage',
    title: 'Toy Storage',
    description: 'Elegant toy storage solution.',
    category: 'furniture',
    imageUrl: 'images/portfolio/toy_storage/toy_storage.jpeg',
    priority: 20,
    additionalImages: [
    ]
  },
  {
    id: 'mantle',
    title: 'Mantle',
    description: 'Custom wood mantlepiece.',
    category: 'decor',
    imageUrl: 'images/portfolio/mantle/mantle.jpeg',
    priority: 30,
    additionalImages: [
      'images/portfolio/mantle/build/build1.jpeg',
      'images/portfolio/mantle/build/build2.jpeg',
      'images/portfolio/mantle/build/build3.jpeg',
      'images/portfolio/mantle/build/build4.jpeg',
      'images/portfolio/mantle/build/build5.jpeg',
      'images/portfolio/mantle/build/build6.jpeg',
      'images/portfolio/mantle/build/build7.jpeg',
      'images/portfolio/mantle/build/build8.jpeg',
      'images/portfolio/mantle/build/build9.jpeg',
    ]
  },
  {
    id: 'floating_shelves',
    title: 'Floating Shelves',
    description: 'Modern floating shelves.',
    category: 'decor',
    imageUrl: 'images/portfolio/floating_shelves/floating_shelves.jpeg',
    priority: 40,
    additionalImages: [
      'images/portfolio/floating_shelves/build/build1.jpeg',
      'images/portfolio/floating_shelves/build/build2.jpeg',
      'images/portfolio/floating_shelves/build/build3.jpeg',
      'images/portfolio/floating_shelves/build/build4.jpeg',
    ]
  },
  {
    id: 'workshop_table',
    title: 'Workshop Table',
    description: 'Heavy-duty workshop table.',
    category: 'furniture',
    imageUrl: 'images/portfolio/workshop_table/workshop_table.jpeg',
    priority: 50,
    additionalImages: [
      'images/portfolio/workshop_table/build/build1.jpeg',
      'images/portfolio/workshop_table/build/build2.jpeg',
      'images/portfolio/workshop_table/build/build3.jpeg',
      'images/portfolio/workshop_table/build/build4.jpeg',
      'images/portfolio/workshop_table/build/build5.jpeg',
      'images/portfolio/workshop_table/build/build6.jpeg',
      'images/portfolio/workshop_table/build/build7.jpeg',
      'images/portfolio/workshop_table/build/build8.jpeg',
      'images/portfolio/workshop_table/build/build9.jpeg',
      'images/portfolio/workshop_table/build/build10.jpeg',
      'images/portfolio/workshop_table/build/build11.jpeg',
      'images/portfolio/workshop_table/build/build12.jpeg',
      'images/portfolio/workshop_table/build/build13.jpeg',
    ]
  },
  {
    id: 'bookshelf',
    title: 'Bookshelf',
    description: 'Custom wooden bookshelf.',
    category: 'furniture',
    imageUrl: 'images/portfolio/bookshelf/bookshelf.jpeg',
    priority: 11,
    additionalImages: [
      'images/portfolio/bookshelf/build/build1.jpeg',
    ]
  },
  {
    id: 'router_table',
    title: 'Router Table',
    description: 'Precision router table.',
    category: 'furniture',
    imageUrl: 'images/portfolio/router_table/router_table.jpeg',
    priority: 70,
    additionalImages: [
      'images/portfolio/router_table/build/build1.jpeg',
      'images/portfolio/router_table/build/build2.jpeg',
      'images/portfolio/router_table/build/build3.jpeg',
      'images/portfolio/router_table/build/build4.jpeg',
      'images/portfolio/router_table/build/build5.jpeg',
      'images/portfolio/router_table/build/build6.jpeg',
      'images/portfolio/router_table/build/build7.jpeg',
      'images/portfolio/router_table/build/build8.jpeg',
      'images/portfolio/router_table/build/build9.jpeg',
      'images/portfolio/router_table/build/build10.jpeg',
      'images/portfolio/router_table/build/build11.jpeg',
      'images/portfolio/router_table/build/build12.jpeg',
      'images/portfolio/router_table/build/build13.jpeg',
      'images/portfolio/router_table/build/build14.jpeg',
    ]
  },
  {
    id: 'picture_frame',
    title: 'Picture Frame',
    description: 'Handmade picture frames.',
    category: 'decor',
    imageUrl: 'images/portfolio/picture_frame/picture_frame.jpeg',
    priority: 80,
    additionalImages: [
      'images/portfolio/picture_frame/build/build1.jpeg',
      'images/portfolio/picture_frame/build/build2.jpeg',
      'images/portfolio/picture_frame/build/build3.jpeg',
      'images/portfolio/picture_frame/build/build4.jpeg',
      'images/portfolio/picture_frame/build/build5.jpeg',
    ]
  },
  {
    id: 'dog_crate',
    title: 'Dog Crate',
    description: 'Furniture-style dog crate.',
    category: 'furniture',
    imageUrl: 'images/portfolio/dog_crate/dog_crate.jpeg',
    priority: 8,
    additionalImages: [
      'images/portfolio/dog_crate/build/build1.jpeg',
      'images/portfolio/dog_crate/build/build2.jpeg',
      'images/portfolio/dog_crate/build/build3.jpeg',
      'images/portfolio/dog_crate/build/build4.jpeg',
      'images/portfolio/dog_crate/build/build5.jpeg',
      'images/portfolio/dog_crate/build/build6.jpeg',
      'images/portfolio/dog_crate/build/build7.jpeg',
      'images/portfolio/dog_crate/build/build8.jpeg',
      'images/portfolio/dog_crate/build/build9.jpeg',
      'images/portfolio/dog_crate/build/build10.jpeg',
      'images/portfolio/dog_crate/build/build11.jpeg',
      'images/portfolio/dog_crate/build/build12.jpeg',
      'images/portfolio/dog_crate/build/build13.jpeg',
      'images/portfolio/dog_crate/build/build14.jpeg',
      'images/portfolio/dog_crate/build/build15.jpeg',
      'images/portfolio/dog_crate/build/build16.jpeg',
      'images/portfolio/dog_crate/build/build17.jpeg',
      'images/portfolio/dog_crate/build/build18.jpeg',
    ]
  },
  {
    id: 'play_table',
    title: 'Play Table',
    description: 'Kids play table.',
    category: 'furniture',
    imageUrl: 'images/portfolio/play_table/play_table.jpeg',
    priority: 100,
    additionalImages: [
      'images/portfolio/play_table/build/build1.jpeg',
      'images/portfolio/play_table/build/build2.jpeg',
      'images/portfolio/play_table/build/build3.jpeg',
      'images/portfolio/play_table/build/build4.jpeg',
      'images/portfolio/play_table/build/build5.jpeg',
      'images/portfolio/play_table/build/build6.jpeg',
    ]
  },
  {
    id: 'plant_stand',
    title: 'Plant Stand',
    description: 'Wooden plant stand.',
    category: 'decor',
    imageUrl: 'images/portfolio/plant_stand/plant_stand.jpeg',
    priority: 110,
    additionalImages: [
      'images/portfolio/plant_stand/build/build1.jpeg',
    ]
  },
  {
    id: 'cabinet_doors',
    title: 'Cabinet Doors',
    description: 'Custom cabinet doors.',
    category: 'furniture',
    imageUrl: 'images/portfolio/cabinet_doors/cabinet_doors.jpeg',
    priority: 120,
    additionalImages: [
      'images/portfolio/cabinet_doors/build/build1.jpeg',
      'images/portfolio/cabinet_doors/build/build2.jpeg',
      'images/portfolio/cabinet_doors/build/build3.jpeg',
      'images/portfolio/cabinet_doors/build/build4.jpeg',
    ]
  },
  {
    id: 'growth_chart',
    title: 'Growth Chart',
    description: 'Wooden growth chart.',
    category: 'decor',
    imageUrl: 'images/portfolio/growth_chart/growth_chart.jpeg',
    priority: 9,
    additionalImages: [
      'images/portfolio/growth_chart/build/build1.jpeg',
      'images/portfolio/growth_chart/build/build2.jpeg',
      'images/portfolio/growth_chart/build/build3.jpeg',
      'images/portfolio/growth_chart/build/build4.jpeg',
      'images/portfolio/growth_chart/build/build5.jpeg',
      'images/portfolio/growth_chart/build/build6.jpeg',
      'images/portfolio/growth_chart/build/build7.jpeg',
      'images/portfolio/growth_chart/build/build8.jpeg',
      'images/portfolio/growth_chart/build/build9.jpeg',
    ]
  },
  {
    id: 'kids_wardrobe',
    title: 'Kids Wardrobe',
    description: 'Montessori style wardrobe.',
    category: 'furniture',
    imageUrl: 'images/portfolio/kids_wardrobe/kids_wardrobe.jpeg',
    priority: 1,
    additionalImages: [
      'images/portfolio/kids_wardrobe/build/build1.jpeg',
      'images/portfolio/kids_wardrobe/build/build2.jpeg',
      'images/portfolio/kids_wardrobe/build/build3.jpeg',
      'images/portfolio/kids_wardrobe/build/build4.jpeg',
      'images/portfolio/kids_wardrobe/build/build5.jpeg',
    ]
  },
  {
    id: 'baby_gate',
    title: 'Baby Gate',
    description: 'Custom safety baby gate.',
    category: 'furniture',
    imageUrl: 'images/portfolio/baby_gate/baby_gate.jpeg',
    priority: 101,
    additionalImages: [
      'images/portfolio/baby_gate/build/build1.jpeg',
      'images/portfolio/baby_gate/build/build2.jpeg',
    ]
  },
];

// Mock TikTok IDs for embedding. In a real scenario, these would be real video IDs.
export const TIKTOK_VIDEOS: TikTokVideo[] = [
  { id: '1', embedUrl: '7492063509136608554', description: 'Custom Children\'s Costume Wardrobe' },
  { id: '2', embedUrl: '7493604143953759534', description: 'Router Table Cabinet Build' },
  { id: '3', embedUrl: '7492064368994094378', description: '3D Printed Baby Gate Repair' },
  { id: '4', embedUrl: '7503267279488994606', description: 'Power Wheels Battery Swap' },
];