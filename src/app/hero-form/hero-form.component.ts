import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from './hero.model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit(data: NgForm) {
    this.submitted = true;
    console.log(data);
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }
  constructor() {}
}
