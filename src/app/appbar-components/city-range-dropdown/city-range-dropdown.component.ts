import { Component } from '@angular/core';
import {CitiesService} from "../../Services/cities.service";
import {SearchService} from "../../Services/search.service";
import {NavigationService} from "../../Services/navigation.service";

@Component({
  selector: 'app-city-range-dropdown',
  templateUrl: './city-range-dropdown.component.html',
  styleUrls: ['./city-range-dropdown.component.css']
})
export class CityRangeDropdownComponent {

  ranges:string[] = ["5","10","20","30","50","100","150","200"]

  constructor(public citiesService:CitiesService,
              public searchService:SearchService,
              public navigationService:NavigationService) {
  }


}
