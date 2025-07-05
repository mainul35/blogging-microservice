import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { SecuredComponent } from './components/secured/secured.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { ContentComponent } from './components/content/content.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import {HighlightService} from "./services/HighlightService";
import {TokenInterceptor} from "./interceptors/TokenInterceptor";
import { HomeComponent } from './components/home/home.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecuredComponent,
    NavbarComponent,
    ContentWrapperComponent,
    ContentComponent,
    ContentHeaderComponent,
    HomeComponent,
    AuthorizedComponent,
    MenuComponent,
    UserComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
    ,HighlightService
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
