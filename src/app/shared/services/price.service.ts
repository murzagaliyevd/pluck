import { Injectable } from '@angular/core';
import { Discount } from '@shared/models/discount';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  getRealPrice(price: number, discount: Discount): number {
    if (discount) {
      if (discount.exact) {
        return price - discount.exact;
      }
      if (discount.percent) {
        return price - ( (price / 100) * discount.percent );
      }
    }
    return price;
  }
}
