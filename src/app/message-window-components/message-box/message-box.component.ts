import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Conversation, Message} from "../../typing";
import {NavigationService} from "../../Services/navigation.service";
import {AddService} from "../../Services/add.service";
import {MessageService} from "../../Services/message.service";
import {UserDetailService} from "../../Services/user-detail.service";

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
  @Input() conversation: Conversation | null = null
  @Output() setMode:EventEmitter<string> = new EventEmitter<string>()

  message:string = ""
  contact_name : string = ""
  is_sent :boolean = false

  constructor(public navigationService: NavigationService,
              public addService: AddService, public messageService:MessageService,
              public userService : UserDetailService) {
  }

  ngAfterViewInit() {
    this.setMessageBoxHeight()
    window.addEventListener('resize',()=>this.setMessageBoxHeight())

  }

  ngOnChanges(){
    let  scrollMessage = document.getElementById("scrollMessage")
    // @ts-ignore
    scrollMessage.scrollTop= scrollMessage.scrollHeight
  }
  scrollBottom(scrollMessage :HTMLElement){
    console.log("scroll top = "+ scrollMessage.scrollTop)
    console.log("scroll height = "+ scrollMessage.scrollHeight)
    scrollMessage.scrollTop= scrollMessage.scrollHeight
  }

  setMessageBoxHeight(){
    let con = document.getElementById("con")
    if(!con)
      return;
    if(window.innerWidth > 992)
      con.style.height =  "32rem"
    else {
      let appbar = document.getElementById('appbar-sm-top')
      if(!con || !appbar)
        return
      con.style.height = String((window.innerHeight - appbar.clientHeight) + "px")
    }
  }
  getImageUrl() {
    if (!this.conversation)
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA1OCA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8Y2lyY2xlIGN4PSIyOSIgY3k9IjI5IiByPSIyOC41IiBzdHJva2U9IiNFOUU5RTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAzOC41QzQzIDM5LjYgNDIuMSA0MC41IDQxIDQwLjVIMTdDMTUuOSA0MC41IDE1IDM5LjYgMTUgMzguNVYyMi4xQzE1IDIwLjcgMTYuNCAyMC41IDE3IDIwLjVIMjIuMUMyMi4yIDIwLjUgMjIuNCAyMC40IDIyLjUgMjAuM0wyNC42IDE3LjVIMzMuM0wzNS41IDIwLjNDMzUuNiAyMC40IDM1LjcgMjAuNSAzNS45IDIwLjVINDFDNDIuMSAyMC41IDQzIDIxLjQgNDMgMjIuNVYzOC41Wk0zNyAzMC41QzM3IDI2LjEgMzMuNCAyMi41IDI5IDIyLjVDMjQuNiAyMi41IDIxIDI2LjEgMjEgMzAuNUMyMSAzNC45IDI0LjYgMzguNSAyOSAzOC41QzMzLjQgMzguNSAzNyAzNC45IDM3IDMwLjVaTTM2IDMwLjVDMzYgMzQuNCAzMi45IDM3LjUgMjkgMzcuNUMyNS4xIDM3LjUgMjIgMzQuNCAyMiAzMC41QzIyIDI2LjYgMjUuMSAyMy41IDI5IDIzLjVDMzIuOSAyMy41IDM2IDI2LjYgMzYgMzAuNVoiIGZpbGw9IiNEMkQyRDIiLz4KPC9zdmc+Cg=="
    if (this.conversation.adStatus !== "ACTIVE")
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA1OCA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8Y2lyY2xlIGN4PSIyOSIgY3k9IjI5IiByPSIyOC41IiBzdHJva2U9IiNFOUU5RTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAzOC41QzQzIDM5LjYgNDIuMSA0MC41IDQxIDQwLjVIMTdDMTUuOSA0MC41IDE1IDM5LjYgMTUgMzguNVYyMi4xQzE1IDIwLjcgMTYuNCAyMC41IDE3IDIwLjVIMjIuMUMyMi4yIDIwLjUgMjIuNCAyMC40IDIyLjUgMjAuM0wyNC42IDE3LjVIMzMuM0wzNS41IDIwLjNDMzUuNiAyMC40IDM1LjcgMjAuNSAzNS45IDIwLjVINDFDNDIuMSAyMC41IDQzIDIxLjQgNDMgMjIuNVYzOC41Wk0zNyAzMC41QzM3IDI2LjEgMzMuNCAyMi41IDI5IDIyLjVDMjQuNiAyMi41IDIxIDI2LjEgMjEgMzAuNUMyMSAzNC45IDI0LjYgMzguNSAyOSAzOC41QzMzLjQgMzguNSAzNyAzNC45IDM3IDMwLjVaTTM2IDMwLjVDMzYgMzQuNCAzMi45IDM3LjUgMjkgMzcuNUMyNS4xIDM3LjUgMjIgMzQuNCAyMiAzMC41QzIyIDI2LjYgMjUuMSAyMy41IDI5IDIzLjVDMzIuOSAyMy41IDM2IDI2LjYgMzYgMzAuNVoiIGZpbGw9IiNEMkQyRDIiLz4KPC9zdmc+Cg=="

    if (this.conversation.adImage)
      return this.conversation.adImage.replace('{imageId}', '2')
    else
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA1OCA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8Y2lyY2xlIGN4PSIyOSIgY3k9IjI5IiByPSIyOC41IiBzdHJva2U9IiNFOUU5RTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAzOC41QzQzIDM5LjYgNDIuMSA0MC41IDQxIDQwLjVIMTdDMTUuOSA0MC41IDE1IDM5LjYgMTUgMzguNVYyMi4xQzE1IDIwLjcgMTYuNCAyMC41IDE3IDIwLjVIMjIuMUMyMi4yIDIwLjUgMjIuNCAyMC40IDIyLjUgMjAuM0wyNC42IDE3LjVIMzMuM0wzNS41IDIwLjNDMzUuNiAyMC40IDM1LjcgMjAuNSAzNS45IDIwLjVINDFDNDIuMSAyMC41IDQzIDIxLjQgNDMgMjIuNVYzOC41Wk0zNyAzMC41QzM3IDI2LjEgMzMuNCAyMi41IDI5IDIyLjVDMjQuNiAyMi41IDIxIDI2LjEgMjEgMzAuNUMyMSAzNC45IDI0LjYgMzguNSAyOSAzOC41QzMzLjQgMzguNSAzNyAzNC45IDM3IDMwLjVaTTM2IDMwLjVDMzYgMzQuNCAzMi45IDM3LjUgMjkgMzcuNUMyNS4xIDM3LjUgMjIgMzQuNCAyMiAzMC41QzIyIDI2LjYgMjUuMSAyMy41IDI5IDIzLjVDMzIuOSAyMy41IDM2IDI2LjYgMzYgMzAuNVoiIGZpbGw9IiNEMkQyRDIiLz4KPC9zdmc+Cg=="
  }

  onTitleClicked() {
    if (!this.conversation)
      return
    this.addService.add_link = "/zur-anzeige/" + this.conversation.adId
    this.navigationService.navigateAddPage()
  }

  isMe(msg: Message) {
    // console.log(msg )
    return msg.boundness==='OUTBOUND'
  }


  sendMessage(){
    if (!this.messageService.add_id || !this.messageService.add_type
      || !this.messageService.message || !this.messageService.contact_name)
      return

    this.messageService.sendMessage().subscribe(res =>{

        if(res.status === "OK")
          this.is_sent = true
        this.messageService.message = ""
        this.messageService.contact_name= ""
      }
    )
  }


  getHisInitials() {
    if(this.conversation?.role==="Seller")
      return this.conversation.buyerInitials
    else
      return this.conversation?.sellerInitials
  }

  getMyInitials() {
    if(this.conversation?.role==="Seller")
      return this.conversation.sellerInitials
    else
      return this.conversation?.buyerInitials
  }

  onUserClicked() {
    let prefix = "/s-bestandsliste.html?userId="
    if(this.conversation?.role==="Seller")
      this.userService.userLink= prefix+ this.conversation.userIdBuyer;
    else if(this.conversation?.role==="Buyer")
      this.userService.userLink= prefix + this.conversation.userIdSeller;
    this.navigationService.navigateUserPage()

  }
}
