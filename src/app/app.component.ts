import { Component } from '@angular/core';
import {CitiesService, City} from "./cities.service";
import {CategoryService} from "./category.service";
import {SearchService} from "./search.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebay-kleineanzeigen';

  constructor(private citiesService:CitiesService ,private categoryService:CategoryService,
            private searchService:SearchService,private route :ActivatedRoute) {
  }



  ngOnInit(){

    this.route.queryParams.subscribe(params => {
      if(!params["city"])
        return
      this.searchService.activeSearch = params["text"]
      this.categoryService.setActiveCategoryByCode(params['category'])
      let city: City = {name: params["city"].split(":")[0], code: params["city"].split(":")[1]}
      this.citiesService.setActiveCity(city)
      this.searchService.activeRange = params["city"].split(":")[2]
      this.searchService.preisFrom = params['preis'].split(":")[0]
      this.searchService.preisTo = params['preis'].split(":")[1]
      this.searchService.anbieter = params['anbieter']
      this.searchService.paketdienst = params['paketdienst']
      this.searchService.anzeige = params['anzeige']
      this.searchService.direktKaufen = params['direktKaufen']
      this.searchService.isLoaded = true

    });

  }

}

