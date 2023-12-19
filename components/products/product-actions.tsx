import ProductDetailSkeleton from '@/app/(routes)/products/[productId]/_components/product-detail-skeleton'
import Button from '@/components/ui/button'
import { PREVIEWPRODUCT } from '@/constants/query-keys'
import { usePreviewModal } from '@/hooks/use-preview-modal'
import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { Expand, ShoppingCart } from 'lucide-react'
import type { MouseEvent } from 'react'

const ProductActions: React.FC<{ productId?: string }> = ({ productId }) => {
	const { onOpen } = usePreviewModal((state) => state)

	const { data } = useQuery({
		queryKey: [PREVIEWPRODUCT, productId],
		queryFn: () => ProductService.getProductById(productId),
		enabled: !!productId,
	})

	const onPreview = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()

		onOpen(data!)
	}

	return (
		<div className='absolute bottom-10 opacity-0 group-hover:opacity-100 transition z-50 w-full flex items-center justify-center gap-x-6'>
			<Button
				className='bg-white rounded-full flex p-2 items-center justify-center border'
				onClick={onPreview}>
				<Expand className='h-4 w-4 text-gray-600' />
			</Button>
			<Button className='bg-white rounded-full flex p-2 items-center justify-center border'>
				<ShoppingCart className='h-4 w-4 text-gray-600' />
			</Button>
		</div>
	)
}

export default ProductActions
