import { APIURL } from '@/constants/url'
import type { IColor } from '@/types'

const fetchColors = async (): Promise<IColor[]> => {
	const res = await fetch(APIURL + '/colors', { next: { revalidate: 10 } })

	return res.json()
}

export { fetchColors }
