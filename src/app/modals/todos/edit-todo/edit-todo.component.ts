import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  @Input() todo: any;
  editedTodo: any = {
    title: '',
    description: '',
  };
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.editedTodo.title = this.todo.title;
    this.editedTodo.description = this.todo.description;
  }
  passBack(message: any = null) {
    this.activeModal.close(message);
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
