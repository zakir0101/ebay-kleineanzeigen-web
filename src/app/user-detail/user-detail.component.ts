import { Component } from '@angular/core';
import {Navigation} from "@angular/router";
import {NavigationService} from "../navigation.service";
import {UserDetailService} from "../user-detail.service";
import {map, tap} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {SearchResults, User, UserPage} from "../typing";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  userAdds:SearchResults[] = []
  user:User | undefined = undefined
  user_id:string = ""

  constructor(private navigationService:NavigationService,
              private userService:UserDetailService) {
  }

  ngOnInit(){
    this.navigationService.loadQueryParamForUser().pipe(
      tap(this.userService.setUserLink)).
    subscribe( link => this.userService.getUserPage().subscribe(userPage=> {
        this.user_id  = userPage.user_id
        this.user = userPage.user
        this.userAdds = userPage.user_adds

      }))

  }



}
