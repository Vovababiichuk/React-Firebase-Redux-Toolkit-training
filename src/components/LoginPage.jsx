import { Link } from 'react-router-dom'


export const LoginPage = () => {
	return (
		<div className='container'>
			<h1 className='text-3xl mb-4'>Login </h1>

			<p>
				Or <Link className='text-blue-500' to='/register'>Register</Link>
			</p>
		</div>

	)
}
