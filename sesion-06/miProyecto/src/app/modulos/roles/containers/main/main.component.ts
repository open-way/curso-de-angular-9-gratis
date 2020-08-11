import { Component, OnInit } from '@angular/core';
import { Rol } from '../../models/rol';

@Component({
  selector: 'open-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public roles: Rol[] = [];
  public rolToEdit: Rol = new Rol();

  constructor() { }

  ngOnInit(): void {
    this.roles.push({ nombre: 'Master', activo: true })
    this.roles.push({ nombre: 'Invitado', activo: true })
    this.roles.push({ nombre: 'Invitado 2', activo: false })
  }

  public guardarMain(rol) {
    // console.log('Rol en el padre');
    // console.log(rol);
    this.roles.push(rol);
  }

  public onShowToEdit(rol) {
    // console.log('onShowToEdit :', rol);
    this.rolToEdit = rol;
  }

  public onEliminarr(miIndice) {
    this.roles.splice(miIndice, 1);
  }



}
