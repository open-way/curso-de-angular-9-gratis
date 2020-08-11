import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'open-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public onLogin() {
    console.log('login');

    // Ir al api de authentication retorne un acces_token.
    const accessToken = 'logintoken';
    localStorage.setItem('access_token', accessToken);
    this.router.navigate(['/']);


  }

}
