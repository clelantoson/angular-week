import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDirectivesStructurellesComponent } from './d-directives-structurelles.component';

describe('DDirectivesStructurellesComponent', () => {
  let component: DDirectivesStructurellesComponent;
  let fixture: ComponentFixture<DDirectivesStructurellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDirectivesStructurellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DDirectivesStructurellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
