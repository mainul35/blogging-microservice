import {Component, Input, OnInit} from '@angular/core';
import {AppConstants} from "../../AppConstants";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  imageUrl ?: string;
  name ?: string;
  @Input() isLoggedIn!: boolean;
  constructor(
    private router: Router
  , private authService: AuthService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.imageUrl = localStorage.getItem('image_url');
    // @ts-ignore
    this.name = localStorage.getItem('name');
  }

  logout() {
    localStorage.removeItem(AppConstants.ACCESS_TOKEN)
    this.router.navigateByUrl("login")
  }

  login() {
    console.log("login ")
    this.router.navigate(["login"])
  }
}
