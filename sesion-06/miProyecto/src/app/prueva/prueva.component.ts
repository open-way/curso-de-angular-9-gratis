import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'open-prueva',
  templateUrl: './prueva.component.html',
  styleUrls: ['./prueva.component.scss']
})
export class PruevaComponent implements OnInit {
  public idParametro: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    // this.activatedRoute.paramMap
    //   .pipe(map(parametros => parametros.get('id')))
    //   .subscribe(id => {
    //     console.log(id);
    //     this.idParametro = id;
    //   });

    // this.idParametro = this.activatedRoute.snapshot.paramMap.get('id');

    // this.router.navigate([]);
    // this.activatedRoute.params

  }

}
