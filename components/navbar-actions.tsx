'use client'

import Button from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import Skeleton from '@/components/ui/skeleton'
import { useRouter } from 'next/navigation'

const NavbarActions: React.FC = () => {
	const { items } = useCart((state) => state)
	const [isMounted, setIsMounted] = useState(false)

	const router = useRouter()

	useEffect(() => setIsMounted(true), [])

	if (!isMounted) {
		return (
			<div className='ml-auto flex items-center gap-x-4'>
				<Skeleton className='h-11 w-11' />
			</div>
		)
	}

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button
				className='bg-black px-4 p-2 rounded-md hover:bg-black/90 transition-colors'
				onClick={() => router.push('/cart')}>
				<ShoppingBag className='h-4 w-4 mr-2 text-white' />
				<span className='tex-xs text-white'>{items.length}</span>
			</Button>
		</div>
	)
}

export default NavbarActions
