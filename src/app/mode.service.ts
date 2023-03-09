import {Injectable} from '@angular/core';

const OFFLINE: string = "offline";
const ONLINE: string = "online";
const MOBILE: string = "mobile";

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  mode: string|undefined = "";
  address: string|undefined = ""

  constructor() {
    this.mode =  document.getElementById("mode")?.innerHTML
    if (this.mode === ONLINE) {
      this.address = 'https://teachgram.000webhostapp.com/teachgram/0_main.php'
    } else if (this.mode === OFFLINE) {
      this.address = 'http://localhost/teachgram/0_main.php'
    } else if (this.mode === MOBILE) {
      this.address = 'http://192.168.140.149/teachgram/0_main.php'
    }
    this.address = document.getElementById("address")?.innerHTML
    console.log("address = "+this.address)
  }


  getAddress(){
    return this.address
  }


}
