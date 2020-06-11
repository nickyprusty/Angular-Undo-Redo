import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngr-toast-messages',
  template: `
    <div
      class="card text-center"
      [ngClass]="type"
      *ngIf="error$ | async as error"
    >
      {{ error }}
    </div>
  `,
  styles: [
    `
      .card {
        margin: 1em 0;
      }
    `,
  ],
})
export class ToastMessagesComponent implements OnInit {
  @Input() error$: string;
  @Input() type: string;

  constructor() {}

  ngOnInit(): void {}
}
