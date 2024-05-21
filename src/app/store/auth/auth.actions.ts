import { createActionGroup, props } from "@ngrx/store";
import { LoginData } from "../../core/models";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        login: props<{ payload: LoginData }>()
    }
})