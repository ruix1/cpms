import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private _http: HttpClient) { }

  getlist() {
    return this._http
      .get("http://127.0.0.1:8080/getdates")
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    if (error.error instanceof ErrorEvent) {
      console.error("an error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status},` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}

