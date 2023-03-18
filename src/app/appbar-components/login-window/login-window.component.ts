import {Component, EventEmitter, Output, TemplateRef, ViewChild} from '@angular/core';
import {LoginService} from "../../Services/login.service";
import { CookiesService} from "../../Services/cookies.service";
import {SearchService} from "../../Services/search.service";
import {Cookie} from "../../typing";



@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent {
  @ViewChild('modalTemplate') modalTemplate: TemplateRef<any>|undefined = undefined;
  @Output() setModalTemplate = new EventEmitter<TemplateRef<any>>();
  cookiesText:string =""
  isValid:boolean = false
  msg : string  = ""
  constructor(public loginService:LoginService,
              public cookiesService:CookiesService,
              public searchService :SearchService) {
  }

  ngAfterViewInit(){
    this.setModalTemplate.emit(this.modalTemplate)
  }

  checkCookies(cookiesText:string) {
    let cookies: Cookie[] = []
    try {
      cookies = JSON.parse(cookiesText)
      this.cookiesText = JSON.stringify(cookies, undefined, 4)
      this.isValid = true
      this.msg = "Format correct"
    } catch (e) {
      this.isValid = false
      this.msg = "Cookies syntax not accepted , should be Json Format" + e
    }
    if (cookies.length > 0) {

      for (const cook of cookies) {
        this.cookiesService.setCookie(cook)
        // this.cookiesService.clearCookies()
      }
      this.loginService.isUserLogged().subscribe(login => {
        this.isValid = login.is_logged
        if (login.is_logged)
          this.msg = "you have logged in Successfully"
        if (!login.is_logged)
          this.msg = "your credential are not accepted"
      })

    }

  }



   refreshPage(){
    window.location.reload();
  }

}
