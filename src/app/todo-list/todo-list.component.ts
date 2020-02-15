import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/todoitem';
import { TodosMock } from '../mocks/todos-mock';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  selectedItem : TodoItem;
  todos : Array<TodoItem>;
  
  constructor() { 
    this.todos = TodosMock;
  }

  ngOnInit(): void {
  }

  onClick(todo : TodoItem) : void{
    this.selectedItem = todo;
  }

}
