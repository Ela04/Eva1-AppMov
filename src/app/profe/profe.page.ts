import { Component, OnInit} from '@angular/core';
import { StateService } from '../state/state.service';
import { ApiService } from '../state/api.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-profe',
  templateUrl: './profe.page.html',
  styleUrls: ['./profe.page.scss'],
})
export class ProfePage implements OnInit {
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

  qrCodeString = 'mensaje secreto';

  ngOnInit() {
    //Api obtine la lista de los usuarios
    this.api.getUsers().subscribe((all) => {
      //debugger;
      console.log(all);
      this.usuarios = all.users;
    });
  }
  //alerta guardar
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Si',
      cssClass: 'alert-button-confirm',
    },
  ];
}
