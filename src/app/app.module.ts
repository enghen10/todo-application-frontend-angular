import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { SearchComponent } from './search/search.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { NewTodoFormComponent } from './new-todo/new-todo-form.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FrontpageComponent,
    NewTodoComponent,
    NewTodoFormComponent,
    SearchPipe,
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
