import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goods } from '@shared/models/goods';
import { map, take } from 'rxjs/operators';
import { CartService } from '@shared/services/cart.service';
import { CartItem } from '@shared/models/cart-item';
import { ContentLoadService } from '@shared/services/content-load.service';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsItemComponent implements OnInit, AfterViewInit {
  goodsDetails!: Goods;
  cartItem!: CartItem | undefined;
  constructor(
    private _route: ActivatedRoute,
    private _cartService: CartService,
    private _contentLoadService: ContentLoadService
  ) { }

  ngOnInit(): void {
    this._contentLoadService.setLoaded(false);
    this._route.data
      .pipe(
        map(data => data.goodsDetails),
        take(1)
      )
      .subscribe( res => {
        this.goodsDetails = res;
        if (this.goodsDetails) {
          this._getCartItem();
        }
      });
  }

  private _getCartItem() {
    this.cartItem = this._cartService.getCartItem( this.goodsDetails.id )
  }

  increase() {
    this._cartService.addItem(this.goodsDetails);
    this._getCartItem();
  }

  decrease() {
    this._cartService.removeItem(this.goodsDetails.id);
    this._getCartItem();
  }

  ngAfterViewInit(): void {
    setTimeout( () => {
      this._contentLoadService.setLoaded(true);
    }, 2000)
  }
}
