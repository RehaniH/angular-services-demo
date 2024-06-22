import { Component, Input, EventEmitter, Output } from '@angular/core';
import{ LoggingService} from '../logging.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {

  @Input() account: { name: string, status: string } = {name: 'test', status: 'Hidden'};
  @Input() id: number = 0;
  
  constructor(private loggingService:  LoggingService,
      private accountService: AccountService){}

  onSetTo(status: string) {
    this.accountService.changeStatus(this.id, status);
  }

}
