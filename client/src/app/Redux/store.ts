import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./Slice/User.slice"


export const store = configureStore({
    reducer: {
        User: UserSlice,
    }
})
