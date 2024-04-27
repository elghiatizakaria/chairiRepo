import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${environment.TOKEN}`
    })
  }

  constructor(private http: HttpClient) { }

  getTransactionsByDate(channelGenesisHash: string, from: string, to: string) {
    console.log(this.http.get(`/api/txList/${channelGenesisHash}/0/0?from=${from}&&to=${to}`));

    return this.http.get(`/api/txList/${channelGenesisHash}/0/0?from=${from}&&to=${to}`, this.httpOptions);
  }


  getTransactionByTxhash(channelGenesisHash: string,txhash: string) {
    return this.http.get(`/api/transaction/${channelGenesisHash}/${txhash}`, this.httpOptions);
  }

  getAllTransactions(){
    return this.http.get(`http://localhost:8085/transactions`)
  }
}
