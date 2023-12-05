import { APIURL } from '@/constants/url'
import type { IBillboard } from '@/types'

const fetchBillboard = async (id: string): Promise<IBillboard> => {
	const res = await fetch(APIURL + `/billboards/${id}`, {
		next: { revalidate: 10 },
	})

	return res.json()
}

export { fetchBillboard }
