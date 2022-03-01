import { TestBed } from '@angular/core/testing';

import { ViewExamPaperResolver } from './view-exam-paper.resolver';

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
