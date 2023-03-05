import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import makeFetchCookie from 'fetch-cookie'

interface MainItem {
  url_link: string,
  title: string,
  location: string,
  price: string,
  image_link: string
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  fetchCookie:any = makeFetchCookie(fetch)

  constructor() {
  }
  getGalerie(): Observable<MainItem[]> {
    const observable:Observable<MainItem[]> = new Observable((subscriber) => {
      subscriber.next([])

      fetch("http://127.0.0.1:5000/galerie")
        .then((response) => response.json())
        .then((data) => {
          if (!data.type)
            subscriber.next(data)

        });

    })

    return observable;
  }


  getMain(): Observable<MainItem[]> {
    const observable:Observable<MainItem[]> = new Observable((subscriber) => {
      subscriber.next([])

      let handleResponse = (response:Response) => {

        console.log("header logging")
        let cookie = response.headers.get("Set-Cookies")
        if(cookie)
          console.log(cookie)
        else
          console.log("there is no Set-Cookies")
      }

      this.fetchCookie("http://127.0.0.1:5000/main")
        .then((response:Response) =>{
          handleResponse(response)
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
export {MainItem}
