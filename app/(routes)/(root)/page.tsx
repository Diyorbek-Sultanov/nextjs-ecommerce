import { fetchBillboard } from '@/actions/fetch-billboard'
import Billboards from '@/components/billboards'
import Container from '@/components/container'
import ProductReel from '@/components/products/product-reel'

const HomePage = async () => {
	const billboard = await fetchBillboard('8009f659-2b70-4723-a535-f759448831d1')

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboards data={billboard} />
			</div>
			<ProductReel
				title={'Products'}
				subTitle={'More products'}
				href={'/products/new'}
				query={{ page: 1, pageSize: 8 }}
			/>
		</Container>
	)
}

export default HomePage
