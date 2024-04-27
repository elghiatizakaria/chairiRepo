import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChaincodesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${environment.TOKEN}`
    })
  };

  constructor(private http: HttpClient) { }


  getAllChaincodes(channelGenesisHash: string) {
    return this.http.get(`/api/chaincode/${channelGenesisHash}`, this.httpOptions);
  }


}
