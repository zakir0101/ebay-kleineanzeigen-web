import { Component } from '@angular/core';
import { MainService} from "../../Services/main.service";
import {CategoryService} from "../../Services/category.service";
import {Category, MainItem} from "../../typing";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent {
  list:number[] = [];
  galereis : MainItem[] = []
  mainItems :MainItem[] = []
  mainCount : number  = 40
  categories: Category[] = []
  constructor(public mainService:MainService ,public categoryService:CategoryService) {
  }

  ngOnInit(){


    this.mainService.getMain().subscribe(m_page => {
      this.galereis=m_page.galerie
      this.mainItems=m_page.main
    })

    this.categoryService.getCategories().subscribe(m_list => {
      this.categories=m_list })

  }

  scrollRight(scrollDiv: HTMLDivElement) {
    scrollDiv.scrollBy({top:0,left:100,behavior:"smooth"})
  }

  scrollLeft(scrollDiv: HTMLDivElement) {
    scrollDiv.scrollBy({top:0,left:-100,behavior:"smooth"})
  }
}
