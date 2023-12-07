import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotFoundComponentTsComponent } from './not-found.component.ts.component';

describe('NotFoundComponentTsComponent', () => {
  let component: NotFoundComponentTsComponent;
  let fixture: ComponentFixture<NotFoundComponentTsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponentTsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
