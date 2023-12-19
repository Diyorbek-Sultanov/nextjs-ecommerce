'use client'

import Container from '@/components/container'
import { useCart } from '@/hooks/use-cart'
import { useEffect, useState } from 'react'
import CartItem, { CartItemSkeleton } from './_components/cart-item'
import Summary, { SummarySkeleton } from './_components/summary'
import Button from '@/components/ui/button'
import Skeleton from '@/components/ui/skeleton'

const Cartpage = () => {
	const [isMounted, setIsMounted] = useState(false)
	const { items, removeAll } = useCart((state) => state)

	useEffect(() => setIsMounted(true), [])

	if (!isMounted) {
		return (
			<div className='bg-white'>
				<Container>
					<div className='px-4 py-16 sm:px-6 lg:px-8'>
						<Skeleton className='h-6 w-44' />
						<Skeleton className='h-10 w-44 mt-5' />

						<div className='lg:grid lg:grid-cols-12 gap-x-12 lg:items-start mt-12'>
							<div className='lg:col-span-7'>
								<ul>
									{[...new Array(2)].map((_, index) => (
										<CartItemSkeleton key={index} />
									))}
								</ul>
							</div>
							<SummarySkeleton />
						</div>
					</div>
				</Container>
			</div>
		)
	}

	return (
		<div className='bg-white'>
			<Container>
				<div className='px-4 py-16 sm:px-6 lg:px-8'>
					<h1 className='text-3xl text-black font-bold'>Shopping cart</h1>
					{items.length !== 0 && (
						<Button
							className='mt-5 border rounded border-gray-200 px-4 py-2 font-medium bg-slate-50 hover:bg-slate-100 transition'
							onClick={removeAll}>
							Remove all products
						</Button>
					)}
					<div className='lg:grid lg:grid-cols-12 gap-x-12 lg:items-start mt-12'>
						<div className='lg:col-span-7'>
							{items.length === 0 && (
								<p className='text-muted-foreground'>
									No products added to cart.
								</p>
							)}

							<ul>
								{items.map((item) => (
									<CartItem key={item.id} product={item} />
								))}
							</ul>
						</div>
						<Summary />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Cartpage
