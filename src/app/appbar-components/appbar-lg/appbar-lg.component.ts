import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {allCategories, CategoryService} from "../../Services/category.service";
import {debounceTime, distinctUntilChanged, filter, map, Observable, OperatorFunction, switchMap} from "rxjs";
import {CitiesService} from "../../Services/cities.service";
import {Router, ActivatedRoute, ParamMap, UrlSegment, NavigationStart} from '@angular/router';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {SearchService} from "../../Services/search.service";
import {NgbDropdownConfig, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuItem} from "../appbar-sm/appbar-sm.component";
import {LoginService} from "../../Services/login.service";
import {CookiesService} from "../../Services/cookies.service";
import {Category, City, Login} from "../../typing";
import {NavigationService} from "../../Services/navigation.service";
import {ModeService} from "../../Services/mode.service";


@Component({
  selector: 'app-appbar-lg',
  templateUrl: './appbar-lg.component.html',
  styleUrls: ['./appbar-lg.component.css'],
  providers: [NgbDropdownConfig], // add NgbDropdownConfig to the component providers
})
export class AppbarLgComponent {

  all_categories: Category = allCategories
  @Input() categories!: Category[]
  @Input() login: Login | null = null


  meinsItems: MenuItem[] = [
    {icon: "", name: "Nachrichten", onItemClick:() => this.onNavigateMessagePage()},
    {
      icon: "", name: "Anzeigen", onItemClick: () => {this.navigationService.navigateMyAddPage()
      }
    },
    {
      icon: "", name: "Einstellung", onItemClick: () => {this.navigationService.navigateSettingPage()
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
  showSearchBar : boolean = true
  constructor(public searchService: SearchService,
              public categoryService: CategoryService,
              public citiesService: CitiesService,
              public route: ActivatedRoute,
              public router: Router, dropdownConfig: NgbDropdownConfig,
              public loginService: LoginService,
              public modalService: NgbModal,
              public cookiesService: CookiesService,
              public navigationService: NavigationService,
              public modeService : ModeService ) {


  }

  ngOnInit() {
    // this.categories=this.categoryService.getCategories().filter((k)=> (k.name!=='alle Kategorien'))
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(event =>{
      event = <NavigationStart> event
      let url_str = event.url
      console.log(url_str)
      if(url_str.includes("messages") || url_str.includes('publish') )
        this.showSearchBar = false
      else
        this.showSearchBar = true
    })

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

  logout() {
    this.cookiesService.clearCookies();
    this.loginService.logout();
    setTimeout(() => this.refreshPage(),500)
  }
}
