import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class BlocksService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${environment.TOKEN}`
    })
  };

  constructor(private http: HttpClient) { }


  getAllblocksByDate(channelGenesisHash: string, from: string, to: string) {
    return this.http.get(`/api/blockAndTxList/${channelGenesisHash}/0?from=${from}&to=${to}`, this.httpOptions);
  }


  getAllMsp(channelGenesisHash:string){
    return this.http.get(`/api/txByOrg/${channelGenesisHash}`, this.httpOptions);
  }


  getBlockByBlockhash(channelGenesisHash: string, blockhash: string) {
    return this.http.get(`/api/block/${channelGenesisHash}/${blockhash}`, this.httpOptions);
  }
}
