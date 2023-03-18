import {Injectable} from '@angular/core';
import {ModeService} from "./mode.service";
import {Observable} from "rxjs";
import {Login} from "../typing";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login: Login|null = null
  user_id:string = ""
  user_name : string = ""
  user_email : string  =  ""
  constructor(private modeService: ModeService) {
  }


  logout ( ){
    fetch(this.modeService.address + "/logout", {
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.type) {
          this.login = data
          console.log("user loged out")
        }
      });

  }


  isUserLogged(): Observable<Login> {

    const observable: Observable<Login> = new Observable((subscriber) => {
      fetch(this.modeService.address + "/islogged", {
        credentials: "include"
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.type) {
            this.login = data
            subscriber.next(data)
            this.user_id = data.user_id
            this.user_name = data.user_name
            this.user_email = data.user_email
            console.log("user_id = "+this.user_id)
          }
        });


    })

    return observable;
  }


}
