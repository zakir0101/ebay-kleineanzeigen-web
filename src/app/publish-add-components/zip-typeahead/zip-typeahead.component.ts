import {Component, EventEmitter, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {City} from "../../typing";
import {CitiesService} from "../../Services/cities.service";
import {debounceTime, distinctUntilChanged, Observable, OperatorFunction, switchMap} from "rxjs";
import {PublishAddService} from "../../Services/publish-add.service";
import {NavigationService} from "../../Services/navigation.service";
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-zip-typeahead',
  templateUrl: './zip-typeahead.component.html',
  styleUrls: ['./zip-typeahead.component.css']
})
export class ZipTypeaheadComponent {
  @ViewChild('template', {static: true}) template: any
  public city: City = {name: "", code: ""};
  public cities: any[] = []
  searching: boolean = false
  searchFailed: boolean = false
  @Output() myChange : EventEmitter<any> = new EventEmitter<any>()

  // searchingFor: string = ""
  inputFormatter = (c: City) => {
    return c.name
  };
  outputFormatter = (c: City) => {
    if (c.code === "0") return ""
    else return c.name.split(" ")[0].trim()
  };
  logger = (text: string) => console.log(text)


  constructor(public viewContainerRef: ViewContainerRef,
              public citiesService: CitiesService,
              public publishService : PublishAddService,
              public navigationService : NavigationService) {
  }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template)
  }


  search: OperatorFunction<string, readonly City[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term) => {
          if (term.length < 1)
            return []
          if (isNaN(Number(term)))
            return []
          else {
            return this.citiesService.getCities(term)
          }
        }
      ),
    );


  setCodeAndZip(event: NgbTypeaheadSelectItemEvent<City>) {
    let activeCity = event.item
    this.publishService.activeCity = activeCity
    this.publishService.zip = activeCity.name.split(' ')[0].trim()
    this.publishService.city_code = activeCity.code
    this.myChange.emit("")
    this.navigationService.navigatePublishPage()
  }


}
