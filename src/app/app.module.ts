import { registerLocaleData } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReplaceComma } from './shered/pipes/replace-comma.pipe';
import { starRatingComponent } from './shered/components/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel-list/hotel-detail/hotel-detail.component';

registerLocaleData(localeFr,"fr");
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    starRatingComponent,
    HomeComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'hotel/:id', component: HotelDetailComponent},
      {path: 'hotels', component: HotelListComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
