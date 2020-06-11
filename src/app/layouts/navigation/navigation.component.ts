import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../pages/product/models/product';
import { ProductState } from '../../pages/product/store/product.state';
import { selectPastActions, selectState } from '../../pages/product/store/product.selectors';
import { Undo, Redo } from '../../pages/product/store/product.actions';

@Component({
  selector: 'ngr-navigation',
  template: `
    <nav class="nav bg-light">
      <div class="container">
        <div class="nav-left">
          <a class="brand" routerLink="/">AngularStateManagement</a>
        </div>
        <div class="nav-right">
          <div class="tabs">
            <a
              [routerLink]="['/']"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              >Home</a
            >
            <a
              [routerLink]="['/products']"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: false }"
              >Products</a
            >
            <a class="btn btn-link" (click)="undo()"><i class="fas fa-undo"></i></a>
            <a class="btn btn-link" (click)="redo()"><i class="fas fa-redo"></i></a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .brand {
        font-size: 1.2em;
        padding-left: 0;
      }
    `,
  ],
})
export class NavigationComponent implements OnInit {
  past$: Observable<any> = this.store.pipe(select(selectPastActions));
  pastActionHistory = [];
  futureActionAvailable = [];
  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.store.select(selectState).subscribe((state) => {
      console.log(state);
      this.pastActionHistory = state.pastActionHistory;
      this.futureActionAvailable = state.futureActionAvailable;
    });
  }

  undo() {
    if (this.pastActionHistory.length !== 0) {
      this.store.dispatch(Undo());
    }
  }
  redo() {
    if (this.futureActionAvailable.length !== 0) {
      this.store.dispatch(Redo());
    }
  }
}
