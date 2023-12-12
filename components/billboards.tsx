import { IBillboard } from '@/types'

const Billboards: React.FC<{ data: IBillboard }> = ({ data }) => {
	return (
		<div className='p-4 sm:p-6 lg:p-7 rounded-xl overflow-hidden'>
			<div
				className='rounded-xl relative aspect-square bg-cover bg-no-repeat md:aspect-[2.6/1] overflow-hidden bg-center'
				style={{ backgroundImage: `url(${data.imageUrl})` }}>
				<div className='h-full w-full flex items-center justify-center text-center gap-y-8'>
					<div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
						{data.label}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Billboards
