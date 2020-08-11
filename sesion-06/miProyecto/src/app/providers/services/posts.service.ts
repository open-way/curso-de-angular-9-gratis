import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityDataService } from './utils/entity-data.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService extends EntityDataService<any> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'posts');
  }

}
