import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CitiesService, City} from "./cities.service";
import {allCategories, Category, CategoryService} from "./category.service";
import {Router} from "@angular/router";

interface SearchResults {
  image_url: string,
  location: string,
  title: string,
  description: string,
  price: string,
  url_link: string,
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  activeSearch : string = ""
  preisFrom:string = ""
  preisTo:string = ""
  anbieter:string = ""
  anzeige:string = ""
  direktKaufen:string = ""
  paketdienst:string = ""
  activeRange:string = ""
  isLoaded: boolean = false;
  constructor(private categoryService:CategoryService
              ,private citiesService:CitiesService,
              private router:Router) {

  }


  onUpdate() {
    let update: boolean = this.router.url.includes("/search")
    if (update) {
      this.onSearch()
    }
  }

  onSearch(){
    let cityName ;
    if(this.citiesService.activeCity.name)
      cityName = this.citiesService.activeCity.name + ":" + this.citiesService.activeCity.code +":"+this.activeRange
    else
      cityName = this.citiesService.deutschland.name+ ":"+this.citiesService.deutschland.code+":"
    this.router.navigate(
      ['/search'],
      {
        queryParams: {
          text: this.activeSearch === undefined ? "" : this.activeSearch,
          city:cityName ,
          category: this.categoryService.getActiveCategory().code,
          anbieter: this.anbieter,
          preis : this.preisFrom+":"+this.preisTo ,
          anzeige : this.anzeige,
          direktKaufen:this.direktKaufen,
          paketdienst : this.paketdienst,

        }
      });

  }


  navigateHome(){

    this.activeSearch = ""
    this.categoryService.setActiveCategory(allCategories)
    this.citiesService.setActiveCity(this.citiesService.deutschland)
    this.preisFrom = ""
    this.preisTo = ""
    this.anbieter = ""
    this.paketdienst = ""
    this.anzeige = ""
    this.direktKaufen = ""
    this.activeRange = ""
    this.isLoaded = false


    this.router.navigate(['/'],);

  }


  getSearchResults(search: string, city: string, category: string): Observable<SearchResults[]> {
    const observable: Observable<SearchResults[]> = new Observable((subscriber) => {
      subscriber.next([])
      let searchToken = "",path=""
      if (search !== "") {
        searchToken += "k0"
      } else {
        search = "None"
      }
      if (category !== allCategories.code)
        searchToken += category
      if (city !== "0") {
        searchToken += "l" + city
        if(this.activeRange)
          searchToken += "r"+ this.activeRange
      }
      if (!searchToken)
        searchToken = "None"
      if(this.anbieter)
        path += "anbieter:"+this.anbieter+"/"
      if(this.anzeige)
        path += "anzeige:"+this.anzeige+"/"
      if(this.direktKaufen)
        path += "direktkaufen:"+this.direktKaufen+"/"
      if(this.paketdienst)
        path += "paketdienst:"+this.paketdienst+"/"
      if(this.preisFrom || this.preisTo)
        path += "preis:"+this.preisFrom+":"+this.preisTo+"/"
      if(path === "")
        path = "None"

      fetch("http://127.0.0.1:5000/search/" + search + "/" + searchToken+"?path="+path)
        .then((response) => response.json())
        .then((data) => {
          if (!data.type) {
            subscriber.next(data)
          }
        })
    })

    return observable;
  }


}


export {SearchResults}
