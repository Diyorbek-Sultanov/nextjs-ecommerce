'use client'

import type SwiperType from 'swiper'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import type { Image as ImageResponse } from '@/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductActions from './product-actions'
import { useRouter } from 'next/navigation'
import { usePreviewModal } from '@/hooks/use-preview-modal'

type TProductImageSliderProps = {
	productId?: string
	images: ImageResponse[]
	isProductDetailPage?: boolean
}

const ProductImageSlider: React.FC<TProductImageSliderProps> = ({
	images,
	productId,
	isProductDetailPage,
}) => {
	const router = useRouter()
	const { onClose } = usePreviewModal((state) => state)

	const [swiper, setSwiper] = useState<null | SwiperType>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const [slideConfig, setSlideConfig] = useState({
		isBeginning: true,
		isEnd: activeIndex === (images.length ?? 0) - 1,
	})

	useEffect(() => {
		swiper?.on('slideChange', ({ activeIndex }) => {
			setActiveIndex(activeIndex)
			setSlideConfig({
				isBeginning: activeIndex === 0,
				isEnd: activeIndex === (images.length ?? 0) - 1,
			})
		})
	}, [images, swiper])

	const handleClick = () => {
		if (isProductDetailPage) return

		onClose()
		router.push(`/products/${productId}`)
	}

	return (
		<div className='relative w-full cursor-pointer p-2' onClick={handleClick}>
			<div className='group relative aspect-square overflow-hidden rounded-md bg-zinc-100'>
				<div className='absolute inset-0 opacity-0 transition group-hover:opacity-100 z-10'>
					<button
						className={cn('image-slider-btn_active', 'left-3 transition', {
							['image-slider-btn_inactive']: slideConfig.isBeginning,
							'hover:bg-slate-200 text-sky-600 opacity-100':
								!slideConfig.isBeginning,
						})}
						aria-label='prev-image'
						onClick={(e) => {
							e.stopPropagation()
							swiper?.slidePrev()
						}}>
						<ChevronLeft className='h-4 w-4 text-zinc-700' />
					</button>
					<button
						className={cn('image-slider-btn_active', 'right-3 transition', {
							['image-slider-btn_inactive']: slideConfig.isEnd,
							'hover:bg-slate-200 text-sky-600 opacity-100': !slideConfig.isEnd,
						})}
						aria-label='next-image'
						onClick={(e) => {
							e.stopPropagation()
							swiper?.slideNext()
						}}>
						<ChevronRight className='h-4 w-4 text-zinc-700' />
					</button>
				</div>

				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					draggable={isProductDetailPage}
					onSwiper={(swiper) => setSwiper(swiper)}
					spaceBetween={50}
					slidesPerView={1}
					modules={[Pagination]}
					className='h-full w-full'>
					{images.map((image) => (
						<SwiperSlide key={image.id} className='h-full w-full -z-10'>
							<Image
								src={image.url}
								alt='image'
								fill
								className='-z-10 h-full w-full object-cover object-center'
								sizes='(min-width: 808px) 50vw, 100vw'
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<ProductActions productId={productId} />
		</div>
	)
}

export default ProductImageSlider
