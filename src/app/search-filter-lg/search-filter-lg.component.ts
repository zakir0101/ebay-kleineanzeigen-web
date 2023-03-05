import { Component } from '@angular/core';
import {allCategories, Category, CategoryService} from "../category.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {from, of} from "rxjs";
import {SearchService} from "../search.service";
import {CitiesService, City} from "../cities.service";


@Component({
  selector: 'app-search-filter-lg',
  templateUrl: './search-filter-lg.component.html',
  styleUrls: ['./search-filter-lg.component.css']
})
export class SearchFilterLgComponent {

  categories:Category[]=[]
  active:Category = {name:"",code:"",url_link:"",children:[
    ]};

  allCategories = allCategories;
  isSearch = this.router.url.includes("/search")
  cities:City[]=[]
  constructor (public categoryService:CategoryService,
               public router:Router,
                public searchService:SearchService,
               public citiesService :CitiesService) {
  }
  logger = (s:any) => console.log(s)

  onChangeFrom(event:Event){
    let from = parseInt ( (event.target as HTMLInputElement).value)
    let to = parseInt( this.searchService.preisTo)
    if(isNaN(to))
      to = 10000000000
    if (from < 1 ){
      (event.target as HTMLInputElement).value = ""
      this.searchService.preisFrom = ""
      return
    }
    else if(  from > to  )
    {
      (event.target as HTMLInputElement).value = to.toString()
      this.searchService.preisFrom = to.toString()
      return
    }else {
      this.searchService.preisFrom = from.toString()
    }

  }
  onChangeTo(event:Event){
    let to = parseInt ( (event.target as HTMLInputElement).value)
    let from = parseInt( this.searchService.preisFrom)
    if(isNaN(to))
      from = 0

    if (to < 1){
      (event.target as HTMLInputElement).value = ""
      this.searchService.preisTo = ""
      return
    }
    else if( to < from){
      (event.target as HTMLInputElement).value = from.toString()
      this.searchService.preisTo = from.toString()
      return
    }
  else
      this.searchService.preisTo = (to.toString())
  }
  ngOnInit(){
    // this.categories=this.categoryService.getCategories().filter((k)=> (k.name!=='alle Kategorien'))
    this.categoryService.getCategories().subscribe(g_list => {
      this.categories=g_list })
    this.citiesService.getCities(this.citiesService.deutschland.name.slice(0,11)).
    subscribe(c => {
      this.cities = c.filter(city => city.code !== "0" )
    })

  }

}
