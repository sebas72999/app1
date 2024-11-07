import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaViajesPage } from './mapa-viajes.page';

describe('MapaViajesPage', () => {
  let component: MapaViajesPage;
  let fixture: ComponentFixture<MapaViajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
