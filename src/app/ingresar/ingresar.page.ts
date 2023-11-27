import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { ApiService } from '../state/api.service';
import { StateService } from '../state/state.service';
import {  Router } from '@angular/router';

export interface InterfaceUsuario {
  nombre: String;
  contraseña: String;
}
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage {
  formulariousuario: FormGroup;
  usuarios!: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private stateService: StateService,
    //private api: ApiService
  ) {
    this.formulariousuario = this.fb.group({
      nombre: [''],
      contraseña: [''],
    });
  }
  //Puedes ver la lista de los Alumnos con esto
  //ngOnInit() {
  //  this.api.getUsers().subscribe((all) => {
  //    console.log(all);
  //    this.usuarios = all.users;
  //  });
  //}

  //Se toman los valores del formulario al ingresar
  grabarAlumno() {
    console.log('Ingresando a la funcion');
    const Alumno = {
      nombreUsuario: this.formulariousuario.get('nombre')?.value,
      contraseña: this.formulariousuario.get('contraseña')?.value,
    };
    console.log(Alumno);
    //Usa el servicio
    this.stateService.setNombreUsuario = Alumno.nombreUsuario;
    //Validación de formulario(no puede estar vacio)
    if (Alumno.nombreUsuario == '' || Alumno.contraseña == '') {
      alert(
        'Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.'
      );
    } else {
      console.log(Alumno.nombreUsuario);
      console.log('Usuario iniciado correctamente');
      //seteo del nombre rescatado en el stateservice
      this.stateService.setNombreUsuario = Alumno.nombreUsuario;
      //estado de la sesion en el servicio
      this.stateService.setUserIsLogged(true);
      this.router.navigate(['/home']);
    }
  }
  // Se llama a la API
  llamarApi() {
    this.stateService.getIsLogged().subscribe((all: any) => {
      {
        console.log(all);
        this.stateService = all.users;
      }
    });
  }
}