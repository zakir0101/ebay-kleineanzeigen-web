import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import makeFetchCookie from 'fetch-cookie'
import {ModeService} from "./mode.service";
import {MainPage} from "../typing";


@Injectable({
  providedIn: 'root'
})
export class MainService {
  fetchCookie:any = makeFetchCookie(fetch)

  constructor(private  modeService:ModeService) {
  }


  getMain(): Observable<MainPage> {
    const observable:Observable<MainPage> = new Observable((subscriber) => {
      this.fetchCookie(this.modeService.address+"/main" , {
        credentials : "include"
      })
        .then((response:Response) =>{
          return response.json()
        })
        .then((data:any) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }



}

