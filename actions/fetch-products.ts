import qs from 'query-string'
import { APIURL } from '@/constants/url'
import type { IProduct } from '@/types'
import type { TProductFilter } from '@/services/product/product.types'

const fetchProducts = async (
	query = {} as TProductFilter
): Promise<IProduct[]> => {
	const url = qs.stringifyUrl(
		{
			url: APIURL + '/products',
			query,
		},
		{ skipNull: true, skipEmptyString: true }
	)

	const res = await fetch(url, {
		next: { revalidate: 10 },
	})

	return res.json()
}

export { fetchProducts }
