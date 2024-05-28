export type UserRole = 'admin' | 'user'

export type Courses = 'HTML-CSS' | 'Javascript' | 'React' | 'React Native' | 'NextJS' | 'Angular'

export interface ILogin {
    email: string | null;
    password: string | null
}

export interface ITeacher {
    firstname: string,
    lastname: string,
    email: string,
    subjectsCanTeach: Courses[],
    role: UserRole
}

export interface IStudent {
    firstname: string;
    lastname: string;
    id: number;
    email: string;
    finalized: Courses[]
    inProgress: Courses[]
    role: UserRole
}

export interface ICourse {
    name: string;
    commission: number;
    duration: number;
    //startDate:Date;
    //endDate:Date;
    teacher: ITeacher;
    maxStudents: number;
    students: IStudent[]
}