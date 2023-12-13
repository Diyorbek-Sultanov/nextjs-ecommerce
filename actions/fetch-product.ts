import { APIURL } from '@/constants/url'
import type { IProduct } from '@/types'

const fetchProduct = async (id: string): Promise<IProduct> => {
	const res = await fetch(APIURL + `/products/${id}`, {
		next: { revalidate: 10 },
	})

	return res.json()
}

export { fetchProduct }
