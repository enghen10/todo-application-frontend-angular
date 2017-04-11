import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { SearchTodosComponent } from './list/search.component'
import { ListComponent } from './list/list.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { NewTodoFormComponent } from './new-todo/new-todo-form.component';
import { FilterPipe, SearchPipe } from './pipes/filters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchTodosComponent,
    ListComponent,
    FrontpageComponent,
    NewTodoComponent,
    NewTodoFormComponent,
    FilterPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
