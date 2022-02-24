import {
  ITeacherViewProfileData,
  IStudentResult,
} from './../../../shared/interfaces/teacher.interface';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-view-student-detail',
  templateUrl: './view-student-detail.component.html',
  styleUrls: ['./view-student-detail.component.scss'],
})
export class ViewStudentDetailComponent implements OnInit {
  @Input() public studentData!: ITeacherViewProfileData[];
  @Input() public studentResultData!: IStudentResult[];

  constructor(private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {}

  public closeButton(): void {
    this.ngbActiveModal.close();
  }
}
