import { Component, OnInit } from '@angular/core';
import { ApiService } from '../state/api.service';
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
    private api: ApiService,
    private stateService: StateService,
    public foto: FotoService
  ) {

  this.stateService.getNombre.subscribe((Alumno)=>{
    debugger;
    this.nombre = Alumno;
  })
  }

  async ngOnInit() {
    await this.foto.loadSaved();
    //Api obtine la lista de los usuarios
    this.api.getUsers().subscribe((all) => {
      console.log(all);
      this.usuarios = all.users;
    });
  }

  //Añde la camara creo
  addPhotoToGallery() {
    this.foto.addNewToGallery();
  }
}