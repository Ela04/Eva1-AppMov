import { Component } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre!: string;
  constructor(private stateService:StateService) {
    //this.stateService.getNombreUsuario.subscribe((usuario)=>{
    debugger;
      //this.nombre = usuario;
  //})
  }
}
