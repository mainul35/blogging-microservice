import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token_uri = environment.token_url;
  constructor(
    private httpClient: HttpClient
  ) { }

  // @ts-ignore
  public getToken (code: string) : Observable<any> {
    let body = new URLSearchParams();
    body.set('grant_type', 'authorization_code')
    body.set('client_id', 'client1')
    body.set('redirect_uri', 'http://127.0.0.1:4200/authorized')
    body.set('scope', 'openid')
    body.set('code_verifier', 'g4qE6ENmlEHpUxNIv0XrE57LfLjgqG28BRke4XLq6AR')
    body.set('code', code)
    const basic_auth = 'Basic ' + btoa('client1:secret')
    const headerObjects = new HttpHeaders({
      'Content-Type': "application/x-www-form-urlencoded",
      "accept": "*/*",
      "authorization": basic_auth
    })
    const httpOptions = {headers: headerObjects}
    return this.httpClient.post<any>(this.token_uri, body, httpOptions);
  }
}
