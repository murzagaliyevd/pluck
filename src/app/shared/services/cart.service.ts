import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '@shared/models/cart';
import { CartItem } from '@shared/models/cart-item';
import { Goods } from '@shared/models/goods';
import { PriceService } from '@shared/services/price.service';

export const CART = 'cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart$ = new BehaviorSubject<Cart>({items: [], amount: 0});
  constructor(private _priceService: PriceService) {
    this.initCart();
  }

  get cart(): Observable<Cart> {
    return this._cart$;
  }

  getCartItem(id: string): CartItem | undefined {
    const cart = this._cart$.getValue();
    return cart?.items?.find( item => item.id === id );
  }

  addItem(item: Goods) {
    const cart = this._cart$.getValue();
    let cartItem = this._getItem(cart, item.id);
    if (cartItem) {
      cartItem.quantity ++;
    } else {
      const newItem: CartItem = {
        ...item,
        quantity: 1,
      }
      cart.items?.push(newItem);
    }
    this._saveCart(cart);
  }

  removeItem(id: string) {
    const cart = this._cart$.getValue();
    let cartItem = this._getItem(cart, id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity --;
      } else {
        this._deleteFromCart(cart, cartItem);
      }
      this._saveCart(cart);
    }
  }

  private _getItem(cart: Cart, id: string) {
    return cart.items?.find( a => a.id === id );
  }

  private _saveCart(cart: Cart) {
    cart.amount = 0;
    cart.items?.forEach( item => {
      cart.amount += ( this._priceService.getRealPrice(item.price, item.discount)  * item.quantity);
    });
    localStorage.setItem(CART, JSON.stringify(cart));
    this._cart$.next(cart);
  }

  initCart() {
    const localStorageCart = localStorage.getItem(CART);
    if (localStorageCart) {
      const cart = JSON.parse(localStorageCart) as Cart;
      this._cart$.next(cart);
    }
  }

  private _deleteFromCart(cart: Cart, item: CartItem) {
    cart.items = cart.items?.filter( a => a.id !== item.id );
  }

}
