import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-home',
  template: `
    <div class="row">
      <div class="col text-center">
        <h1>Sample AngularStateManagement App</h1>
        <p>Products CRUD example</p>
        <a routerLink="/products/add" class="button primary text-uppercase"
          >Add new product</a
        >
        <a routerLink="/products" class="button secondary text-uppercase"
          >check all products</a
        >
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
