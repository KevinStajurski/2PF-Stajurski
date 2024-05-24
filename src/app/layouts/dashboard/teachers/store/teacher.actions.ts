import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TeacherActions = createActionGroup({
  source: 'Teacher',
  events: {
    'Load Teachers': emptyProps(),
    'Load Teachers Success': props<{ data: unknown }>(),
    'Load Teachers Failure': props<{ error: unknown }>(),
  }
});
