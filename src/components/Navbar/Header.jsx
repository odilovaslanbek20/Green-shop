import { Link } from 'react-router-dom'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { FiShoppingCart } from 'react-icons/fi'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useState } from 'react'

function Header() {
  const [menu, setMenu] = useState(false)

	return (
		<>
			<header className='max-[1270px]:mx-[20px] max-w-[1211px] m-auto mt-[25px] mb-[12px]  pb-[18px] border-b-[1px] border-[rgba(70,163,88,0.5)]'>
				<div className='flex items-center justify-between'>
					<Link>
						<img src='Logo.svg' alt='logotip'  className='w-[140px]'/>
					</Link>
					<div className='flex items-center gap-[50px] max-[670px]:hidden'>
						<div className=''>
							<Link className='text-[rgba(61,61,61,1) font-normal text-[16px]]'>Home</Link>
						</div>
						<div className=''>
							<Link className='text-[rgba(61,61,61,1) font-normal text-[16px]]'>Shop</Link>
						</div>
					</div>
					<div className='flex items-center gap-8 max-[380px]:gap-[20px]'>
						<RxMagnifyingGlass className='text-[25px] max-[380px]:text-[22px]' />
						<div className='relative'>
							<p className='h-[12px] w-[12px] text-[10px] absolute ml-[12px] mt-[-3px] rounded-full flex items-center justify-center text-[#fff] bg-[rgba(70,163,88,1)]'>0</p>
							<FiShoppingCart className='text-[20px] max-[380px]:text-[18px]' />
						</div>
						<div className='w-[100px] p-0 m-0 h-[35px] max-[670px]:hidden bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1'>
							<RiLogoutCircleRLine className='text-[20px] text-[#fff]' />
							<p className='text-[#fff] font-["Inter"] font-medium text-[16px]'>
								Login
							</p>
						</div>
						<FaBarsStaggered onClick={() => setMenu(true)} className='text-[20px] hidden max-[670px]:block max-[380px]:text-[18px]'/>
					</div>
				</div>
			</header>

			<div className={`${!menu ? "mr-[-100%]" : "mr-[0px]"} transition-all min-[670px]:hidden fixed top-0 right-0 w-[300px] min-h-screen bg-[#000000]/70 z-50`}>
			   <div onClick={() => setMenu(false)}>
				 <FaXmark className='text-[#fff] text-[30px] absolute right-[10px] top-[10px]'/>
				 </div>
				<div className="flex items-center justify-center flex-col gap-[20px] mt-[50px]">
				    <div className=''>
							<Link onClick={() => setMenu(false)} className='text-[rgba(61,61,61,1) text-[#fff] font-normal text-[16px]]'>Home</Link>
						</div>
						<div className=''>
							<Link onClick={() => setMenu(false)} className='text-[rgba(61,61,61,1) text-[#fff] font-normal text-[16px]]'>Shop</Link>
						</div>
						<div onClick={() => setMenu(false)} className='w-[100px] p-0 m-0 h-[35px] bg-[rgba(70,163,88,1)] rounded-[6px] flex items-center justify-center gap-1'>
							<RiLogoutCircleRLine className='text-[20px] text-[#fff]' />
							<p className='text-[#fff] font-["Inter"] font-medium text-[16px]'>
								Login
							</p>
						</div>
				</div>
			</div>
		</>
	)
}

export default Header
