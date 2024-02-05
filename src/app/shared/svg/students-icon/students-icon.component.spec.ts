import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsIconComponent } from './students-icon.component';

describe('StudentsIconComponent', () => {
  let component: StudentsIconComponent;
  let fixture: ComponentFixture<StudentsIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsIconComponent]
    });
    fixture = TestBed.createComponent(StudentsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
