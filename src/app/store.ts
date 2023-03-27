import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../feature/City/citySlice'

// tạo rooReducer
// tên city: tự đặt
const rootReducer = {
    city : cityReducer,
}

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
