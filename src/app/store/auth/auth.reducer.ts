import { createReducer, on } from "@ngrx/store";
import { IStudent, ITeacher } from "../../core/models";
import { authActions } from "./auth.actions";

export interface AuthState {
    authUser: null | IStudent | ITeacher
}

const initialState: AuthState = {
    authUser: null
}

const MOCK_AUTH_USER: IStudent = {
    firstname: "User",
    lastname: "Test",
    id: 1,
    email: "user@email.com",
    finalized: [],
    inProgress: [],
    role: "user"
}

const MOCK_AUTH_ADMIN: ITeacher = {
    firstname: "Admin",
    lastname: "Test",
    email: "admin@email.com",
    subjectsCanTeach: [],
    role: "admin"
}

export const authFeatureName = 'auth'

export const authReducer = createReducer(initialState,
    on(authActions.login, (state, action) => {
        if (action.payload.email == 'user@email.com' && action.payload.password == '123456') {
            localStorage.setItem('accessToken', 'user')
            return {
                authUser: MOCK_AUTH_USER
            }
        } else if (action.payload.email == 'admin@email.com' && action.payload.password == '123456') {
            localStorage.setItem('accessToken', 'admin')
            return {
                authUser: MOCK_AUTH_ADMIN
            }
        } else {
            alert("Correo o clave incorrecto.")
            return state
        }
    }),

    on(authActions.logout, () => {
        localStorage.removeItem('accessToken')
        return initialState
    })
)