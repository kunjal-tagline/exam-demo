import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../shared/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  StudentExamPaperResponse,
  StudentViewExamDetails,
} from 'src/app/shared/interfaces/student.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-exam-paper',
  templateUrl: './view-exam-paper.component.html',
  styleUrls: ['./view-exam-paper.component.scss'],
})
export class ViewExamPaperComponent implements OnInit {
  public spinner: boolean = true;
  public examPaperData: StudentViewExamDetails[] = [];

  constructor(
    private UserService: UserService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.UserService.viewExamPaper(id).subscribe(
      (response: StudentExamPaperResponse) => {
        if (response.statusCode === 200) {
          this.examPaperData = response.data;
          this.spinner = false;
          this.toastrService.success(response.message, 'Sucess');
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      }
    );
  }
}
