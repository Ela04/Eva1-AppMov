import { Component, OnInit } from '@angular/core';
import { FotoService } from '../state/foto.service'; 


@Component({
  selector: 'app-privada',
  templateUrl: './privada.page.html',
  styleUrls: ['./privada.page.scss'],
})
export class PrivadaPage implements OnInit {
  constructor(public foto: FotoService) {}
  
  async ngOnInit() {
    await this.foto.loadSaved();
  }
  //Añade la camara creo
  addPhotoToGallery() {
    this.foto.addNewToGallery();
  }
}