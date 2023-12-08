import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';

export interface InterfaceUsuario {
  nombre: String;
  contraseña: String;
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
      nombre: [
        '',
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]+$'),
      ],
      contraseña: ['', Validators.required, Validators.minLength(3)],
    });
  }

  //Se toman los valores del formulario al ingresar
  /*grabarAlumno() {
    const credencialesAlumno = {
      nombreUsuario: 'alumno',
      contraseña: '1234',
    };
    console.log('Ingresando a la funcion');
    const Alumno = {
      nombreUsuario: this.formulariousuario.get('nombre')?.value,
      contraseña: this.formulariousuario.get('contraseña')?.value,
    };
    console.log(Alumno);
    //Validación de formulario(no puede estar vacio)
    if (Alumno.nombreUsuario == '' || Alumno.contraseña == '') {
      alert(
        'Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.'
      );
    } else {
      console.log(Alumno.nombreUsuario);
      console.log('Usuario iniciado correctamente');
      //estado de la sesion en el servicio
      this.stateService.setUserIsLogged(true);
      this.router.navigate(['/home']);
      //seteo del nombre rescatado en el stateservice
      this.stateService.setNombreUsuario = Alumno.nombreUsuario;
    }
  }*/
  grabarUsuario() {
    const credencialesAlumno = {
      nombre: 'alumno',
      contraseña: '1234',
    };
    const credencialesDocente = {
      nombreDocente: 'Dusty',
      contraDocente: '1234',
    };
    //console.log('Ingresando a la funcion');
    const Usuario = {
      nombreUsuario: this.formulariousuario.get('nombre')?.value,
      contraseña: this.formulariousuario.get('contraseña')?.value,
    };

    //Valida al alumno
    if (
      Usuario.nombreUsuario == credencialesAlumno.nombre &&
      Usuario.contraseña == credencialesAlumno.contraseña
    ) {
      console.log(Usuario.nombreUsuario);
      console.log('Usuario iniciado correctamente');
      //estado de la sesion en el servicio
      this.stateService.setUserIsLogged(true);
      this.router.navigate(['/home']);
      //seteo del nombre rescatado en el stateservice
      this.stateService.setNombreUsuario = Usuario.nombreUsuario;
    }//Valida al docente
    if (
      Usuario.nombreUsuario == credencialesDocente.nombreDocente &&
      Usuario.contraseña == credencialesDocente.contraDocente
    ) {
      console.log(Usuario.nombreUsuario);
      console.log('Usuario iniciado correctamente');
      //estado de la sesion en el servicio
      this.stateService.setUserIsLogged(true);
      this.router.navigate(['/profe']);
      //seteo del nombre rescatado en el stateservice
      this.stateService.setNombreUsuario = Usuario.nombreUsuario;
    } if (Usuario.nombreUsuario == '' || Usuario.contraseña == '') {
      alert(
        'Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.'
      );
    }
    }

  ngOnInit() {}
}