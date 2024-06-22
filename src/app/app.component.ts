import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{

  public accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService){
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
    this.accountService.statusUpdated.subscribe(
      (status: string) => {
        alert('status changed to ' + status);
      }
    );
  }
}
