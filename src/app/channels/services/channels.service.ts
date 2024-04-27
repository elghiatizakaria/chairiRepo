import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${environment.TOKEN}`
    })
  };

  constructor(private http: HttpClient) { }

 
  getChannels() {
    return this.http.get('/api/channels/info', this.httpOptions);
  }


  

 

}


