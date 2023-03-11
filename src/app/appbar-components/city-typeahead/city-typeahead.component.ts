import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {CitiesService} from "../../Services/cities.service";
import {City} from "../../typing";
import {debounceTime, distinctUntilChanged, Observable, OperatorFunction, switchMap} from "rxjs";
import {NavigationService} from "../../Services/navigation.service";

@Component({
  selector: 'app-city-typeahead',
  templateUrl: './city-typeahead.component.html',
  styleUrls: ['./city-typeahead.component.css']
})
export class CityTypeaheadComponent {

  @ViewChild('template', { static: true })  template:any;

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


  constructor(public citiesService:CitiesService,
              private viewContainerRef:ViewContainerRef,
              public navigationService:NavigationService) {
  }


  ngOnInit(){
    this.viewContainerRef.createEmbeddedView(this.template)
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



}
