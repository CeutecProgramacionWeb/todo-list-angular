import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../models/todoitem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url : string = "https://jsonplaceholder.typicode.com";
  constructor(private httpClient : HttpClient) { 
  }

  get() : Observable<Array<TodoItem>>{
    return this.httpClient.get<Array<TodoItem>>(`${this.url}/todos`);
  }
}
