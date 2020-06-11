import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductHttpService } from '../services/product-http.service';
import {
  map,
  mergeMap,
  catchError,
  switchMap,
  withLatestFrom,
  tap,
  concatMap,
} from 'rxjs/operators';
import * as fromProductActions from './product.actions';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectProductsList } from './product.selectors';
import { ProductState } from './product.state';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProducts),
      withLatestFrom(this.store.pipe(select(selectProductsList))),
      switchMap(([count, results]) => {
        if (results) {
          return of(
            fromProductActions.loadProductsSuccess({
              products: results,
            })
          );
        } else {
          return this.http.getAllProducts().pipe(
            map((product) =>
              fromProductActions.loadProductsSuccess({
                products: product,
              })
            ),
            catchError((error) => {
              return of(fromProductActions.loadProductsFailure({ error }));
            })
          );
        }
      })
    )
  );

  loadOneProducts$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(fromProductActions.loadOneProduct),
      map((action) => action.id),
      withLatestFrom(this.store.pipe(select(selectProductsList))),
      switchMap(([id, products]) => {
        if (products) {
          const selectedProduct = products.filter((item) => +item.id === id)[0];
          return of(
            fromProductActions.loadOneProductSuccess({ selectedProduct })
          );
        } else {
          return this.http.getOneProduct(id).pipe(
            map((product) =>
              fromProductActions.loadOneProductSuccess({
                selectedProduct: product,
              })
            ),
            catchError((error) => {
              return of(fromProductActions.loadOneProductFailure({ error }));
            })
          );
        }
      })
    );
  });

  createProduct$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(fromProductActions.addProduct),
      mergeMap((action) =>
        this.http.postProduct(action.product).pipe(
          map((product: Product) => {
            return fromProductActions.addProductSuccess({ product });
          }),
          catchError((error) =>
            of(fromProductActions.addProductFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(['/products']))
    )
  );

  updateProduct$ = createEffect(
    (): any =>
      this.actions$.pipe(
        ofType(fromProductActions.updateProduct),
        concatMap((action) => this.http.putProduct(action.product)),
        tap(() => this.router.navigate(['/products']))
      ),
    { dispatch: false }
  );

  deleteProduct$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(fromProductActions.deleteProduct),
      mergeMap((action) =>
        this.http.deleteProduct(action.id).pipe(
          map(() => fromProductActions.deleteProductSuccess({ id: action.id })),
          catchError((error) =>
            of(fromProductActions.deleteProductFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(['/products']))
    )
  );

  constructor(
    private actions$: Actions,
    private http: ProductHttpService,
    private store: Store<ProductState>,
    private router: Router
  ) { }
}
