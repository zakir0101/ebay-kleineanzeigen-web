import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {City, City2, UserPage} from "../typing";
import {ModeService} from "./mode.service";
import {CitiesService} from "./cities.service";

@Injectable({
  providedIn: 'root'
})
export class PublishAddService {

  add_id : string = ""
  current : string = "form"

  title : string = ""
  price : string = ""

  description : string = ""
  contact_name : string = ""

  zip : string = ""
  city_code : string = ""

  activeCity : City
  constructor(private  modeService:ModeService,private citiesService:CitiesService) {
    this.activeCity = citiesService.deutschland
  }


  publishAdd(): Observable<any> {
    const observable: Observable<any> = new Observable((subscriber) => {
      fetch(this.modeService.address + "/publish/api?title=" + this.title+"&price="+this.price.toString()+
        "&zip="+this.zip.toString() + "&city_code=" + this.city_code.toString() +
        "&description=" + this.description + "&contact_name=" + this.contact_name, {
        credentials: "include"
      })
        .then((response: Response) => {
          return response.json()
        })
        .then((data: any) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }



  checkAdd(): Observable<any> {
    const observable: Observable<any> = new Observable((subscriber) => {
      fetch(this.modeService.address + "/check/add?add_id=" + this.add_id.toString(), {
        credentials: "include"
      })
        .then((response: Response) => {
          return response.json()
        })
        .then((data: any) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }


  getCitiesByZip(): Observable<City2[] > {
    const observable: Observable<City2[]> = new Observable((subscriber) => {
      fetch(this.modeService.address + "/cities/zip?zip=" + this.zip.toString(), {
        credentials: "include"
      })
        .then((response: Response) => {
          return response.json()
        })
        .then((data: any) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }


  clearParams(){
    this.current = "form"
    this.add_id = ""
    this.title  = ""
    this.price  = ""
    this.description  = ""
    this.contact_name  = ""
    this.zip   = ""
    this.city_code  = ""
  }

}
