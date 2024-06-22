import {combineReducers} from "redux";
import counterReducer from "./counterSlice"

const rootReducer = combineReducers({
    products: productsReducer
})

export default