import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityDataService } from './utils/entity-data.service';

// access_token
@Injectable({
  providedIn: 'root',
})
export class CommentsService extends EntityDataService<any> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'comments');
  }


}
