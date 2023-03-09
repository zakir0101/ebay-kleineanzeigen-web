import { Component } from '@angular/core';
import {CitiesService} from "./cities.service";
import { CategoryService} from "./category.service";
import {SearchService} from "./search.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {NavigationService} from "./navigation.service";
import {Category} from "./typing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebay-kleineanzeigen';
  categories : Category[] = []
  constructor(private citiesService:CitiesService ,private categoryService:CategoryService,
            private searchService:SearchService,private route :ActivatedRoute,
              public navigationService:NavigationService) {
  }



  ngOnInit(){
    this.categoryService.getCategories().subscribe(g_list => {
      this.categories = g_list
    })



  }

}

