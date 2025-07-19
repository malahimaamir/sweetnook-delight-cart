export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "ice-cream" | "cakes" | "candies" | "cookies";
  rating: number;
  inStock: boolean;
  ingredients?: string[];
  customizations?: {
    sugarLevel?: boolean;
    toppings?: string[];
    sizes?: string[];
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Strawberry Dream Ice Cream",
    description: "Creamy vanilla ice cream swirled with fresh strawberry chunks and a hint of mint",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1590080876842-8d2031b1ad09", // real ice cream image
    category: "ice-cream",
    rating: 4.8,
    inStock: true,
    ingredients: ["Fresh cream", "Strawberries", "Vanilla", "Sugar", "Mint"],
    customizations: {
      sugarLevel: true,
      toppings: ["Chocolate chips", "Whipped cream", "Fresh berries"],
      sizes: ["Small", "Medium", "Large"]
    }
  },
  {
    id: "2",
    name: "Rainbow Velvet Cake",
    description: "Multi-layered rainbow cake with smooth cream cheese frosting and colorful sprinkles",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1614707267537-72bdb5f7d0fc",
    category: "cakes",
    rating: 4.9,
    inStock: true,
    ingredients: ["Flour", "Eggs", "Butter", "Cream cheese", "Food coloring"],
    customizations: {
      sizes: ["6 inch", "8 inch", "10 inch"]
    }
  },
  {
    id: "3",
    name: "Cotton Candy Clouds",
    description: "Fluffy cotton candy in various pastel colors, melts in your mouth",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1589712235271-bb6d3f3746a3",
    category: "candies",
    rating: 4.6,
    inStock: true,
    ingredients: ["Sugar", "Food coloring", "Natural flavoring"]
  },
  {
    id: "4",
    name: "Chocolate Chip Delight",
    description: "Warm, gooey chocolate chip cookies with sea salt and caramel drizzle",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1599785209793-34c3d6d95a4f",
    category: "cookies",
    rating: 4.7,
    inStock: true,
    ingredients: ["Flour", "Chocolate chips", "Butter", "Brown sugar", "Vanilla"],
    customizations: {
      toppings: ["Caramel drizzle", "Sea salt", "Extra chocolate chips"]
    }
  },
  {
    id: "5",
    name: "Mint Chocolate Chip",
    description: "Refreshing mint ice cream loaded with dark chocolate chips",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1590080876842-8d2031b1ad09", // same as 1 for example
    category: "ice-cream",
    rating: 4.5,
    inStock: true,
    ingredients: ["Fresh cream", "Mint", "Dark chocolate", "Sugar"],
    customizations: {
      sugarLevel: true,
      sizes: ["Small", "Medium", "Large"]
    }
  },
  {
    id: "6",
    name: "Red Velvet Cupcakes",
    description: "Classic red velvet cupcakes topped with cream cheese frosting",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1630666381180-232dca95a8da",
    category: "cakes",
    rating: 4.8,
    inStock: false,
    ingredients: ["Flour", "Cocoa powder", "Red food coloring", "Cream cheese"]
  },
  {
    id: "7",
    name: "Gummy Bear Paradise",
    description: "Assorted gummy bears in fruity flavors with a chewy texture",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1614707267986-d89e0bba357f",
    category: "candies",
    rating: 4.4,
    inStock: true,
    ingredients: ["Gelatin", "Fruit juices", "Sugar", "Natural flavoring"]
  },
  {
    id: "8",
    name: "Oatmeal Raisin Cookies",
    description: "Hearty oatmeal cookies with plump raisins and a touch of cinnamon",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    category: "cookies",
    rating: 4.3,
    inStock: true,
    ingredients: ["Oats", "Raisins", "Flour", "Cinnamon", "Brown sugar"]
  }
];

export const categories = [
  { id: "all", name: "All Products", icon: "🍯" },
  { id: "ice-cream", name: "Ice Cream", icon: "🍦" },
  { id: "cakes", name: "Cakes", icon: "🎂" },
  { id: "candies", name: "Candies", icon: "🍬" },
  { id: "cookies", name: "Cookies", icon: "🍪" }
];
