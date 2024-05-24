import { createFeature, createReducer, on } from '@ngrx/store';
import { TeacherActions } from './teacher.actions';

export const teacherFeatureKey = 'teacher';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(TeacherActions.loadTeachers, state => state),
  on(TeacherActions.loadTeachersSuccess, (state, action) => state),
  on(TeacherActions.loadTeachersFailure, (state, action) => state),
);

export const teacherFeature = createFeature({
  name: teacherFeatureKey,
  reducer,
});

