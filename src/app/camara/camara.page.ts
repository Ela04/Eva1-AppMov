import { Component, OnInit } from '@angular/core';
import { FotoService } from '../state/foto.service'; 
import { StateService } from '../state/state.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'; 
@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  nombre!: string;
  code: any;
  constructor(public foto: FotoService, private stateService: StateService, private barcodescanner: BarcodeScanner) {
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
  scan(){
    this.barcodescanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barco de Data', this.code)
    }).catch(err => { 
      console.log('Error', err);

    })
  }
}