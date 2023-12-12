import type { IProduct } from '@/types'
import ProductCard from './product-card'

const ProductList: React.FC<{ map: (IProduct | null)[] }> = ({ map }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6'>
			{map.map((product, index) => (
				<ProductCard key={index} product={product} index={index} />
			))}
		</div>
	)
}

export default ProductList
