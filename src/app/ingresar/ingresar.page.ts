import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';

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
  formulariousuario:FormGroup;
  constructor(
    private fb:FormBuilder, 
    private router:Router, 
    private stateService:StateService) { 
    this.formulariousuario=this.fb.group({
      nombre:[""],
      contraseña:[""],
    })
  }
  ngOnInit(){
  }

  grabarAlumno(){
  //Muestra que ingresa correctamente
  console.log("Ingresando a la funcion");

  //obtener los datos de usuario
  const usuario: InterfaceUsuario ={
    nombre:this.formulariousuario.get('nombre')?.value,
    password:this.formulariousuario.get('password')?.value
  }

  //validar datos de usuario
  //si los datos se cumplen, entra
  if(usuario.nombre.trim()==''|| usuario.password.trim()==''){

  //nok, enviar una alerta debe completarlos datos del formulario
  alert('Debe completar todos los campos');
  return;
  }
  //ok, redirecciona al home::mensaje de datos correctos
  this.router.navigate(['/home']);

  console.log(usuario);

  //ok, guardar nombre de usuario en estado
  //this.stateService.setNombreUsuario = usuario.nombre
  
  }
}