import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from '../state/state.service';
import {  Router } from '@angular/router';

export interface InterfaceUsuario{
  nombre:String,
  password:String,
}

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {
  formulariousuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private stateService: StateService
  ) {
    this.formulariousuario = this.fb.group({
      nombre: [''],
      contraseña: [''],
    });
  }
  ngOnInit() {}

  grabarAlumno() {
    console.log('Ingresando a la funcion');
    const Alumno = {
      nombre: this.formulariousuario.get('nombre')?.value,
      contraseña: this.formulariousuario.get('contraseña')?.value,
    };
    console.log(Alumno);
    this.stateService.setNombreUsuario = Alumno.nombre;
    this.router.navigate(['home']);
  }

  llamarApi() {
    this.stateService.getNombreUsuario().subscribe((all: any) => {
      {
        console.log(all);
        this.stateService = all.users;
      }
    });
  }
}