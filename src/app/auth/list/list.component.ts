import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _ListService: ListService) { }

  getColor(status) {
    if (status == "ascending") {
      return { color: this.fontColor = "green" };
    } else if (status == "descending") {
      return { color: this.fontColor = "red" };
    } else {
      return { color: this.fontColor = "gray" };
    }
  }

  public totallyaccountLists: any;
  public accountLists;
  public isCollapse = true;
  public ascendingSort = true;
  public ascendingAccount = true;
  public fontColor: string;

  ngOnInit() {
    // this._ListService.getlist().subscribe(
    //   data => {
    //     this.totallyaccountLists = data;
    //     console.log(this.totallyaccountLists);
    //this.accountLists = this.totallyaccountLists.slice(0, 3);
    //   },
    //   err => console.log("error")
    // );
    //this.sliceList();
    // }
    this.totallyaccountLists = [
      { name: 'IRA-5200', cur_cash: '$5763.36', pre_cash: '$8916.69', status: 'descending', ratio: '-0.08%' },
      { name: 'AAA-2018', cur_cash: '$15,884,302.36', pre_cash: '$7,430.69', status: 'ascending', ratio: '0.08%' },
      { name: 'REG-0029', cur_cash: '$2,010,926.10', pre_cash: '$38,888.69', status: 'descending', ratio: '-1.18%' },
      { name: 'AAA-1812', cur_cash: '$13,465,679.34', pre_cash: '$0.00', status: 'balance', ratio: '0.00%' },
      { name: 'IRA-0146', cur_cash: '$10,050,054.07', pre_cash: '$8,916.69', status: 'descending', ratio: '-2.08%' },
      { name: 'AAA-3810', cur_cash: '$576,388.36', pre_cash: '$8906.69', status: 'ascending', ratio: '3.08%' },
      { name: 'REG-2019', cur_cash: '$39,160,334.36', pre_cash: '$8,916,324.69', status: 'descending', ratio: '-0.07%' }
    ];
    this.accountLists = this.totallyaccountLists.slice(0, 3);

    // sliceList() {
    //   //this.accountLists = this.totallyaccountLists.slice(0, 3);
    // }
  }

  loadmore() {
    this.isCollapse = !this.isCollapse;
    this.accountLists = this.totallyaccountLists;
  }

  sortAccount() {
    // this.accountLists = this.totallyaccountLists;
    if (this.ascendingAccount) {
      ////ascending
      this.accountLists.sort(function (a, b) {
        const aName = a.name.split("-");
        const bName = b.name.split("-");
        return parseInt(bName[1]) - parseInt(aName[1]);
      });
    } else {
      this.accountLists.sort(function (a, b) {
        const aName = a.name.split("-");
        const bName = b.name.split("-");
        return parseInt(aName[1]) - parseInt(bName[1]);
      });
    }
    this.ascendingAccount = !this.ascendingAccount;
  }

  sortCash() {
    if (this.ascendingSort) {
      this.accountLists.sort(
        (a, b) => parseFloat(b.cur_cash) - parseFloat(a.cur_cash)
      ); //ascending
    } else {
      this.accountLists.sort(
        (a, b) => parseFloat(a.cur_cash) - parseFloat(b.cur_cash)
      );
    }
    this.ascendingSort = !this.ascendingSort;
  }
}
