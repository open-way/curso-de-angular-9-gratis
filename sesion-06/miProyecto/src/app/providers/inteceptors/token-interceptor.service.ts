import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  private accessToken: string;
  constructor() { }

  private subscribeToTokenLambChanges() {
    // this.accessToken = 'abc';
    this.accessToken = localStorage.getItem('access_token') || 'No hay token';
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.subscribeToTokenLambChanges();
    const authorizationReq = this.accessToken ? this.setTokenHeader(req) : req;
    const urlReq = this.setUrl(authorizationReq);
    const handleRequest = next.handle(urlReq);
    return handleRequest;
  }

  private setTokenHeader(req: HttpRequest<any>): HttpRequest<any> {

    const authorization = `Bearer ${this.accessToken}`;
    const header = req.headers.set('Authorization', authorization);
    const authorizationReq = req.clone({ headers: header });
    return authorizationReq;
  }

  private setUrl(req: HttpRequest<any>): HttpRequest<any> {
    if (!req.url.includes('assets/')) {
      const URL_API = environment.apiUrl;
      const URL_RESOURCE = req.url;
      return req.clone({ url: `${URL_API}${URL_RESOURCE}` });
    } else {
      return req.clone({ url: `${req.url}` });
    }
  }
}
