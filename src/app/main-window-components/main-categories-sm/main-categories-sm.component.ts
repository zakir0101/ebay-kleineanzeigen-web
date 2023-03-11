import {Component, Input} from '@angular/core';
import {Category} from "../../typing";


interface ListItem{
  name:string;
  icon : string
}


@Component({
  selector: 'app-main-categories-sm',
  templateUrl: './main-categories-sm.component.html',
  styleUrls: ['./main-categories-sm.component.css']
})
export class MainCategoriesSmComponent {
  @Input() categories ! :Category[];

  items:ListItem[]=[
    {name:"Auto,Rad & boot", icon:"bi-car-front-fill"},
    {name:"House & Garten", icon:"bi-car-front-fill"},
    {name:"Immobilien", icon:"bi-car-front-fill"},
    {name:"Mode & Beauty", icon:"bi-car-front-fill"},
    {name:"Weitere Kategorien", icon:"bi-car-front-fill"},
  ]



}
