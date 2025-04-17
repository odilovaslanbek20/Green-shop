import { Route, Routes } from 'react-router-dom'
import Header from './components/Navbar/Header'
import Home from './pages/home'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home/>} />
			</Routes>
      <Footer/>
		</>
	)
}

export default App
