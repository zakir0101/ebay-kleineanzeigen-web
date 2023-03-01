import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainWindowComponent} from "./main-window/main-window.component";
import {SearchWindowComponent} from "./search-window/search-window.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: MainWindowComponent },
  { path: 'search', component: SearchWindowComponent },

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
