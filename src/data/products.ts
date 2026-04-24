import p1 from "@/assets/p1-laptop-backpack.jpg";
import p2 from "@/assets/p2-messenger.jpg";
import p3 from "@/assets/p3-school.jpg";
import p4 from "@/assets/p4-school-teen.jpg";
import p5 from "@/assets/p5-tote.jpg";
import p6 from "@/assets/p6-crossbody.jpg";
import p7 from "@/assets/p7-cabin.jpg";
import p8 from "@/assets/p8-duffle.jpg";

export type Category = "Laptop Bags" | "School Bags" | "Ladies Handbags" | "Travel Bags";

export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  mrp: number;
  rating: number;
  reviews: number;
}

const price = (mrp: number) => Math.round(mrp * 0.8);
export const discounted = price;

export const products: Product[] = [
  { id: "p1", name: "Urban Pro Laptop Backpack", category: "Laptop Bags", image: p1, mrp: 1999, rating: 4.8, reviews: 142 },
  { id: "p2", name: "Heritage Leather Messenger", category: "Laptop Bags", image: p2, mrp: 2499, rating: 4.7, reviews: 98 },
  { id: "p3", name: "Junior Pop School Backpack", category: "School Bags", image: p3, mrp: 1299, rating: 4.9, reviews: 211 },
  { id: "p4", name: "Campus Daily School Bag", category: "School Bags", image: p4, mrp: 1499, rating: 4.6, reviews: 167 },
  { id: "p5", name: "Soleil Beige Tote", category: "Ladies Handbags", image: p5, mrp: 1799, rating: 4.8, reviews: 134 },
  { id: "p6", name: "Noir Chain Crossbody", category: "Ladies Handbags", image: p6, mrp: 1599, rating: 4.7, reviews: 121 },
  { id: "p7", name: "Voyager Cabin Trolley", category: "Travel Bags", image: p7, mrp: 4499, rating: 4.9, reviews: 188 },
  { id: "p8", name: "Weekender Canvas Duffle", category: "Travel Bags", image: p8, mrp: 1999, rating: 4.6, reviews: 76 },
];

export const categories: { name: Category; tagline: string; emoji: string }[] = [
  { name: "Laptop Bags", tagline: "Work in style", emoji: "💻" },
  { name: "School Bags", tagline: "Built for class", emoji: "🎒" },
  { name: "Ladies Handbags", tagline: "Everyday elegance", emoji: "👜" },
  { name: "Travel Bags", tagline: "Go anywhere", emoji: "✈️" },
];
