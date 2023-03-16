import {Component} from '@angular/core';
import {Navigation} from "@angular/router";
import {NavigationService} from "../../Services/navigation.service";
import {UserDetailService} from "../../Services/user-detail.service";
import {map, tap} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {SearchResults, User, UserPage} from "../../typing";

interface criteria {
  name: string
  value: string,
  icon: string
}

@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css']
})
export class UserWindowComponent {

  userAdds: SearchResults[] | null = null
  user: User | null = null
  user_id: string = ""
  profile_rating: criteria[] | null = null

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
        this.profile_rating = []
        this.setUpProfileRating(this.user)
      }))).subscribe()

  }


  private setUpProfileRating(user: User) {
    this.profile_rating = []
    this.user = user
    if (this.user.rating) {
      this.profile_rating.push({
        name: "Zufriedenheit",
        value: this.user.rating.replace("Zufriedenheit", ""),
        icon: "bi-emoji-smile-fill"
      })
    }
    if (this.user.friendliness) {
      this.profile_rating.push({
        name: "freundlich",
        value: this.user.friendliness.replace("freundlich", "")
        , icon: "bi-chat-dots-fill"
      })
    }
    if (this.user.reliability) {
      this.profile_rating.push({
        name: "zuverlässig",
        value: this.user.reliability.replace("zuverlässig", "")
        , icon: "bi-check-circle-fill"
      })
    }
    if (this.user.reply_rate) {
      this.profile_rating.push({
        name: "Antwortrate",
        value: this.user.reply_rate.replace("Antwortrate", ""),
        icon: "bi-chat-left-fill"
      })
    }
    if (this.user.reply_speed) {
      this.profile_rating.push({
        name: "Antwortzeit",
        value: this.user.reply_speed.replace("Antwortzeit", "")
        , icon: "bi-clock-fill"
      })
    }
    if (this.user.followers) {
      this.profile_rating.push({
        name: "Follower",
        value: this.user.followers.replace("Follower", "")
        , icon: "bi-people-fill"
      })
    }
  }
}
