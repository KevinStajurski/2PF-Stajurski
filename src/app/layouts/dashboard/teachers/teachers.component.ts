import { Component } from '@angular/core';
import { TeachersService } from '../../../core/services/teachers.service';
import { ITeacher } from '../../../core/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  constructor(private teachersService: TeachersService) { }

  teachers: ITeacher[] = []

  obsSuscription?: Subscription

  ngOnInit(): void {
    this.obsSuscription = this.teachersService.getTeachers().subscribe({
      next: (teachers) => this.teachers = teachers
    })
  }

  ngOnDestroy(): void {
    this.obsSuscription?.unsubscribe()
  }
}
