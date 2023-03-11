import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-item-placeholder',
  templateUrl: './main-item-placeholder.component.html',
  styleUrls: ['./main-item-placeholder.component.css']
})
export class MainItemPlaceholderComponent {
  @Input() galerie:boolean = false;
}
