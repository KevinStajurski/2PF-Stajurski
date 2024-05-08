import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'students', loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule) },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule) },
  { path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then((m) => m.TeachersModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }