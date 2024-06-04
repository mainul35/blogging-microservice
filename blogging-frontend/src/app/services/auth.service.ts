import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

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
    body.set('grant_type', environment.grant_type)
    body.set('client_id', environment.client_id)
    body.set('redirect_uri', environment.redirect_uri)
    body.set('scope', environment.scope)
    body.set('code_verifier', environment.code_verifier)
    body.set('code', code)
    const basic_auth = 'Basic ' + btoa('client1:secret1')
    const headerObjects = new HttpHeaders({
      'Content-Type': "application/x-www-form-urlencoded",
      "accept": "*/*",
      "authorization": basic_auth
    })
    const httpOptions = {headers: headerObjects}
    return this.httpClient.post<any>(this.token_uri, body, httpOptions);
  }
}
