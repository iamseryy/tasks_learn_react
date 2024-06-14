import {LIGHT_THEME, DARK_THEME} from "../types";

const initialState = {
    theme: 'light'
}

export const themeSwitcherReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT_THEME:
            return {...state, theme: 'light'}
        case DARK_THEME:
            return {...state, theme: 'dark'}
        default: return state
    }
}