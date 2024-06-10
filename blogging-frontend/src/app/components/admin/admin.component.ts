import { Component, OnInit } from '@angular/core';
import {ResourceService} from "../../services/resource.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  message: string | undefined;
  constructor(
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.resourceService.admin().subscribe(value => {
      this.message = value.message;
    })
  }
}
