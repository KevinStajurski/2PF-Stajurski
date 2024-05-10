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

  obsSuscription?: Subscription

  openDialog(editingStudent?: IStudent): void {
    this.matDialog.open(AddStudentDialogComponent, { data: editingStudent })
      .afterClosed().subscribe({
        next: (result) => {
          if (result) {
            if (editingStudent) {
              this.dataSource = this.dataSource.map((u) => u.id === editingStudent.id ? { ...u, ...result } : u)
            } else {
              result.id = new Date().getTime().toString().substring(0, 3)
              this.dataSource = [...this.dataSource, result]
            }
          }
        }
      })
  }

  ngOnInit(): void {
    this.obsSuscription = this.studentsService.getStudents().subscribe({
      next: (value) => { this.dataSource = value }
    })
  }

  ngOnDestroy(): void {
    this.obsSuscription?.unsubscribe()
  }

  onDeleteStudent(id: number): void {
    //this.dataSource = this.studentsService.deleteStudent(id)
  }
}