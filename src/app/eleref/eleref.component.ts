import { Component, OnInit, ElementRef } from '@angular/core';
import { AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-eleref',
  templateUrl: './eleref.component.html',
  styleUrls: ['./eleref.component.css']
})
export class ElerefComponent implements AfterContentInit {

  node: string;

  constructor(private elementRef: ElementRef) { }

  ngAfterContentInit() {
    const tmp = document.createElement('div');
    const el = this.elementRef.nativeElement.cloneNode(true);

    tmp.appendChild(el);
    this.node = tmp.innerHTML;
  }


}
