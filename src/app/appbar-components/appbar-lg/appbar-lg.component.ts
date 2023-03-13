import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {allCategories, CategoryService} from "../../Services/category.service";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, switchMap} from "rxjs";
import {CitiesService} from "../../Services/cities.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {SearchService} from "../../Services/search.service";
import {NgbDropdownConfig, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuItem} from "../appbar-sm/appbar-sm.component";
import {LoginService} from "../../Services/login.service";
import {CookiesService} from "../../Services/cookies.service";
import {Category, City} from "../../typing";
import {NavigationService} from "../../Services/navigation.service";


@Component({
  selector: 'app-appbar-lg',
  templateUrl: './appbar-lg.component.html',
  styleUrls: ['./appbar-lg.component.css'],
  providers: [NgbDropdownConfig], // add NgbDropdownConfig to the component providers
})
export class AppbarLgComponent {

  all_categories: Category = allCategories
  @Input() categories!: Category[]
  @Input() login!: boolean


  meinsItems: MenuItem[] = [
    {icon: "", name: "Nachrichten", onItemClick:() => this.onNavigateMessagePage()},
    {
      icon: "", name: "Anzeigen", onItemClick: () => {
      }
    },
    {
      icon: "", name: "Einstellung", onItemClick: () => {
      }
    },
  ]
  meinsItems2: MenuItem[] = [
    {
      icon: "", name: "Merkliste", onItemClick: () => {
      }
    },
    {
      icon: "", name: "Nutzer", onItemClick: () => {
      }
    },
    {
      icon: "", name: "Über uns", onItemClick: () => {
      }
    },
  ]
  modalTemplate: any;

  constructor(public searchService: SearchService,
              public categoryService: CategoryService,
              public citiesService: CitiesService,
              public route: ActivatedRoute,
              public router: Router, dropdownConfig: NgbDropdownConfig,
              public loginService: LoginService,
              public modalService: NgbModal,
              public cookiesService: CookiesService,
              public navigationService: NavigationService) {


  }

  ngOnInit() {
    // this.categories=this.categoryService.getCategories().filter((k)=> (k.name!=='alle Kategorien'))


    // this.searchService.activeSearch = ""
  }

  onNavigateMessagePage() {
    console.log("hello world")
    this.navigationService.navigateMessagePage()
  }

  refreshPage() {
    window.location.reload();
  }

  ngAfterContentInit() {

  }

  onSearch() {
    if (this.router.url.includes("search"))
      this.navigationService.refreshSearchPage()
    else {
      this.navigationService.navigateSearchPage()
    }
  }

}
