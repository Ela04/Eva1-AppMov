import { Component } from '@angular/core';
import { StateService } from '../state/state.service';
import { ApiService } from '../state/api.service';
@Component({
  selector: 'app-profe',
  templateUrl: './profe.page.html',
  styleUrls: ['./profe.page.scss'],
})
export class ProfePage {
  usuarios!: any;
  nombre!: string;

  constructor(
    private stateService: StateService,
    public api: ApiService,
  ) {
  this.stateService.getNombre.subscribe((Alumno)=>{
    this.nombre = Alumno;
  })
  };
}