import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { ITeacherViewExamQuestionData } from 'src/app/shared/interfaces/teacher.interface';

@Component({
  selector: 'app-view-exam-detail',
  templateUrl: './view-exam-detail.component.html',
  styleUrls: ['./view-exam-detail.component.scss'],
})
export class ViewExamDetailComponent implements OnInit {
  @Input() public examData!: ITeacherViewExamQuestionData[];

  constructor(private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {}

  public closeButton(): void {
    this.ngbActiveModal.close();
  }
}
