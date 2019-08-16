import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, debounceTime } from 'rxjs/operators';


@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  constructor() {
  }

  transform(value: any, args?: any): any {
    if (args != '' && args !== undefined) {
      var filterresult = value.filter((item, index) => {
        if (JSON.stringify(item) !== '{}') {
          if (item.productName.toLowerCase().indexOf(args) !== - 1) {
            return true;
          }
        }
      });
      return of(filterresult).pipe(delay(500));
    } else {
      return of(value).pipe(debounceTime(500));
    }
  }
}

