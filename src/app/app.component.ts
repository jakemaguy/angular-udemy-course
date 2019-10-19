import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private users: UsersService,
    private counter: CounterService) {
    this.activeUsers = users.activeUsers;
    this.inactiveUsers = users.inactiveUsers;
  }

  getActiveUsers() {
    return this.counter.getActiveUsers();
  }
  getInactiveUsers() {
    return this.counter.getInactiveUsers();
  }
}
