import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CartService } from '@shared/services/cart.service';
import { Observable } from 'rxjs';
import { Cart } from '@shared/models/cart';
import { CartItem } from '@shared/models/cart-item';
import { ModalComponent } from '../modal/modal.component';
import { ContentLoadService } from '@shared/services/content-load.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, AfterViewInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  cart$!: Observable<Cart>;
  constructor(
    private _cartService: CartService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private _contentLoadService: ContentLoadService
  ) { }

  ngOnInit(): void {
    this._contentLoadService.setLoaded(false);
    this.cart$ = this._cartService.cart;
  }

  decrease(item: CartItem) {
    this._cartService.removeItem(item.id);
  }

  increase(item: CartItem) {
    this._cartService.addItem(item);
  }

  proceed() {
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    this.container.createComponent(dynamicComponentFactory);
  }

  ngAfterViewInit(): void {
    // for checking banners loading
    setTimeout( () => {
      this._contentLoadService.setLoaded(true);
    }, 2000)
  }
}
