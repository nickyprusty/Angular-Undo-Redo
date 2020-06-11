import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectProductsFeature = createFeatureSelector<ProductState>(
  'productState'
);

export const selectProductsList = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.products
);

export const selectOneProduct = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.selectedProduct
);

export const selectErrorProduct = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.error
);

export const selectPastActions = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.pastActionHistory
);

export const selectState = createSelector(
  selectProductsFeature,
  (state: ProductState) => state
);


export const selectCurrentState = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.currentState
);

export const selectAvailableActions = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.futureActionAvailable
);
