import {Component, Input, OnInit} from '@angular/core';
import * as console from "console";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  authorize_uri = environment.authorize_uri;
  params : any = {
    client_id: environment.client_id,
    redirect_uri: environment.redirect_uri,
    scope: environment.scope,
    response_type: environment.response_type,
    response_mode: environment.response_mode,
    code_challenge_method: environment.code_challenge_method,
    code_challenge: environment.code_challenge,
  }
  @Input() isLoggedIn!: boolean;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin () : void {
    const httpParams = new HttpParams({fromObject: this.params})
    const codeUrl = this.authorize_uri + httpParams.toString()
    location.href = codeUrl
  }

}
