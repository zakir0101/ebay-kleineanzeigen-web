import {Component, EventEmitter, Output} from '@angular/core';
import {NavigationService} from "../../Services/navigation.service";
import {PublishAddService} from "../../Services/publish-add.service";
import {CitiesService} from "../../Services/cities.service";

@Component({
  selector: 'app-publish-add-form',
  templateUrl: './publish-add-form.component.html',
  styleUrls: ['./publish-add-form.component.css']
})
export class PublishAddFormComponent {
  @Output() publishAdd:EventEmitter<boolean> = new EventEmitter<boolean>()
  error : string = ""
  loading : boolean = false
  constructor(public navigationService:NavigationService,
              public publishService:PublishAddService,
              public citiesService:CitiesService) {
  }


  // ngOnInit(){
  //   this.navigationService.loadQueryParamForSearch().subscribe(param => {
  //
  //   })
  // }

  onPublishAdd(){
      let attributeIsCorrect = this.checkAttributes()
      this.publishAdd.emit(attributeIsCorrect)
      if (attributeIsCorrect)
        this.loading = true
  }

  checkAttributes(){
    if(!this.publishService.title || this.publishService.title.length <= 10){
      this.error = "title has to be at least 10 Character"
      return false
    }
    else
      if(!this.publishService.contact_name ){
      this.error = "you have to enter a contact name"
      return false
    }
      else if(!this.publishService.description || this.publishService.description.length <= 10){
      this.error = "description has to be at least 10 Character"
      return false
    }
      else if(!this.publishService.price || isNaN(Number(this.publishService.price)) ){
      this.error = "you have to specify a number for the price"
      return false
    }
      else if(!this.publishService.zip  ){
      this.error = "you have to enter a zip code"
      return false
    }
      else if(this.publishService.activeCity.code == this.citiesService.deutschland.code){
        this.error = "you have to enter a zip code"
        return false
      }
      else {
        return true
      }
  }

  getCityName() {
    if (this.publishService.activeCity.name)
      return this.publishService.activeCity.name.split(' ')[1].trim()
    else
      return ""
  }
}
