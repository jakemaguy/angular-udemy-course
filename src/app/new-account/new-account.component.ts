import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import {  AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService] // tells angular to provide logging service
})
export class NewAccountComponent {
  // dependency injection for service - proper way to use services
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
