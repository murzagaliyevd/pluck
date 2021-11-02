import { Pipe, PipeTransform } from '@angular/core';
import { Discount } from '@shared/models/discount';
import { PriceService } from '@shared/services/price.service';

@Pipe({
  name: 'discountPrice'
})
export class DiscountPricePipe implements PipeTransform {
  constructor(private _priceService: PriceService) {}
  transform(value: number, discount: Discount): number {
    return this._priceService.getRealPrice(value, discount);
  }

}
