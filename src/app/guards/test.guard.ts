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
  canActivate(router: ActivatedRouteSnapshot): boolean {
    console.log(router);

    let isLogged = {
      authenticated: false
    };

    if(!isLogged.authenticated){
      this.router.navigateByUrl('/home');
      return true;
    }
    this.router.navigate(['/ingresar']);
    return false;
  }
}
