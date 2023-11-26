import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  //Titulo de la pagina de inicio
  titulo: BehaviorSubject<string> = new BehaviorSubject('RegistrAPP Ingreso de Alumnos');

  get getTitulo() {
    return this.titulo.asObservable();
  }

  set setTitulo(titulo: string) {
    this.titulo.next(titulo);
  }

  //Nombre de Usuario
  private nombreUsuario: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public getNombreUsuario() {
    return this.nombreUsuario.asObservable();
  }

  public setNombreUsuario(nombre: string) {
    this.nombreUsuario.next(nombre);
  }

  constructor() {}}