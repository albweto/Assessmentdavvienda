import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { CuentaService } from '../services/cuenta.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  accountsdata:any = [];
  isActive = false;

  constructor(private service: CuentaService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.service.getAccount().pipe(pluck('accounts')).subscribe(
      data => this.accountsdata = data,
    )
  }


}
