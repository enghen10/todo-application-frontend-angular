import { Component, OnInit } from '@angular/core';
import { TodosService } from "../services/todos.service";
import { Observable } from "rxjs";
import { Todo } from "../model/todo";
import { TodoFilter } from "../model/filter";

@Component({
  templateUrl: 'list.component.html',
  providers: [ TodosService ]
})

export class ListComponent implements OnInit {

  todos: Todo[];
  filter = new TodoFilter('', false);
  errorMsg: Observable<string>;

  constructor( private todosService: TodosService ) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getAll().subscribe(
      response => this.todos = response,
      error => this.errorMsg = error
    );
  }
}
