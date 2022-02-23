import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamPaperComponent } from './view-exam-paper.component';

describe('ViewExamPaperComponent', () => {
  let component: ViewExamPaperComponent;
  let fixture: ComponentFixture<ViewExamPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExamPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExamPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
