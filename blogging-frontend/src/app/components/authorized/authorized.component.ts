import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from '../../services/auth.service';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {

  code = ''
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( data => {
      this.code = data['code'];
      if (this.code) {
        this.getToken();
      }
    })
  }

  getToken(): void {
    // @ts-ignore
    this.authService.getToken(this.code).subscribe(value => {
      console.log(value)
      this.tokenService.setTokens(value.access_token, value.refresh_token)
    })
  }
}
