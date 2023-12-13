import Skeleton from '@/components/ui/skeleton'

const ProductSkeleton: React.FC = () => {
	return (
		<div className='h-full w-full rounded-md bg-white'>
			<div className='aspect-square rounded-md overflow-hidden p-2'>
				<Skeleton className='w-full h-full' />
			</div>
			<div className='flex flex-col gap-y-2 p-2'>
				<Skeleton className='h-4 w-32' />
				<Skeleton className='h-4 w-28' />
				<Skeleton className='h-4 w-24' />
			</div>
		</div>
	)
}

export default ProductSkeleton
