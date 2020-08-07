import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public parametro = 60;

  constructor() { }

  ngOnInit(): void {
  }

}
