import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {ModeService} from "./mode.service";
import {City} from "./typing";


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private modeService:ModeService) { }
  deutschland:City =  {name:"Deutschland - ",code:"0"}
  public activeCity:City = this.deutschland

  getCities(search : string): Observable<City[]> {
    const observable:Observable<City[]> = new Observable((subscriber) => {
      subscriber.next([])

      fetch(this.modeService.address+"/cities/"+search , )
        .then((response) => response.json())
        .then((data) => {
          if (!data.type){
            console.log(data)
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


