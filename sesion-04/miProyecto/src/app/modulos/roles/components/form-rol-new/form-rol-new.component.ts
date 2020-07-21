import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Rol } from '../../models/rol';

@Component({
  selector: 'open-form-rol-new',
  templateUrl: './form-rol-new.component.html',
  styleUrls: ['./form-rol-new.component.scss']
})
export class FormRolNewComponent implements OnInit {
  // public rolModel: Rol = new Rol();

  @Output() public onGuardar = new EventEmitter<Rol>()

  @Input() public rolToEdit: Rol = new Rol();


  constructor() { }

  ngOnInit(): void {
  }

  public guardar() {
    if (this.rolToEdit.nombre) {
      this.onGuardar.emit(this.rolToEdit);
      this.rolToEdit = new Rol();
    }
  }
}
