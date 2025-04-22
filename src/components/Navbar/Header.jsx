import { Link, useNavigate } from 'react-router-dom'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { FiShoppingCart } from 'react-icons/fi'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { FaBarsStaggered } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Box, Tabs, Tab, TextField, Button, Paper } from '@mui/material'

function Header() {
	const navigate = useNavigate()
	const [tabIndex, setTabIndex] = useState(0)
	const [menu, setMenu] = useState(false)
	const [register, setModalRegister] = useState(false)
	const [userName, setUserName] = useState('')

	
	useEffect(() => {
		const name = localStorage.getItem('name')
		if (name) {
			setUserName(name)
		}
	}, [])

	const refName = useRef()
	const refSurname = useRef()
	const refEmail = useRef()
	const refPassword = useRef()

	const refLoginEmail = useRef()
	const refLoginPassword = useRef()

	const handleChange = (event, newValue) => {
		setTabIndex(newValue)
	}

	const handleRegister = e => {
		e.preventDefault()
		const name = refName.current.value
		const surname = refSurname.current.value
		const email = refEmail.current.value
		const password = refPassword.current.value

		axios
			.post(
				`https://green-shop-backend.onrender.com/api/user/sign-up?access_token=6506e8bd6ec24be5de357927`,
				{
					name,
					surname,
					email,
					password,
				}
			)
			.then(res => {
				console.log('Register Success:', res.data)
				localStorage.setItem('name', name)
				setModalRegister(false)
			})
			.catch(err => {
				console.error('Register Error:', err)
			})
	}

	const handleLogin = e => {
		e.preventDefault()
		const email = refLoginEmail.current.value
		const password = refLoginPassword.current.value

		axios
			.post(
				`https://green-shop-backend.onrender.com/api/user/sign-in?access_token=6506e8bd6ec24be5de357927`,
				{
					email,
					password,
				}
			)
			.then(res => {
				console.log('Login Success:', res.data)
				setModalRegister(false)
			})
			.catch(err => {
				console.error('Login Error:', err)
			})
	}

	return (
		<>
			<header className='max-[1270px]:mx-[20px] max-w-[1211px] m-auto mt-[25px] mb-[12px] pb-[18px] border-b-[1px] border-[rgba(70,163,88,0.5)]'>
				<div className='flex items-center justify-between'>
					<Link to='/'>
						<img src='Logo.svg' alt='logotip' className='w-[140px]' />
					</Link>
					<div className='flex items-center gap-[50px] max-[670px]:hidden'>
						<div className=''>
							<Link
								to='/'
								className='text-[rgba(61,61,61,1) font-normal text-[16px]] hover:text-[rgba(70,163,88,1)] transition-all'
							>
								Home
							</Link>
						</div>
						<div className=''>
							<Link className='text-[rgba(61,61,61,1) font-normal text-[16px]] hover:text-[rgba(70,163,88,1)] transition-all'>
								Shop
							</Link>
						</div>
					</div>
					<div className='flex items-center gap-8 max-[380px]:gap-[20px]'>
						<RxMagnifyingGlass className='text-[25px] cursor-pointer max-[380px]:text-[22px]' />
						<div className='relative cursor-pointer'>
							<p className='h-[12px] w-[12px] text-[10px] absolute ml-[12px] mt-[-3px] rounded-full flex items-center justify-center text-[#fff] bg-[rgba(70,163,88,1)]'>
								0
							</p>
							<FiShoppingCart className='text-[20px] max-[380px]:text-[18px]' />
						</div>
						<div
							onClick={() => {
								if (!userName) {
									setModalRegister(true)
								} else {
									navigate('/admin')
								}
							}}
							className='w-[100px] cursor-pointer p-0 m-0 h-[35px] max-[670px]:hidden cursor-pointer bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center px-[8px] justify-center gap-1'
						>
							<RiLogoutCircleRLine
								className={`text-[20px] text-[#fff] ${
									userName === '' ? 'bloc' : 'hidden'
								}`}
							/>
							<p className='text-[#fff] font-["Inter"] font-medium text-[16px] truncate max-w-[120px] overflow-hidden whitespace-nowrap'>
								{userName === '' ? 'Login' : userName}
							</p>
						</div>
						<FaBarsStaggered
							onClick={() => setMenu(true)}
							className='text-[20px] cursor-pointer hidden max-[670px]:block max-[380px]:text-[18px]'
						/>
					</div>
				</div>
			</header>

			<div
				className={`${
					!menu ? 'mr-[-100%]' : 'mr-[0px]'
				} transition-all min-[670px]:hidden fixed top-0 right-0 w-[300px] min-h-screen bg-[#000000]/70 backdrop-blur-md z-50`}
			>
				<div onClick={() => setMenu(false)}>
					<FaXmark className='text-[#fff] text-[30px] absolute right-[10px] cursor-pointer top-[10px]' />
				</div>
				<div className='flex items-center justify-center flex-col gap-[20px] mt-[50px]'>
					<div className=''>
						<Link
							to='/'
							onClick={() => setMenu(false)}
							className='text-[rgba(61,61,61,1) text-[#fff] font-normal text-[16px]]'
						>
							Home
						</Link>
					</div>
					<div className=''>
						<Link
							onClick={() => setMenu(false)}
							className='text-[rgba(61,61,61,1) text-[#fff] font-normal text-[16px]]'
						>
							Shop
						</Link>
					</div>
					<div
						onClick={() => {
							if (!userName) {
								setModalRegister(true)
							} else {
								navigate('/admin')
							}
						}}
						className='w-[150px] cursor-pointer p-0 m-0 h-[35px] bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1'
					>
						<RiLogoutCircleRLine
							className={`${
								userName === '' ? 'bloc' : 'hidden'
							} text-[20px] text-[#fff]`}
						/>
						<p className='w-full  flex items-center justify-center'>
							<Link
							  onClick={() => setMenu(false)}
								color='error'
							>
								<p className='w-full text-[#fff] truncate max-w-[120px] overflow-hidden whitespace-nowrap'>
									{userName === '' ? 'Login' : userName}
								</p>
							</Link>
						</p>
					</div>
				</div>
			</div>

			{register && (
				<Box
					className={`w-full fixed z-50 top-0 left-0 h-screen flex items-center justify-center bg-black/70`}
				>
					<Paper
						elevation={6}
						className='relative w-[450px] px-[30px] py-[40px]'
					>
						<FaXmark
							onClick={() => setModalRegister(false)}
							className='cursor-pointer text-[30px] absolute top-[15px] right-[15px]'
						/>
						<Tabs value={tabIndex} onChange={handleChange} centered>
							<Tab label='Login' />
							<Tab label='Register' />
						</Tabs>

						{tabIndex === 0 && (
							<form
								onSubmit={handleLogin}
								className='flex flex-col gap-4 mt-4 max-[450px]:mx-[20px]'
							>
								<TextField
									inputRef={refLoginEmail}
									label='Email'
									type='email'
									fullWidth
									required
								/>
								<TextField
									inputRef={refLoginPassword}
									label='Password'
									type='password'
									fullWidth
									required
								/>
								<Button variant='contained' type='submit' color='primary'>
									Login
								</Button>
							</form>
						)}

						{tabIndex === 1 && (
							<form
								onSubmit={handleRegister}
								className='flex flex-col gap-4 mt-4 max-[450px]:mx-[20px]'
							>
								<TextField inputRef={refName} label='Name' fullWidth required />
								<TextField
									inputRef={refSurname}
									label='Surname'
									fullWidth
									required
								/>
								<TextField
									inputRef={refEmail}
									label='Email'
									type='email'
									fullWidth
									required
								/>
								<TextField
									inputRef={refPassword}
									label='Password'
									type='password'
									fullWidth
									required
								/>
								<Button variant='contained' type='submit' color='primary'>
									Register
								</Button>
							</form>
						)}
					</Paper>
				</Box>
			)}
		</>
	)
}

export default Header
