import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppbarLgComponent } from './appbar-components/appbar-lg/appbar-lg.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppbarSmComponent } from './appbar-components/appbar-sm/appbar-sm.component';
import {FormsModule } from "@angular/forms";
import { MainWindowComponent } from './main-window-components/main-window/main-window.component';
import { MainCategoriesSmComponent } from './main-window-components/main-categories-sm/main-categories-sm.component';
import { SearchFilterLgComponent } from "./search-window-components/search-filter-lg/search-filter-lg.component";


import { AppRoutingModule } from './app-routing.module';
import { SearchWindowComponent } from './search-window-components/search-window/search-window.component';
import { SearchFilterSmComponent } from './search-window-components/search-filter-sm/search-filter-sm.component';
import { LoginWindowComponent } from './appbar-components/login-window/login-window.component';
import { MainItemComponent } from './main-window-components/main-item/main-item.component';
import { MainItemPlaceholderComponent } from './main-window-components/main-item-placeholder/main-item-placeholder.component';
import { MainCategoriesLgComponent } from './main-window-components/main-categories-lg/main-categories-lg.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddWindowComponent } from './add-window/add-window.component'
import { SearchItemComponent } from './search-window-components/search-item/search-item.component';
import { CityRangeDropdownComponent } from './appbar-components/city-range-dropdown/city-range-dropdown.component';
import {CategoryDropdownComponent} from "./appbar-components/category-dropdown/category-dropdown.component";
import {CityTypeaheadComponent} from "./appbar-components/city-typeahead/city-typeahead.component";
import { AddWindowImagesComponent } from './add-window-images/add-window-images.component';
import { AddWindowUserComponent } from './add-window-user/add-window-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AppbarLgComponent,
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
    AddWindowComponent,
    SearchItemComponent,
    CityRangeDropdownComponent,
    CategoryDropdownComponent,
    CityTypeaheadComponent,
    AddWindowImagesComponent,
    AddWindowUserComponent
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
