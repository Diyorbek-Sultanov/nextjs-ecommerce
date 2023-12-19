import qs from 'query-string'
import { APIURL } from '@/constants/url'
import { TProductFilter } from './product.types'
import { IProduct } from '@/types'

class Product {
	async getProducts(query = {} as TProductFilter): Promise<IProduct[]> {
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

	async getProductById(productId?: string): Promise<IProduct> {
		const response = await fetch(APIURL + `/products/${productId}`)

		return response.json()
	}
}

export const ProductService = new Product()
