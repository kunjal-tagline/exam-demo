import { TestBed } from '@angular/core/testing';

import { ViewExamResolver } from 'src/app/shared/resolve/teacher-resolve/view-exam.resolver';

describe('ViewExamResolver', () => {
  let resolver: ViewExamResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewExamResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
