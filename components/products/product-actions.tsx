import Button from '@/components/ui/button'
import { Expand, ShoppingCart } from 'lucide-react'

const ProductActions: React.FC = () => {
	return (
		<div className='absolute bottom-10 opacity-0 group-hover:opacity-100 transition z-50 w-full flex items-center justify-center gap-x-6'>
			<Button className='bg-white rounded-full flex p-2 items-center justify-center border'>
				<Expand className='h-4 w-4 text-gray-600' />
			</Button>
			<Button className='bg-white rounded-full flex p-2 items-center justify-center border'>
				<ShoppingCart className='h-4 w-4 text-gray-600' />
			</Button>
		</div>
	)
}

export default ProductActions
