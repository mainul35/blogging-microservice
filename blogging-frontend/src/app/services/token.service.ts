import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private ACCESS_TOKEN = 'access_token';
  private REFRESH_TOKEN = 'refresh_token'
  constructor() { }

  setTokens (access_token: string, refresh_token: string) {
    localStorage.setItem(this.ACCESS_TOKEN, access_token);
    localStorage.setItem(this.REFRESH_TOKEN, refresh_token);
  }
}
