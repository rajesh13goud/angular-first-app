import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ProductListComponent} from  './product-list/product-list.component';

import {TopBarComponent} from './top-bar-list/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,
  RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      {path:'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent}
    ])
     ],
  declarations: [ AppComponent, HelloComponent,ProductListComponent, TopBarComponent, ProductAlertComponent, ProductDetailsComponent, CartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }
