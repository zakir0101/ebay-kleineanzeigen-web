import {Component, ElementRef, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {SearchService} from "../Services/search.service";
import {CitiesService} from "../Services/cities.service";
import {allCategories, CategoryService} from "../Services/category.service";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, OperatorFunction, switchMap} from "rxjs";
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {Category, City} from "../typing";
import {NavigationService} from "../Services/navigation.service";

declare var bootstrap: any;


@Component({
  selector: 'app-search-filter-sm',
  templateUrl: './search-filter-sm.component.html',
  styleUrls: ['./search-filter-sm.component.css']
})
export class SearchFilterSmComponent {

  @ViewChild('filterMenu', {static: true}) filterMenu: ElementRef | null = null;
  @ViewChild('filterCategory', {static: true}) filterCategory: ElementRef | null = null;
  @ViewChild('filterCity', {static: true}) filterCity: ElementRef | null = null;
  @ViewChild('filterPreis', {static: true}) filterPreis: ElementRef | null = null;
  bootstrapFilterMenu: any;
  bootstrapFilterCategory: any;
  bootstrapFilterCity: any;
  bootstrapFilterPries: any;

  @Input() categories!: Category[] ;
  activeCategory: Category = allCategories;
  public parentCategory: Category = allCategories;
  direktKaufen: boolean = this.searchService.direktKaufen === 'aktive'
  inputFormatter = (c: City) => {
    return c.name
  };
  outputFormatter = (c: City) => {
    if (c.code === "0") return ""
    else return c.name
  };

  constructor(public searchService: SearchService,
              public citiesService: CitiesService,
              public categoryService: CategoryService,
              public router: Router ,public navigationService:NavigationService) {
  }

  ngAfterViewInit() {
    // this.input is NOW valid !!
    this.filterMenu?.nativeElement.addEventListener('hide.bs.offcanvas', (e: any) => {
      this.filterCategory?.nativeElement.classList.remove("show")
      this.filterPreis?.nativeElement.classList.remove("show")
      this.filterCity?.nativeElement.classList.remove("show")
    })

    this.loadCities()
    this.bootstrapFilterMenu = new bootstrap.Offcanvas('#filterMenu')
    this.bootstrapFilterCategory = new bootstrap.Offcanvas('#filterCategory')
    this.bootstrapFilterCity = new bootstrap.Offcanvas('#filterCity')
    this.bootstrapFilterPries = new bootstrap.Offcanvas('#filterPreis')

  }

  ngOnInit() {
    this.activeCategory = this.categoryService.activeCategory;
    this.loadCities()
  }

  ngDoCheck() {

    if (this.activeCategory !== this.categoryService.activeCategory) {
      this.loadCities()
      this.activeCategory = this.categoryService.activeCategory;
    }
  }


  loadCities() {

      if (allCategories.code === this.categoryService.activeCategory.code) {
        this.parentCategory = allCategories;
        this.activeCategory = allCategories
        this.categories = this.categories
        return;
      }
      for (const cat of this.categories) {
        if (cat.code === this.categoryService.activeCategory.code) {
          this.categories = cat.children;
          this.parentCategory = cat;
          this.activeCategory = cat
          return
        }
        for (const child of cat.children) {
          if (child.code === this.categoryService.activeCategory.code) {
            this.categories = cat.children
            this.parentCategory = cat;
            this.activeCategory = child
            return
          }
        }
      }



  }

  getCategoryName() {
    if (this.categoryService.activeCategory === allCategories)
      return "Alle Kategorien"
    else
      return this.categoryService.activeCategory.name
  }

  getCityName() {
    if (this.citiesService.activeCity.code === "0")
      return "Ganz Deutschland"
    else
      return this.citiesService.activeCity.name
  }

  getPreisName() {
    let from: string = this.searchService.preisFrom
    let to: string = this.searchService.preisTo
    if (!from && !to)
      return "Beliebig"
    else if (!to)
      return "ab " + from + "€"
    else if (!from)
      return 'bis ' + to + "€"
    else
      return from + " - " + to + "€"
  }

  onFilterCategoryBack() {
    if (this.activeCategory.code === allCategories.code) {
      this.bootstrapFilterCategory.hide();
      this.bootstrapFilterMenu.show()
    } else {
      this.categoryService.activeCategory = allCategories
    }
  }


  onFilterCategoryItemClick(cat: Category) {

    if (this.activeCategory.code === allCategories.code) {
      if (cat.code !== allCategories.code)
        this.categoryService.activeCategory = cat
      else {
        this.bootstrapFilterCategory.hide()
        this.bootstrapFilterMenu.show()
      }
    } else {
      this.categoryService.activeCategory = cat
      this.navigationService.refreshSearchPage()
      this.bootstrapFilterCategory.hide()
      this.bootstrapFilterMenu.show()
    }
  }

  getCategoryTitle() {
    return this.activeCategory === allCategories ? allCategories.name : this.activeCategory.name
  }

  onChangeFrom(event: Event) {
    let from = parseInt((event.target as HTMLInputElement).value)
    let to = parseInt(this.searchService.preisTo)
    if (isNaN(to))
      to = 10000000000
    if (from < 1) {
      (event.target as HTMLInputElement).value = ""
      this.searchService.preisFrom = ""
      return
    } else if (from > to) {
      (event.target as HTMLInputElement).value = to.toString()
      this.searchService.preisFrom = to.toString()
      return
    } else {
      this.searchService.preisFrom = from.toString()
    }

  }

  onChangeTo(event: Event) {
    let to = parseInt((event.target as HTMLInputElement).value)
    let from = parseInt(this.searchService.preisFrom)
    if (isNaN(to))
      from = 0

    if (to < 1) {
      (event.target as HTMLInputElement).value = ""
      this.searchService.preisTo = ""
      return
    } else if (to < from) {
      (event.target as HTMLInputElement).value = from.toString()
      this.searchService.preisTo = from.toString()
      return
    } else
      this.searchService.preisTo = (to.toString())
  }

  logger = (s: any) => console.log(s)

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


  direktKaufenOnChange(event: any) {
    this.searchService.direktKaufen = (event.currentTarget).checked ? 'aktiv' : '';

  }

  paketdienstOnChange(event: any) {
    if (event.target) {
      this.searchService.paketdienst = event.target.value;
      // this.navigationService.refreshSearchPage()
    }
  }

  anbieterOnChange(event: any) {
    if (event.target) {
      this.searchService.anbieter = event.target.value;
      // this.navigationService.refreshSearchPage()
    }
  }

  angebotOnChange(event: any) {
    if (event.target) {
      this.searchService.anzeige = event.target.value;
      // this.navigationService.refreshSearchPage()
    }
  }

  onCityChange(event: NgbTypeaheadSelectItemEvent<City>) {
    this.citiesService.activeCity = event.item
    this.navigationService.refreshSearchPage()

  }

  getRangeText() {
    if(! this.searchService.activeRange)
      return "Umkreis: Ganz "+this.citiesService.activeCity.name
    else
      return "Umkreis: "+this.searchService.activeRange+" km"
  }

  rangeToNumber() {
    if(this.searchService.activeRange)
      return (this.searchService.activeRange);
    else
      return "0"
  }

  onRangeChange(event:any) {
    let value:string = event.target.value
    if (value === "0")
      this.searchService.activeRange = ""
    else
      this.searchService.activeRange = value
  }

}
