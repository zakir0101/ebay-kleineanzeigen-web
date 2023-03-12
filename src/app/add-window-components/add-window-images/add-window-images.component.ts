import {Component, Input} from '@angular/core';
import {ImageUrl} from "../../typing";

@Component({
  selector: 'app-add-window-images',
  templateUrl: './add-window-images.component.html',
  styleUrls: ['./add-window-images.component.css']
})
export class AddWindowImagesComponent {
  @Input() imagesUrl! : ImageUrl[]
  logger = (s:any) => console.log(s)
  constructor() {
  }


}
