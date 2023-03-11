import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainWindowComponent} from "./main-window-components/main-window/main-window.component";
import {SearchWindowComponent} from "./search-window-components/search-window/search-window.component";
import {RouterModule, Routes} from "@angular/router";
import {AddWindowComponent} from "./add-window/add-window.component"
import {UserDetailComponent} from "./user-detail/user-detail.component";

const routes: Routes = [
  { path: '', component: MainWindowComponent },
  { path: 'search', component: SearchWindowComponent },
  {path : "add" , component : AddWindowComponent},
  {path : "user" , component : UserDetailComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
