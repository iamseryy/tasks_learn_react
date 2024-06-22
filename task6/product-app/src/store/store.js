import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

const store = configureStore({
    reducer: {
        products: rootReducer
    }
})


export default store;