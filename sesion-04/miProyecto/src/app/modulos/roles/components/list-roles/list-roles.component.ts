import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rol } from '../../models/rol';

@Component({
  selector: 'open-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss']
})
export class ListRolesComponent implements OnInit {

  @Input() public rolesList: Rol[] = [];

  @Output() public onShowToEdit = new EventEmitter<Rol>();
  @Output() public onEliminarr = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
   
  }

  public onEditar(rol) {
    console.log(rol);
    this.onShowToEdit.emit(rol);
  }

  public onEliminar(miIndice) {
    console.log(miIndice);
    this.onEliminarr.emit(miIndice);
  }


}
