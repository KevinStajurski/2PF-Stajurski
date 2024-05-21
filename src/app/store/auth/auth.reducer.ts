import { createReducer, on } from "@ngrx/store";
import { IUser } from "../../core/models";
import { authActions } from "./auth.actions";

export interface AuthState {
    authUser: null | IUser
}

const initialState: AuthState = {
    authUser: null
}

export const authReducer = createReducer(initialState,
    on(authActions.login, () => {

    })
)