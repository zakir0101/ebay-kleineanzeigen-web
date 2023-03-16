import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AddPage, Conversation, ConversationPage} from "../typing";
import {ModeService} from "./mode.service";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:string = ""
  add_id:string = ""
  add_type:string = ""
  contact_name:string = ""


  page : number = 0
  size : number = 10

  conversation_id : string | null = null

  constructor(public modeService:ModeService, public loginService:LoginService) { }


  sendMessageFromAddpage(): Observable<any  > {
    let url = this.modeService.address + "/send/addpage?message="+this.message
      +"&add_id="+this.add_id+"&add_type="+this.add_type+"&contact_name="+this.contact_name


    const observable: Observable<any> = new Observable((subscriber) => {
      fetch(url, {
        credentials: "include"
      })
        .then((response: Response) => {
          return response.json()
        })
        .then((data: any) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }



  sendMessageFromMessagebox(): Observable<any  > {
    let url = this.modeService.address + "/send/messagebox?message="+this.message
      +"&user_id="+this.loginService.user_id+"&conversation_id="+this.conversation_id


    const observable: Observable<any> = new Observable((subscriber) => {
      fetch(url, {
        credentials: "include"
      })
        .then((response: Response) => {
          return response.json()
        })
        .then((data: any) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }




  get_conversation(): Observable<ConversationPage  > {
    let url = this.modeService.address + "/conversations?user_id="+this.loginService.user_id
      +"&page="+this.page.toString()+"&size="+this.size.toString()
    const observable: Observable<ConversationPage> = new Observable((subscriber) => {
      fetch(url, {
        credentials: "include"
      })
        .then((response: Response) => response.json())
        .then((data: any) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }






  get_messages(): Observable<Conversation> {
    let url = this.modeService.address + "/messages?user_id="+this.loginService.user_id
      +"&conversation_id="+this.conversation_id
    const observable: Observable<Conversation> = new Observable((subscriber) => {
      fetch(url, {
        credentials: "include"
      })
        .then((response: Response) => response.json())
        .then((data: any) => {
          if (!data.type)
            subscriber.next(data)
        });

    })

    return observable;
  }


}
