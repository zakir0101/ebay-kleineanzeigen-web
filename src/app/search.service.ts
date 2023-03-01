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

  constructor(private categoryService:CategoryService
              ,private citiesService:CitiesService,
              private router:Router) {

  }


  onUpdate() {
    let update: boolean = this.router.url.includes("/search")
    if (update) {
      this.router.navigate(
        ['/search'],
        {
          queryParams: {
            text: this.activeSearch === undefined ? "" : this.activeSearch,
            city: this.citiesService.activeCity.name + ":" + this.citiesService.activeCity.code,
            category: this.categoryService.getActiveCategory().code,
            anbieter: this.anbieter,
            preis : this.preisFrom+":"+this.preisTo
          }
        });
    }
  }





  getSearchResults(search: string, city: string, category: string): Observable<SearchResults[]> {
    const observable: Observable<SearchResults[]> = new Observable((subscriber) => {
      subscriber.next([])
      let searchToken = ""
      if (search !== "") {
        searchToken += "k0"
      } else {
        search = "None"
      }
      if (category !== allCategories.code)
        searchToken += category
      if (city !== "0")
        searchToken += "l" + city

      if (!searchToken)
        searchToken = "None"
      fetch("http://127.0.0.1:5000/search/" + search + "/" + searchToken)
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
