import qs from 'query-string'
import { APIURL } from '@/constants/url'
import { TProductFilter } from './product.types'
import { IProduct } from '@/types'

class Product {
	async getProduct(query = {} as TProductFilter): Promise<IProduct[]> {
		const url = qs.stringifyUrl(
			{
				url: APIURL + '/products',
				query,
			},
			{ skipNull: true, skipEmptyString: true }
		)

		const res = await fetch(url)

		return await res.json()
	}
}

export const ProductService = new Product()
