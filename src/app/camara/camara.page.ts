import { Component, OnInit } from '@angular/core';
import { FotoService } from '../state/foto.service'; 
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  nombre!: string;
  constructor(public foto: FotoService, private stateService: StateService) {
    this.stateService.getNombre.subscribe((Alumno) => {
      this.nombre = Alumno;
    });
  }

  addPhotoToGallery() {
    this.foto.addNewToGallery();
  }

  async ngOnInit() {
    await this.foto.loadSaved();
  }
}