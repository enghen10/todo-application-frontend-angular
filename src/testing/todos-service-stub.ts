import { Injectable } from "@angular/core";
import { Todo } from "../app/shared/model/todo";

@Injectable()
export class TodosServiceStub {

  constructor() { }

  getAll():Todo[] {
    return [];
  }

  create(todo: Todo):Todo{
    return todo;
  }
}
