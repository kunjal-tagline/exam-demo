import { TestBed } from '@angular/core/testing';

import { StudentExamListResolver } from 'src/app/shared/resolve/student-resolve/student-exam-list.resolver';

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
