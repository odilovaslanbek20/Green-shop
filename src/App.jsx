import { Route, Routes } from 'react-router-dom'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {
	return (
		<>
			<Header />
      <Hero />
			<Footer />
		</>
	)
}

export default App
