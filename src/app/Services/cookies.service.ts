import {Injectable} from '@angular/core';
import {ModeService} from "./mode.service";
import {Cookie} from "../typing";


@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private modeService: ModeService) {
  }


  setCookie(cookie: Cookie) {
    const d = new Date();
    let expires = ""
    d.setTime(cookie.expirationDate * 1000);

    if (cookie.expirationDate)
      expires = "; expires=" + d.toUTCString();
    let domain: string = ""
    let address = this.modeService.address?.replace("http://","")
    address  = address?.replace("https://","")
    if (address?.includes(":"))
      domain = "; domain=" + "."+address?.split(":")[0]
    else
      domain = "; domain=." + "."+ address
    let path = "; Path=/"
    let secure = ""
    if (cookie.secure)
      secure = "; Secure"
    let cookieString = cookie.name + "=" + cookie.value + expires+domain+path
    // +domain  + path  ;
    document.cookie = cookieString
  }

  deleteCookie(cname: string) {
    const d = new Date();
    d.setTime(1709582369);
    document.cookie = cname + "=; expires=Thu, 16 Dec 1996 00:00:00 UTC; path=/;";
  }

  getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  clearCookies_old() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      let name = c.split("=")[0]
      console.log("cookies name : " + name + " : will be deleted")
      document.cookie = name + "=; expires=Thu, 16 Dec 1996 00:00:00 UTC;";

    }

  }


  clearCookies() {
    let cookies = document.cookie.split("; ");
    for (let c = 0; c < cookies.length; c++) {
      let d = window.location.hostname.split(".");
      while (d.length > 0) {
        let cookieBase = encodeURIComponent(cookies[c].split(";")[0]
            .split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
            d.join('.') + ' ;path=';
        let p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        }
        d.shift();
      }
    }
  }


}



