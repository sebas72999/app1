import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoTeLlevoPage } from './yo-te-llevo.page';

describe('YoTeLlevoPage', () => {
  let component: YoTeLlevoPage;
  let fixture: ComponentFixture<YoTeLlevoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YoTeLlevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
