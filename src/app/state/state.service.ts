import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  //Titulo de la pagina de inicio
  titulo: BehaviorSubject<string> = new BehaviorSubject(
    'RegistrAPP Ingreso de Alumnos'
  );

  get getTitulo() {
    return this.titulo.asObservable();
  }

  set setTitulo(titulo: string) {
    this.titulo.next(titulo);
  }

  //Nombre de Usuario
  private nombreUsuario: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  public getNombreUsuario() {
    return this.nombreUsuario.asObservable();
  }

  public setNombreUsuario(nombre: string) {
    this.nombreUsuario.next(nombre);
  }

  // BehaivorSubject para guardar el estado del login con sus metodos set() y get()
  public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  getIsLogged() {
    return this.isLogged.asObservable();
  }
  set setisLogged(dataisLogged: boolean) {
    this.isLogged.next(dataisLogged);
  }

  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userIsLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }
  setUserIsLogged(isLogged: boolean): void {
    this.isLoggedSubject.next(isLogged);
  }
  constructor() {}
}