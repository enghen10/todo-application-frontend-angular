import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'new-todo-form',
  templateUrl: './new-todo-form.component.html',
  providers: [ TodosService ]
})
export class NewTodoFormComponent {

  todo = new Todo('', '');
  submitted = false;

  constructor( private todosService: TodosService ) {}

  save() {
    this.todosService.create(this.todo).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  modelDebug() {
    return JSON.stringify(this.todo);
  }
}
