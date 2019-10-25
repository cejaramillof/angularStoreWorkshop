import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-store';
  isLoggedIn: boolean = true;
  loggedOut: boolean = true;
  names: Array<string> = ['Carlos', 'Camila', 'Tyrone'];

  addName(): void {
    this.names.push('New');
  }

  removeName(id: number): void {
    this.names.splice(id, 1);
  }
}
