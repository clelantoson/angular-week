import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPipesComponent } from './l-pipes.component';

describe('LPipesComponent', () => {
  let component: LPipesComponent;
  let fixture: ComponentFixture<LPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
