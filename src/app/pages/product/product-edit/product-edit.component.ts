import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductState } from '../store/product.state';
import { selectOneProduct } from '../store/product.selectors';
import { loadOneProduct } from '../store/product.actions';
import { addToPastHistory } from '../store/product.actions';

@Component({
  selector: 'ngr-product-edit',
  template: `
    <ng-container *ngIf="product$ | async as product">
      <ngr-product-nav type="edit"></ngr-product-nav>
      <ngr-form-product [data]="product"></ngr-form-product>
    </ng-container>
  `,
  styles: [],
})
export class ProductEditComponent implements OnInit {
  product$: Observable<Product> = this.store.pipe(select(selectOneProduct));

  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>
  ) { }

  getproduct(id: number) {
    console.log(this.product$);
    this.store.dispatch(loadOneProduct({ id }));
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getproduct(id);
  }
}
