import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { IUser } from '../../../../core/models';

export const studentFeatureKey = 'student';

export interface State {
  loadingStudents: boolean,
  list: IUser[],
  error: unknown
}

export const initialState: State = {
  loadingStudents: false,
  list: [],
  error: null
};

export const reducer = createReducer(

  initialState,

  on(StudentActions.loadStudents, state => { return { ...state, loadingStudents: true } }),

  on(StudentActions.loadStudentsSuccess, (state, action) => { return { ...state, list: action.data, loadingStudents: false } }),

  on(StudentActions.loadStudentsFailure, (state, action) => { return { ...state, error: action.error, loadingStudents: false } }),

);

export const studentFeature = createFeature({
  name: studentFeatureKey,
  reducer,
});