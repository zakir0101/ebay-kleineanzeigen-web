import { Component } from '@angular/core';
import {MessageService} from "../Services/message.service";
import {LoginService} from "../Services/login.service";
import {NavigationService} from "../Services/navigation.service";
import {Conversation} from "../typing";

@Component({
  selector: 'app-messages-winsow',
  templateUrl: './messages-winsow.component.html',
  styleUrls: ['./messages-winsow.component.css']
})
export class MessagesWinsowComponent {

  max_number: number  = 0
  conversations : Conversation[] | null = null
  active_conversation: Conversation| null = null;


  constructor(public messageService:MessageService,
              public loginService:LoginService, public navigationService:NavigationService) {
  }

  ngOnInit(){
    this.navigationService.loadQueryParamForMessage().subscribe(param => {
      this.messageService.get_conversation().subscribe(conPage => {
          this.max_number = conPage._meta.numFound
          this.conversations = conPage.conversations
          if ( ! param['conversation_id']){
            this.messageService.conversation_id = this.conversations[0].id
          }
        this.messageService.get_messages().subscribe(Con =>
          this.active_conversation = Con)
      })
    })
  }


}
