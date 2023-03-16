import { Component } from '@angular/core';
import {tap} from "rxjs";
import {SearchResults, User} from "../typing";
import {NavigationService} from "../Services/navigation.service";
import {UserDetailService} from "../Services/user-detail.service";

@Component({
  selector: 'app-my-add-window',
  templateUrl: './my-add-window.component.html',
  styleUrls: ['./my-add-window.component.css']
})
export class MyAddWindowComponent {


  userAdds: SearchResults[] | null = null
  user: User | null = null
  user_id: string = ""

  constructor(private navigationService: NavigationService,
              private userService: UserDetailService) {
  }


  ngOnInit() {
    this.navigationService.loadQueryParamForUser().pipe(
      tap(link => this.userService.userLink = link),
      tap(link => this.userService.getUserPage().subscribe(userPage => {
        console.log(userPage)
        this.user_id = userPage.user_id
        this.user = userPage.user
        this.userAdds = userPage.user_adds
      }))).subscribe()

  }


}
