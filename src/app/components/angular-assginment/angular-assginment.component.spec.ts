import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAssginmentComponent } from './angular-assginment.component';

describe('AngularAssginmentComponent', () => {
  let component: AngularAssginmentComponent;
  let fixture: ComponentFixture<AngularAssginmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAssginmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAssginmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
