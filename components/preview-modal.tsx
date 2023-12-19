'use client'

import { usePreviewModal } from '@/hooks/use-preview-modal'
import Modal from '@/components/ui/modal'
import ProductImageSlider from './products/product-image-slider'
import ProductInfo from '@/app/(routes)/products/[productId]/_components/product-info'

const PreviewModal: React.FC = () => {
	const { product, isOpen, onClose } = usePreviewModal((state) => state)

	if (!product) return null

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
				<div className='sm:col-span-4 lg:col-span-5'>
					<ProductImageSlider images={product.images} productId={product.id} />
				</div>
				<div className='sm:col-span-8 lg:col-span-7'>
					<ProductInfo product={product} />
				</div>
			</div>
		</Modal>
	)
}

export default PreviewModal
