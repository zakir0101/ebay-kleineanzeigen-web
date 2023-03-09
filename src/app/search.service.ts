import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CitiesService} from "./cities.service";
import {allCategories, CategoryService} from "./category.service";
import {Router} from "@angular/router";
import {ModeService} from "./mode.service";
import {SearchPage} from "./typing";


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
              private router:Router , private modeService:ModeService) {

  }



  getSearchResults(search: string, city: string, category: string): Observable<SearchPage> {
    const observable: Observable<SearchPage> = new Observable((subscriber) => {
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

      fetch(this.modeService.address+"/search/" + search + "/" + searchToken+"?path="+path
        , {
          credentials : "include"
        })
        .then((response) => response.json())
        .then((data:SearchPage) => {
          if (data.result) {

            subscriber.next(data)
          }
          else {
            console.log(data)
          }
        })
    })

    return observable;
  }


}



