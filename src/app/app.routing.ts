import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

const appRoutes: Routes = [
  { path: 'new', component: NewTodoComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: FrontpageComponent, pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
