import Container from '@/components/container'
import ProductDetailContent from './_components/product-detail-content'
import { Suspense } from 'react'
import ProductDetailSkeleton from './_components/product-detail-skeleton'

const ProductPage = ({ params }: { params: { productId: string } }) => {
	return (
		<div className='bg-white'>
			<Container>
				<Suspense fallback={<ProductDetailSkeleton />}>
					<ProductDetailContent productId={params.productId} />
				</Suspense>
			</Container>
		</div>
	)
}

export default ProductPage
