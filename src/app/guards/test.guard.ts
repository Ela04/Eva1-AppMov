import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(
    private router: Router,
    private stateService: StateService,
  ) {}
  //Se activa el canActivate cuando el estado del userService cambia de valor
  canActivate(router: ActivatedRouteSnapshot): boolean {
    console.log(router);
    let isLogged: Boolean=false;
    this.stateService.userIsLogged().subscribe(
      (logged) => {
        isLogged = logged;
      }
    );
    if(isLogged == false){
    
      this.router.navigate(['/ingresar']);
    }
    return true;
  }
}
