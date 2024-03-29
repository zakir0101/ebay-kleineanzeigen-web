import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {MainPage, SettingPage, User, UserPage} from "../typing";
import {ModeService} from "./mode.service";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  userLink: string = ""
  empty_user: User = {
    user_name: "",
    user_logo:"",
    user_link: "",
    rating: "",
    friendliness: "",
    reliability: "",
    reply_rate: "",
    reply_speed: "",
    followers: "",
    user_ad_number: "",
    user_type: "",
    active_since: "",
  }

  constructor(private modeService: ModeService) {
  }


  getUserPage(): Observable<UserPage> {
    const observable: Observable<UserPage> = new Observable((subscriber) => {
      fetch(this.modeService.address + "/user/api?link=" + this.userLink, {
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


  setUserLink(link: string) {
    this.userLink = link
  }
}
