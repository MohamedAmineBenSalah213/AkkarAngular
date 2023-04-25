import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AppRoutingModule } from './app-routing.module';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ApartmentsComponent,
    ApartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
