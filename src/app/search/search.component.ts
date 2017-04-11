import { Component, OnInit } from '@angular/core';
import { TodosService } from "../services/todos.service";
import { Observable } from "rxjs";
import { Todo } from "../model/todo";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ TodosService ]
})

export class SearchComponent implements OnInit {

  todos: Todo[];
  query: string;
  errorMsg: Observable<string>;

  constructor( private todosService: TodosService ) {}

  ngOnInit() { this.getTodos(); }

  getTodos() {
    this.todosService.getAll().subscribe(
      response => this.todos = response,
      error => this.errorMsg = error
    );
  }
}
