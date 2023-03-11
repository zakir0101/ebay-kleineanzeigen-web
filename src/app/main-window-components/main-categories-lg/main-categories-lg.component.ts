import {Component, Input} from '@angular/core';
import {allCategories, CategoryService} from "../../Services/category.service";
import {Category} from "../../typing";
import {NavigationService} from "../../Services/navigation.service";

@Component({
  selector: 'app-main-categories-lg',
  templateUrl: './main-categories-lg.component.html',
  styleUrls: ['./main-categories-lg.component.css']
})
export class MainCategoriesLgComponent {
  isSearch:boolean = false
  allCategories:Category = allCategories
  active : Category | null = null
 @Input() categories! : Category[]

  constructor(public categoryService:CategoryService ,
              public navigationService : NavigationService) {
  }


}
