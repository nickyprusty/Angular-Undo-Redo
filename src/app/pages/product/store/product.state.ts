import { Product } from '../models/product';
import { History } from '../models/history';
export interface ProductState {
  products: Product[];
  selectedProduct: Product;
  error: string | null;
  pastActionHistory: any[];
  futureActionAvailable: any[];
  currentState: any;
}

export const initialProductState: ProductState = {
  pastActionHistory: [],
  futureActionAvailable: [],
  currentState: null,
  products: null,
  selectedProduct: null,
  error: null,
};
