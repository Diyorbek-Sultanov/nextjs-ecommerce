import { IProduct } from '@/types'
import { useEffect, useState } from 'react'
import ProductSkeleton from './product-skeleton'
import { cn, priceFormatter } from '@/lib/utils'
import ProductImageSlider from './product-image-slider'

type TProductCardProps = {
	product: IProduct | null
	index: number
}

const ProductCard: React.FC<TProductCardProps> = ({ index, product }) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true)
		}, index * 80)

		return () => clearTimeout(timer)
	}, [index])

	if (!isVisible || !product) return <ProductSkeleton />

	return (
		<div
			className={cn(
				'group invisible relative h-full w-full overflow-hidden rounded-md bg-white border',
				isVisible && 'visible animate-in fade-in-5'
			)}>
			<ProductImageSlider images={product.images} />
			<div className='p-2'>
				<h1 className='font-semibold mb-2'>{product.name}</h1>
				<p className='text-sm text-gray-500'>{product.category.name}</p>
				<span className='text-xs font-medium text-slate-600'>
					{priceFormatter(Number(product.price))}
				</span>
			</div>
		</div>
	)
}

export default ProductCard
