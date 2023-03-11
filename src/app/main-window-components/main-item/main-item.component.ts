import {Component, Input} from '@angular/core';
import {MainItem} from "../../typing";
import {NavigationService} from "../../Services/navigation.service";
import {AddService} from "../../Services/add.service";

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.css']
})
export class MainItemComponent {
  @Input() item!: MainItem;
  @Input() galerie:boolean = false

  constructor(public navigationService:NavigationService,
              public addService:AddService) {
  }
}
