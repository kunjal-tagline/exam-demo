import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { GoBackComponent } from 'src/app/core/go-back/go-back.component';

@NgModule({
  declarations: [HeaderComponent, GoBackComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, GoBackComponent],
})
export class CoreModule {}
