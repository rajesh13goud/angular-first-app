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

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,
  RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      {path:'products/:productId', component: ProductDetailsComponent}
    ])
     ],
  declarations: [ AppComponent, HelloComponent,ProductListComponent, TopBarComponent, ProductAlertComponent, ProductDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
