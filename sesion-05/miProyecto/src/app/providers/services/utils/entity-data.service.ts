import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class EntityDataService<T> {

    constructor(
        protected httpClient: HttpClient,
        @Inject(String) protected url: string,
    ) { }

    public getAll$(): Observable<T[]> {
        return this.httpClient.get<T[]>(this.url);
    }

    public getByQuery$(query: any): Observable<T[]> {
        return this.httpClient.get<T[]>(this.url, { params: query });
    }

    public getById$(id: string): Observable<T> {
        return this.httpClient.get<T>(`${this.url}/${id}`);
    }

    public save$(data: T): Observable<any> {
        return this.httpClient.post<any>(this.url, data);
    }

    public update$(id: string, data: T): Observable<T> {
        return this.httpClient.put<any>(`${this.url}/${id}`, data);
    }

    public patch$(id: string, data: T): Observable<T> {
        return this.httpClient.patch<T>(`${this.url}/${id}`, data);
    }

    public delete$(id: string): Observable<T> {
        return this.httpClient.delete<T>(`${this.url}/${id}`);
    }
}
