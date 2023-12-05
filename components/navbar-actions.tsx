'use client'

import Button from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

const NavbarActions: React.FC = () => {
	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button className='bg-black px-4 p-2 rounded-md hover:bg-black/90 transition-colors'>
				<ShoppingBag className='h-4 w-4 mr-2 text-white' />
				<span className='tex-xs text-white'>0</span>
			</Button>
		</div>
	)
}

export default NavbarActions
