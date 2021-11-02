import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '@shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    ModalComponent
  ],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
