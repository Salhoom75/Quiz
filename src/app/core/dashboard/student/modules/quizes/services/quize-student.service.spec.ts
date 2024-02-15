import { TestBed } from '@angular/core/testing';

import { QuizeStudentService } from './quize-student.service';

describe('QuizeStudentService', () => {
  let service: QuizeStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizeStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
