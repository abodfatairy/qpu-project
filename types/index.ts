export interface Products {
  _id: number;
  title: string;
  price: number;
  previousPrice?: number; // Optional property
  description: string;
  category: string;
  image: string;
  isNew: boolean;
  brand: string;
  quantity: number;
}
export interface CartItem {
  product: ProductsProps;
  qty: number;
}
export type User = {
  userId: number;
  id: string;
  name: string;
  image?: string; // Can be a string (URL presumably) or null
  firstAddress: string;
  firstAddressDescription?: string;
  secondAddress?: string;
  secondAddressDescription?: string;
  email: string;
  phoneNumber: string;
};
export type UserData = {
  userId: number;
  id: string;
  name: string;
  image?: File; // Can be a string (URL presumably) or null
  firstAddress: string;
  firstAddressDescription?: string;
  secondAddress?: string;
  secondAddressDescription?: string;
  email: string;
  phoneNumber: string;
};

export type NewUser = {
  email: string;
  name: string;
  firstAddress: string;
  phoneNumber: string;
  password: string;
};

export type ProductsProps = {
  id: number;
  userId: number;
  name: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  brand: string;
  discount: number;
  rate: number;
  price: number;
  categoryName: string;
};
export type categories = {
  id: string;
  name: string;
  image: string;
};
