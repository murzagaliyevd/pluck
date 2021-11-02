import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '@shared/models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {
  @Input() cartItems!: CartItem[] | undefined;
  @Output() increaseClick = new EventEmitter<CartItem>();
  @Output() decreaseClick = new EventEmitter<CartItem>();
  constructor() { }

  ngOnInit(): void {
  }

  decrease(item: CartItem) {
    this.decreaseClick.emit(item);
  }

  increase(item: CartItem) {
    this.increaseClick.emit(item);
  }
}
