import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisClasePage } from './mis-clase.page';

describe('MisClasePage', () => {
  let component: MisClasePage;
  let fixture: ComponentFixture<MisClasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
