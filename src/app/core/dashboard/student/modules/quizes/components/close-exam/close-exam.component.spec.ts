import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseExamComponent } from './close-exam.component';

describe('CloseExamComponent', () => {
  let component: CloseExamComponent;
  let fixture: ComponentFixture<CloseExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseExamComponent]
    });
    fixture = TestBed.createComponent(CloseExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
