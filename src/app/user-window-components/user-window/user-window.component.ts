import {Component} from '@angular/core';
import {Navigation} from "@angular/router";
import {NavigationService} from "../../Services/navigation.service";
import {UserDetailService} from "../../Services/user-detail.service";
import {map, tap} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {SearchResults, User, UserPage} from "../../typing";


@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css']
})
export class UserWindowComponent {

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
