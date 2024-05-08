export type UserRole = 'admin' | 'user'

export type Courses = 'HTML-CSS' | 'Javascript' | 'React' | 'React Native' | 'NextJS' | 'Angular'

export interface IStudent {
    firstname: string;
    lastname: string;
    id: number;
    email: string;
    coursed: Courses[]
    studying: Courses[]
    role: UserRole
}