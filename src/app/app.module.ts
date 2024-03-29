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
import { UserWindowComponent } from './user-window-components/user-window/user-window.component';
import { AddWindowComponent } from './add-window-components/add-window/add-window.component'
import { SearchItemComponent } from './search-window-components/search-item/search-item.component';
import { CityRangeDropdownComponent } from './appbar-components/city-range-dropdown/city-range-dropdown.component';
import {CategoryDropdownComponent} from "./appbar-components/category-dropdown/category-dropdown.component";
import {CityTypeaheadComponent} from "./appbar-components/city-typeahead/city-typeahead.component";
import { AddWindowImagesComponent } from './add-window-components/add-window-images/add-window-images.component';
import { AddWindowUserComponent } from './add-window-components/add-window-user/add-window-user.component';
import { AddWindowFormComponent } from './add-window-components/add-window-form/add-window-form.component';
import { SearchItemPlaceholderComponent } from './search-window-components/search-item-placeholder/search-item-placeholder.component';
import { MessagesWindowComponent } from './message-window-components/messages-window/messages-window.component';
import { ConversationItemComponent } from './message-window-components/conversation-item/conversation-item.component';
import { MessageBoxComponent } from './message-window-components/message-box/message-box.component';
import { ConversationItemPlaceholderComponent } from './message-window-components/conversation-item-placeholder/conversation-item-placeholder.component';
import { UserDetailComponent } from './user-window-components/user-detail/user-detail.component';
import { MyAddWindowComponent } from './my-add-window/my-add-window.component';
import { PublishAddWindowComponent } from './publish-add-components/publish-add-window/publish-add-window.component';
import { ZipTypeaheadComponent } from './publish-add-components/zip-typeahead/zip-typeahead.component';
import { PublishAddFormComponent } from './publish-add-components/publish-add-form/publish-add-form.component';
import { ShowHtmlPipe } from './show-html.pipe';
import { HaveToLoginComponent } from './have-to-login/have-to-login.component';
import { SettingWindowComponent } from './setting-window/setting-window.component';


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
    UserWindowComponent,
    AddWindowComponent,
    SearchItemComponent,
    CityRangeDropdownComponent,
    CategoryDropdownComponent,
    CityTypeaheadComponent,
    AddWindowImagesComponent,
    AddWindowUserComponent,
    AddWindowFormComponent,
    SearchItemPlaceholderComponent,
    MessagesWindowComponent,
    ConversationItemComponent,
    MessageBoxComponent,
    ConversationItemPlaceholderComponent,
    UserDetailComponent,
    MyAddWindowComponent,
    PublishAddWindowComponent,
    ZipTypeaheadComponent,
    PublishAddFormComponent,
    ShowHtmlPipe,
    HaveToLoginComponent,
    SettingWindowComponent
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
