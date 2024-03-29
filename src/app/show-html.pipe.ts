import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'showHtml',pure:false
})
export class ShowHtmlPipe implements PipeTransform {

  constructor(private sanitizer : DomSanitizer) {
  }

  transform(content:string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
