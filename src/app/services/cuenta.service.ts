import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private httpclient: HttpClient) { }

  getAccount(){
    return this.httpclient.get(`https://my-json-server.typicode.com/stebanjimenezg/test/db`);
  }
}
