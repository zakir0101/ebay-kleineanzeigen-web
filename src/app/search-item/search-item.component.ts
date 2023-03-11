import {Component, Input} from '@angular/core';
import {SearchResults} from "../typing";
import {NavigationService} from "../Services/navigation.service";
import {UserDetailService} from "../Services/user-detail.service";
import {AddService} from "../Services/add.service";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  @Input() item!:SearchResults

  constructor(public navigationService:NavigationService,
              public addService:AddService) {
  }

  onItemClick(item:SearchResults) {
    this.addService.add_link = item.url_link
    this.navigationService.navigateAddPage()
  }
}
