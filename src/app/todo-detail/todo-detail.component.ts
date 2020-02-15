import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../models/todoitem';
import { TodosMock } from '../mocks/todos-mock';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input()  item : TodoItem;

  constructor() { }

  ngOnInit(): void {
  }
}
