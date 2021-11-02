import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goods } from '@shared/models/goods';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsListComponent implements OnInit {
  @Input() goods!: Observable<Goods[]>;
  @Output() goodsClick = new EventEmitter<Goods>();
  @Output() addToCartClick = new EventEmitter<Goods>();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item: Goods) {
    this.addToCartClick.emit(item);
  }

  onGoodsClick(item: Goods) {
    this.goodsClick.emit(item);
  }
}
