import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AddPage} from "../typing";
import {ModeService} from "./mode.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:string = ""
  add_id:string = ""
  add_type:string = ""
  contact_name:string = ""

  constructor(public modeService:ModeService) { }


  sendMessage(): Observable<any  > {
    let url = this.modeService.address + "/send?message="+this.message
      +"&add_id="+this.add_id+"&add_type="+this.add_type+"&contact_name="+this.contact_name

    console.log(url)
    const observable: Observable<any> = new Observable((subscriber) => {
      fetch(url, {
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
