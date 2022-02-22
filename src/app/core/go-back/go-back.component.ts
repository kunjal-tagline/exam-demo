import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  public goBack():void{
    if (window.history.length > 1) {
      this.location.back()
    }
  }
}
