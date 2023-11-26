import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicaPage } from './publica.page';

describe('PublicaPage', () => {
  let component: PublicaPage;
  let fixture: ComponentFixture<PublicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PublicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
