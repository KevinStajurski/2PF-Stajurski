import { IStudent } from "./student";

export interface ICourses {
    name: string;
    commission: number;
    durationInWeeks: number;
    startDate:Date;
    endDate:Date;
    teacher:string;
    maxStudents: number;
    students:IStudent[]
}