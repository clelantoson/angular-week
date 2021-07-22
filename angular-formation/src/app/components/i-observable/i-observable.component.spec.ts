import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IObservableComponent } from './i-observable.component';

describe('IObservableComponent', () => {
  let component: IObservableComponent;
  let fixture: ComponentFixture<IObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
