/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuizesService } from './quizes.service';

describe('Service: Quizes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizesService]
    });
  });

  it('should ...', inject([QuizesService], (service: QuizesService) => {
    expect(service).toBeTruthy();
  }));
});
