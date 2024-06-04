import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public saveAttachmentAndReturnUrl(formData: FormData) : Observable<any> {
    return this.httpClient.post(`${environment.RESOURCE_URL}attachments-upload`, formData);
  }
}
