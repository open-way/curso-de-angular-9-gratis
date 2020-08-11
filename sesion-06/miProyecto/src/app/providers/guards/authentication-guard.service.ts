import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate(): boolean {
    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
      this.router.navigate(['auth']);
      return false;
    } else {
      return true;
    }
  }
}
