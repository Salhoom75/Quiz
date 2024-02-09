import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerQuizIcoComponent } from './timer-quiz-ico.component';

describe('TimerQuizIcoComponent', () => {
  let component: TimerQuizIcoComponent;
  let fixture: ComponentFixture<TimerQuizIcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerQuizIcoComponent]
    });
    fixture = TestBed.createComponent(TimerQuizIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
