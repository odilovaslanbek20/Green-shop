import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import cardsFlex from '.'

function Flex() {
	return (
		<>
			{/* <section className='max-w-[1211px] m-auto max-[1270px]:mx-[20px] mt-[100px]'>
				<div className='flex items-center justify-between'>
				  {cardsFlex?.map((card) => {
						return (
							<div key={card?.id} className='relative max-w-[586px] h-[250px] p-[25px] bg-[rgba(251,251,251,1)] flex items-end justify-between'>
                 <img className='' src={card?.image} alt="wem image" />
								 <div className="flex items-end justify-end flex-col">
									 <h2 className='text-[18px] text-right font-["Inter"] font-black uppercase text-[rgba(61,61,61,1)]'>{card?.title}</h2>
									 <p className='text-[14px] text-right font-normal font-["Inter] text-[rgba(114,114,114,1)]'>{card?.text}</p>
									 <button className='w-[140px] h-[40px] rounded-[6px] bg-[rgba(70,163,88,1)] font-bold text-[16px] font-["Inter] text-[#fff] cursor-pointer flex items-center justify-center gap-0.5'>
												{card?.btnText}
												<FaArrowRightLong className='text-[#ffffff]' />
											</button>
								 </div>
							</div>
						)
					})}
				</div>
			</section> */}
		</>
	)
}

export default Flex
