import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable()
export class CounterService {
  constructor(private usersService: UsersService) { }

  getActiveUsers() {
    return this.usersService.activeUsers.length;
  }

  getInactiveUsers() {
    return this.usersService.inactiveUsers.length;
  }
}
