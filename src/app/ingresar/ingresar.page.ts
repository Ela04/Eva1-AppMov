import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../state/api.service';
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
  usuarios!: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private stateService: StateService,
    private api: ApiService
  ) {
    this.formulariousuario = this.fb.group({
      nombre: [''],
      contraseña: [''],
    });
  }
  ngOnInit() {
    this.api.getUsers().subscribe((all) => {
      console.log(all);
      this.usuarios = all.users;
    });
  }

  //Se toman los valores del formulario
  grabarAlumno() {
    console.log('Ingresando a la funcion');
    const Alumno = {
      nombreUsuario: this.formulariousuario.get('nombre')?.value,
      contraseña: this.formulariousuario.get('contraseña')?.value,
    };
    console.log(Alumno);
    this.stateService.setNombreUsuario = Alumno.nombreUsuario;
    this.router.navigate(['/privada']);
    //Validación de formulario y seteo del nombre rescatado en el stateservice
    if (Alumno.nombreUsuario == '' || Alumno.contraseña == '') {
      alert(
        'Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.'
      );
    } else {
      console.log(Alumno.nombreUsuario);
      console.log('Usuario iniciado correctamente');
      this.stateService.setNombreUsuario = Alumno.nombreUsuario;
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