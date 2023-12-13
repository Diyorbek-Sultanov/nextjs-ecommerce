import Button from '@/components/ui/button'
import { priceFormatter } from '@/lib/utils'
import type { IProduct } from '@/types'
import { ShoppingCart } from 'lucide-react'

const ProductInfo: React.FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<h1 className='text-3xl font-bold text-gray-900'>{product.name}</h1>
			<div className='mt-3 flex items-end justify-between'>
				<p className='text-2xl text-gray-900 font-semibold'>
					{priceFormatter(Number(product.price))}
				</p>
			</div>
			<hr className='my-4' />
			<div className='flex flex-col gap-y-4'>
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Size:</h3>
					<span className='capitalize'>{product.size.name}</span>
				</div>
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Color:</h3>
					<div
						className='border-2 rounded-full h-6 w-6'
						style={{ backgroundColor: product.color.value }}
					/>
				</div>
				<div className='mt-10 flex  items-center gap-x-3'>
					<Button className='bg-black text-white rounded-md py-3 px-2 gap-x-3 font-medium'>
						Add to card <ShoppingCart />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
