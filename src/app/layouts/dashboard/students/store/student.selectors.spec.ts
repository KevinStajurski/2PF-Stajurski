import * as fromStudent from './student.reducer';
import { selectStudentState } from './student.selectors';

xdescribe('Student Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStudentState({
      [fromStudent.studentFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
