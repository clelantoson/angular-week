import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KRoutingComponent } from './k-routing.component';

describe('KRoutingComponent', () => {
  let component: KRoutingComponent;
  let fixture: ComponentFixture<KRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
