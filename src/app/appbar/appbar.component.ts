import {Component} from '@angular/core';
import {allCategories, Category, CategoryService} from "../category.service";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, switchMap} from "rxjs";
import {CitiesService, City} from "../cities.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {SearchService} from "../search.service";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {

  all_categories: Category = allCategories
  categories: Category[] = []

  public city: City = {name: "", code: ""};
  public cities: any[] = []
  searching: boolean = false
  searchFailed: boolean = false
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
              public router: Router) {
  }

  ngOnInit() {
    // this.categories=this.categoryService.getCategories().filter((k)=> (k.name!=='alle Kategorien'))
    this.categoryService.getCategories().subscribe(g_list => {
      this.categories = g_list
    })
    this.searchService.activeSearch = ""
    this.route.queryParams.subscribe(params => {
      this.searchService.activeSearch = params["text"]
      this.categoryService.setActiveCategoryByCode(params['category'])
      let city: City = {name: params["city"].split(":")[0], code: params["city"].split(":")[1]}
      this.citiesService.setActiveCity(city)
      this.searchService.preisFrom = params['preis'].split(":")[0]
      this.searchService.preisTo = params['preis'].split(":")[1]
      this.searchService.anbieter = params['anbieter']
    });
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

    document.addEventListener("DOMContentLoaded", function () {
// make it as accordion for smaller screens
      if (window.innerWidth < 992) {


        // close all inner dropdowns when parent is closed
        // document.querySelectorAll('.dropdown').forEach((everydropdown: Element) => {
        //   everydropdown.addEventListener('hidden.bs.dropdown', () => {
        //     // after dropdown is hidden, then find all submenus
        //     this.querySelectorAll('.submenu').forEach((everysubmenu) => {
        //       // hide every submenu as well
        //       // everysubmenu.style.display = 'none';
        //       everysubmenu.setAttribute('style', "display:none;")
        //     });
        //   })
        // });

        // document.querySelectorAll('.dropdown-menu a').forEach(function (element: Element) {
        //   element.addEventListener('click', (e) => {
        //     element = <HTMLElement>element;
        //     let nextEl = <HTMLElement>element.nextElementSibling;
        //     if (nextEl && nextEl.classList.contains('submenu')) {
        //       // prevent opening link if link needs to open dropdown
        //       e.preventDefault();
        //       if (nextEl.style.display == 'block') {
        //         nextEl.style.display = 'none';
        //       } else {
        //         nextEl.style.display = 'block';
        //       }
        //
        //     }
        //   });
        // })


      }
// end if innerWidth
    });
// DOMContentLoaded  end
  }
}
