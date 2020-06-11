import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div>
      <ngr-product-nav type="add"></ngr-product-nav>
      <ngr-form-product [data]="null" [type]="'add'"></ngr-form-product>
    </div>
  `,
  styles: [],
})
export class ProductAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
