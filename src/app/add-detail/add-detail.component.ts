import {Component} from '@angular/core';
import {AddService} from "../add.service";
import {Navigation} from "@angular/router";
import {NavigationService} from "../navigation.service";
import {filter, map, tap} from "rxjs";
import {AddPage, SearchResults, User} from "../typing";
import {UserDetailService} from "../user-detail.service";

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent {
  addPage: AddPage | undefined = undefined
  otherAdd: SearchResults[] = []
  similarAdd: SearchResults[] = []
  user : User | null = null

  constructor(public addService: AddService, public navigationService: NavigationService,
              public userService:UserDetailService) {
  }


  ngOnInit() {
    this.navigationService.loadQueryParamForAdd().pipe(
      tap(link => this.addService.add_link = link)
    ).subscribe(link => this.addService.getAddPage().subscribe(addPage => {
      this.user = addPage.user
      this.addPage = addPage
      this.otherAdd = addPage.other_add_by_user
      this.similarAdd = addPage.other_add_similar
    }))
  }


}

