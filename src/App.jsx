import { Route, Routes } from 'react-router-dom'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Admin from './pages/UserPages'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/admin' element={<Admin/>} />
			</Routes>
      <Footer/>
		</>
	)
}

export default App
