import { Component, OnInit} from '@angular/core';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';
import { ApiService } from '../state/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  nombre!: string;
  usuarios!: any;
  constructor(private router:Router, private stateService:StateService, private usuario:ApiService, /*guard: TestGuard*/) {
    this.stateService.getNombre.subscribe((Alumno)=>{
    
    this.nombre = Alumno;
    });
  }; 
  ngOnInit(){
    this.usuario.getUsers().subscribe((all)=>{
      console.log(all);
      this.usuarios = all.users;
    });
  }
}
  constructor(private stateService:StateService) {
    //this.stateService.getNombreUsuario.subscribe((usuario)=>{
    debugger;
      //this.nombre = usuario;
  //})
  }
}
