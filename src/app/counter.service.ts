import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable()
export class CounterService {
  activeToInactive = 0;
  InactiveToActive = 0;
  constructor(private usersService: UsersService) { }

  getActiveUsers() {
    this.usersService.userSetToActive.subscribe(
      () => this.activeToInactive += 1
      );
    return this.activeToInactive;
  }

  getInactiveUsers() {
    this.usersService.userSetToInactive.subscribe(
      () => this.InactiveToActive += 1
    );
    return this.InactiveToActive;
  }
}
