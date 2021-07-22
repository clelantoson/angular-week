import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JServiceComponent } from './j-service.component';

describe('JServiceComponent', () => {
  let component: JServiceComponent;
  let fixture: ComponentFixture<JServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
