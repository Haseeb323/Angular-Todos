import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.scss'],
})
export class DeleteTodoComponent implements OnInit {
  @Input()
  public todo!: Todo;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  passBack(message: any = null) {
    this.activeModal.close(message);
  }
}
