import {Component, EmbeddedViewRef, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {SearchService} from "../../Services/search.service";
import {CitiesService} from "../../Services/cities.service";
import { CategoryService} from "../../Services/category.service";
import {Router} from "@angular/router";
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {NavigationService} from "../../Services/navigation.service";
import {Category, Login} from "../../typing";
import {ModeService} from "../../Services/mode.service";


interface MenuItem {
  name:string,
  icon:string,
  onItemClick: () => void
}




@Component({
  selector: 'app-appbar-sm',
  templateUrl: './appbar-sm.component.html',
  styleUrls: ['./appbar-sm.component.css']
})
export class AppbarSmComponent {
  menu:MenuItem[]=[
    {icon:"bi-house",name:"Start" ,
      onItemClick: ()=>{this.offcanvasService.dismiss(); this.navigationService.navigateHomePage()}
    },
    {icon:"bi-search",name:"Suche" ,
      onItemClick: ()=>{this.offcanvasService.dismiss(); this.onSearch();}
    },
    {icon:"bi-chat-dots",name:"Nachricht",
      onItemClick:()=>{this.offcanvasService.dismiss(); this.onNavigateMessagePage()}},
    {icon:"bi-star",name:"Favoriten" ,onItemClick:()=>{}},
    {icon:"bi-plus",name:"Anzeige aufgeben" ,
      onItemClick:()=>{this.offcanvasService.dismiss();this.navigationService.navigatePublishPage()}},
    {icon:"bi-person",name:"meine Anzeigen" ,onItemClick:()=>{
      this.offcanvasService.dismiss();this.navigationService.navigateMyAddPage()
      }},
    {icon:"bi-gear-fill",name:"Einstellung" ,onItemClick:()=>{}},
    {icon:"bi-question-circle",name:"Hilfe" ,onItemClick:()=>{}},
  ]
  @Input() login: Login | null = null

  search:string="s";
  @ViewChild('template', { static: true })  template:any;
  @Input() categories!:Category[];
  constructor(public searchService:SearchService
              , public viewContainerRef:ViewContainerRef,
              public citiesService : CitiesService,
              public categoryService : CategoryService,
              public router : Router ,
              public offcanvasService:NgbOffcanvas,
              public navigationService:NavigationService,
              public modeService:ModeService) {
  }

  ngOnInit(){
    this.viewContainerRef.createEmbeddedView(this.template)
  }

  onNavigateMessagePage() {
    console.log("hello world")
    this.navigationService.navigateMessagePage()
  }
  openOffcanvas(content: TemplateRef<any>) {

  }

  getCityName() {
    if(this.citiesService.activeCity.name)
      return this.citiesService.activeCity.name.slice(0,12)
    else
      return this.citiesService.deutschland.name
  }

  onSearch() {
    if(this.router.url.includes("search"))
      this.navigationService.refreshSearchPage()
    else {
      this.navigationService.navigateSearchPage()
    }
  }
}
export {MenuItem}
