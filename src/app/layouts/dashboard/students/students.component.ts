import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component'
import { IStudent } from '../../../core/models/student';
import { StudentsService } from '../../../core/services/students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})

export class StudentsComponent implements OnInit, OnDestroy {

  constructor(private matDialog: MatDialog, private studentsService: StudentsService) { }

  displayedColumns: string[] = ['firstname', 'id', 'email', 'coursed', 'studying', 'actions'];
  dataSource: IStudent[] = [];
  getSuscription?: Subscription
  deleteSuscription?: Subscription
  putSuscription?: Subscription
  postSuscription?: Subscription

  ngOnInit(): void {
    this.getSuscription = this.studentsService.getStudents().subscribe({
      next: (value) => { this.dataSource = value }
    })
  }

  openDialog(editingStudent?: IStudent): void {
    this.matDialog.open(AddStudentDialogComponent, { data: editingStudent })
      .afterClosed().subscribe({
        next: (result) => {
          if (result) {
            if (editingStudent) {
              this.putSuscription = this.studentsService.editStudent(editingStudent.id, result).subscribe({
                next: (value) => console.log(value)
              })
            } else {
              //result.id = new Date().getTime().toString().substring(0, 3)  => esto no deberia hacer falta ya que el id lo genera JSON Server
              //this.dataSource = [...this.dataSource, result]
              //aca deberia hacer el POST
              this.postSuscription = this.studentsService.addStudent(result).subscribe({
                next: (value) => console.log(value)
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
  }

}