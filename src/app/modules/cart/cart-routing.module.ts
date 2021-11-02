import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '', component: CartComponent,
    children: []
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CartRoutingModule { }
