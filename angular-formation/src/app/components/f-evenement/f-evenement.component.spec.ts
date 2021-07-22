import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEvenementComponent } from './f-evenement.component';

describe('FEvenementComponent', () => {
  let component: FEvenementComponent;
  let fixture: ComponentFixture<FEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
