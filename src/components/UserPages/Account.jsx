import React, { useState } from 'react'
import {
	FaUser,
	FaBoxOpen,
	FaMapMarkerAlt,
	FaHeart,
	FaSignOutAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Account = () => {
	const [form, setForm] = useState({
		_id: '6506e8bd6ec24be5de357927',
		username: 'exampleuser',
		name: '',
		surname: '',
		country: '',
		town: '',
		street_address: '',
		apartment: '',
		state: '',
		zip: '',
		email: '',
		phone_number: '',
	})

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const [notification, setNotification] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await fetch(
				`https://green-shop-backend.onrender.com/api/user/address?access_token=6506e8bd6ec24be5de357927`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(form),
				}
			)

			if (!response.ok) {
				throw new Error('Failed to submit address')
			}

			const result = await response.json()
			setNotification({
				type: 'success',
				message: 'Address saved successfully!',
				result,
			})

			setTimeout(() => {
				setNotification(null)
			}, 3000)
		} catch (error) {
			setNotification({
				type: 'error',
				message: error.message,
				error,
			})

			setTimeout(() => {
				setNotification(null)
			}, 3000)
		}
	}

	const menuItems = [
		{ icon: <FaUser />, label: 'Account Details', href: '/account/details' },
		{ icon: <FaBoxOpen />, label: 'My Products', href: '/account/products' },
		{ icon: <FaMapMarkerAlt />, label: 'Address', href: '/account/address' },
		{ icon: <FaHeart />, label: 'Wishlist', href: '/account/wishlist' },
	]

	return (
		<div className='min-h-screen max-w-[1200px]  m-auto max-[1240px]:mx-[20px] flex items-start max-[800px]:flex-col   max-[800px]:gap-10'>
			<div className='max-[800px]:flex max-[800px]:items-center max-[800px]:justify-center max-[800px]:w-full'>
				<div
					className={`min-w-[310px] max-[900px]:min-w-[250px]  py-[18px] max-h-[320px] bg-[#FBFBFB] px-[18px] rounded-md shadow-sm`}
				>
					<h2 className='text-xl font-bold mb-6'>My Account</h2>
					<div className='space-y-2'>
						{menuItems.map((item, idx) => {
							const isActive = location.pathname === item.href
							return (
								<Link to={item.href} key={idx}>
									<div
										className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-all duration-150 
                ${
									isActive
										? 'bg-green-50 text-green-600 font-medium border-l-4 border-green-600'
										: 'hover:bg-gray-100'
								}`}
									>
										<span className='text-lg'>{item.icon}</span>
										<span>{item.label}</span>
									</div>
								</Link>
							)
						})}
					</div>

					<div className='border-t border-green-200 my-6'></div>

					<div className='flex items-center gap-3 text-red-600 cursor-pointer px-4 py-2 hover:bg-red-50 rounded-md'>
						<FaSignOutAlt />
						<span>Log out</span>
					</div>
				</div>
			</div>

			<main className=' md:p-10'>
				<div className='max-w-5xl mx-auto'>
					<div className='flex justify-between items-center mb-4 md:mb-6'>
						<h2 className='text-xl font-semibold'>Billing Address</h2>
						<button className='text-green-600 text-sm md:text-base'>Add</button>
					</div>
					<p className='text-sm text-gray-600 mb-6 md:mb-8'>
						The following addresses will be used on the checkout page by
						default.
					</p>

					{notification && (
						<div
							className={`mb-4 p-3 rounded text-white ${
								notification.type === 'success' ? 'bg-green-600' : 'bg-red-500'
							}`}
						>
							{notification.message}
						</div>
					)}

					<form
						onSubmit={handleSubmit}
						className='grid grid-cols-2 max-[480px]:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'
					>
						<div>
							<label className='block mb-1 font-medium'>
								First Name<span className='text-red-500'>*</span>
							</label>
							<input
								name='name'
								value={form.name}
								onChange={handleChange}
								className='w-full border rounded p-2'
								required
							/>
						</div>

						<div>
							<label className='block mb-1 font-medium'>
								Last Name<span className='text-red-500'>*</span>
							</label>
							<input
								name='surname'
								value={form.surname}
								onChange={handleChange}
								className='w-full border rounded p-2'
								required
							/>
						</div>

						<div>
							<label className='block mb-1 font-medium'>
								Country / Region<span className='text-red-500'>*</span>
							</label>
							<select
								name='country'
								value={form.country}
								onChange={handleChange}
								className='w-full border rounded p-2'
								required
							>
								<option value=''>Select a country / region</option>
								<option value='UZ'>Uzbekistan</option>
								<option value='US'>United States</option>
							</select>
						</div>

						<div>
							<label className='block mb-1 font-medium'>
								Town / City<span className='text-red-500'>*</span>
							</label>
							<input
								name='city'
								value={form.city}
								onChange={handleChange}
								className='w-full border rounded p-2'
								required
							/>
						</div>

						<div className='md:col-span-2'>
							<label className='block mb-1 font-medium'>
								Street Address<span className='text-red-500'>*</span>
							</label>
							<input
								name='street'
								value={form.street}
								onChange={handleChange}
								className='w-full border rounded p-2 mb-2'
								placeholder='House number and street name'
								required
							/>
							<input
								name='apartment'
								value={form.apartment}
								onChange={handleChange}
								className='w-full border rounded p-2'
								placeholder='Apartment, suite, unit, etc. (optional)'
							/>
						</div>

						<div className='col-span-1'>
							<label className='block mb-1 font-medium'>
								Apartment<span className='text-red-500'>*</span>
							</label>
							<input
								name='town'
								value={form.town}
								onChange={handleChange}
								className='w-full border rounded p-2 mb-[8px]'
								required
							/>

							<input
								name='street_address'
								value={form.street_address}
								onChange={handleChange}
								className='w-full border rounded p-2 mb-2'
								placeholder='House number and street name'
								required
							/>
						</div>

						<div>
							<label className='block mb-1 font-medium'>
								State<span className='text-red-500'>*</span>
							</label>
							<select
								name='state'
								value={form.state}
								onChange={handleChange}
								className='w-full border rounded p-2'
								required
							>
								<option value=''>Select a state</option>
								<option value='Tashkent'>Tashkent</option>
								<option value='Samarkand'>Samarkand</option>
							</select>
						</div>

						<div>
							<label className='block mb-1 font-medium'>
								Zip<span className='text-red-500'>*</span>
							</label>
							<input
								name='zip'
								value={form.zip}
								onChange={handleChange}
								className='w-full border rounded p-2'
								required
							/>
						</div>

						<div>
							<label className='block mb-1 font-medium'>
								Email address<span className='text-red-500'>*</span>
							</label>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								className='w-full border rounded p-2'
								required
							/>
						</div>

						<div>
							<label className='block mb-1 font-medium'>
								Phone Number<span className='text-red-500'>*</span>
							</label>
							<div className='flex'>
								<select className='border rounded-l p-2 bg-gray-100'>
									<option>+998</option>
									<option>+966</option>
								</select>
								<input
									name='phone_number'
									value={form.phone_number}
									onChange={handleChange}
									className='w-full border-t border-b border-r rounded-r p-2'
									required
								/>
							</div>
						</div>

						<div className='md:col-span-2'>
							<label className='block mb-1 font-medium'>
								Username<span className='text-red-500'>*</span>
							</label>
							<input
								name='username'
								value={form.username}
								onChange={handleChange}
								className='w-full border rounded p-2'
								required
							/>
						</div>

						<div className='md:col-span-2'>
							<button
								type='submit'
								className='bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full sm:w-auto'
							>
								Save Address
							</button>
						</div>
					</form>
				</div>
			</main>
		</div>
	)
}

export default Account
