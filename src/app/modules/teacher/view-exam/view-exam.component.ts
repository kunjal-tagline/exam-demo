import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  constructor(
    private userService: UserService,
    public toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.viewExam().subscribe((response: any) => {
      console.log('response :>> ', response);
      if (response.statusCode == 200) {
        this.toastrService.success(response.message, 'Success');
      } else {
        this.toastrService.error(response.message, 'Failed');
      }
    });
    this.userService.CreateExam().subscribe((response: any) => {
      console.log('response :>> ', response);
    });
  }
}
