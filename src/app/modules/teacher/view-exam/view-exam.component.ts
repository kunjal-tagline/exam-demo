import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  public examsList: any = [];
  public examsNotes: any = [];
  constructor(
    private userService: UserService,
    public toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.viewExam().subscribe((response: any) => {
      console.log('response :>> ', response);
      if (response.statusCode == 200) {
        this.examsList = response.data;
        this.examsNotes = response.data[0].notes;
        console.log('this.examsList :>> ', this.examsList);
        this.toastrService.success(response.message, 'Success');
      } else {
        this.toastrService.error(response.message, 'Failed');
      }
    });
  }
}
