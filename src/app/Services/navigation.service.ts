import {Injectable} from '@angular/core';
import {allCategories, CategoryService} from "./category.service";
import {CitiesService} from "./cities.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ModeService} from "./mode.service";
import {SearchService} from "./search.service";
import {City, UserPage} from "../typing";
import {AddService} from "./add.service";
import {UserDetailService} from "./user-detail.service";
import {filter, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private categoryService: CategoryService
    , private citiesService: CitiesService, public searchService: SearchService,
              private router: Router, private modeService: ModeService,
              private route: ActivatedRoute, private addService: AddService,
              private userService: UserDetailService) {
  }

  loadQueryParamForSearch(): Observable<Params> {
    return  this.route.queryParams.pipe(
      filter(params => params['city']),
      tap(params => {
          this.searchService.activeSearch = params["text"]
          this.categoryService.setActiveCategoryByCode(params['category'])
          let city: City = {name: params["city"].split(":")[0], code: params["city"].split(":")[1]}
          this.citiesService.setActiveCity(city)
          this.searchService.activeRange = params["city"].split(":")[2]
          this.searchService.preisFrom = params['preis'].split(":")[0]
          this.searchService.preisTo = params['preis'].split(":")[1]
          this.searchService.anbieter = params['anbieter']
          this.searchService.paketdienst = params['paketdienst']
          this.searchService.anzeige = params['anzeige']
          this.searchService.direktKaufen = params['direktKaufen']
          this.searchService.isLoaded = true
        }
      )
    )

  }


  loadQueryParamForUser(): Observable<string> {
    return this.route.queryParams.pipe(
      map(param => param['userLink']),
      filter(link => link.length > 0)
    )
  }

  loadQueryParamForAdd(): Observable<string> {
    return this.route.queryParams.pipe(
      map(params => params['addLink']),
      filter(link => link.length > 0),
    )
  }

  refreshSearchPage() {
    let update: boolean = this.router.url.includes("/search")
    if (update) {
      this.navigateSearchPage()
    }
  }


  navigateSearchPage() {
    let cityName;
    if (this.citiesService.activeCity.name)
      cityName = this.citiesService.activeCity.name + ":" +
        this.citiesService.activeCity.code + ":" + this.searchService.activeRange
    else
      cityName = this.citiesService.deutschland.name + ":" + this.citiesService.deutschland.code + ":"
    this.router.navigate(
      ['/search'],
      {
        queryParams: {
          text: this.searchService.activeSearch === undefined ? "" : this.searchService.activeSearch,
          city: cityName,
          category: this.categoryService.getActiveCategory().code,
          anbieter: this.searchService.anbieter,
          preis: this.searchService.preisFrom + ":" + this.searchService.preisTo,
          anzeige: this.searchService.anzeige,
          direktKaufen: this.searchService.direktKaufen,
          paketdienst: this.searchService.paketdienst,

        }
      });

  }


  navigateHomePage() {

    this.searchService.activeSearch = ""
    this.categoryService.setActiveCategory(allCategories)
    this.citiesService.setActiveCity(this.citiesService.deutschland)
    this.searchService.preisFrom = ""
    this.searchService.preisTo = ""
    this.searchService.anbieter = ""
    this.searchService.paketdienst = ""
    this.searchService.anzeige = ""
    this.searchService.direktKaufen = ""
    this.searchService.activeRange = ""
    this.searchService.isLoaded = false


    this.router.navigate(['/'],);

  }


  navigateAddPage() {
    this.router.navigate(
      ['/add'],
      {
        queryParams: {
          addLink: this.addService.add_link
        }
      });

  }


  navigateUserPage() {
    this.router.navigate(
      ['/user'],
      {
        queryParams: {
          userLink: this.userService.userLink
        }
      });

  }


}
