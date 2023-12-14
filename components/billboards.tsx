import { fetchBillboard } from '@/actions/fetch-billboard'
import Skeleton from '@/components/ui/skeleton'

const Billboards = async ({ billboardId }: { billboardId: string }) => {
	const billboard = await fetchBillboard(billboardId)

	return (
		<div className='p-4 sm:p-6 lg:p-7 rounded-xl overflow-hidden'>
			<div
				className='rounded-xl relative aspect-square bg-cover bg-no-repeat md:aspect-[2.6/1] overflow-hidden bg-center'
				style={{ backgroundImage: `url(${billboard.imageUrl})` }}>
				<div className='h-full w-full flex items-center justify-center text-center gap-y-8'>
					<div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
						{billboard.label}
					</div>
				</div>
			</div>
		</div>
	)
}

Billboards.Skeleton = function BillboardsSkeleton() {
	return (
		<div className='space-y-10 pb-10'>
			<div className='p-4 sm:p-6 lg:p-7 rounded-xl overflow-hidden'>
				<Skeleton className='aspect-square rounded-xl md:aspect-[2.6/1]' />
			</div>
		</div>
	)
}

export default Billboards
