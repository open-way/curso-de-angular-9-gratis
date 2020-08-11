import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CatchInterceptorService implements HttpInterceptor {
  private started;

  constructor(
    private router: Router,
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.started = Date.now();
    const handleRequest = next.handle(req);
    // .do
    return handleRequest.pipe(
      tap(
        (res: HttpEvent<any>) => this.interceptResponse(res, req.method),
        (err: any) => this.catchError(err),
      ),
    );

  }

  private interceptResponse(event: HttpEvent<any>, method) {
    if (event instanceof HttpResponse) {
      const elapsed_ms = Date.now() - this.started;
      // console.warn(`La solicitud de ${event.url} tomó ${elapsed_ms} ms.`);
      if (elapsed_ms >= 10 * 1000) {
        console.warn(`La solicitud de ${event.url} tomó ${elapsed_ms} ms.`);
      }

      // if (this.isExceptions(event, method)) {
      this.toastByStatus(event.status, event);
      // }
    }
  }

  private toastByStatus(status: number, event?: HttpResponse<any>) {
    console.log('Respuesta exitosa');
    console.log('status', status);
    console.log('event', event);

    // this.toastrService.show(
    //   this.getMessage('M', status, event),
    //   this.getMessage('T', status),
    //   { status: this.getClassByStatus(status, (event && event.body.error)), }
    // );
  }

  // private isExceptions(event, method) {
  //   const resource = this.getOnlyUrlResource(event);
  //   if (method === 'GET') {
  //     return false;
  //   } else if (this.isFileExceptions(resource)) {
  //     return false;
  //   }
  //   return true;
  // }

  private catchError(err) {
    if (err instanceof HttpErrorResponse) {
      this.catchHttpError(err);
    } else {
      console.error(err.message);
    }
    setTimeout(() => {
      this.toastCatchHttpErrorByStatus(err.status, err);
    }, 1000);
  }

  private catchHttpError(err: HttpErrorResponse) {
    if (err.status === 401) {
      this.catchUnauthorized();
    } else {
      console.warn(err.statusText);
    }
  }

  private toastCatchHttpErrorByStatus(status: number, err: HttpErrorResponse) {
    // ngx-toast.
    console.log('Respuesta con errores:');
    console.log('status', status);
    console.log('event', err);
    // this.toastrService.show(
    //   this.getMessageCatchHttpError('M', status, err),
    //   this.getMessageCatchHttpError('T', status),
    //   { status: this.getClassByStatus(status, (err && err.error.success)), }
    // );
  }

  private catchUnauthorized() {
    // this.cleanAuthData();
    // this.setRedirectUrl();
    this.navigateToLogin();
  }

  // private cleanAuthData() {
  //   this.openOAuthStoreService.clearAll();
  // }

  private navigateToLogin() {
    this.router.navigateByUrl('/auth');
  }
}
