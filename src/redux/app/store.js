import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/authSlice";

import  counterReducer  from "../features/counterSlice";
import  userReducer  from "../features/usersSlice";

export const store = configureStore({
    reducer: {
        auth,
        counter: counterReducer,
        user: userReducer

    }
})