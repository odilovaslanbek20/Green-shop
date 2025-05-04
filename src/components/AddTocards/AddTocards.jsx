import React, { useEffect, useState } from 'react'
import { useStore } from '../../zustand/addTocardsSlider'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ShoppingCart() {
	const [cards, setCards] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const [shipping, setShipping] = useState(16)
	const [coupon, setCoupon] = useState('')
	const [discount, setDiscount] = useState(0)
	let bonus = 'ASLANBEK'
	const { deleteCard } = useStore()

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('cards-data'))
		if (storedData?.state?.savatcha) {
			const withCount = storedData.state.savatcha.map(item => ({
				...item,
				count: item.count || 1,
			}))
			setCards(withCount)
		}
	}, [])

	const increment = id => {
		setCards(prev => {
			const updatedCards = prev.map(item =>
				item._id === id ? { ...item, count: (item.count || 1) + 1 } : item
			)

			const storedData = JSON.parse(localStorage.getItem('cards-data'))
			if (storedData?.state?.savatcha) {
				const updatedSavatcha = updatedCards.map(item => ({
					...item,
					count: item.count, // Countni yangilayapmiz
				}))
				storedData.state.savatcha = updatedSavatcha
				localStorage.setItem('cards-data', JSON.stringify(storedData)) // localStorage'ga yangilangan malumotlarni yozib qo'yamiz
			}

			return updatedCards
		})
	}

	const decrement = id => {
		setCards(prev => {
			const updatedCards = prev.map(item =>
				item._id === id
					? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
					: item
			)

			const storedData = JSON.parse(localStorage.getItem('cards-data'))
			if (storedData?.state?.savatcha) {
				const updatedSavatcha = updatedCards.map(item => ({
					...item,
					count: item.count,
				}))
				storedData.state.savatcha = updatedSavatcha
				localStorage.setItem('cards-data', JSON.stringify(storedData))
			}

			return updatedCards
		})
	}

	const handleDelete = id => {
		deleteCard(id)

		setTimeout(() => {
			const newSavatcha = useStore.getState().savatcha
			const storedData = JSON.parse(localStorage.getItem('cards-data'))

			if (storedData?.state) {
				const updated = newSavatcha.map(item => {
					const existing = cards.find(c => c._id === item._id)
					return {
						...item,
						count: existing?.count || 1,
					}
				})

				storedData.state.savatcha = updated
				localStorage.setItem('cards-data', JSON.stringify(storedData))
				setCards(updated)
			}
		}, 10)
	}

	const calculateTotalPrice = items => {
		const subtotal = items.reduce(
			(acc, item) => acc + item.price * item.count,
			0
		)
		const discounted = subtotal * discount
		const total = subtotal - discounted + (items.length > 0 ? shipping : 0)
		setTotalPrice(total.toFixed(2))
	}

	useEffect(() => {
		calculateTotalPrice(cards)
	}, [cards, discount])

	function handleCoupon(e) {
		e.preventDefault()
		if (coupon === bonus) {
			setDiscount(0.1)
		} else {
			setDiscount(0)
		}
	}

	return (
		<section className='my-[50px] max-w-[1211px] m-auto max-[1270px]:mx-[20px] max-[775px]:flex-col flex items-start gap-[86px] max-[1115px]:gap-[30px]'>
			<div className='w-full'>
				{cards.length > 0 ? (
					cards.map(item => (
						<div
							key={item?._id}
							className='bg-[#FBFBFB] p-4 my-2 rounded flex max-[1040px]:flex-col max-[775px]:items-center max-[775px]:flex-row  flex-row items-center max-[1040px]:items-start max-[660px]:flex-col max-[660px]:items-start gap-4'
						>
							<div className='flex items-center gap-4 flex-1 max-[355px]:items-start max-[355px]:flex-col'>
								<img
									src={item?.main_image}
									alt={item?.title}
									className='w-20 h-20 object-cover rounded'
								/>
								<div>
									<h3 className='text-[16px] font-["Inter"] text-[#3D3D3D] font-medium'>
										{item?.title}
									</h3>
									<p className='text-[14px] font-["Inter"] font-normal text-[#727272]'>
										SKU: {item?._id}
									</p>
								</div>
							</div>

							<div className='flex items-center justify-between sm:justify-end gap-6 flex-wrap sm:flex-nowrap w-full sm:w-auto'>
								<span className='text-[16px] font-medium text-[#727272] font-["Inter"]'>
									${item?.price}
								</span>

								<div className='flex items-center gap-[12px]'>
									<div
										onClick={() => increment(item?._id)}
										className='bg-[#46A358] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer'
									>
										<FaPlus className='text-[#fff]' />
									</div>
									<span className='text-[17px] font-["Inter"] text-[#3D3D3D] font-medium'>
										{item.count}
									</span>
									<div
										onClick={() => decrement(item?._id)}
										className='bg-[#46A358] w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer'
									>
										<FaMinus className='text-[#fff]' />
									</div>
								</div>

								<span className='font-["Inter"] text-[#46A358] text-[16px] font-bold'>
									${(item.price * item.count).toFixed(2)}
								</span>

								<RiDeleteBin6Line
									onClick={() => handleDelete(item?._id)}
									className='text-[#FF4D4F] text-[20px] cursor-pointer'
								/>
							</div>
						</div>
					))
				) : (
					<div className='flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg'>
						<img
							className='w-[200px] h-[200px] object-contain mb-4'
							src='noData.png'
							alt='no data photo'
						/>
						<Link
							to='/'
							className='text-2xl font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300'
						>
							<p>LES'T SHOP</p>
						</Link>
					</div>
				)}
			</div>
			<div className='min-w-[332px] max-w-[332px] max-[775px]:min-w-full max-[775px]:max-w-full'>
				<h2 className='text-[18px] font-["Inter"] text-[#3D3D3D] font-bold'>
					Cart Totals
				</h2>
				<hr className='text-[#46A35880] my-[11px]' />
				<form className='w-full relative h-[40px] flex items-center rounded justify-between border border-[#46A358]'>
					<input
						type='text'
						className='text-[14px] font-["Inter"] pl-[9px] pr-[110px] transition-all rounded focus:outline-4 outline-[#46A358]/50 font-normal text-[#A5A5A5] w-full h-full'
						placeholder='Enter coupon code here...'
						value={coupon}
						onChange={e => setCoupon(e.target.value)}
					/>
					<button
						onClick={handleCoupon}
						className='absolute right-0 min-w-[102px] max-w-[102px] h-full bg-[#46A358] text-[#fff] text-[15px] font-["Inter"] font-bold'
					>
						Apply
					</button>
				</form>
				<div className='my-[30px]'>
					<div className='mb-[15px] flex items-center justify-between gap-[30px]'>
						<p className='text-[15px] font-["Inter"] font-normal text-[#3D3D3D]'>
							Subtotal
						</p>
						<p className='text-[18px] font-["Inter"] font-medium text-[#3D3D3D]'>
							${totalPrice}
						</p>
					</div>
					<div className='mb-[15px] flex items-center justify-between gap-[30px]'>
						<p className='text-[15px] font-["Inter"] font-normal text-[#3D3D3D]'>
							Coupon Discount
						</p>
						<p className='text-[15px] font-["Inter"] font-normal text-[#3D3D3D]'>
							{discount}
						</p>
					</div>
					<div className='mb-[15px] flex items-center justify-between gap-[30px]'>
						<p className='text-[15px] font-["Inter"] font-normal text-[#3D3D3D]'>
							Shiping
						</p>
						<p className='text-[18px] font-["Inter"] font-medium text-[#3D3D3D]'>
							${shipping}
						</p>
					</div>
					<div className='mb-[15px] flex items-center justify-between gap-[30px]'>
						<p className='text-[#3D3D3D] font-bold font-["Inter"] text-[16px]'>
							Total
						</p>
						<p className='text-[18px] font-["Inter"] font-medium text-[#3D3D3D]'>
							${totalPrice}
						</p>
					</div>
					<Link>
						<div className='w-full h-[40px] bg-[#46A358] rounded flex items-center justify-center'>
							<p className='text-[#fff] font-["Inter"] font-bold text-[15px]'>
								Proceed To Checkout
							</p>
						</div>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ShoppingCart
