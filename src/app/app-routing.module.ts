import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('src/app/modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('src/app/modules/teacher/teacher.module').then(
        (m) => m.TeacherModule
      ),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('src/app/modules/student/student.module').then(
        (m) => m.StudentModule
      ),
  },
  {
    path: '**',
    redirectTo: 'users',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
