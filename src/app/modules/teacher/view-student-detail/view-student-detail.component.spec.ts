import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentDetailComponent } from './view-student-detail.component';

describe('ViewStudentDetailComponent', () => {
  let component: ViewStudentDetailComponent;
  let fixture: ComponentFixture<ViewStudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
