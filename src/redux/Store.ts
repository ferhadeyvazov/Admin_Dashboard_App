import { configureStore } from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux'
import { Reducers } from './reducer/ReducerAndMiddlewares'


export const store = configureStore({
    reducer: Reducers,
    devTools: process.env.NODE_ENV !== 'production'
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()