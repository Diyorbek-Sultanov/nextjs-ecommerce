import Skeleton from '@/components/ui/skeleton'

const ProductDetailSkeleton: React.FC = () => {
	return (
		<div className='px-4 py-10 sm:px-6 lg:px-8'>
			<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
				<div className='w-full h-full'>
					<Skeleton className='aspect-square' />
				</div>
				<div>
					<Skeleton className='h-5 w-40' />
					<Skeleton className='h-5 w-36 mt-3' />
					<div className='flex flex-col my-4 gap-y-4'>
						<div className='flex items-center gap-x-4'>
							<Skeleton className='h-4 w-14' />
							<Skeleton className='h-4 w-14' />
						</div>
						<div className='flex items-center gap-x-4'>
							<Skeleton className='h-4 w-14' />
							<Skeleton className='h-6 w-6 rounded-full' />
						</div>
						<div className='mt-10 flex  items-center gap-x-3'>
							<Skeleton className='h-10 w-32' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetailSkeleton
