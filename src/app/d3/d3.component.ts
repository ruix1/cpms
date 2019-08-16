import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {

  constructor() { }
  updateDOMElen() {
    d3.select('body').select('div#cntr')
      .selectAll('p').style('color', 'white')
      .style('background-color', function (d, i) {
        if (i % 2 == 0) {
          return 'red';
        } else {
          return 'green';
        }
      })
      .text(function (d, i) {
        return "hellp " + i;
      }).on('click', function (d, i) {
        var cur_ele = d3.event.target;
        return cur_ele;
      });
  }

  updateBar() {
    // var data = [80, 120, 60, 150, 200];
    // var barHeight = 20;
    // var bar = d3.select('svg')
    //   .selectAll('rect')
    //   .data(data)
    //   .enter()
    //   .append('rect')
    //   .attr('width', function (d) { return d; })
    //   .attr('height', barHeight - 1)
    //   .attr('transform', function (d, i) {
    //     return "translate(0," + i * barHeight + ")";
    //   }).attr('fill', 'green');
  }

  ngOnInit() {
    this.updateDOMElen();
    this.updateBar();
    this.updatebutton();
    this.test();
  }
  updatebutton() {
    var button = d3.select('body').select('#btn').on('click', function () {
      d3.select('body')
        .append('h3')
        .text('Today is a beautiful day!!');
    });
  }
  test() {
    d3.select('body').select('div#cntr').append('svg').attr('width', '400')
      .attr('height', "400")
      .attr('style', 'border:1px solid red').
      append('rect').
      attr('width', 100).
      attr('height', 100).
      attr('x', 50)
      .attr('y', 70).
      style('fill', 'blue');
  }
}
