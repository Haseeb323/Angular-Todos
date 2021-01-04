import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTodoComponent } from './modals/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './modals/todos/edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './modals/todos/delete-todo/delete-todo.component';
import { TodosComponent } from './components/todos/todos/todos.component';

@NgModule({
  declarations: [AppComponent, AddTodoComponent, EditTodoComponent, DeleteTodoComponent, TodosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
