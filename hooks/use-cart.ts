import { toast } from 'sonner'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { IProduct } from '@/types'

type TUseCart = {
	items: IProduct[]
	addItem: (product: IProduct) => void
	removeItem: (id: string) => void
	removeAll: () => void
}

const useCart = create(
	persist<TUseCart>(
		(set, get) => ({
			items: [],
			addItem: (product: IProduct) => {
				const currentItems = get().items
				const existingItem = currentItems.find((item) => item.id === product.id)

				if (existingItem) {
					return toast('Product already in cart.')
				}

				set(() => ({ items: [...currentItems, product] }))
				toast.success('Product added to cart.')
			},
			removeItem: (id: string) => {
				set(() => ({
					items: [...get().items.filter((item) => item.id !== id)],
				}))
				toast.success('Product removed from the cart.')
			},
			removeAll: () => set(() => ({ items: [] })),
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
)

export { useCart }
