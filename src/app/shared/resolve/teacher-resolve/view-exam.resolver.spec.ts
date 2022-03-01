import { TestBed } from '@angular/core/testing';

import { ViewExamResolver } from './view-exam.resolver';

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
