'use client'

import ProductList from '@/components/products/product-list'
import { FILTERDPRODUCTS } from '@/constants/query-keys'
import { ProductService } from '@/services/product/product.service'
import type { IProduct } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'next/navigation'

const FilteredProducts: React.FC = () => {
	const searchParams = useSearchParams()
	const params = useParams()

	const sizeId = searchParams.get('sizeId') as string
	const colorId = searchParams.get('colorId') as string

	const { data, isPending } = useQuery({
		queryKey: [FILTERDPRODUCTS, sizeId, colorId, params.categoryId as string],
		queryFn: () =>
			ProductService.getProducts({
				colorId,
				sizeId,
				categoryId: params.categoryId as string,
			}),
	})

	let map: (IProduct | null)[] = []

	if (data?.data?.length && data) {
		map = data.data
	} else if (isPending) {
		map = new Array<null>(4).fill(null)
	}

	return (
		<div className='mt-6 lg:col-span-4 lg:mt-0'>
			{data?.data?.length === 0 && !isPending && (
				<div className='h-full flex items-center justify-center'>
					<p className='text-gray-500'>No results</p>
				</div>
			)}

			<ProductList map={map} />
		</div>
	)
}

export default FilteredProducts
