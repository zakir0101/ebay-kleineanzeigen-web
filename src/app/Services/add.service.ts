import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AddPage, UserPage} from "../typing";
import {ModeService} from "./mode.service";

@Injectable({
  providedIn: 'root'
})
export class AddService {
  add_link:string =  ""

  constructor(private  modeService:ModeService) { }

  getAddPage(): Observable<AddPage> {
    const observable: Observable<AddPage> = new Observable((subscriber) => {
      fetch(this.modeService.address + "/add?link=" + this.add_link, {
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

}
