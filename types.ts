
export interface Product {
  id: string;
  name: string;
  category: string;
  gender: 'Nam' | 'Nữ' | 'Unisex';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  thumbnails: string[];
  tag?: 'Mới nhất' | 'Sale' | 'Hot' | 'Sắp ra mắt';
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  tag?: string;
}

export type AppScreen = 'login' | 'home' | 'productDetail' | 'cart' | 'news' | 'support';

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}
