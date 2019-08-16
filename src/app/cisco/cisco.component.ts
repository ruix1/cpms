import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cisco',
  templateUrl: './cisco.component.html',
  styleUrls: ['./cisco.component.css']
})
export class CiscoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  data = {
    requestId: null,
    Status: "A and C",
    exception: null,
    groups: [
      {
        groupName: "1",
        subGroup: [
          {
            subGroupName: "Animal",
            choices: ["cat", "dog", "fish", "chicken", "frog"],
            selected: ["cat", "dog"],
            listGrpQuestions: ["which animal do you like?"]
          },
          {
            subGroupName: "color",
            choices: ["yellow", "blue", "red", "black"],
            selected: ["blue"],
            failed: null,
            subGroupStatus: "Aligned",
            listGrpQuestions: ["which animal do you like?"]
          }
        ]
      }
    ]
  };
}


