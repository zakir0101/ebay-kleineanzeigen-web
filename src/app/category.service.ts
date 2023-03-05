import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {MainItem} from "./main.service";
import {Router} from "@angular/router";
import {CitiesService} from "./cities.service";

interface Category {
  name:string,
  url_link: string,
  code :  string,
  children:Category[]
}

let allCategories:Category = {name:"alle Kategorien" ,url_link :"https://www.ebay-kleinanzeigen.de/s-suchen.html", code:"", children:[]}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  activeCategory:Category=  allCategories ;
  categories:Category[] = []

  constructor( private citiesService :CitiesService,
               private router:Router) {
  }

  getCategories(): Observable<Category[]> {
    const observable:Observable<Category[]> = new Observable((subscriber) => {
      subscriber.next([])
      if(this.categories.length > 0)
        subscriber.next(this.categories)
      else {
        fetch("http://127.0.0.1:5000/categories")
          .then((response) => response.json())
          .then((data) => {
            if (!data.type) {
              this.categories = data
              subscriber.next(data)
            }
          });
      }

    })

    return observable;
  }

  getActiveCategory(){
    return this.activeCategory
  }


  setActiveCategory(k:Category){
    this.activeCategory=k;
  }




  setActiveCategoryByCode(code:string){
    this.getCategories().subscribe(cs => {
      for (const c of cs) {
        if(c.code === code ){
          this.activeCategory = c;
          return
        }
        for (const child of c.children) {
          if(child.code=== code ){
            this.activeCategory = child;
            return
          }
        }
      }

    })
  }



}

export {Category,allCategories}
