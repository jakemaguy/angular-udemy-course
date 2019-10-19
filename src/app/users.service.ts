import { EventEmitter, Output } from '@angular/core';

export class UsersService {
  @Output() userSetToActive = new EventEmitter<number>();
  @Output() userSetToInactive = new EventEmitter<number>();
  constructor() { }
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.userSetToInactive.emit();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.userSetToActive.emit();
  }
}
