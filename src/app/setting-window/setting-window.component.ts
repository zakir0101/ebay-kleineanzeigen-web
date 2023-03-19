import { Component } from '@angular/core';
import {Login, SettingPage} from "../typing";
import {LoginService} from "../Services/login.service";
import {SettingService} from "../Services/setting.service";

@Component({
  selector: 'app-setting-window',
  templateUrl: './setting-window.component.html',
  styleUrls: ['./setting-window.component.css']
})
export class SettingWindowComponent {

  login: Login | null = null
  settingPage :SettingPage | null =null

  constructor(public loginService:LoginService,public settingService:SettingService) {
  }

  setLogin(login: Login) {
    this.login = login
    if (this.login.is_logged)
      this.startSettingWindow()

  }

  ngOnInit() {
    if (this.loginService.login) {
      this.setLogin(this.loginService.login)
    } else {
      this.loginService.isUserLogged().subscribe(Login => {
        this.setLogin(Login)
      })
    }


  }


  startSettingWindow() {
    this.settingService.getSettingPage().subscribe(s_page=> this.settingPage = s_page)
  }
}
