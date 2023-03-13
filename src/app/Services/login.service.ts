import {Injectable} from '@angular/core';
import {ModeService} from "./mode.service";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login: boolean = false
  user_id:string = ""
  constructor(private modeService: ModeService) {
  }


  logout ( ){
    fetch(this.modeService.address + "/logout", {
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.type) {
          this.login = false
          console.log("user loged out")
        }
      });

  }


  isUserLogged(): Observable<boolean> {

    const observable: Observable<boolean> = new Observable((subscriber) => {
      fetch(this.modeService.address + "/islogged", {
        credentials: "include"
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.type) {
            this.login = data.isLogged
            subscriber.next(data.isLogged)
            this.user_id = data.user_id
            console.log("user_id = "+this.user_id)
          }
        });


    })

    return observable;
  }


}
