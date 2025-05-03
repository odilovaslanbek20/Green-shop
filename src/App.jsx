import { Route, Routes } from 'react-router-dom'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Admin from './pages/UserPages'
import BlogPage from './pages/Blog'
import CardsAdd from './pages/Addtocards'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/admin' element={<Admin/>} />
				<Route path='/blog' element={<BlogPage/>} />
				<Route path='/add' element={<CardsAdd/>} />
			</Routes>
      <Footer/>
		</>
	)
}

export default App
