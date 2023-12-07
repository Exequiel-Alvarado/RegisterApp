import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanearQRPage } from './escanear-qr.page';

describe('EscanearQRPage', () => {
  let component: EscanearQRPage;
  let fixture: ComponentFixture<EscanearQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscanearQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
