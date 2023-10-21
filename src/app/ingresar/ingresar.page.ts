import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';
import { TestGuard } from "../guards/test.guard";
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})

export class IngresarPage implements OnInit {
  formulariousuario:FormGroup;
  usu!: any;
  constructor(private fb:FormBuilder, private router:Router, private stateService:StateService, guard: TestGuard) { 
    this.formulariousuario=this.fb.group({
      nombre:[""],
      contraseña:[""],
    })
  }
  ngOnInit(){
    // debugger;
    // this.usu.getisLogged().subscribe(()=>{
    //   //console.log();
    //   this.usu = this.grabarAlumno;
    // });
  }

  grabarAlumno(){
    console.log("Ingresando a la funcion")
    const Alumno={
      nombre:this.formulariousuario.get('nombre')?.value,
      contraseña:this.formulariousuario.get('contraseña')?.value,
    }
    console.log(Alumno)
    this.stateService.setNombre = Alumno.nombre
    this.router.navigate(['/home'])
  }
  validarAlumno(){
  }
}