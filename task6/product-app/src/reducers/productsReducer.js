import {
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from "../actions/Types"


const initState = {
    products: []
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        default:
            return state;
}

export default productsReducer
