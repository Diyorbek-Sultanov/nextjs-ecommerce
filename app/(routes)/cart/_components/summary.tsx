import Button from '@/components/ui/button'
import Skeleton from '@/components/ui/skeleton'
import { useCart } from '@/hooks/use-cart'
import { priceFormatter } from '@/lib/utils'

const Summary: React.FC = () => {
	const { items } = useCart((state) => state)

	const totalPrice = items.reduce((acc, item) => {
		return acc + Number(item.price)
	}, 0)

	return (
		<div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
			<h1 className='text-lg font-medium text-gray-900'>Order Summary</h1>
			<div className='flex items-center justify-between border-t pt-4 mt-4 border-gray-200'>
				<h5 className='font-medium text-base text-gray-900'>Order total</h5>
				<h6 className='font-bold'>{priceFormatter(totalPrice)}</h6>
			</div>

			<Button className='bg-black mt-6 w-full rounded-3xl text-white p-3 font-semibold justify-center'>
				Checkout
			</Button>
		</div>
	)
}

export const SummarySkeleton = () => {
	return (
		<div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
			<Skeleton className='h-5 w-44' />
			<div className='flex items-center justify-between border-t pt-4 mt-4 border-gray-200'>
				<Skeleton className='h-5 w-36' />
				<Skeleton className='h-5 w-40' />
			</div>
			<Skeleton className='h-10 w-full mt-6 rounded-3xl' />
		</div>
	)
}

export default Summary
