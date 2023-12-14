import { APIURL } from '@/constants/url'
import type { ICategory } from '@/types'

const fetchCategories = async (): Promise<ICategory[]> => {
	const res = await fetch(APIURL + '/categories', { next: { revalidate: 10 } })

	return res.json()
}

export { fetchCategories as fetchCategory }
