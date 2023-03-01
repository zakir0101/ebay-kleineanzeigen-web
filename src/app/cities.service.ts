import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from "./category.service";

interface City{
  name: string , code:string
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }
  deutschland:City =  {name:"Deutschland - ",code:"0"}
  public activeCity:City = this.deutschland

  getCities(search : string): Observable<City[]> {
    const observable:Observable<any> = new Observable((subscriber) => {
      subscriber.next([])

      fetch("http://127.0.0.1:5000/cities/"+search)
        .then((response) => response.json())
        .then((data) => {
          if (!data.type){
            let  names:string[] =  data.map( (c: City) => c.name)
            subscriber.next(data)
          }
        })
    })

    return observable;
  }

  getActiveCity():City{
    return this.activeCity
  }
  setActiveCity(c : City){
    this.activeCity = c
  }

  setActiveCityByCode(code: string)   {


  }
}

export {City}
