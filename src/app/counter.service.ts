export class CounterService {
  active: number;
  inactive: number;
  constructor() {
    this.active = 0;
    this.inactive = 0;
  }

  incrementActive() {
    this.active += 1;
  }

  incrementInactive() {
    this.inactive += 1;
  }

  getActiveUsers() {
    return this.active;
  }

  getInactiveUsers() {
    return this.inactive;
  }
}
