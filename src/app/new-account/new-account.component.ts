import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import {  AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers array allows you to create instances of services
  // providers: [LoggingService] // tells angular to provide logging service
})
export class NewAccountComponent {
  // dependency injection for service - proper way to use services
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService) {
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert(`New Status: ${status}`)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
