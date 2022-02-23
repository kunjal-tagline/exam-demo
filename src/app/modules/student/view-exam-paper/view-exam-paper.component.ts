import { UserService } from './../../../shared/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { StudentExamPaperResponse } from 'src/app/shared/interfaces/response.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-exam-paper',
  templateUrl: './view-exam-paper.component.html',
  styleUrls: ['./view-exam-paper.component.scss'],
})
export class ViewExamPaperComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.UserService.viewExamPaper(id).subscribe(
      (response: StudentExamPaperResponse) => {
        console.log('response :>> ', response);
      }
    );
  }
}
