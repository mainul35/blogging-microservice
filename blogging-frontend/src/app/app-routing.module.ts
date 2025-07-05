import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthorizedComponent} from "./components/authorized/authorized.component";
import {UserComponent} from "./components/user/user.component";
import {AdminComponent} from "./components/admin/admin.component";

export const routes = [
  // TODO: TO activate later
  // {path: '', component: AppComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'stories', loadChildren: () => import('./modules/stories/stories.module').then(m => m.StoriesModule)},
  // {path: '**', component: AppComponent}
];

@NgModule({
  imports: [
    // TODO: To replace later with const routes declared above
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'authorized', component: AuthorizedComponent},
      { path: 'user', component: UserComponent},
      { path: 'admin', component: AdminComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
