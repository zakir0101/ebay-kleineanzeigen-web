import { Component } from '@angular/core';
import {SearchResults, SearchService} from "../search.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {City} from "../cities.service";
import {Category} from "../category.service";


@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.css']
})
export class SearchWindowComponent {
  searchResults:SearchResults[] = []


  constructor(public searchService:SearchService , private route:ActivatedRoute) {

  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.onSearch(params['text'],params['city'].split(":")[1],params['category'])
    });
  }



  onSearch(text:string,city:string,category:string){
    this.searchService.getSearchResults(text, city ,category)
      .subscribe( (res) =>{
        this.searchResults= res;
      })
  }
}
