import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from '../state/state.service';
import { CanActivateChildFn, Router, mapToCanActivate } from '@angular/router';
import { TestGuard } from "../guards/test.guard";
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})

export class IngresarPage implements OnInit {
  formulariousuario:FormGroup;
  usu!: any;
  nombre!: string;
  constructor(private fb:FormBuilder, private router:Router, private stateService:StateService, public guard: TestGuard) { 
    this.formulariousuario=this.fb.group({
      nombre:[""],
      contraseña:[""],
    })
    this.stateService.getNombre.subscribe((Alumno)=>{
      this.nombre = Alumno;
      });
  }
  ngOnInit(){
  }
  //Se toman los valores del formulario
  grabarAlumno(){
    console.log("Ingresando a la funcion")
    const Alumno={
      nombreUsuario:this.formulariousuario.get('nombre')?.value,
      contraseña:this.formulariousuario.get('contraseña')?.value,
    }
    console.log(Alumno)
    this.stateService.setNombre = Alumno.nombreUsuario
    this.router.navigate(['/privada'])
    //Validación de formulario y seteo del nombre rescatado en el stateservice
    if (Alumno.nombreUsuario == '' || Alumno.contraseña == '' ) {
      alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    } else {
      console.log(Alumno.nombreUsuario)
      console.log('Usuario iniciado correctamente')
      this.stateService.setNombre = Alumno.nombreUsuario;
      this.stateService.setUserIsLogged(true);
      this.router.navigate(['/home']);
    }
  }
  // Se llama a la API
  llamarApi(){
    this.stateService.getIsLogged().subscribe((all:any)=>{
    {
      console.log(all);
      this.stateService = all.users;
    }
    });
  }
}
