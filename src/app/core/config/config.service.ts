import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _config!: Configuration | undefined;

  constructor(private http: HttpClient) {}

  async init() {
    this._config = await this.http.get<Configuration>('assets/env.json').toPromise();
  }

  public get config(): Configuration {
    if (!this._config) {
      throw new Error('Configuration is not initialized.');
    }
    return this._config;
  }
}

interface Configuration {
  BASE_URI: string;
  KEYCLOAK_URI: string;
  REALM: string;
  CLIENT_ID: string;
  CREDENTIALS_SECRET: string;
}
