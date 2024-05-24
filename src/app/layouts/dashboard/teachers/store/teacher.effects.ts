import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { TeacherActions } from './teacher.actions';


@Injectable()
export class TeacherEffects {

  loadTeachers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TeacherActions.loadTeachers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TeacherActions.loadTeachersSuccess({ data })),
          catchError(error => of(TeacherActions.loadTeachersFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
