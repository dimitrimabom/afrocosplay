export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  img: string;
  stock: number;
  isNew: boolean;
  isBest: boolean;
  rating: number;
}

export interface CartItem extends Product {
  qty: number;
}

export interface CartPageProps {
  cart: CartItem[];
  onQty: (item: CartItem, qty: number) => void;
  onRemove: (item: CartItem) => void;
  onCheckout: () => void;
}

export interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export interface ShopProps {
  products: Product[];
  onAdd: (product: Product) => void;
  onFilter: (filter: string) => void;
  filter: string;
  q: string;
  setQ: (q: string) => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  [key: string]: any;
}

export interface BadgeProps {
  children: React.ReactNode;
  bg: string;
  text: string;
}

export interface PillProps {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

export interface HeroProps {
  onShop: () => void;
}

export interface HeaderProps {
  cartCount: number;
  onNav: (page: string) => void;
  current: string;
}
