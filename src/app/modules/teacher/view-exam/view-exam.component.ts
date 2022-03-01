import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService } from './../../../shared/services/spinner.service';
import {
  deleteExam,
} from './../../../shared/interfaces/teacher.interface';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  ITeacherViewExamData,
  ITeacherViewExamResponse,
} from 'src/app/shared/interfaces/teacher.interface';
@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  public examsList: ITeacherViewExamData[] = [];
  public examsNotes: string[] = [];

  constructor(
    private userService: UserService,
    public toastrService: ToastrService,
    private spinnerService: SpinnerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.viewExamList();
  }

  public viewExamList() {
    //this.spinnerService.displaySpinner(true);
    const viewExam: ITeacherViewExamResponse =
      this.activatedRoute.snapshot.data['viewExam'];

    if (viewExam.statusCode == 200) {
      this.spinnerService.displaySpinner(false);
      this.examsList = viewExam?.data;
      this.examsNotes = viewExam?.data[0]?.notes;
      this.toastrService.success(viewExam.message, 'Success');
    } else {
      this.toastrService.error(viewExam.message, 'Failed');
    }
  }

  public deleteExamUsingId(id: string) {
    this.userService.deleteExams(id).subscribe((response: deleteExam): void => {
      if (response.statusCode === 200) {
        this.toastrService.success(response.message, 'Sucess');
      } else {
        this.toastrService.error(response.message, 'Failed');
      }
      this.viewExamList();
    });
  }

  public viewExamDetails(examId: string): void {
    this.router.navigate(['/teacher/view-exam-detail', examId]);
  }
}
