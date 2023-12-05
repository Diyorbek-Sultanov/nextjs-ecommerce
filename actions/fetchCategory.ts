import { APIURL } from '@/constants/url'
import type { ICategory } from '@/types'

const fetchCategory = async (): Promise<ICategory[]> => {
	const res = await fetch(APIURL + '/categories', { next: { revalidate: 10 } })

	return res.json()
}

export { fetchCategory }
