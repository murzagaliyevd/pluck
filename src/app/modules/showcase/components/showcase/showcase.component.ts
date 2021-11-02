import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Goods } from '@shared/models/goods';
import { GoodsService } from '@shared/services/goods.service';
import { Observable } from 'rxjs';
import { CartService } from '@shared/services/cart.service';
import { PriceService } from '@shared/services/price.service';
import { Router } from '@angular/router';
import { ContentLoadService } from '@shared/services/content-load.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseComponent implements OnInit, AfterViewInit {
  goods!: Observable<Goods[]>;
  constructor(
    private _goodsService: GoodsService,
    private _cartService: CartService,
    private _priceService: PriceService,
    private _router: Router,
    private _contentLoadService: ContentLoadService
  ) { }

  ngOnInit(): void {
    this._contentLoadService.setLoaded(false);
    this.goods = this._goodsService.getGoods();
  }

  addToCart(item: Goods) {
    this._cartService.addItem(item);
  }

  goodsClick(item: Goods) {
    this._router.navigate(['/goods', item.id])
  }

  ngAfterViewInit(): void {
    setTimeout( () => {
      this._contentLoadService.setLoaded(true);
    }, 2000)
  }
}
