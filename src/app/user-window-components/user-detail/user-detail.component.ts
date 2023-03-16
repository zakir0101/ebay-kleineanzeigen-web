import {Component, Input} from '@angular/core';
import {User} from "../../typing";

interface Criteria {
  name: string
  value: string,
  icon: string
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  @Input() user:User | null = null
  @Input() myadd:boolean = false
  profile_rating : Criteria[] | null = null

  ngOnChanges(){
    if (this.user)
      this.setUpProfileRating(this.user)
  }


  private setUpProfileRating(user: User) {
    console.log("settinig profile rating")
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
