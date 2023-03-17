import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {City} from "../../typing";
import {CitiesService} from "../../Services/cities.service";
import {debounceTime, distinctUntilChanged, Observable, OperatorFunction, switchMap} from "rxjs";
import {PublishAddService} from "../../Services/publish-add.service";

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

  // searchingFor: string = ""
  inputFormatter = (c: City) => {
    return c.name
  };
  outputFormatter = (c: City) => {
    if (c.code === "0") return ""
    else return c.name.split("-")[0].trim()
  };
  logger = (text: string) => console.log(text)


  constructor(public viewContainerRef: ViewContainerRef,
              public citiesService: CitiesService,
              public publishService : PublishAddService) {
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


  setCodeAndZip(activeCity: City) {
    this.publishService.zip = activeCity.name.split('-')[0].trim()
    this.publishService.contact_name = activeCity.code

  }

}
