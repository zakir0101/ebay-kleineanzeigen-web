import { Component } from '@angular/core';
import {MessageService} from "../../Services/message.service";
import {LoginService} from "../../Services/login.service";
import {NavigationService} from "../../Services/navigation.service";
import {Conversation} from "../../typing";

@Component({
  selector: 'app-messages-window',
  templateUrl: './messages-window.component.html',
  styleUrls: ['./messages-window.component.css']
})
export class MessagesWindowComponent {
  mode:string = "conversations"
  max_number: number  = 0
  conversations : Conversation[] | null = null
  active_conversation: Conversation| null = null;
  waiting : boolean = true

  loading : boolean = false



  constructor(public messageService:MessageService,
              public loginService:LoginService, public navigationService:NavigationService) {
  }

  getConversationsPage(){
    this.messageService.get_conversation().subscribe(conPage => {
      this.max_number = conPage._meta.numFound
      this.conversations = conPage.conversations
      this.waiting = false
      if ( ! this.messageService.conversation_id){
        this.messageService.conversation_id = this.conversations[0].id
      }
      this.getActiveConversation()
    })

  }

  getActiveConversation(){
    this.messageService.get_messages().subscribe(Con =>{
      this.loading = false
      this.active_conversation = Con

    })
  }

  ngOnInit(){
    this.navigationService.loadQueryParamForMessage().subscribe(param => {
      this.getConversationsPage()
    })

    let  bigContainer = window.document.getElementById("big_container")
    // @ts-ignore
    bigContainer.onscroll = ()=>{
      // console.log("element was found")
      if(window.innerWidth < 992) {
          // console.log("on window scroll is on")
          this.onConScroll(bigContainer)
        }
    }
  }


  onConScroll(con_scroll: HTMLElement | null) {
    if (! con_scroll)
      return;
    // console.log("scroll top  is : " + con_scroll.scrollTop)
    // console.log("scroll height is : " + con_scroll.scrollHeight)
    if(this.waiting)
      return
    let percentage = (con_scroll.scrollHeight - con_scroll.clientHeight) * 0.5

    if (con_scroll.scrollTop > percentage  || percentage < 40) {
      // @ts-ignore
      if (this.conversations?.length < this.max_number ){
        this.messageService.size = (+this.messageService.size) + +10
        this.waiting = true
        this.getConversationsPage()
      }
    }
  }

  onConversationClick(con:Conversation) {
    this.loading = true
    this.mode = 'messages'
    this.messageService.conversation_id = con.id
    this.active_conversation = null
    this.getActiveConversation()

  }



  sendMessage(message:string){
    if (!this.messageService.conversation_id || !message)
      return

    this.loading = true
    this.active_conversation = null
    this.messageService.message = message
    this.messageService.sendMessageFromMessagebox().subscribe(res =>{
        if(res.status === "OK")
        {
          this.loading = true
          this.active_conversation = null
          this.getActiveConversation()
        }

      }
    )
  }

}
