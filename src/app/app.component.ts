import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hideAlert: boolean = false;
  toggle() {
    this.hideAlert = !this.hideAlert;
  }
}
