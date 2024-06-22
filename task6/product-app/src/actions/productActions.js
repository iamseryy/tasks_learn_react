import {
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from "./Types";

export const addProduct = (description) => ({
    type: ADD_PRODUCT,
    payload: {
        id: Date.now(),
        name
    },
});

export const removePtoduct = (id) => ({
    type: REMOVE_PRODUCT,
    payload: id,
});