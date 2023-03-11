import {Component, Input} from '@angular/core';
import {allCategories, CategoryService} from "../../Services/category.service";
import {NavigationService} from "../../Services/navigation.service";
import {Category} from "../../typing";

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent {

  all_categories = allCategories
  @Input() categories ! : Category[]
  constructor(public categoryService:CategoryService,
              public navigationService:NavigationService) {
  }
}
