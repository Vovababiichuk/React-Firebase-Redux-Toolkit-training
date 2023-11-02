import { Navigate, Routes, Route } from 'react-router-dom'


export const HomePage = () => {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Navigate to="/login" replace />} />
			</Routes>
		</div>
	)
}

