import { createReducer, on } from "@ngrx/store";
import { IUser } from "../../core/models";
import { authActions } from "./auth.actions";

export interface AuthState {
    authUser: null | IUser
}

const initialState: AuthState = {
    authUser: null
}

const MOCK_AUTH_USER: IUser = {
    firstname: "User",
    lastname: "Lastname",
    id: 1,
    email: "user@email.com",
    coursed: [],
    studying: [],
    role: "user"
}

export const authFeatureName = 'auth'

export const authReducer = createReducer(initialState,
    on(authActions.login, (state, action) => {
        if (action.payload.email !== 'user@email.com' || action.payload.password !== '123456') {
            alert("Correo o clave incorrecto.")
            return state
        } else {
            // this._loginUser$.next(this.MOCK_AUTH_USER)
            localStorage.setItem('accessToken', 'jshadgjahg')
            // this.router.navigate(['dashboard'])
            return {
                authUser: MOCK_AUTH_USER
            }
        }
    }),
    on(authActions.logout, () => {
        localStorage.removeItem('accessToken')
        return initialState
    })
)