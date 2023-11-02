import { createSlice } from '@reduxjs/toolkit'

// початковий стан
// ми маєм якого користувача з пустими полями
const initialState = {
	email: null,
	token: null,
	id: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			// тут я очікую що мені в якості action.payload прийдуть певні дані і я буду їх встановлювати
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id;
		},
		removeUser(state) {
			// видаляєм інформацію про користувача
			state.email = null;
			state.token = null;
			state.id = null;
		},
	},
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;