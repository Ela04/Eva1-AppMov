import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivadaPage } from './privada.page';

describe('PrivadaPage', () => {
  let component: PrivadaPage;
  let fixture: ComponentFixture<PrivadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
