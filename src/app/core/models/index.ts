export interface LoginData {
    email: string | null;
    password: string | null
}

export interface ICourse {
    name: string;
    commission: number;
    duration: number;
    //startDate:Date;
    //endDate:Date;
    teacher: string;
    maxStudents: number;
    students: IUser[]
}

export interface ITeacher {
    firstname: string,
    lastname: string,
    email: string,
    subjects: Courses[]
}

export interface ILogin {
    email: string | null;
    password: string | null
}

export type UserRole = 'admin' | 'user'

export type Courses = 'HTML-CSS' | 'Javascript' | 'React' | 'React Native' | 'NextJS' | 'Angular'

export interface IUser {
    firstname: string;
    lastname: string;
    id: number;
    email: string;
    coursed: Courses[]
    studying: Courses[]
    role: UserRole
}