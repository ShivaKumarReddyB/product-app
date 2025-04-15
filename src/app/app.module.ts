import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductDetailComponent } from './shared/product-detail/product-detail.component';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, ProductListComponent, ProductDetailComponent],
  imports: [BrowserModule, AppRoutingModule],

  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
