import Button from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { usePreviewModal } from '@/hooks/use-preview-modal'
import type { IProduct } from '@/types'
import { Expand, ShoppingCart } from 'lucide-react'
import type { MouseEvent } from 'react'

const ProductActions: React.FC<{ product: IProduct }> = ({ product }) => {
	const { onOpen } = usePreviewModal((state) => state)
	const { addItem } = useCart((state) => state)

	const onPreview = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()

		onOpen(product)
	}

	const onAddCart = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()

		addItem(product)
	}

	return (
		<div className='absolute bottom-32 opacity-0 group-hover:opacity-100 transition z-50 w-full flex items-center justify-center gap-x-6'>
			<Button
				className='bg-white rounded-full flex p-2 items-center justify-center border'
				onClick={onPreview}>
				<Expand className='h-4 w-4 text-gray-600' />
			</Button>
			<Button
				className='bg-white rounded-full flex p-2 items-center justify-center border'
				onClick={onAddCart}>
				<ShoppingCart className='h-4 w-4 text-gray-600' />
			</Button>
		</div>
	)
}

export default ProductActions
