import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {AppConstants} from "../AppConstants";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  allowedPaths: string[] = [
    'login',
    'secured',
  ]

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // @ts-ignore
    this.allowedPaths.forEach(path => {
      if (request.url.includes(path)) {
        return next.handle(request);
      }
    })

    // const userInfoStr = localStorage.getItem(AppConstants.ACCESS_TOKEN);
    // // @ts-ignore
    // const userInfo = JSON.parse(userInfoStr);
    // const jwt = userInfo.jwtToken;

    // request.headers['headers'] = [{"Authorization": `Bearer ${jwt}`}]

    request = request.clone({
      setHeaders: {'Authorization': 'Bearer '+localStorage.getItem(AppConstants.ACCESS_TOKEN)}
    });

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer '+localStorage.getItem(AppConstants.ACCESS_TOKEN),
    //   'Content-Type': 'application/json'
    // });
    //
    // const cloneReq = request.clone({ headers });
    // debugger
    return next.handle(request);
  }
}
