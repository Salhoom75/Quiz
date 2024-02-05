import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizesIconComponent } from './quizes-icon.component';

describe('QuizesIconComponent', () => {
  let component: QuizesIconComponent;
  let fixture: ComponentFixture<QuizesIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizesIconComponent]
    });
    fixture = TestBed.createComponent(QuizesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
