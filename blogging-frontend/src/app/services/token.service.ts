import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private ACCESS_TOKEN = 'access_token';
  private REFRESH_TOKEN = 'refresh_token'
  constructor() { }

  setTokens (access_token: string, refresh_token: string) {
    localStorage.removeItem(this.ACCESS_TOKEN)
    localStorage.setItem(this.ACCESS_TOKEN, access_token);
    localStorage.removeItem(this.REFRESH_TOKEN)
    localStorage.setItem(this.REFRESH_TOKEN, refresh_token);
  }

  getAccessToken() : string | null {
    return localStorage.getItem(this.ACCESS_TOKEN)
  }

  getRefreshToken () : string | null {
    return localStorage.getItem(this.REFRESH_TOKEN)
  }
}
