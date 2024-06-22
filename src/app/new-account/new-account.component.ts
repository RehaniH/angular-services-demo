import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService:  LoggingService,
    private accountService: AccountService) { }

  ngOnInit(): void {
  }

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({ name: accountName, status: accountStatus });
    // this.loggingService.logStatus(accountStatus);
  }

}
