import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from "../search.service"

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {

  searchSubject$ = new Subject<string>();
  results: Object;


  search($event) {
    console.log($event);
    this.searchSubject$.next($event.target.value); //observable to emit an event on every keystroke
  }

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this._searchService.searchAll(this.searchSubject$).subscribe(result => {
      this.results = result.results;
      console.log(result);
    });

  }

}


