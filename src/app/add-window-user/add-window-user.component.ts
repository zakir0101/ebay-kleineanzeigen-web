import {Component, Input} from '@angular/core';
import { User } from '../typing';
import {UserDetailService} from "../Services/user-detail.service";
import {NavigationService} from "../Services/navigation.service";

@Component({
  selector: 'app-add-window-user',
  templateUrl: './add-window-user.component.html',
  styleUrls: ['./add-window-user.component.css']
})
export class AddWindowUserComponent {
  @Input() user  : User | null = null

  constructor(public userService:UserDetailService,
              public navigationService:NavigationService) {
  }
}
