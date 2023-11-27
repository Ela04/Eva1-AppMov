import { Component, OnInit } from '@angular/core';
import { ApiService } from '../state/api.service';
import { IngresarPage } from '../ingresar/ingresar.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuarios!: any;
  namae!: any;
  constructor(private api: ApiService, private nom: IngresarPage) {}

  Obtener(): Observable<any> {
    //Obtener nombre usuario para mostralo en home.html
    this.nom.grabarAlumno().subscribe((namae: any) => {
      debugger;
      console.log(namae);
      return this.namae = namae;
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