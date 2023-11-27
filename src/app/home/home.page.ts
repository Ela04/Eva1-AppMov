import { Component, OnInit } from '@angular/core';
import { ApiService } from '../state/api.service';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  namae!: string;
  usuarios!: any;
  constructor(
    private usuario: ApiService,
    private nom:StateService,
  ) { 
      this.nom.getNombreUsuario().subscribe((n:String) => {
        console.log(n);
        this.namae;
      }); 
    }
  ngOnInit() {
    //Api obtine la lista de los usuarios
    this.usuario.getUsers().subscribe((all) => {
      console.log(all);
      this.usuarios = all.users;
    });
  }
}