export type Products = {
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
};
