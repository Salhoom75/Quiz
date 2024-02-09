import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultIconComponent } from './result-icon.component';

describe('ResultIconComponent', () => {
  let component: ResultIconComponent;
  let fixture: ComponentFixture<ResultIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultIconComponent]
    });
    fixture = TestBed.createComponent(ResultIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
