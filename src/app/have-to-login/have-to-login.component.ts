import {Component, Input} from '@angular/core';
import {Login} from "../typing";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-have-to-login',
  templateUrl: './have-to-login.component.html',
  styleUrls: ['./have-to-login.component.css']
})
export class HaveToLoginComponent {
  modalTemplate : any
  @Input() login : Login | null = null

  constructor(public modalService : NgbModal) {
  }
}
