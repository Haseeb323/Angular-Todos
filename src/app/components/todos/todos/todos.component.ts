import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTodoComponent } from 'src/app/modals/todos/add-todo/add-todo.component';
import { EditTodoComponent } from 'src/app/modals/todos/edit-todo/edit-todo.component';
import { DeleteTodoComponent } from 'src/app/modals/todos/delete-todo/delete-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  currentDate = Date.now();
  todos: Todo[] = [
    {
      _id: Math.random().toString(),
      title: 'Title 1',
      description: 'des 1',
      date: this.currentDate,
    },
    {
      _id: Math.random().toString(),
      title: 'Title 2',
      description: 'des 2',
      date: this.currentDate,
    },
    {
      _id: Math.random().toString(),
      title: 'Title 3',
      description: 'des 3',
      date: this.currentDate,
    },
    {
      _id: Math.random().toString(),
      title: 'Title 4',
      description: 'des 4',
      date: this.currentDate,
    },
  ];
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}
  deleteTodo(todo: Todo) {
    const modalRef = this.modalService.open(DeleteTodoComponent);
    const copyTodo: Todo = todo;
    modalRef.componentInstance.todo = copyTodo;
    modalRef.result.then((result) => {
      if (result) {
        if (result === 'confirm') {
          this.todos = this.todos.filter((r) => r._id != todo._id);
        }
      }
    });
  }
  addTodo() {
    const modalRef = this.modalService.open(AddTodoComponent);
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
  editTodo(todo: Todo) {
    const modalRef = this.modalService.open(EditTodoComponent);
    const todoC = todo;
    modalRef.componentInstance.todo = todoC;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
