// src/shared/stores/selectors.shoppingcart.ts
import type { RootState } from './store.shoppingcart';
import type { Product, CartItem } from './shopSlice.shoppingcart';

export function selectProducts(state: RootState): Product[] {
  return state.shop.products;
}

export function selectCart(state: RootState): CartItem[] {
  return state.shop.cart;
}

export function selectTotal(state: RootState): number {
  return state.shop.cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
}
