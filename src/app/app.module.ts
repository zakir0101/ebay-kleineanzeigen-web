import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppbarSmComponent } from './appbar-sm/appbar-sm.component';
import {FormsModule } from "@angular/forms";
import { MainWindowComponent } from './main-window/main-window.component';
import { MainCategoriesSmComponent } from './main-categories-sm/main-categories-sm.component';
import { SearchFilterLgComponent } from "./search-filter-lg/search-filter-lg.component";

import { MainGalerieComponent } from './main-galerie/main-galerie.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchWindowComponent } from './search-window/search-window.component';
import { SearchFilterSmComponent } from './search-filter-sm/search-filter-sm.component';


@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    AppbarSmComponent,
    MainWindowComponent,
    MainCategoriesSmComponent,
    SearchFilterLgComponent,
    MainGalerieComponent,
    SearchWindowComponent,
    SearchFilterSmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
