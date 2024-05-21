import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component'
import { StudentsService } from '../../../core/services/students.service';
import { Subscription } from 'rxjs';
import { IUser } from '../../../core/models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})

export class StudentsComponent implements OnInit, OnDestroy {

  constructor(private matDialog: MatDialog, private studentsService: StudentsService) { }

  displayedColumns: string[] = ['firstname', 'id', 'email', 'coursed', 'studying', 'actions'];
  dataSource: IUser[] = [];
  getSuscription?: Subscription
  deleteSuscription?: Subscription
  putSuscription?: Subscription
  postSuscription?: Subscription

  ngOnInit(): void {
    this.getSuscription = this.studentsService.getStudents().subscribe({
      next: (value) => { this.dataSource = value }
    })
  }

  openDialog(editingStudent?: IUser): void {
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
    this.getSuscription?.unsubscribe()
    this.deleteSuscription?.unsubscribe()
    this.postSuscription?.unsubscribe()
    this.putSuscription?.unsubscribe()
  }

}