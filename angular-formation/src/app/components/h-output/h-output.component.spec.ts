import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOutputComponent } from './h-output.component';

describe('HOutputComponent', () => {
  let component: HOutputComponent;
  let fixture: ComponentFixture<HOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
