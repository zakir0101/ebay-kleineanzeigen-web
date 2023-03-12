import {Component} from '@angular/core';
import {AddService} from "../../Services/add.service";
import {Navigation} from "@angular/router";
import {NavigationService} from "../../Services/navigation.service";
import {filter, map, tap} from "rxjs";
import {AddPage, ImageUrl, SearchResults, User} from "../../typing";
import {UserDetailService} from "../../Services/user-detail.service";
import {MessageService} from "../../Services/message.service";
import {AddWindowFormComponent} from "../add-window-form/add-window-form.component";

@Component({
  selector: 'app-add-window',
  templateUrl: './add-window.component.html',
  styleUrls: ['./add-window.component.css']
})
export class AddWindowComponent {
  addPage: AddPage | null = null
  otherAdd: SearchResults[] = []
  similarAdd: SearchResults[] = []
  user : User | null = null
  imagesUrl : ImageUrl[] = []

  constructor(public addService: AddService, public navigationService: NavigationService,
              public userService:UserDetailService, public messageService:MessageService) {
  }


  ngOnInit() {
    this.navigationService.loadQueryParamForAdd().pipe(
      tap(link => this.addService.add_link = link)
    ).subscribe(link => this.addService.getAddPage().subscribe(addPage => {

      this.user = addPage.user
      this.addPage = addPage
      this.otherAdd = addPage.other_add_by_user
      this.similarAdd = addPage.other_add_similar
      this.imagesUrl = addPage.images_url

      if(this.user.user_type.includes("Privater "))
        this.messageService.add_type="privat"
      else
        this.messageService.add_type="gewerblich"
      this.messageService.add_id = addPage.add_id

      console.log(this.imagesUrl)
    }))
  }


  scroll(form: HTMLElement) {
    form.scrollIntoView({behavior:"smooth"})
  }
}

