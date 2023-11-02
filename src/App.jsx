import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
