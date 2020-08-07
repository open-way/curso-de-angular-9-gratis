import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'open-main-usuarios',
  templateUrl: './main-usuarios.component.html',
  styleUrls: ['./main-usuarios.component.scss']
})
export class MainUsuariosComponent implements OnInit {
  public formUsuario: FormGroup;

  public usuarios: Usuario[] = [];
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    const controls = {
      nombre: ['Vitmar Aliaga', Validators.required],
      email: ['cruzjhonson@gmail', [Validators.required, Validators.email]],
      activo: [true, Validators.required],
    };
    this.formUsuario = this.formBuilder.group(controls);
  }


  public guardar() {
    // this.formUsuario.value;
    // this.formUsuario.valid;
    this.usuarios.push(this.formUsuario.value);
  }

  public onEditar(indice: number) {

  }

  public onEliminar(indice: number) {

  }

}
