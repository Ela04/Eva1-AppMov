import { Component, OnInit } from '@angular/core';
import { ApiService } from '../state/api.service';
import { StateService } from '../state/state.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuarios!: any;
  namae!: any;
  constructor(private api: ApiService, private nom: StateService) {
    //Obtener nombre usuario para mostralo en home.html
    this.nom.setNombreUsuario(Alumno.nombreUsuario).subscribe((na: any) => {
      debugger;
      console.log(na);
      this.namae = na.nombreUsuario;
    });
  }

  ngOnInit() {
    //Api obtine la lista de los usuarios
    this.api.getUsers().subscribe((all) => {
      console.log(all);
      this.usuarios = all.users;
    });
  }
}