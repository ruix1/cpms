import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.css']
})
export class PagenavComponent implements OnInit {

  @Input()
  pageIndex: number = 1;

  @Input()
  dataTotal: number = 0;

  @Input()
  pageSize: number = 1;

  private pageNum: number;
  private pageCount: number;
  private startNum: number;
  private endNum: number;
  private pages: Array<Page>;

  constructor() {
  }

  ngOnInit() {
    this.pageSize = Math.max(this.pageSize, 1);
    this.pageIndex = Math.max(this.pageIndex, 1);
    this.pageCount = Math.ceil(this.dataTotal / this.pageSize);
    this.calcPage();
  }

  /**
   * 来自网络的一种算法，然后自己进行加工处理成 angular 上能用的
   */
  private calcPage() {
    var startNum: number = 0;
    var endNum: number = 0;
    if (this.pageCount <= this.pageSize) {
      endNum = this.pageCount;
    } else {
      if ((this.pageIndex + this.pageSize) >= this.pageCount) {
        endNum = this.pageCount;
      } else {
        endNum + this.pageIndex + this.pageSize;
        if ((this.pageSize + this.pageIndex) <= (2 * this.pageSize + 1)) {
          if ((2 * this.pageSize + 1) >= this.pageCount) {
            endNum = this.pageCount;
          } else {
            endNum = 2 * this.pageSize + 1;
          }
        } else {
          endNum = this.pageSize + this.pageIndex;
        }
      }
    }
    if (this.pageIndex <= this.pageSize) {
      startNum = 1;
    } else {
      if ((this.pageIndex + this.pageSize) >= this.pageCount) {
        if ((2 * this.pageSize + 1) >= this.pageCount) {
          if ((this.pageCount - 2 * this.pageSize) >= 1) {
            startNum = this.pageCount - 2 * this.pageSize;
          } else {
            startNum = 1;
          }
        } else {
          startNum = this.pageCount - 2 * this.pageSize;
        }
      } else {
        if ((this.pageIndex - this.pageSize) >= 1) {
          startNum = this.pageIndex - this.pageSize;
        } else {
          startNum = 1;
        }
      }
    }
    this.loopOut(startNum, endNum);
    this.startNum = startNum;
    this.endNum = endNum;
  }

  private loopOut(startNum: number, endNum: number) {
    this.pages = [];
    for (var i = startNum; i <= endNum; i++) {
      if (i == this.pageIndex) {
        //输出@符号，代表当前页
        this.pages.push(new Page(i, '', true));
      } else {
        this.pages.push(new Page(i, '', false));
      }
    }
  }
}

export class Page {
  constructor(public pageNumber: number,
    public pageUrl: string,
    public selected: boolean) {
  }

}
