import { TestBed } from '@angular/core/testing';

import { StudentProfileResolver } from './student-profile.resolver';

describe('StudentProfileResolver', () => {
  let resolver: StudentProfileResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentProfileResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
