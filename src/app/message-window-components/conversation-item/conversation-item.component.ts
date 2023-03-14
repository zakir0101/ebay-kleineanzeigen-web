import {Component, Input} from '@angular/core';
import {Conversation} from "../../typing";

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.css']
})
export class ConversationItemComponent {
  @Input() conversation!:Conversation

  getImageUrl() {
    if (this.conversation.adStatus !== "ACTIVE")
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA1OCA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8Y2lyY2xlIGN4PSIyOSIgY3k9IjI5IiByPSIyOC41IiBzdHJva2U9IiNFOUU5RTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAzOC41QzQzIDM5LjYgNDIuMSA0MC41IDQxIDQwLjVIMTdDMTUuOSA0MC41IDE1IDM5LjYgMTUgMzguNVYyMi4xQzE1IDIwLjcgMTYuNCAyMC41IDE3IDIwLjVIMjIuMUMyMi4yIDIwLjUgMjIuNCAyMC40IDIyLjUgMjAuM0wyNC42IDE3LjVIMzMuM0wzNS41IDIwLjNDMzUuNiAyMC40IDM1LjcgMjAuNSAzNS45IDIwLjVINDFDNDIuMSAyMC41IDQzIDIxLjQgNDMgMjIuNVYzOC41Wk0zNyAzMC41QzM3IDI2LjEgMzMuNCAyMi41IDI5IDIyLjVDMjQuNiAyMi41IDIxIDI2LjEgMjEgMzAuNUMyMSAzNC45IDI0LjYgMzguNSAyOSAzOC41QzMzLjQgMzguNSAzNyAzNC45IDM3IDMwLjVaTTM2IDMwLjVDMzYgMzQuNCAzMi45IDM3LjUgMjkgMzcuNUMyNS4xIDM3LjUgMjIgMzQuNCAyMiAzMC41QzIyIDI2LjYgMjUuMSAyMy41IDI5IDIzLjVDMzIuOSAyMy41IDM2IDI2LjYgMzYgMzAuNVoiIGZpbGw9IiNEMkQyRDIiLz4KPC9zdmc+Cg=="

    if(this.conversation.adImage)
      return this.conversation.adImage.replace('{imageId}','2')
    else
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA1OCA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjguNSIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8Y2lyY2xlIGN4PSIyOSIgY3k9IjI5IiByPSIyOC41IiBzdHJva2U9IiNFOUU5RTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAzOC41QzQzIDM5LjYgNDIuMSA0MC41IDQxIDQwLjVIMTdDMTUuOSA0MC41IDE1IDM5LjYgMTUgMzguNVYyMi4xQzE1IDIwLjcgMTYuNCAyMC41IDE3IDIwLjVIMjIuMUMyMi4yIDIwLjUgMjIuNCAyMC40IDIyLjUgMjAuM0wyNC42IDE3LjVIMzMuM0wzNS41IDIwLjNDMzUuNiAyMC40IDM1LjcgMjAuNSAzNS45IDIwLjVINDFDNDIuMSAyMC41IDQzIDIxLjQgNDMgMjIuNVYzOC41Wk0zNyAzMC41QzM3IDI2LjEgMzMuNCAyMi41IDI5IDIyLjVDMjQuNiAyMi41IDIxIDI2LjEgMjEgMzAuNUMyMSAzNC45IDI0LjYgMzguNSAyOSAzOC41QzMzLjQgMzguNSAzNyAzNC45IDM3IDMwLjVaTTM2IDMwLjVDMzYgMzQuNCAzMi45IDM3LjUgMjkgMzcuNUMyNS4xIDM3LjUgMjIgMzQuNCAyMiAzMC41QzIyIDI2LjYgMjUuMSAyMy41IDI5IDIzLjVDMzIuOSAyMy41IDM2IDI2LjYgMzYgMzAuNVoiIGZpbGw9IiNEMkQyRDIiLz4KPC9zdmc+Cg=="
  }


  getHisName() {
    if(this.conversation?.role==="Seller")
      return this.conversation.buyerName
    else
      return this.conversation?.sellerName
  }

}
