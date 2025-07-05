import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {AppConstants} from "../AppConstants";
import {TokenService} from "../services/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  allowedPaths: string[] = [
    'login',
    'secured',
  ]

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let intReq = request;
    const token = this.tokenService.getAccessToken();
    if (token != null && request.url.includes('api/v1')) {
      intReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)})
    }
    return next.handle(request);
  }
}
