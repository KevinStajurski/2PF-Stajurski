import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component'
import { StudentsService } from '../../../core/services/students.service';
import { Observable, Subscription } from 'rxjs';
import { IStudent, UserRole } from '../../../core/models';
import { Store } from '@ngrx/store';
import { selectError, selectLoadingStudents, selectStudentsList } from './store/student.selectors';
import { StudentActions } from './store/student.actions';
import { authUser, authUserRole } from '../../../store/auth/auth.selector';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})

export class StudentsComponent implements OnInit, OnDestroy {

  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService,
    private store: Store
  ) {
    this.loadingStudents$ = this.store.select(selectLoadingStudents)
    this.error$ = this.store.select(selectError)
  }

  displayedColumns: string[] = ['firstname', 'id', 'email', 'finalized', 'inProgress', 'actions'];
  dataSource: IStudent[] = [];
  loadingStudents$: Observable<boolean>
  error$: Observable<unknown>

  // getSuscription?: Subscription
  deleteSuscription?: Subscription
  putSuscription?: Subscription
  postSuscription?: Subscription

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents())
    this.store.select(selectStudentsList).subscribe({
      next: (students) => this.dataSource = students
    })
    // this.getSuscription = this.studentsService.getStudents().subscribe({
    //   next: (value) => { this.dataSource = value }
    // })
  }

  openDialog(editingStudent?: IStudent): void {
    this.matDialog.open(AddStudentDialogComponent, { data: editingStudent })
      .afterClosed().subscribe({
        next: (result) => {
          if (result) {
            if (editingStudent) {
              this.putSuscription = this.studentsService.editStudent(editingStudent.id, result).subscribe({
                next: (value) => console.log(value, "editado")
              })
            } else {
              this.postSuscription = this.studentsService.addStudent(result).subscribe({
                next: (value) => console.log(value, "agregado")
              })
            }
          }
        }
      })
  }

  onDeleteStudent(id: number): void {
    this.deleteSuscription = this.studentsService.deleteStudent(id).subscribe({
      next: (value) => console.log(value, "eliminado"),
    })
  }

  ngOnDestroy(): void {
    // this.getSuscription?.unsubscribe()
    this.deleteSuscription?.unsubscribe()
    this.postSuscription?.unsubscribe()
    this.putSuscription?.unsubscribe()
  }

}