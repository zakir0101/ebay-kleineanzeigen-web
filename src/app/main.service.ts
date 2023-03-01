import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

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

      fetch("http://127.0.0.1:5000/main")
        .then((response) => response.json())
        .then((data) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }



}
export {MainItem}
