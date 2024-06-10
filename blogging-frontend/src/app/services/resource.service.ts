import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public user () : Observable<any> {
    return this.httpClient.get<any>(environment.RESOURCE_URL + "user")
  }

  public admin () : Observable<any> {
    return this.httpClient.get<any>(environment.RESOURCE_URL + "admin")
  }
}
