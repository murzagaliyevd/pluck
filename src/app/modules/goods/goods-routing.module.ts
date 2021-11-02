import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsItemComponent } from './components/goods-item/goods-item.component';
import { GoodsResolver } from './goods.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: GoodsItemComponent,
    resolve: {
      goodsDetails: GoodsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsRoutingModule {

}
