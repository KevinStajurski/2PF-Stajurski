import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../../../core/models';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrl: './add-student-dialog.component.css'
})

export class AddStudentDialogComponent {
  
  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<AddStudentDialogComponent>, @Inject(MAT_DIALOG_DATA) private editingStudent?: IUser) {
    this.studentForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]],
      coursed: [''],
      studying: ['']
    })
    if (editingStudent) {
      this.studentForm.patchValue(editingStudent)
    }
  }

  get firstnameControl() {
    return this.studentForm.get('firstname')
  }

  get lastnameControl() {
    return this.studentForm.get('lastname')
  }

  get emailControl() {
    return this.studentForm.get('email')
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched()
    } else {
      this.matDialogRef.close(this.studentForm.value)
    }
  }
}
