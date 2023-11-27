import { Component, OnInit } from '@angular/core';
import { FotoService } from '../state/foto.service'; 
import { ApiService } from '../state/api.service';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-privada',
  templateUrl: './privada.page.html',
  styleUrls: ['./privada.page.scss'],
})
export class PrivadaPage implements OnInit {
  usuarios!: any;
  nombre!: string;
  constructor(
    private api: ApiService,
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
    //Api obtine la lista de los usuarios
    this.api.getUsers().subscribe((all) => {
      console.log(all);
      this.usuarios = all.users;
    });
  }
  //Añade la camara creo
  addPhotoToGallery() {
    this.foto.addNewToGallery();
  }
}