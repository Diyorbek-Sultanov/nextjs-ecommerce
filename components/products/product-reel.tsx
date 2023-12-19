'use client'

import { PRODUCTS } from '@/constants/query-keys'
import { ProductService } from '@/services/product/product.service'
import type { IProduct } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import ProductList from './product-list'

type TProductReelProps = {
	title: string
	subTitle?: string
	href?: string
}

const ProductReel: React.FC<TProductReelProps> = ({
	href,
	title,
	subTitle,
}) => {
	const { data: products, isPending } = useQuery({
		queryKey: [PRODUCTS],
		queryFn: () => ProductService.getProducts(),
	})

	let map: (IProduct | null)[] = []

	if (products?.length && products) {
		map = products
	} else if (isPending) {
		map = new Array<null>(4).fill(null)
	}

	return (
		<section className='py-12'>
			<div className='mb-4 md:flex md:items-center md:justify-between'>
				<div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
					<h1 className='text-2xl font-bold tracking-tight sm:text-3xl'>
						{title}
					</h1>
					{subTitle && (
						<p className='mt-2 text-sm text-muted-foreground'>{subTitle}</p>
					)}
				</div>

				{href && (
					<Link
						href={href}
						className='hidden md:flex md:items-center md:gap-x-2 text-sky-600 hover:text-sky-500 transition-colors font-medium'>
						New products &rarr;
					</Link>
				)}
			</div>

			<ProductList map={map} />
		</section>
	)
}

export default ProductReel
