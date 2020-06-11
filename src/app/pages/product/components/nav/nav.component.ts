import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngr-product-nav',
  template: `
    <nav class="nav">
      <div class="nav-left">
        <a class="button outline" (click)="goBack()">
          <i class="fa fa-angle-left" aria-hidden="true"></i> Back</a
        >
      </div>
      <div class="nav-center">
        <span class="brand">
          <span *ngIf="type == 'edit'">Edit Product</span>
          <span *ngIf="type == 'list'">Product List</span>
          <span *ngIf="type == 'add'">Add Product</span>
        </span>
      </div>
      <div class="nav-right">
        <a
          *ngIf="type == 'list'"
          routerLink="/products/add"
          class="button outline"
          ><i class="fa fa-plus" aria-hidden="true"></i> Add Product</a
        >
      </div>
    </nav>
  `,
  styles: [
    `
      .nav .button {
        margin: 0;
      }
      .fa {
        margin-right: 10px;
      }
    `,
  ],
})
export class NavComponent implements OnInit {
  @Input() type: string;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }
}
