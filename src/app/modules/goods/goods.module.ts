import { NgModule } from '@angular/core';
import { GoodsItemComponent } from './components/goods-item/goods-item.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    GoodsItemComponent
  ],
  imports: [
    SharedModule,
    GoodsRoutingModule
  ]
})
export class GoodsModule { }
