import { APIURL } from '@/constants/url'
import type { ICategory } from '@/types'

const fetchCategory = async (categoryId: string): Promise<ICategory> => {
	const res = await fetch(APIURL + `/categories/${categoryId}`, {
		next: { revalidate: 10 },
	})

	return res.json()
}

export { fetchCategory }
