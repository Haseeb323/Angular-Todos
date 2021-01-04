import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Test } from './test.model';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent implements OnInit {
  constructor() {}
  person = new Test('Haseeb', '');
  ngOnInit(): void {}
  onSubmit(data: NgForm) {
    console.log(data.value);
  }
}
