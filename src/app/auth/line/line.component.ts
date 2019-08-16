import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  myContext = { $implicit: 'World', localSk: 'Svet' };
  //@Input() input;
  //name = 'Angular';

  add() {

  }

  constructor() { }

  ngOnInit() {
    this.creatlinechar();
  }

  creatlinechar() {
    var width = 500,
      height = 200,
      padding = 20;

    var data = [
      { x: 10, y: 20 },
      { x: 20, y: 12 },
      { x: 30, y: 70 },
      { x: 40, y: 30 },
      { x: 50, y: 10 },
      { x: 60, y: 40 },
      { x: 70, y: 50 },
      { x: 80, y: 70 },
      { x: 90, y: 60 },
      { x: 100, y: 40 }];

    var svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height);

    var lineFunc = d3.line()
      .x(function (d) { return d.x * 3 })
      .y(function (d) { return d.y * 2; })
      .curve(d3.curveLinear);


    svg.append('path')
      .attr('d', lineFunc(data))
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
  }

}
