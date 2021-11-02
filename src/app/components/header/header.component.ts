import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '@shared/services/cart.service';
import { Observable } from 'rxjs';
import { Cart } from '@shared/models/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  cart$!: Observable<Cart>;
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.cart$ = this._cartService.cart;
  }

}
