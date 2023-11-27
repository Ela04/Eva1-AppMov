import { Component, OnInit } from '@angular/core';
import { FotoService } from '../state/foto.service'; 

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  constructor(public foto: FotoService) {}

  addPhotoToGallery() {
    this.foto.addNewToGallery();
  }

  async ngOnInit() {
    await this.foto.loadSaved();
  }
}
