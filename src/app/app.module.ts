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


import { AppRoutingModule } from './app-routing.module';
import { SearchWindowComponent } from './search-window/search-window.component';
import { SearchFilterSmComponent } from './search-filter-sm/search-filter-sm.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { MainItemComponent } from './main-item/main-item.component';
import { MainItemPlaceholderComponent } from './main-item-placeholder/main-item-placeholder.component';
import { MainCategoriesLgComponent } from './main-categories-lg/main-categories-lg.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { SearchItemComponent } from './search-item/search-item.component';



@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    AppbarSmComponent,
    MainWindowComponent,
    MainCategoriesSmComponent,
    SearchFilterLgComponent,
    SearchWindowComponent,
    SearchFilterSmComponent,
    LoginWindowComponent,
    MainItemComponent,
    MainItemPlaceholderComponent,
    MainCategoriesLgComponent,
    UserDetailComponent,
    AddDetailComponent,
    SearchItemComponent,
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
export class AppModule {}
