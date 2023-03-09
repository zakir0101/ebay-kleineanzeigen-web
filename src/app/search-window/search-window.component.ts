import { Component } from '@angular/core';
import { SearchService} from "../search.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SearchResults} from "../typing";
import {NavigationService} from "../navigation.service";



@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.css']
})
export class SearchWindowComponent {
  searchResults:SearchResults[] = []
  navigation:number  = 0
  alternative:SearchResults[] = []

  constructor(public searchService:SearchService , private route:ActivatedRoute,
              public navigationService:NavigationService) {

  }

  ngOnInit(){
    // this.route.queryParams.subscribe(params => {
    //   this.onSearch(params['text'],params['city'].split(":")[1],params['category'])
    // });


    this.navigationService.loadQueryParamForSearch().
    subscribe(params =>
      this.onSearch(params['text'],params['city'].split(":")[1],params['category'])
    )
  }



  onSearch(text:string,city:string,category:string){
    this.searchService.getSearchResults(text, city ,category)
      .subscribe( (res) =>{
        this.searchResults= res.result;
        this.alternative = res.alternative
        this.navigation = res.navigation
      })
  }
}
