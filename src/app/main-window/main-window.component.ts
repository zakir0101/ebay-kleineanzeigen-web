import { Component } from '@angular/core';
import {MainItem, MainService} from "../main.service";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent {
  list:number[] = [];
  galereis : MainItem[] = []
  mainItems :MainItem[] = []
  constructor(public mainService:MainService) {
  }

  ngOnInit(){


    this.mainService.getGalerie().subscribe(g_list => {
      this.galereis=g_list })

    this.mainService.getMain().subscribe(m_list => {
      this.mainItems=m_list })

    // for (let i = 0; i <= 50; i++) {
    //   this.list.push(i);
    // }

  }

}
