'use client'

import { PRODUCTS } from '@/constants/query-keys'
import { ProductService } from '@/services/product/product.service'
import type { IProduct } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import Link from 'next/link'
import ProductList from './product-list'
import { TProductFilter } from '@/services/product/product.types'
import Button from '@/components/ui/button'
import Spinner from '../spinner'

type TProductReelProps = {
	title: string
	subTitle?: string
	href?: string
	query: TProductFilter
}

const ProductReel: React.FC<TProductReelProps> = ({
	href,
	title,
	subTitle,
	query,
}) => {
	const {
		data: queryResult,
		isPending,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: [PRODUCTS],
		queryFn: ({ pageParam }) =>
			ProductService.getProducts({
				pageSize: query.pageSize,
				lastCursor: pageParam.toString(),
			}),
		initialPageParam: '1',
		getNextPageParam: (lastPage) => {
			return lastPage?.metaData.lastCursor
		},
	})

	const products = queryResult?.pages.flatMap((page) => page.data)
	let map: (IProduct | null)[] = []

	if (products?.length && products) {
		map = products
	} else if (isPending) {
		map = new Array<null>(Number(query.pageSize)).fill(null)
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

			{isFetchingNextPage && <Spinner />}

			{hasNextPage && (
				<div className='flex items-center w-full justify-center mt-6'>
					<Button
						className='bg-black text-white font-semibold text-base rounded-md px-4 py-2'
						onClick={() => fetchNextPage()}>
						Load more
					</Button>
				</div>
			)}
		</section>
	)
}

export default ProductReel
