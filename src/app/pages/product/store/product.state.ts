import { Product } from '../models/product';
import { History } from '../models/history';
export interface ProductState {
  products: Product[];
  selectedProduct: Product;
  error: string | null;
  pastActionHistory: any[];
  currentState: any;
}

export const initialProductState: ProductState = {
  pastActionHistory: [],
  currentState: JSON.parse(localStorage.getItem('currentState')),
  products: null,
  selectedProduct: null,
  error: null,
};
