import { CartItem } from '@shared/models/cart-item';

export interface Cart {
  items?: CartItem[];
  amount: number;
}
