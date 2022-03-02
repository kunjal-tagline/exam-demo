import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/shared/services/user.service';
import { AppInterceptor } from 'src/app/shared/interceptors/app.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
