import {Component, TemplateRef} from '@angular/core';
import {CitiesService} from "./Services/cities.service";
import {CategoryService} from "./Services/category.service";
import {SearchService} from "./Services/search.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {NavigationService} from "./Services/navigation.service";
import {Category, Login} from "./typing";
import {LoginService} from "./Services/login.service";
import {NgbModalStack} from "@ng-bootstrap/ng-bootstrap/modal/modal-stack";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebay-kleineanzeigen';
  categories: Category[] = []
  login: Login | null = null
  // situationUnlogged: boolean = false
  modalTemplate: any;

  constructor(private citiesService: CitiesService, private categoryService: CategoryService,
              private searchService: SearchService, private route: ActivatedRoute, private router: Router,
              public navigationService: NavigationService, private loginService: LoginService,
              public modalService:NgbModal) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(g_list => {
      this.categories = g_list
    })
    this.loginService.isUserLogged().subscribe(Login => {
      this.login = Login

    })


  }

  // isSituationUnlogged() {
  //   if (this.router.url.includes("messages") || this.router.url.includes("publish") ||
  //     this.router.url.includes("myadd")) {
  //     if (this.login && !this.login.is_logged) {
  //       this.situationUnlogged = true
  //       return
  //     }
  //
  //   }
  //   this.situationUnlogged = false
  // }
}

