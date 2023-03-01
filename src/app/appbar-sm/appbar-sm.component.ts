import {Component, EmbeddedViewRef, ViewChild, ViewContainerRef} from '@angular/core';


interface Menu {
  name:string,
  icon:string
}




@Component({
  selector: 'app-appbar-sm',
  templateUrl: './appbar-sm.component.html',
  styleUrls: ['./appbar-sm.component.css']
})
export class AppbarSmComponent {
  menu:Menu[]=[
    {icon:"bi-house",name:"Start"},
    {icon:"bi-search",name:"Suche"},
    {icon:"bi-chat-dots",name:"Nachricht"},
    {icon:"bi-star",name:"Favoriten"},
    {icon:"bi-plus",name:"Anzeige aufgeben"},
    {icon:"bi-person",name:"meine Anzeigen"},
    {icon:"bi-gear-fill",name:"Einstellung"},
    {icon:"bi-question-circle",name:"Hilfe"},
  ]

  search:string="s";
  @ViewChild('template', { static: true })  template:any;

  constructor(private viewContainerRef:ViewContainerRef) {
  }

  ngOnInit(){
    this.viewContainerRef.createEmbeddedView(this.template)
  }
}
