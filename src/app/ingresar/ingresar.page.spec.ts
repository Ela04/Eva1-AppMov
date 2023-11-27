import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarPage } from './ingresar.page';

describe('IngresarPage', () => {
  let component: IngresarPage;
  let fixture: ComponentFixture<IngresarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IngresarPage);
    const app = fixture.componentInstance
    expect(component).toBeTruthy();
  });
  it('Debe retornar formulario invalido', () =>{
    const fixture = TestBed.createComponent(IngresarPage);
    const app = fixture.componentInstance
    fixture.detectChanges()

    const form = app.formulariousuario;
    const user = app.formulariousuario.controls['usuario']
    user.setValue('hect.morales')
    expect(form.invalid).toBeTrue();
  })

});
