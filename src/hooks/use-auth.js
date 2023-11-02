// даний хук дозволить в будь-якому місці додатка визивати даний хук і узнавати чи авторизований користувач і якщо авторизований то які у нього є авторизаційні дані...

import { useSelector } from 'react-redux'

export function useAuth() {
	//достанб мені із state юзера
	const { email, token, id } = useSelector(state => state.user)

	// я можу по різному розпоряджатися цими речами
	return {
		// isAuth - чи авторизований
		//... !!email - перетворюємо в булеве значення
		isAuth: !!email,
		email,
		token,
		id
	}



}