import { Injectable, EventEmitter} from "@angular/core";
import { LoggingService } from "../app/logging.service";

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService){}
    
      addAccount(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
        this.loggingService.logStatus(status);
      }
    
      changeStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatus(newStatus);
        this.statusUpdated.emit(newStatus);
      }
}