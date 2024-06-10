import { Component, OnInit } from '@angular/core';
import {ResourceService} from "../../services/resource.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  message: string | undefined;

  constructor(
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    let subscribed = this.resourceService.user().subscribe(value => {
      this.message = value.message;
    })
  }
}
