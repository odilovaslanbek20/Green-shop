import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import cards from './index'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

function OurBlog() {
	return (
		<>
			<section className='max-w-[1211px] m-auto max-[1270px]:mx-[20px] my-[100px] max-[619px]:my-[50px]'>
				<h1 className='text-center font-["Inter"] text-[30px] font-bold text-[rgba(61,61,61,1)]'>
					Our Blog Posts
				</h1>
				<p className='text-center font-["Inter"] text-[rgba(114,114,114,1)] text-[14px] font-normal mb-[35px]'>
					We are an online plant shop offering a wide range of cheap and trendy
					plants.
				</p>

				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={25}
					pagination={{
						clickable: true,
					}}
					autoplay={{ delay: 4000 }}
					loop={true}
					className='relative'
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						506: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
				>
					{cards?.map((card) => (
						<SwiperSlide key={card?.id}>
							<div className='group w-full h-auto bg-[rgba(251,251,251,1)] mb-9 cursor-pointer'>
								<img className='w-full' src={card?.images} alt='cards img' />
								<div className='w-full pl-[15px] pt-[9px] pr-[11px] pb-[12px]'>
									<span className='text-[rgba(70,163,88,1)] max-[1150px]:text-[12px] font-medium font-["Inter"] text-[14px]'>
										{card?.date}
									</span>
									<h2 className='text-[rgba(61,61,61,1)] max-[1150px]:text-[18px] max-[1150px]:leading-[20px] font-bold text-[20px] leading-[26px] my-[4px]'>
										{card?.title}
									</h2>
									<p className='text-[rgba(114,114,114,1)] max-[1150px]:text-[12px] max-[1150px]:leading-[15px] font-["Inter"] font-normal text-[14px] leading-[22px]'>
										{card?.text}
									</p>
									<Link className='text-[rgba(61,61,61,1)] flex items-center gap-[2px] font-medium font-["Inter"] text-[14px] max-[1150px]:text-[12px] mt-[9px] group-hover:text-[rgba(70,163,88,1)]'>
										{card?.btnText}
										<FaArrowRightLong/>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	)
}

export default OurBlog
