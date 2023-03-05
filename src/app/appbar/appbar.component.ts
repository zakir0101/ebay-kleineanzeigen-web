import {Component} from '@angular/core';
import {allCategories, Category, CategoryService} from "../category.service";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, switchMap} from "rxjs";
import {CitiesService, City} from "../cities.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {SearchService} from "../search.service";
import {NgbDropdownConfig} from "@ng-bootstrap/ng-bootstrap";
import {MenuItem} from "../appbar-sm/appbar-sm.component";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
  providers: [NgbDropdownConfig], // add NgbDropdownConfig to the component providers
})
export class AppbarComponent {

  all_categories: Category = allCategories
  categories: Category[] = []

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


  constructor(public searchService: SearchService,
              public categoryService: CategoryService,
              public citiesService: CitiesService,
              public route: ActivatedRoute,
              public router: Router, dropdownConfig:NgbDropdownConfig) {


  }

  ngOnInit() {
    // this.categories=this.categoryService.getCategories().filter((k)=> (k.name!=='alle Kategorien'))
    this.categoryService.getCategories().subscribe(g_list => {
      this.categories = g_list
    })
    // this.searchService.activeSearch = ""
     }


  search: OperatorFunction<string, readonly City[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term) => {
          if (term.length < 1)
            return []
          else {
            return this.citiesService.getCities(term).pipe()

          }
        }
      ),
    );


  ngAfterContentInit() {

  }
}
