import IconButton from '@/components/icon-button'
import Skeleton from '@/components/ui/skeleton'
import { useCart } from '@/hooks/use-cart'
import { priceFormatter } from '@/lib/utils'
import type { IProduct } from '@/types'
import { X } from 'lucide-react'
import Image from 'next/image'

const CartItem: React.FC<{ product: IProduct }> = ({ product }) => {
	const { removeItem } = useCart((state) => state)

	return (
		<li className='flex py-6 border-b'>
			<div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
				<Image
					src={product.images[0].url}
					fill
					alt={product.name}
					sizes='(min-width: 808px) 50vw, 100vw'
					className='object-center object-cover'
				/>
			</div>
			<div className='flex flex-1 relative ml-4 flex-col justify-between sm:ml-6'>
				<div className='absolute z-10 right-0 top-0'>
					<IconButton
						icon={<X size={15} />}
						onClick={() => removeItem(product.id)}
						className='p-2'
					/>
				</div>
				<div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
					<div className='flex justify-between'>
						<p className='text-lg text-black font-semibold'>{product.name}</p>
					</div>

					<div className='mt-1 flex text-sm'>
						<p className='text-muted-foreground'>{product.color.name}</p>
						<p className='text-muted-foreground border-l pl-4 ml-4 border-gray-200'>
							{product.size.name}
						</p>
					</div>

					<h4 className='font-bold'>{priceFormatter(Number(product.price))}</h4>
				</div>
			</div>
		</li>
	)
}

export const CartItemSkeleton = () => {
	return (
		<li className='flex py-6 border-b'>
			<Skeleton className='h-24 w-24 lg:h-48 lg:w-48 rounded-md' />
			<div className='flex flex-1 relative ml-4 flex-col justify-between sm:ml-6'>
				<div className='absolute z-10 right-0 top-0'>
					<Skeleton className='rounded-full h-10 w-10' />
				</div>
				<div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
					<Skeleton className='h-5 w-32' />
					<div className='mt-1 flex items-center gap-x-3 text-sm'>
						<Skeleton className='h-5 w-14' />
						<Skeleton className='h-5 w-14' />
					</div>
					<Skeleton className='h-5 w-32 mt-2' />
				</div>
			</div>
		</li>
	)
}

export default CartItem
