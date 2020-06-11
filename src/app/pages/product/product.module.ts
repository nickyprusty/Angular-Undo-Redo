import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductAddComponent } from './product-add/product-add.component';

import { StoreModule } from '@ngrx/store';
import * as fromProductState from './store/product.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    FormComponent,
    NavComponent,
    ProductAddComponent,
    ToastMessagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    StoreModule.forFeature(
      fromProductState.productStateFeatureKey,
      fromProductState.reducers,
      { metaReducers: fromProductState.metaReducers }
    ),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductModule {}
