import {
    LIGHT_THEME,
    DARK_THEME
} from "./types";

export function switchToLight() {
    return {
        type: LIGHT_THEME
    }
}

export function switchToDark() {
    return {
        type: DARK_THEME
    }
}