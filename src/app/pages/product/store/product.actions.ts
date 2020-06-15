import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';


// Actions for Undo and redo
export const addToPastHistory = createAction(
  '[History] Past Activity',
  props<{ pastHistory: any }>()
);

export const addToCurrentState = createAction(
  '[History] Current State',
  props<{ currentState: any }>()
);

export const Undo = createAction(
  '[Hitory] Undo'
);

export const Redo = createAction(
  '[Hitory] Redo'
);

// Actions for CRUD operations
// Load list
export const loadProducts = createAction('[Product List] Load Products');

export const loadProductsSuccess = createAction(
  '[Product List] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product List] Load Products Failure',
  props<{ error: any }>()
);

// Load one product
export const loadOneProduct = createAction(
  '[Product] Load One Product',
  props<{ id: number }>()
);

export const loadOneProductSuccess = createAction(
  '[Product] Load One Product Success',
  props<{ selectedProduct: Product }>()
);

export const loadOneProductFailure = createAction(
  '[Product] Load One Product Failure',
  props<{ error: any }>()
);

// Add product
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ error: any }>()
);

// Updade product
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

// Delete Product
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ id: number }>()
);

export const deleteProductFailure = createAction(
  '[Product] Delete Product Failure',
  props<{ error: any }>()
);
