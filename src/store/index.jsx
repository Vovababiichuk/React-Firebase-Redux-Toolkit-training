import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'


export const store = configureStore({
	// в нашому випадку це всього один reducer
	reducer: {
		user: userReducer,
	},
})