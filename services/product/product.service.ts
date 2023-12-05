import qs from 'query-string'
import { APIURL } from '@/constants/url'
import { TProductFilter } from './product.types'
import { IProduct } from '@/types'

class product {
	async getProduct(query = {} as TProductFilter): Promise<IProduct[]> {
		const url = qs.stringifyUrl(
			{
				url: APIURL + 'products',
				query,
			},
			{ skipNull: true, skipEmptyString: true }
		)

		const res = await fetch(url)

		return res.json()
	}
}

export const ProductService = new product()
