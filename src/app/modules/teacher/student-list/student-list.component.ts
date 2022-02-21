import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { studentList } from 'src/app/interfaces/login.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  public studentList: studentList[] = [];
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getStudentsData().subscribe((response) => {
      console.log('response :>> ', response);
      if (response.statusCode == 200) {
        this.studentList = response.data;
      }
    });
  }
}
