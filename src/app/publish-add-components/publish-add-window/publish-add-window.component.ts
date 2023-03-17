import { Component } from '@angular/core';
import {NavigationService} from "../../Services/navigation.service";
import {PublishAddService} from "../../Services/publish-add.service";

@Component({
  selector: 'app-publish-add-window',
  templateUrl: './publish-add-window.component.html',
  styleUrls: ['./publish-add-window.component.css']
})
export class PublishAddWindowComponent {

  error:string = ""
  waitingTime :number = 1000 * 120
  waitingRate : number = 1000 * 10
  status : string = ""
  attr_error : string  = ""
  constructor(public navigationService:NavigationService , public publishService:PublishAddService) {
  }

  ngOnInit(){
    this.publishService.current = "error"
    this.navigationService.loadQueryParamForPublish().subscribe(param => {
      console.log(param['title'])
    })
  }

  publishAdd(attrCheck :boolean){
    if(!attrCheck)
      return
    this.publishService.publishAdd().subscribe(res => {
      console.log("response is")
      console.log(res)
      if(res.state==="OK"){
        this.publishService.current = "waiting"
        let interval = setInterval(() => {
          if(!this.status.toLocaleLowerCase().includes( "process" ) && !this.status.includes("sending")){
            this.publishService.clearParams()
            this.navigationService.navigateMyAddPage()
          }
          else {
            this.checkAdd()
          }
        },this.waitingRate)
        setTimeout(() => clearInterval(interval),this.waitingTime)
      }else {
        this.publishService.current= "error"
        this.error = res.html
      }

    })
  }


  checkAdd(){
    this.status = "sending request"
    this.publishService.checkAdd().subscribe(res =>{
     this.status = res.state
    })
  }

}
