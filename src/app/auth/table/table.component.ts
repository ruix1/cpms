import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private pageNum: number = 1;
  private isFirst: Boolean;
  private isLast: Boolean;

  result: any;
  show: Boolean = true;
  products = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }, {}, {},
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }, {}, {},
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    }, {},
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "productId": 11,
      "productName": "Video Game",
      "productCode": "GMG-3442",
      "releaseDate": "October 15, 2017",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "productId": 12,
      "productName": "Video Game2",
      "productCode": "GMG-3442",
      "releaseDate": "October 15, 2017",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "productId": 13,
      "productName": "Video Game3",
      "productCode": "GMG-3442",
      "releaseDate": "October 15, 2017",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "productId": 14,
      "productName": "Video Game4",
      "productCode": "GMG-3442",
      "releaseDate": "October 15, 2017",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    },
    {
      "productId": 15,
      "productName": "Video Game5",
      "productCode": "GMG-3442",
      "releaseDate": "October 15, 2017",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }, {
      "productId": 16,
      "productName": "Video Game6",
      "productCode": "GMG-3442",
      "releaseDate": "October 15, 2017",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }, {}
  ];


  constructor() { }

  ngOnInit() {
    return this.result = this.products.slice(this.pageNum * 5 - 5, this.pageNum * 5);
  }

  showtable() {
    this.show = !this.show;
  }

  isVaild(product) {
    if (JSON.stringify(product) !== '{}') {
      return true;
    }
    return false;
  }

  // initial() {
  //   var result = this.products.splice(this.pageNum * 5 - 5, this.pageNum * 5);
  //   console.log(result);
  // }
  // callPhone(value) {
  //   console.log(value.value);
  // }
  //You can use the ViewChild decorator to reference it inside your component.
  // @ViewChild('phone') private phoneRef: ElementRef;

  // callPhone() {

  //   this.result = this.phoneRef.nativeElement.value;
  //   console.log(this.result);
  // }
  validbutton: Boolean;

  substractpage() {
    this.pageNum--;
    this.result = this.products.slice(this.pageNum * 5 - 5, this.pageNum * 5);
    console.log(this.result);
    this.pageNum <= 1 ? this.isFirst = true : this.isLast = false;

  }

  // validbutton() {
  //   return this.pageNum <= 1 && this.pageNum > 3 ? true : false;

  // }
  addpage() {
    this.pageNum++;
    this.result = this.products.slice(this.pageNum * 5 - 5, this.pageNum * 5);
    console.log(this.result);
    this.pageNum > 3 ? this.isLast = true : this.isFirst = false;
  }
}
