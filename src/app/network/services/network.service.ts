import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class NetworkService {

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${environment.TOKEN}`
    })
  }

  constructor(private http: HttpClient) { }

  getAllPeers(channel_genesis_hash: string) {
    return this.http.get(`/api/peers/${channel_genesis_hash}`,this.httpOptions);
  }
}
