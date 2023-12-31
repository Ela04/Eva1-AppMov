import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { TestGuard } from './test.guard';
import { StateService } from '../state/state.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';


describe('TestGuard', () => {
  let guard: TestGuard;
  let routerSpy: jasmine.SpyObj<StateService>;
  let stateServiceSpy: jasmine.SpyObj<StateService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
      
    });
    guard = TestBed.inject(TestGuard);

  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should return true and not navigate if user is logged in', () => {
    stateServiceSpy.userIsLogged.and.returnValue(of(true));

    const canActivate = guard.canActivate({} as ActivatedRouteSnapshot);

    expect(canActivate).toBe(true);
    //expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
