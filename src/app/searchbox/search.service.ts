import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'

})
export class SearchService {
  terms$: Subject<string>;
  baseUr: string = "https://api.cdnjs.com/libraries";
  query: string = '?search=';

  searchAll(terms$) {
    return terms$.pipe(debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term)));//combines multiple possible observables received from the searchEntries method into one
  }

  searchEntries(term) {
    return this._http.get(this.baseUr + this.query + term);
  }


  constructor(private _http: HttpClient) { }
}


