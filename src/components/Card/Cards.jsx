import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../zustand/addTocardsSlider'
import { GoHeart } from 'react-icons/go'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'

function valuetext(value) {
	return `${value}°C`
}

function Cards() {
	const [data, setData] = useState([])
	const [data1, setData1] = useState([])
	const [value, setValue] = useState([20, 37])
	const [activeCardId, setActiveCardId] = useState(null)
	const [modal, setModal] = useState(false)

	useEffect(() => {
		const token = '6506e8bd6ec24be5de357927'

		axios
			.get(
				`https://green-shop-backend.onrender.com/api/flower/category?access_token=${token}`
			)
			.then(res => setData(res?.data?.data))
			.catch(error => console.log(error.message))

		axios
			.get(
				`https://green-shop-backend.onrender.com/api/flower/category/house-plants?access_token=${token}`
			)
			.then(res => setData1(res?.data?.data))
			.catch(error => console.log(error.message))
	}, [])

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const handleCardClick = id => {
		if (window.innerWidth < 1024) {
			setActiveCardId(prev => (prev === id ? null : id))
		}
	}

	const ctigory = [
		{
			id: 1,
			name: 'Small',
			count: '119',
		},
		{
			id: 2,
			name: 'Medium',
			count: '86',
		},
		{
			id: 3,
			name: 'Large',
			count: '78',
		},
	]

	const { addToCards } = useStore()

	return (
		<section className='max-w-[1211px] m-auto max-[1270px]:mx-[20px]'>
			<div className='flex items-start gap-[50px] max-[950px]:flex-col'>
				<div
					className={`max-[950px]:fixed max-[950px]:w-full max-[950px]:h-screen max-[950px]:bg-[#000]/70 max-[950px]:p-[20px] max-[950px]:top-0 max-[950px]:left-0 max-[950px]:opacity-0 max-[950px]:z-50 max-[950px]:flex max-[950px]:items-center max-[950px]:justify-center ${
						modal ? 'max-[950px]:opacity-100' : 'max-[950px]:opacity-0'
					}`}
				>
					<div className='w-[350px] max-[850px]:w-[450px] p-[18px] relative bg-[rgba(251,251,251,1)]'>
						<FaXmark className='text-[25px] absolute top-[10px] right-[10px]' />
						<h1 className='text-[rgba(61,61,61,1)] font-bold text-[18px]'>
							Categories
						</h1>
						{data?.map(item => (
							<div
								className='group ml-[12px] mt-[7px] flex items-center justify-between mb-[20px]'
								key={item?._id}
							>
								<h2 className='font-["Inter"] text-[15px] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>
									{item?.title}
								</h2>
								<span className='text-[15px] font-["Inter"] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>
									({item?.count})
								</span>
							</div>
						))}

						<div>
							<h2 className='text-[rgba(61,61,61,1)] font-bold text-[18px] mt-[20px]'>
								Price Range
							</h2>
							<div className='ml-[12px]'>
								<Box className='w-[100%]'>
									<Slider
										getAriaLabel={() => 'Temperature range'}
										value={value}
										onChange={handleChange}
										valueLabelDisplay='auto'
										getAriaValueText={valuetext}
										sx={{ color: 'rgba(70,163,88,1)' }}
									/>
								</Box>
								<div className='mb-[16px]'>
									<span className='text-[15px] flex items-center gap-[5px] font-normal text-[rgba(61,61,61,1)] font-["Inter"]'>
										Price:
										<span className='text-[rgba(70,163,88,1)] font-bold text-[15px]'>
											$39 - $1230
										</span>
									</span>
								</div>
								<Link to='/filter-results'>
									<div className='w-[90px] h-[35px] flex items-center justify-center rounded bg-[rgba(70,163,88,1)]'>
										<p className='text-[rgba(255,255,255,1)] text-[16px] font-bold font-["Inter"]'>
											Filter
										</p>
									</div>
								</Link>
							</div>
						</div>

						<div className='w-full'>
							<h2 className='text-[rgba(61,61,61,1)] font-bold text-[18px] mt-[20px]'>
								Size
							</h2>
							<div className='ml-[12px] mt-[7px]  mb-[20px]'>
								{ctigory?.map(data => (
									<div
										key={data?.id}
										className='group flex items-center justify-between w-full mb-[20px]'
									>
										<span className='font-["Inter"] text-[15px] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>
											{data?.name}
										</span>
										<span className='text-[15px] font-["Inter"] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>
											({data?.count})
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className='w-full'>
					<div className=' w-full flex items-center justify-between  max-[560px]:gap-[10px]'>
						<div className='flex items-center gap-[34px]'>
							<div className='group'>
								<Link
									to='/all-plants'
									className='group-hover:text-[rgba(70,163,88,1)] transition-all group-hover:font-bold font-["Inter"]'
								>
									All Plants
								</Link>
								<div className='w-full h-[2px] bg-[rgba(70,163,88,1)] transition-all group-hover:opacity-100 opacity-0'></div>
							</div>
							<div className='group'>
								<Link
									to='/new-arrivals'
									className='group-hover:text-[rgba(70,163,88,1)] transition-all group-hover:font-bold font-["Inter"]'
								>
									New Arrivals
								</Link>
								<div className='w-full h-[2px] bg-[rgba(70,163,88,1)] transition-all group-hover:opacity-100 opacity-0'></div>
							</div>
							<div className='group'>
								<Link
									to='/sale'
									className='group-hover:text-[rgba(70,163,88,1)] transition-all group-hover:font-bold font-["Inter"]'
								>
									Sale
								</Link>
								<div className='w-full h-[2px] bg-[rgba(70,163,88,1)] transition-all group-hover:opacity-100 opacity-0'></div>
							</div>
						</div>
						<FaBars className='min-[950px]:hidden text-[25px]' />
						<div className='max-[950px]:hidden flex items-center gap-[5px]'>
							<p className='text-[rgba(61,61,61,1)] font-["Inter"] text-[18px] font-normal'>
								Sort by:
							</p>
							<select className='outline-none'>
								<option value='default'>Default Sorting</option>
								<option value='cheapest'>The Cheapest</option>
								<option value='expensive'>Most Expensive</option>
							</select>
						</div>
					</div>

					<div className='grid grid-cols-3 gap-6 mt-6 max-[1080px]:grid-cols-2 max-[950px]:grid-cols-3 max-[720px]:grid-cols-2 max-[470px]:grid-cols-1'>
						{data1?.map(item => (
							<div
								key={item?._id}
								onClick={() => handleCardClick(item?._id)}
								className='relative group border rounded-xl shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300'
							>
								<div
									className='relative'
									onClick={() => handleCardClick(item?._id)}
								>
									<img
										src={item?.main_image}
										alt={item?.title}
										className='w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300'
									/>

									<div
										className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-4
		                 ${
			                 window.innerWidth < 1024
				                 ? activeCardId === item?._id
					                 ? 'opacity-100'
					                 : 'opacity-0'
				                 : 'opacity-0 group-hover:opacity-100'
		                 } transition-opacity duration-300`}
									>
										<button
											onClick={() => addToCards(item)}
											className='bg-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition'
										>
											<AiOutlineShoppingCart className='text-[20px]' />
										</button>
										<button className='bg-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition'>
											<GoHeart className='text-[20px]' />
										</button>
										<button className='bg-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition'>
											<FiSearch className='text-[20px]' />
										</button>
									</div>
								</div>

								<div className='p-4'>
									<h3 className='text-lg font-semibold text-gray-800'>
										{item?.title}
									</h3>
									<p className='text-green-600 font-bold text-[18px]'>
										${item?.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cards
