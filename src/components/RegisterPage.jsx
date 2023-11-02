import { Link } from 'react-router-dom'

export const RegisterPage = () => {
	return (
		<div className='container'>
			<h1 className='text-3xl mb-4'>Register</h1>

			<p>
				Already have an account? <Link className='text-blue-500' to='/login'>Login</Link>
			</p>
		</div>

	)
}
