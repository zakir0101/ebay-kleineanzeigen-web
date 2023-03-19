import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SettingPage} from "../typing";
import {ModeService} from "./mode.service";

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private modeService:ModeService) { }



  getSettingPage(): Observable<SettingPage> {
    const observable: Observable<SettingPage> = new Observable((subscriber) => {
      fetch(this.modeService.address + "/setting/api",  {
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
