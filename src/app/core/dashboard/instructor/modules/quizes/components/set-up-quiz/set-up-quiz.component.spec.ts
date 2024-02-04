import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpQuizComponent } from './set-up-quiz.component';

describe('SetUpQuizComponent', () => {
  let component: SetUpQuizComponent;
  let fixture: ComponentFixture<SetUpQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetUpQuizComponent]
    });
    fixture = TestBed.createComponent(SetUpQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
