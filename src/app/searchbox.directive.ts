import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSearchbox]'
})
export class SearchboxDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
