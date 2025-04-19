import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import axios from 'axios'

function valuetext(value) {
	return `${value}°C`
}

function Cards() {
	const [data, setData] = useState([])
	const [data1, setData1] = useState([])
	const [value, setValue] = useState([20, 37])

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

	return (
		<section className='max-w-[1211px] m-auto max-[1270px]:mx-[20px]'>
			<div className='flex items-start gap-[50px] max-[850px]:flex-col'>
				<div className='w-[350px] max-[400px]:w-full p-[18px] bg-[rgba(251,251,251,1)]'>
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
						<div className='group ml-[12px] mt-[7px]  mb-[20px]'>
							<div className="group flex items-center justify-between w-full mb-[20px]">
								<span className='font-["Inter"] text-[15px] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>Small</span>
								<span className='text-[15px] font-["Inter"] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>(119)</span>
							</div>

							<div className="group flex items-center justify-between w-full mb-[20px]">
								<span className='font-["Inter"] text-[15px] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>Medium</span>
								<span className='text-[15px] font-["Inter"] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>(86)</span>
							</div>

							<div className="group flex items-center justify-between w-full mb-[20px]">
								<span className='font-["Inter"] text-[15px] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>Large</span>
								<span className='text-[15px] font-["Inter"] font-normal group-hover:font-bold group-hover:text-[rgba(70,163,88,1)]'>(78)</span>
							</div>
						</div>
					</div>
				</div>

				<div className='w-full'>
					<div className=' w-full flex items-center justify-between max-[560px]:flex-col max-[560px]:gap-[10px]'>
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
						<div className='flex items-center gap-[5px]'>
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

					<div className='grid grid-cols-3 gap-4 mt-[20px] max-[1024px]:grid-cols-2 max-[850px]:grid-cols-3 max-[685px]:grid-cols-2 max-[420px]:grid-cols-1'>
						{data1?.map(item => (
							<div key={item?._id} className='bg-[rgba(251,251,251,1)] border'>
								<div className=''>
									<img
										className='w-full h-[250px] max-[500px]:h-[200px]'
										src={item?.main_image}
										alt={item?.category}
									/>
								</div>
								<div className='p-[10px]'>
									<p className='text-[rgba(61,61,61,1)] text-[16px] font-normal font-["Inter"]'>
										{item?.title}
									</p>
									<span className='text-[rgba(70,163,88,1)] font-bold font-["Inter"] text-[18px]'>
										${item?.price}
									</span>
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
