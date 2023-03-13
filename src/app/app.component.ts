import { Component } from '@angular/core';
import {CitiesService} from "./Services/cities.service";
import { CategoryService} from "./Services/category.service";
import {SearchService} from "./Services/search.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {NavigationService} from "./Services/navigation.service";
import {Category} from "./typing";
import {LoginService} from "./Services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebay-kleineanzeigen';
  categories : Category[] = []
  login:boolean = false
  constructor(private citiesService:CitiesService ,private categoryService:CategoryService,
            private searchService:SearchService,private route :ActivatedRoute,
              public navigationService:NavigationService ,private loginService:LoginService) {
  }



  ngOnInit(){
    this.categoryService.getCategories().subscribe(g_list => {
      this.categories = g_list
    })
    this.loginService.isUserLogged().subscribe(islogged => {
      this.login = islogged
    })



  }

}

