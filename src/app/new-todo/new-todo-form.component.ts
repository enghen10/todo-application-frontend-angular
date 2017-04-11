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
  savedTodo: Todo;
  submitted = false;
  saveError: any;

  constructor( private todosService: TodosService ) {}

  save() {
    this.todosService.create(this.todo).subscribe(
      response => {
        this.savedTodo = response;
        this.submitted = true;
      },
      error => this.handleSaveError
    );
  }

  makeNewTodo() {
    this.todo = new Todo('','');
    this.submitted = false;
    this.saveError = null;
  }

  handleSaveError(error) {
    console.log(error);
    this.saveError = error;
  }

  modelDebug(todo: Todo) {
    return JSON.stringify(todo);
  }
}
