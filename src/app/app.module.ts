import { registerLocaleData } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReplaceComma } from './shered/pipes/replace-comma.pipe';
import { starRatingComponent } from './shered/components/star-rating/star-rating.component';

registerLocaleData(localeFr,"fr");
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    starRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
