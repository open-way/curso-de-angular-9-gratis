import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityDataService } from './utils/entity-data.service';

const url: string = 'https://jsonplaceholder.typicode.com/comments';
@Injectable({
  providedIn: 'root',
})
export class CommentsService extends EntityDataService<any> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, url);
  }
}
