import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../../../../core/models';

export const StudentActions = createActionGroup({
  source: 'Student',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: IUser[] }>(),
    'Load Students Failure': props<{ error: unknown }>(),
  }
});
