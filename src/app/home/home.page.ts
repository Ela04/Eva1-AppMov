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
  namae!: any;

  constructor(
    private api: ApiService, 
    private nom: StateService,
    public foto:FotoService,
  ) {
    //Obtener nombre usuario para mostralo en home.html
    this.nom.getNombreUsuario().subscribe((nombreUsuario: string) => {
      //debugger;
      console.log(nombreUsuario);
      this.namae = nombreUsuario;
    });
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