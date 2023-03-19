import { Component } from '@angular/core';
import {tap} from "rxjs";
import {Login, SearchResults, User} from "../typing";
import {NavigationService} from "../Services/navigation.service";
import {UserDetailService} from "../Services/user-detail.service";
import {LoginService} from "../Services/login.service";

@Component({
  selector: 'app-my-add-window',
  templateUrl: './my-add-window.component.html',
  styleUrls: ['./my-add-window.component.css']
})
export class MyAddWindowComponent {


  userAdds: SearchResults[] | null = null
  user: User | null = null
  user_id: string = ""
  login : Login | null = null

  constructor(private navigationService: NavigationService,
              private userService: UserDetailService,
              public loginService:LoginService) {
  }


  setLogin(login:Login){
    this.login = login
    if(this.login.is_logged)
      this.startMyAddWindow()

  }

  ngOnInit(){
    if(this.loginService.login ){
      this.setLogin(this.loginService.login)
    }
    else {
      this.loginService.isUserLogged().subscribe(Login => {
        this.setLogin(Login)
      })
    }


  }


  startMyAddWindow() {
    this.navigationService.loadQueryParamForUser().pipe(
      tap(link => this.userService.userLink = link),
      tap(link => this.userService.getUserPage().subscribe(userPage => {
        console.log(userPage)
        this.user_id = userPage.user_id
        this.user = userPage.user
        this.userAdds = userPage.user_adds
        this.userService.userLink = "/s-bestandsliste.html?userId="+this.login?.user_id
      }))).subscribe()

  }


}
