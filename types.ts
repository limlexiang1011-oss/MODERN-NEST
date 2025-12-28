
export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  images?: string[]; // Array of additional images for the gallery
  isNew?: boolean;
  description?: string;
  dimensions?: string;
  material?: string;
  sku?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}
