import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { FotoService } from '../state/foto.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuarios!: any;
  nombre!: string;

  constructor(
    private stateService: StateService,
    public foto: FotoService
  ) {
  this.stateService.getNombre.subscribe((Alumno)=>{
    debugger;
    this.nombre = Alumno;
  })
  };

  async ngOnInit() {
    await this.foto.loadSaved();
  }
  //Añde la camara creo
  addPhotoToGallery() {
    this.foto.addNewToGallery();
  }
}