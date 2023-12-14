import Billboards from '@/components/billboards'
import Container from '@/components/container'
import ProductReel from '@/components/products/product-reel'
import { Suspense } from 'react'

const HomePage = async () => {
	return (
		<Container>
			<Suspense fallback={<Billboards.Skeleton />}>
				<div className='space-y-10 pb-10'>
					<Billboards billboardId={'8009f659-2b70-4723-a535-f759448831d1'} />
				</div>
			</Suspense>
			<ProductReel
				title={'Products'}
				subTitle={'More products'}
				href={'/products/new'}
			/>
		</Container>
	)
}

export default HomePage
