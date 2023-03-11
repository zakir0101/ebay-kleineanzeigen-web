import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {allCategories, CategoryService} from "../Services/category.service";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, switchMap} from "rxjs";
import {CitiesService} from "../Services/cities.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {SearchService} from "../Services/search.service";
import {NgbDropdownConfig, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuItem} from "../appbar-sm/appbar-sm.component";
import {LoginService} from "../Services/login.service";
import {CookiesService} from "../Services/cookies.service";
import {Category, City} from "../typing";
import {NavigationService} from "../Services/navigation.service";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
  providers: [NgbDropdownConfig], // add NgbDropdownConfig to the component providers
})
export class AppbarComponent {

  all_categories: Category = allCategories
  @Input() categories!: Category[]

  public city: City = {name: "", code: ""};
  public cities: any[] = []
  searching: boolean = false
  searchFailed: boolean = false
  ranges:string[] = ["5","10","20","30","50","100","150","200"]
  meinsItems:MenuItem[]=[
    {icon:"",name:"Nachrichten",onItemClick:()=>{}},
    {icon:"",name:"Anzeigen",onItemClick:()=>{}},
    {icon:"",name:"Einstellung",onItemClick:()=>{}},
  ]
meinsItems2:MenuItem[]=[
    {icon:"",name:"Merkliste",onItemClick:()=>{}},
    {icon:"",name:"Nutzer",onItemClick:()=>{}},
    {icon:"",name:"Über uns",onItemClick:()=>{}},
  ]

  // searchingFor: string = ""
  inputFormatter = (c: City) => {
    return c.name
  };
  outputFormatter = (c: City) => {
    if (c.code === "0") return ""
    else return c.name
  };
  logger = (text: string) => console.log(text)
  login:boolean = false
  modalTemplate:any ;
  constructor(public searchService: SearchService,
              public categoryService: CategoryService,
              public citiesService: CitiesService,
              public route: ActivatedRoute,
              public router: Router, dropdownConfig:NgbDropdownConfig,
              public loginService:LoginService,
              public modalService:NgbModal,
              public cookiesService:CookiesService,
              public navigationService:NavigationService) {


  }

  ngOnInit() {
    // this.categories=this.categoryService.getCategories().filter((k)=> (k.name!=='alle Kategorien'))

    this.loginService.isUserLogged().subscribe(islogged => {
      this.login = islogged
    })



    // this.searchService.activeSearch = ""
     }

   refreshPage(){
    window.location.reload();
  }

  search: OperatorFunction<string, readonly City[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term) => {
          if (term.length < 1)
            return []
          else {
            return this.citiesService.getCities(term)
          }
        }
      ),
    );


  ngAfterContentInit() {

  }
}
