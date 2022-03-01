import { TestBed } from '@angular/core/testing';

import { StudentExamListResolver } from './student-exam-list.resolver';

describe('StudentExamListResolver', () => {
  let resolver: StudentExamListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentExamListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
