import {INCREMENT, DECREMENT} from "./types";

export function incrementCounter() {
    return {
        type: INCREMENT
    }
}

export function decrementCounter() {
    return {
        type: DECREMENT
    }
}