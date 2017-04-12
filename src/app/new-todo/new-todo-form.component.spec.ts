import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTodoFormComponent } from "./new-todo-form.component";
import { TodosService } from "../shared/todos.service";
import { Todo } from "../shared/model/todo";
import {FormsModule} from "@angular/forms";
import {TodosServiceStub} from "../../testing/todos-service-stub";

describe('NewTodoFormComponent', () => {
  let component: NewTodoFormComponent;
  let fixture: ComponentFixture<NewTodoFormComponent>;
  let todoService: TodosService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NewTodoFormComponent ],
      providers:    [ { provide: TodosService, useClass: TodosServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewTodoFormComponent);
    component = fixture.componentInstance;
    todoService = fixture.debugElement.injector.get(TodosService);
    fixture.detectChanges();
  }));

  it('should create a form component', async(() => {
    expect(component).toBeTruthy();
    expect(component.save).toBeDefined();
  }));

  it('should call create on TodoService', () => {

  });
});
