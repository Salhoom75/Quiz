import { TestBed } from '@angular/core/testing';

import { ResultsStudentService } from './results-student.service';

describe('ResultsStudentService', () => {
  let service: ResultsStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
