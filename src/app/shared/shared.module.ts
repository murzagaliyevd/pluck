import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DiscountPricePipe } from './pipes/discount-price.pipe';
import { CartItemControlComponent } from './components/cart-item-control/cart-item-control.component';

@NgModule({
  declarations: [
    DiscountPricePipe,
    CartItemControlComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    DiscountPricePipe,
    CartItemControlComponent,
  ],
})
export class SharedModule {

}
