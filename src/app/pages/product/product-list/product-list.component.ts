import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Store, select } from '@ngrx/store';
import {
  selectProductsList,
  selectErrorProduct,
} from '../store/product.selectors';
import { ProductState } from '../store/product.state';
import * as fromActions from '../../product/store/product.actions';

@Component({
  selector: 'ngr-product-list',
  template: `
    <ng-container>
      <ng-template #loading>
        <div class="text-center">
          <div>
            <img
              src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif"
              alt=""
            />
          </div>
        </div>
      </ng-template>
      <ngr-product-nav type="list"></ngr-product-nav>
      <ngr-toast-messages
        [error$]="error$"
        [type]="'text-error'"
      ></ngr-toast-messages>
      <div class="row" *ngIf="products$ | async as products; else loading">
        <div *ngFor="let product of products" class="col-12 col-4-md col-4-lg">
          <div class="card">
            <header>
              <h4 class="is-center">{{ product.name }}</h4>
            </header>
            <div class="image">
              <div class="placeholder">
                <img src="{{ product.picture }}" alt="{{ product.name }}" />
              </div>
            </div>
            <footer class="is-center">
              <a routerLink="/products/{{ product.id }}" class="button">Edit</a>
              <a (click)="deleteProduct(product)" class="button error"
                >Delete</a
              >
            </footer>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .image {
        width: 150px;
        margin: 20px auto;
      }
      .image .placeholder {
        width: 150px;
        height: 150px;
        background-color: #dddddd;
      }
    `,
  ],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  error$ = this.store.pipe(select(selectErrorProduct));

  constructor(private store: Store<ProductState>) { }

  getProducts() {
    this.products$ = this.store.pipe(select(selectProductsList));
  }

  deleteProduct(product: Product) {
    if (confirm(`Are you want to delete this Product: ${product.name} ?`)) {
      this.store.dispatch(fromActions.deleteProduct({ id: product.id }));
    }
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadProducts());
    this.getProducts();
  }
}
