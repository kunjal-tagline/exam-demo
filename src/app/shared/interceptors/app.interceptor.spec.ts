import { AppInterceptor } from 'src/app/shared/interceptors/app.interceptor';
import { TestBed } from '@angular/core/testing';

describe('AppInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AppInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AppInterceptor = TestBed.inject(AppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
