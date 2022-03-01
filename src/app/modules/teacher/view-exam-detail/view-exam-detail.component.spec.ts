import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewExamDetailComponent } from 'src/app/modules/teacher/view-exam-detail/view-exam-detail.component';

describe('ViewExamDetailComponent', () => {
  let component: ViewExamDetailComponent;
  let fixture: ComponentFixture<ViewExamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewExamDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
