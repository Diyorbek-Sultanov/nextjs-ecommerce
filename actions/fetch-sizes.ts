import { APIURL } from '@/constants/url'
import type { ISize } from '@/types'

const fetchSizes = async (): Promise<ISize[]> => {
	const res = await fetch(APIURL + '/sizes', { next: { revalidate: 10 } })

	return res.json()
}

export { fetchSizes }
