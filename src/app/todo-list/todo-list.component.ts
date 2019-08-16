import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  visible = true;
  public todo: any = "";

  public todoList = ["hello", "agular"];

  addtodo(e) {
    if (this.todo != "") {// return  
      this.todoList.push(this.todo);
      this.todo = " ";// empty the input
    }

  }

  /*delete item*/
  deleteItem(todo) {
    // for (let i = 0; i <= this.todoList.length; i++) {
    //   if (todo == this.todoList[i]) {
    //     this.todoList.splice(i, 1)
    //   }
    // }
    this.todoList = this.todoList.filter(h => h !== todo);
  }
  constructor() { }

  ngOnInit() {

  }

}
