import { fetchProduct } from '@/actions/fetch-product'
import ProductImageSlider from '@/components/products/product-image-slider'
import ProductInfo from './product-info'
import { fetchProducts } from '@/actions/fetch-products'
import ProductList from '@/components/products/product-list'

const ProductDetailContent: React.FC<{ productId: string }> = async ({
	productId,
}) => {
	const product = await fetchProduct(productId)
	const products = await fetchProducts({
		categoryId: product.category.id,
	})

	return (
		<div className='px-4 py-10 sm:px-6 lg:px-8'>
			<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
				<div className='w-full h-full'>
					<ProductImageSlider
						images={product.images}
						productId={productId}
						isProductDetailPage
					/>
				</div>
				<div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
					<ProductInfo product={product} />
				</div>
			</div>
			<ProductList map={products} isProductDetailPage />
		</div>
	)
}

export default ProductDetailContent
