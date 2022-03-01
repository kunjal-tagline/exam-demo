import { TestBed } from '@angular/core/testing';

import { ViewExamPaperResolver } from 'src/app/shared/resolve/student-resolve/view-exam-paper.resolver';

describe('ViewExamPaperResolver', () => {
  let resolver: ViewExamPaperResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewExamPaperResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
