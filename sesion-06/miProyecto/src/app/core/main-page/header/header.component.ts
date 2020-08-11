import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'open-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public onLogout() {
    localStorage.removeItem('access_token')
    // this.router.navigate(['/']);
    this.router.navigate(['/auth']);

  }

}
