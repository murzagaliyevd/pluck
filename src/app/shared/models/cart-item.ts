import { Goods } from '@shared/models/goods';

export interface CartItem extends Goods {
  quantity: number;
}
