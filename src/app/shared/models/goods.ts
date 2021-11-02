import { Discount } from '@shared/models/discount';

export interface Goods {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  discount: Discount;
}
