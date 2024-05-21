export interface LoginData {
    email: string | null;
    password: string | null
}

export interface ICourses {
    name: string;
    commission: number;
    durationInWeeks: number;
    startDate:Date;
    endDate:Date;
    teacher:string;
    maxStudents: number;
    students:IUser[]
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