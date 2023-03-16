import {Component, Input} from '@angular/core';
import {AddPage} from "../../typing";
import {ModeService} from "../../Services/mode.service";
import {MessageService} from "../../Services/message.service";

@Component({
  selector: 'app-add-window-form',
  templateUrl: './add-window-form.component.html',
  styleUrls: ['./add-window-form.component.css']
})
export class AddWindowFormComponent {
  message:string = ""
  contact_name : string = ""
  is_sent :boolean = false
  @Input() addPage :AddPage|null = null
  url ! : string
  constructor(public messageService:MessageService) {
  }


  sendMessage(){
    if (!this.messageService.add_id || !this.messageService.add_type
      || !this.messageService.message || !this.messageService.contact_name)
      return

    this.messageService.sendMessageFromAddpage().subscribe(res =>{

      if(res.status === "OK")
        this.is_sent = true
        this.messageService.message = ""
        this.messageService.contact_name= ""
      }
    )
  }

}
