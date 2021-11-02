import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '@shared/models/cart-item';

@Component({
  selector: 'app-cart-item-control',
  templateUrl: './cart-item-control.component.html',
  styleUrls: ['./cart-item-control.component.scss']
})
export class CartItemControlComponent implements OnInit {
  @Input() item!: CartItem;
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
