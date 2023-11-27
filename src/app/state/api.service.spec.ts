import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get users', () => {
    const mockUsers = [
      { id: 1, name: 'User1' },
      { id: 2, name: 'User2' }
    ];

    // Hacer la solicitud y esperar que se llame a la URL correcta con el método GET
    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne({ApiService});
    expect(req.request.method).toEqual('GET');

    // Responder con datos simulados
    req.flush(mockUsers);
  });

});
